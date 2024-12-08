/* eslint-disable @typescript-eslint/no-explicit-any */
'use client'
import { Smile, SendHorizontal } from 'lucide-react'

export default function InputChat({ handleSendMessage, setMessage, message }: any) {

    return (
        <footer className='fixed bottom-0 flex flex-row items-center left-0 w-full px-4 py-3'>
            <div className='relative w-full flex  items-center rounded-lg border-[1.5px] bg-transparent'>
                <Smile className='absolute left-3' />
                <textarea
                    className='w-full h-[58px] pt-4 pb-0 px-12 bg-transparent text-customWhite outline-none placeholder:text-left placeholder:p-0'
                    placeholder='Escribir mensaje...'
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                />
                <button
                    onClick={handleSendMessage}
                    className="absolute right-3 flex justify-center items-center w-8 h-8 bg-primary rounded-full"
                    aria-label="Enviar mensaje"
                >
                    <SendHorizontal className="text-black" />
                </button>
            </div>
        </footer>
    )
}

