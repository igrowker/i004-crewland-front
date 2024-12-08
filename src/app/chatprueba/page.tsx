/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// IDs de los usuarios (simulados)
const USER_1_ID = "0ac42224-d26c-4393-ac55-5a6c46f3301d"; 
const USER_2_ID = "a21ac128-dc62-4cb5-89f3-b8588b9a478b"; 

// export const USER_1_ID_AUX = "8ace492f-d973-41c1-9509-3a4c7ed635c7";
// export const USER_1_ID_AUX = "796ac1e5-47a1-4068-89a6-88df77e676f3";


// Componente de chat
const Chat = () => {
    const [socket, setSocket] = useState<any>(null);
    const [message, setMessage] = useState<string>("");
    const [messages, setMessages] = useState<any[]>([]);
    const [roomId, setRoomId] = useState<string>("");

    // Inicializar el socket
    useEffect(() => {
        const newSocket = io("http://localhost:3000");
        setSocket(newSocket);

        // Limpiar conexión al desmontar
        return () => {
            newSocket.close();
        };
    }, []);

    // Configurar listeners del socket cuando esté listo
    useEffect(() => {
        if (socket) {
            // Escuchar mensajes entrantes
            socket.on("receiveMessage", (receivedMessage: any) => {
                setMessages((prevMessages) => [...prevMessages, receivedMessage]);
            });

            // Escuchar confirmación al unirse a una sala
            socket.on("joinedRoom", (room : any) => {
                setRoomId(room.roomId); // Guardamos el roomId retornado
            });

            return () => {
                // Eliminar listeners al desmontar
                socket.off("receiveMessage");
                socket.off("joinedRoom");
            };
        }
    }, [socket]);

    const handleJoinRoom = () => {
        if (socket) {
            socket.emit("joinRoom", { userId1: USER_1_ID, userId2: USER_2_ID }); // Usamos los userIds
        }
    };

    const handleSendMessage = () => {
        if (socket && message.trim() !== "" && roomId) {
            const messageData = {
                senderId: USER_1_ID,
                content: message,
                // roomId: "ac62cf5b-5884-433d-a5b8-0b17b087a1f3", // Usamos el roomId recibido al unirse a la sala
                roomId: roomId, // Usamos el roomId recibido al unirse a la sala
            };

            // Emitir mensaje
            socket.emit("sendMessage", messageData);
            setMessage(""); // Limpiar el campo de texto
        }
    };

    return (
        <div>
            <h2>Chat entre Usuarios</h2>
            <button onClick={handleJoinRoom}>Unirse al Chat</button>
            <div>
                {messages.map((msg, index) => (
                    <div key={index}>
                        <strong>{msg.senderId}</strong>: {msg.content}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Escribe un mensaje"
            />
            <button onClick={handleSendMessage}>Enviar</button>
        </div>
    );
};

export default Chat;
