/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import ChatArea from "@/components/elements/Chat/crew/ChatArea/page";
import Container from "@/components/elements/Container/Container";
import ChatHeader from "@/components/elements/headers/ChatHeader";
import { USER_1_ID_AUX } from "@/server.config";
import { useEffect, useState } from "react";
import { io } from "socket.io-client";

export default function OneToOne({ params }: { params: Promise<{ id: string }> }) {
  // const USER_1_ID = "a2f15f5b-f2ef-4207-a92d-49e2005271d1"; //obtener del cookie
  // const USER_1_ID = "b8a40fd4-f1c3-4482-ac73-b4493b095f89"; //obtener del cookie
  const USER_1_ID = USER_1_ID_AUX; //obtener del cookie
  

  const [USER_2_ID, setUSER_2_ID] = useState<string | undefined>(undefined);
  const [roomUsersInfo, setRoomUsersInfo] = useState<any>(null); // Para guardar detalles de la sala
  const [roomMessages, setRoomMessages] = useState<any>(null); // Para guardar detalles de la sala
  const [socket, setSocket] = useState<any>(null);
  const [message, setMessage] = useState<string>("");
  const [messages, setMessages] = useState<any[]>([]);
  const [roomId, setRoomId] = useState<string>("");

  //si se guarda la info del usuario 2 obtenida en ChatPage.tsx en un context capaz esta peticion no hace falta

  const getUserId2 = async () => {
    try {
      const result = await params;
      setUSER_2_ID(result.id);
    } catch (error) {
      console.error("Error al resolver params:", error);
    } finally {
      // setLoading(false);
    }
  }

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
        setRoomMessages((prevRoomMessages : any) => [...prevRoomMessages, receivedMessage]);
      });

      // Escuchar confirmación al unirse a una sala
      socket.on("joinedRoom", (room: any) => {
        setRoomId(room.roomId); // Guardamos el roomId retornado
        setRoomUsersInfo(room.usersInfo);
        setRoomMessages(room.messages);
      });

      return () => {
        // Eliminar listeners al desmontar
        socket.off("receiveMessage");
        socket.off("joinedRoom");
        socket.off("error");
      };
    }
  }, [socket]);

  // const handleJoinRoom = () => {
  //   if (socket) {
  //     socket.emit("joinRoom", { userId1: USER_1_ID, userId2: USER_2_ID }); // Usamos los userIds
  //   }
  // };

  const handleSendMessage = () => {
    if (socket && message.trim() !== "" && roomId) {
      const messageData = {
        senderId: USER_1_ID,
        content: message,
        roomId: roomId, // Usamos el roomId recibido al unirse a la sala
      };

      // Emitir mensaje
      socket.emit("sendMessage", messageData);
      setMessage(""); // Limpiar el campo de texto
    }
  };

  useEffect(() => {
    getUserId2();
  }, [])

  // Unirse a la sala cuando `USER_2_ID` esté definido y `socket` esté listo
  useEffect(() => {
    if (socket && USER_2_ID) {
      socket.emit("joinRoom", { userId1: USER_1_ID, userId2: USER_2_ID }); //ACA PROBLEMA DE LAS ROOM CON LOS MISMO USUARIOS PERO CON ID EN DISTINTO ORDEN EN EL NOMBRE
    }
  }, [socket, USER_2_ID, USER_1_ID]);
  

  return (
    <>
      {roomMessages ? <Container>
        <section className='flex flex-col w-full h-screen'>
          <ChatHeader />
          <ChatArea handleSendMessage={handleSendMessage} setMessage={setMessage} message={message} messagesArray={roomMessages}/>
        </section>
      </Container > : "...loading"}
    </>
  )
}
