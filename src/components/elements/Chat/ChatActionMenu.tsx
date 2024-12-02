import React, { useState } from 'react'
import { Pencil } from 'lucide-react'

interface ChatActionMenuProps {
    onDelete: () => void
}

const ChatActionMenu: React.FC<ChatActionMenuProps> = ({ onDelete }) => {
    const [isOpen, setIsOpen] = useState(false)

    const handleToggle = () => setIsOpen(!isOpen)

    return (
        <div className='relative flex flex-col justify-center items-center'>
            <button onClick={handleToggle}>
                <Pencil size={20} />
            </button>
            {isOpen && (
                <>
                    <div
                        className='fixed inset-0 bg-transparent z-5'
                        onClick={handleToggle}
                    ></div>
                    <div className='absolute right-8 z-10 flex flex-col bg-red rounded-lg border border-white bg-background'>
                        <span
                            className='relative text-[14px] p-2 rounded-lg border-gray-400 flex items-center focus:outline-none focus:text-primary'
                            onClick={() => {
                                onDelete()
                                handleToggle()
                            }}
                        >
                            Eliminar
                        </span>
                    </div>
                </>
            )}
        </div>
    )
}

export default ChatActionMenu
