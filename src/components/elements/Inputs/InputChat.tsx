'use client'
import { Smile, SendHorizontal } from 'lucide-react'
import { useState } from 'react'

interface InputChatProps {
    onSendMessage: (message: string) => void;
}

const InputChat: React.FC<InputChatProps> = ({ onSendMessage }) => {
    const [message, setMessage] = useState<string>('')

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMessage(e.target.value);
    }

    const handleSend = () => {
        const trimmedMessage = message.trim()
        if (trimmedMessage) {
            onSendMessage(trimmedMessage)
            setMessage('')
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault()
            handleSend()
        }
    }
    return (
        <footer className='fixed bottom-0 flex flex-row items-center left-0 w-full px-4 py-3'>
            <div className='relative w-full flex items-center rounded-lg border-[1px] bg-transparent'>
                <Smile className='absolute left-3' />
                <input
                    className='w-full p-3 pl-10 bg-transparent text-customWhite outline-none'
                    type='text'
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

export default InputChat
