'use client'
import { messages } from '@/json/onteToOneChat'
import InputChat from '@/components/elements/Inputs/InputChat'
import ChatMessage from '@/components/elements/Chat/crew/ChatMessage/page'
export default function ChatArea() {
    const handleSendMessage = (message: string) => {
        console.log(message)
    }
    return (
        <>
            <main className='flex flex-col w-full h-full justify-start items-center mt-28 gap-2 px-4'>
                {messages.map((message) => (
                    <ChatMessage key={message.id} message={message} />
                ))}
            </main>

            <InputChat
                onSendMessage={handleSendMessage}
            />
        </>
    )
}