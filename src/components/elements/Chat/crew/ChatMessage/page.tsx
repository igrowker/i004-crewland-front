/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'

import {  USER_1_ID_AUX } from "@/server.config";

// import { CheckCheck } from 'lucide-react'

export default function ChatMessage({ message }: any){
    
    // const sentByCurrentUser = message.senderId !== "a2f15f5b-f2ef-4207-a92d-49e2005271d1";
    const sentByCurrentUser = message.senderId !== USER_1_ID_AUX;
    return (
        <div
            //reemplazarlo por id del cookie
            className={`flex flex-col ${sentByCurrentUser ? 'items-end' : 'items-start'
                } w-full`}>
            <div className={`text-[14px] rounded-3xl ${sentByCurrentUser ? 'rounded-br-none bg-primary text-black' : 'rounded-bl-none bg-customWhite text-black'
                } p-4`}>
                <p>{message.content}</p>
            </div>
        </div>)
}
