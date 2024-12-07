"use client";  // Marca este archivo como un componente de cliente
import { useState, useEffect } from "react";
import io from "socket.io-client";

// Define el tipo Message
interface Message {
  senderId: string;
  content: string;
}

const socket = io("http://localhost:3000"); // URL del WebSocket (servidor NestJS)

export default function Chat() {
  const [username1, setUsername1] = useState("ID_USUARIO_1");
  const [username2, setUsername2] = useState("ID_USUARIO_2"); 
  const [roomId, setRoomId] = useState<string | null>(null);
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState<Message[]>([]);

  useEffect(() => {
    socket.on("joinedRoom", (data) => {
      console.log("Joined room", data);
      setRoomId(data.roomId);
    });

    socket.on("receiveMessage", (newMessage: Message) => {
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });

    return () => {
      socket.off("joinedRoom");
      socket.off("receiveMessage");
    };
  }, []);

  const joinRoom = () => {
    if (username1 && username2) {
      socket.emit("joinRoom", {
        username1,
        username2,
      });
    }
  };

  const sendMessage = () => {
    if (roomId && message.trim()) {
      socket.emit("sendMessage", {
        roomId,
        senderId: username1,  // Usamos username1 como el ID del remitente
        content: message,
      });
      setMessage("");
    }
  };

  return (
    <div>
      <h1>Chat</h1>
      <div>
        <input
          type="text"
          placeholder="Username 1"
          value={username1}
          onChange={(e) => setUsername1(e.target.value)}
        />
        <input
          type="text"
          placeholder="Username 2"
          value={username2}
          onChange={(e) => setUsername2(e.target.value)}
        />
        <button onClick={joinRoom}>Join Room</button>
      </div>

      {roomId && (
        <div>
          <h2>Room ID: {roomId}</h2>
          <div>
            <input
              type="text"
              placeholder="Type a message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            />
            <button onClick={sendMessage}>Send</button>
          </div>

          <div>
            <h3>Messages:</h3>
            {messages.map((msg, index) => (
              <div key={index}>
                <strong>{msg.senderId}:</strong> {msg.content}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
