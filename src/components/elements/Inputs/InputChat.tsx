'use client'
import { Smile, SendHorizontal } from 'lucide-react'
import { useState } from 'react'

interface InputChatProps {
    onSendMessage: (message: string) => void;
}

export default function InputChat({ onSendMessage }: InputChatProps) {
    const [message, setMessage] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setMessage(e.target.value);
    }

    const handleSend = () => {
        const trimmedMessage = message.trim()
        if (trimmedMessage) {
            onSendMessage(trimmedMessage)
            setMessage('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault()
            handleSend()
        }
    }
    return (
        <footer className='fixed bottom-0 flex flex-row items-center left-0 w-full px-4 py-3'>
            <div className='relative w-full flex  items-center rounded-lg border-[1.5px] bg-transparent'>
                <Smile className='absolute left-3' />
                <textarea
                    className='w-full h-[58px] pt-4 pb-0 px-12 bg-transparent text-customWhite outline-none placeholder:text-left placeholder:p-0'
                    placeholder='Escribir mensaje...'
                    value={message}
                    onChange={handleChange}
                    onKeyDown={handleKeyDown}
                />
                <button
                    onClick={handleSend}
                    className="absolute right-3 flex justify-center items-center w-8 h-8 bg-primary rounded-full"
                    aria-label="Enviar mensaje"
                >
                    <SendHorizontal className="text-black" />
                </button>
            </div>
        </footer>
    )
}

