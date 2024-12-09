"use client"
import { publicationInterface } from '@/interfaces/publication'
import Image from 'next/image'
import { useState } from 'react';
import ModalPostCard from './ModalPostCard';

export default function PostCard(post: publicationInterface) {
  const [modal, setModal] = useState<boolean>(false);

  return (
    <>
      <section className="flex flex-col mt-6 select-none">
        <div className="rounded-[20px] pb-1 p-4 bg-[url('/background_card.png')] bg-[length:140%_155%] bg-[position:-38px_-48px] text-background">
          <header className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                className='rounded-full'
                src={post.user?.imgUser || process.env.NEXT_PUBLIC_DEFAULT_IMG_USER_CLOUDINARY || ""}
                alt={`user-${post.user?.name}`}
                width={40}
                height={40}
              />
              <p>{post.user?.name || "Pedro Rodriguez"}</p>
            </div>
            <time className='text-sm'>{post.creationDate}</time>
          </header>
          <h2 className="my-3 text-xl leading-5 font-semibold">{post.title}</h2>
          <p className="line-clamp-4  text-[14px] leading-[15.4px] text-left">{post.details}</p>
          <button
            onClick={() => setModal(true)}
            aria-label={`Ver más sobre ${post.title}`}
            className="w-full my-3 p-1 rounded-lg outline-1 text-background outline outline-background text-[14px]">
            Ver más
          </button>
        </div>
      </section>
      {modal &&
        <ModalPostCard
          post={post}
          setModal={setModal}
        />
      }
    </>
  )
}
