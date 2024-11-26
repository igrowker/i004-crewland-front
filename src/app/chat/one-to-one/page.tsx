'use client'

import { user, messages } from '@/json/onteToOneChat'
import { useState } from 'react'
import Container from '@/components/elements/Container/Container'
import Image from 'next/image'
import { Heart, EllipsisVertical, CheckCheck, Smile, SendHorizontal } from 'lucide-react'
import { set } from 'zod'

export default function OneToOne() {
    const [isLiked, setIsLiked] = useState(user.like);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
    }

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <Container>
            <section className='flex flex-col w-full h-screen'>
                <header className='fixed flex flex-row justify-between items-center border-b-2 left-0 w-full px-4 py-3'>
                    <div className='flex flex-row items-center gap-4'>
                        <Image
                            src='/arrowLeft.svg'
                            alt='Back'
                            width={24}
                            height={12}
                        />
                        <div className='flex flex-row items-center gap-2'>
                            <Image
                                src='/user01.png'
                                alt='User'
                                width={40}
                                height={40}
                            />
                            <div className='flex flex-col justify-center '>
                                <h3 className='text-xl leading-none'>{user.name}</h3>
                                <div className='flex flex-row gap-2 items-center'>
                                    <span className={`bg-${user.status === 'online' ? '[#26874A]' : '[#FA8080]'} rounded-full w-2 h-2 inline-block`}></span>
                                    <p className='text-[10px] text-gray-400 font-normal'>{user.status === 'online' ? 'Conectado' : 'Desconectado'}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <button onClick={handleToggleLike}>
                            <Heart className={`text-white w-[20px] ${isLiked ? 'fill-white' : ''}`} />
                        </button>
                        <button onClick={handleToggleMenu}>
                            <EllipsisVertical className='text-white' />
                        </button>
                        {isMenuOpen && (
                            <div className='absolute top-12 right-4 flex flex-col bg-background rounded-lg border border-white'>
                                <span
                                    className='text-[14px] p-4 w-full border-b-2 border-gray-400 min-h-[40px] flex items-center focus:outline-none focus:text-primary'
                                    tabIndex={0}
                                >
                                    Bloquear
                                </span>
                                <span
                                    className='text-[14px] p-4 w-full border-b-2 border-gray-400 min-h-[40px] flex items-center focus:outline-none focus:text-primary'
                                    tabIndex={0}
                                >
                                    Reportar
                                </span>
                                <span
                                    className='text-[14px] p-4 w-full border-b-2 border-gray-400 min-h-[40px] flex items-center focus:outline-none focus:text-primary'
                                    tabIndex={0}
                                >
                                    Restringir
                                </span>
                                <span
                                    className='text-[14px] p-4 w-full border-gray-400 min-h-[40px] flex items-center focus:outline-none focus:text-primary'
                                    tabIndex={0}
                                >
                                    Desactivar notificaciones
                                </span>
                            </div>
                        )}

                    </div>
                </header>

                <main className='flex flex-col w-full h-full justify-start items-center mt-28 gap-2 px-4'>
                    {messages.map((message) => (
                        <div
                            key={message.id}
                            className={`flex flex-col ${message.sentByCurrentUser ? 'items-end' : 'items-start'
                                } w-full`}>
                            <div className={`text-[14px] rounded-3xl ${message.sentByCurrentUser ? 'rounded-br-none bg-primary text-black' : 'rounded-bl-none bg-customWhite text-black'
                                } p-4`}>
                                <p>{message.text}</p>
                            </div>

                            <div className={`flex ${message.sentByCurrentUser ? 'justify-end' : 'justify-start'} items-center gap-2 mt-[2px] min-h-[20px]`}>
                                <span className='text-[10px] text-gray-400'>{message.timestamp}</span>
                                {message.sentByCurrentUser && (
                                    <CheckCheck className={`text-[${message.isRead ? '#62C0FA' : 'white'}] w-[20px]`} />
                                )}
                            </div>
                        </div>
                    ))}
                </main>

                <footer className='fixed bottom-0 flex flex-row items-center left-0 w-full px-4 py-3'>
                    <div className='relative w-full flex items-center rounded-lg border-[1px] bg-transparent'>
                        <Smile className='absolute left-3' />
                        <input
                            className='w-full p-3 pl-10 bg-transparent text-customWhite outline-none'
                            type='text'
                            placeholder='Escribir mensaje...'
                        />
                        <div className='absolute right-3 flex justify-center items-center w-8 h-8 bg-primary rounded-full'>
                            <SendHorizontal className='text-black' />
                        </div>
                    </div>
                </footer>

            </section>
        </Container >
    )
}
