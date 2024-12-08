/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

// IDs de los usuarios (simulados)
// const USER_1_ID = "790722b9-1a6b-4330-a30d-3e05af00c2a4"; //el primer id obtenerlo cuando el user inicia secion
const USER_1_ID = "c2775f77-2c1a-42bf-bea9-348aff72821c"; //el primer id obtenerlo cuando el user inicia secion
// const USER_2_ID = "8ace492f-d973-41c1-9509-3a4c7ed635c7"; //el segundo id obtenerlo de la card cuando se le da al btn chat del user de la publicacion
const USER_2_ID = "796ac1e5-47a1-4068-89a6-88df77e676f3"; //el segundo id obtenerlo de la card cuando se le da al btn chat del user de la publicacion

// 796ac1e5-47a1-4068-89a6-88df77e676f3


//juan b258f496-421e-445d-878c-ddb5a78d032e
//ali 702086fc-e46d-4e3c-b34a-b64bb48ae9ae
// b8a40fd4-f1c3-4482-ac73-b4493b095f89


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
