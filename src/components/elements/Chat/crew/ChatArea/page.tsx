/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import InputChat from '@/components/elements/Inputs/InputChat'
import ChatMessage from '@/components/elements/Chat/crew/ChatMessage/page'

export default function ChatArea({handleSendMessage, setMessage, message, messagesArray} : any) {

    return (
        <>
            <main className='flex flex-col w-full h-full justify-start items-center mt-28 gap-2 px-4'>
                {messagesArray.map((message : any) => <ChatMessage key={message.id} message={message} />
                )}
            </main>

            <InputChat
                handleSendMessage={handleSendMessage}
                setMessage={setMessage}
                message={message}
            />
        </>
    )
}