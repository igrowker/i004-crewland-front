import React from 'react'
import { X } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';

interface ModalPostProps {
  title: string;
  content: string;
  details: string
  link?: string;
  textButton?: string;
  arrErros?: string[] | string;
  closeModal: () => void
}

export default function ModalPost({ title, content, details, link, closeModal, textButton, arrErros }: ModalPostProps) {
  return (
    <>
      <section className='bg-black/75 grid place-items-center min-h-screen fixed top-0 left-0 w-full'>
        <div className='max-w-[344px] overflow-hidden relative bg-background py-5 pt-16 flex flex-col gap-1 rounded-2xl px-4'>
          <Image
            alt='flower'
            src={'/flower.svg'}
            width={400}
            height={400}
            className='absolute top-0 left-0'
          />
          <X
            size={20}
            className='cursor-pointer absolute right-3 top-6'
            onClick={closeModal}
          />
          <h1 className='text-2xl leading-[28.8px] pb-2 text-center'>{title}</h1>
          <p className="text-left leading-[20px]">{content}</p>
          {Array.isArray(arrErros) ? (
            arrErros.map(err => (
              <p key={err} className="text-sm">{err}</p>
            ))
          ) : (
            <p className="leading-[20px]">{arrErros}</p>
          )
          }
          {textButton && (
            <Link
              href={link || ""}
              className="cursor-pointer  z-50 bg-primary text-background w-11/12 rounded-lg py-4 leading-4 mt-3 text-center"
              aria-label={details}>
              {textButton}
            </Link>

          )}
        </div>
      </section>
    </>
  )
}