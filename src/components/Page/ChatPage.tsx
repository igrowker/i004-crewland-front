/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-expressions */
'use client'
import Container from "@/components/elements/Container/Container";
import InputSearch from "@/components/elements/Inputs/InputSearch";
import ChatsContainer from "../elements/Chat/Container/ChatsContainer";
import NavTitle from "../elements/headers/NavTitle";
import { useEffect, useState } from "react";
import { USER_1_ID_AUX } from "@/server.config";
export default function ChatPage() {

    const [chatUsers, setChatUsers] = useState<string[]>([]);

    const getUsers = async (idsArray :string[]) => {
        try {
            const request = await fetch("http://localhost:3000/users/for-publications", {
                method: "GET",
            });

            const response = await request.json();

            // Filtrar los usuarios cuyo ID esté en el idsArray
            const filteredUsers = response?.data?.data?.filter((user: { id: string; }) =>
                idsArray.includes(user.id)
            );

            // Opcional: puedes retornar los usuarios filtrados aquí
            return filteredUsers;
        } catch (error) {
            console.error("Error al obtener los usuarios:", error);
            return [];
        }
    };

    const obtenerMensajes = async () => {
        //este trae los chats 
        //opciones: user el for-publication q trae la imagen, nombre y id del user --> comprobar el id guardado en localsotorage para no traer el id del usuario actual y no q no se muestre su a si mismo como chat
        // const request = await fetch("http://localhost:3000/chat/rooms/a2f15f5b-f2ef-4207-a92d-49e2005271d1"); //cambiar por id obtenido de la cookie
        const request = await fetch(`http://localhost:3000/chat/rooms/${USER_1_ID_AUX}`);
        const response = await request.json();

        const arrayChatsRooms = response.data.data;
        const auxArray: string[] = [];

        for (let i = 0; i < arrayChatsRooms.length; i++) {

            const element = arrayChatsRooms[i];

            const messages = element.messages;

            for (let i = 0; i < messages.length; i++) {
                const obj = messages[i]

                for (const key in obj) {

                    if (key === "senderId") {
                        const senderId = obj.senderId;

                        // if (senderId !== "a2f15f5b-f2ef-4207-a92d-49e2005271d1") { //esto obtenerlo de cookie o localS
                        if (senderId !== USER_1_ID_AUX) { //esto obtenerlo de cookie o localS
                            auxArray.push(senderId);
                        }

                    }
                }

            }
        }

        const result = await getUsers(auxArray);
        console.log("RESULT", result);
        setChatUsers(result);


        //este trae los mensajes previos
        // const request2 = await fetch("http://localhost:3000/chat/rooms/5b3b36e7-83bc-4224-80d9-43b8c7a41b85/messages/algo");
        // const response2 = await request2.json();

        // console.log(response2);
    }


    useEffect(() => {
        obtenerMensajes();
    }, [])

    return (
        <>
            {chatUsers.length > 0 ? <Container className="flex flex-col px-4 gap-6">
                <NavTitle link="festivals" title="Sala de chat" />
                <InputSearch />
                <ChatsContainer chats={chatUsers} />
            </Container> : "loading..."}
        </>
    );
};