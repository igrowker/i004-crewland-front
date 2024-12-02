'use client'
import React, { useState } from 'react'
import Link from "next/link";

import Image from 'next/image'
import { Heart, EllipsisVertical } from 'lucide-react'
import { user } from '@/json/onteToOneChat'
import BackArrow from "../icons/BackArrow";


export default function ChatHeader() {
    const [isLiked, setIsLiked] = useState(user.like);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleToggleLike = () => {
        setIsLiked(!isLiked);
    }

    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen)
    }
    return (
        <header className='fixed flex flex-row justify-between items-center border-b-2 left-0 w-full px-4 py-3'>
            <div className='flex flex-row items-center gap-4'>
                <Link href='/chat' aria-label="Volver a la interface de chat">
                    <BackArrow />
                </Link>

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
                            <span
                                className={`rounded-full w-2 h-2 inline-block ${user.status === 'online' ? 'bg-[#26874A]' : 'bg-[#FA8080]'}`}>
                            </span>
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
                        >
                            Bloquear
                        </span>
                        <span
                            className='text-[14px] p-4 w-full border-b-2 border-gray-400 min-h-[40px] flex items-center focus:outline-none focus:text-primary'
                        >
                            Reportar
                        </span>
                        <span
                            className='text-[14px] p-4 w-full border-b-2 border-gray-400 min-h-[40px] flex items-center focus:outline-none focus:text-primary'
                        >
                            Restringir
                        </span>
                        <span
                            className='text-[14px] p-4 w-full border-gray-400 min-h-[40px] flex items-center focus:outline-none focus:text-primary'
                        >
                            Desactivar notificaciones
                        </span>
                    </div>
                )}

            </div>
        </header>
    )
}
