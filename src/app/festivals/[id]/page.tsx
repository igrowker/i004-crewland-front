'use client'

import React, { useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Container from '@/components/elements/Container/Container'
import Title from '@/components/elements/Titles/Title'
import { festivals } from '@/json/festivals'
import Header from '@/components/headers/Header_festivals/header'

export default function FestivalPage({
  params
}: {
  params: Promise<{ id: string }>
}) {
  const [festivalId, setFestivalId] = useState<string | null>(null)

  useEffect(() => {
    async function fetchParams() {
      const resolvedParams = await params
      setFestivalId(resolvedParams.id)
    }
    fetchParams()
  }, [params])

  if (!festivalId) {
    return (
      <Container>
        <div className='py-10 text-center'>
          <h1 className='text-2xl font-bold'>Cargando...</h1>
        </div>
      </Container>
    )
  }

  const festival = festivals.find((festival) => festival.id === festivalId)

  if (!festival) {
    return (
      <Container>
        <div className='py-10 text-center'>
          <h1 className='text-2xl font-bold'>Festival no encontrado</h1>
          <Link
            href='/'
            className='mt-4 inline-block px-4 py-2 bg-[#9747FF] text-white rounded-lg shadow-md hover:bg-[#8637e6] transition'
          >
            Volver a inicio
          </Link>
        </div>
      </Container>
    )
  }

  const icons = [
    '/user01.png',
    '/user02.png',
    '/user03.png',
    '/user01.png',
    '/user02.png',
    '/user03.png',
    '/user01.png'
  ]

  return (
    <Container>
      <Header />
      <main className='flex flex-col pt-[0px] sm:pt-[70px] lg:pt-[80px] px-4'>
        <Title
          text={festival.name}
          size='medium'
          align='left'
          className='mb-4'
        />
        <p className='text-sm leading-snug font-normal max-w-md mb-5'>
          {festival.description}
        </p>

        <div className='relative w-full h-64 mb-4'>
          <Image
            src={festival.image}
            alt={festival.name}
            layout='fill'
            objectFit='cover'
            className='rounded-md'
          />
          <div className='absolute top-2 left-2 flex gap-2'>
            <button className='bg-transparent border border-white text-white rounded-full px-4 py-2 text-xs'>
              {festival.date}
            </button>
            <button className='bg-transparent border border-white text-white rounded-full px-4 py-2 text-xs'>
              {festival.hour} hrs
            </button>
          </div>
        </div>

        <Title text='Espectadores' size='medium' align='left' weight='bold' />

        <div className='relative flex justify-start gap-20'>
          {icons.map((icon, index) => (
            <div
              key={index}
              className='absolute'
              style={{
                left: `${index * 30}px`,
                zIndex: `${icons.length - index}`
              }}
            >
              <Image
                src={icon}
                alt={`Icono ${index + 1}`}
                width={40}
                height={40}
                className='object-cover rounded-full'
              />
            </div>
          ))}
        </div>
      </main>
    </Container>
  )
}
