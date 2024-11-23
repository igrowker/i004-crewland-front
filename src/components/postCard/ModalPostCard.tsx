"use client"
import { postCardInterface } from '@/interfaces/postCard'
import { icons } from '@/json/icons'
import { X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react'

interface ModalPostCardProps {
  post: postCardInterface
  setModal: (bool: boolean) => void
}

export default function ModalPostCard({ post, setModal }: ModalPostCardProps) {
  const [icon, setIcon] = useState({
    like: false,
    favorite: false
  })

  const iconsData = icons(icon);

  return (
    <section className='fixed min-h-screen w-full grid place-items-center top-0 left-0 bg-background/50 select-none'>
      <div className='bg-background w-full p-4 py-5 rounded-[20px] relative max-w-[368px]'>
        <X
          size={20}
          className='absolute right-3 cursor-pointer'
          onClick={()=>setModal}
        />
        <header className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <Image
              className='rounded-full'
              src={post.user.imgUser}
              alt={`user-${post.user.name}`}
              width={40}
              height={40}
            />
            <p>{post.user.name}</p>
          </div>
          <time>{post.dateCreate}</time>
        </header>
        <h2 className="my-2 text-xl leading-5 font-semibold">{post.title}</h2>
        <p className="text-[14px] leading-[15.4px] text-left">{post.details}</p>
        <Link
          href={`/chats/${post.user.id}`}
          aria-label={`Ver más sobre ${post.title}`}
          className="flex justify-center my-3 p-1 rounded-lg outline-1 text-customWhite outline outline-customWhite text-[14px]">
          {/*Operacion para obtener solo el nombre del usuario*/}
          Chatear con {post.user.name.split(" ")[0]}
        </Link>
        <div className='flex justify-end gap-3 mt-5'>
          {iconsData.map(({ icon: Icon, key, status }) => (
            <Icon
              key={key}
              onClick={() => setIcon(prev => ({ ...prev, [key]: !status }))}
              className={`${status ? "fill-customWhite" : ""} cursor-pointer`}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
