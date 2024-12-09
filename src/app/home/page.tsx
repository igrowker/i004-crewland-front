'use client'

import Button from '@/components/elements/Buttons/Button'
import LandingPageHeader from '@/components/elements/headers/LandingHeader'
import Image from 'next/image'
import { useRouter } from 'next/navigation'

import { useState, useEffect } from 'react'

const pages = [
  {
    id: 0,
    background: '/landing1.png',
    title: 'Bienvenidos a',
    img: '/crewland.png',
    text: '¡Tu aventura empieza acá! Te ayudamos a disfrutar de una experiencia única'
  },
  {
    id: 1,
    background: '/landing2.png',
    title: 'Publica anuncios y coordina',
    text: 'Crea un anuncio para buscar compañeros o responder a otros. Con la mensajería de Crewland, es fácil coordinar el punto de encuentro y los detalles del viaje.'
  },
  {
    id: 2,
    background: '/landing3.png',
    title: 'Encuentra y conecta con Crews',
    text: 'Encuentra a otros que van al mismo evento. ¡Puedes conseguir compañeros para el transporte, el alojamiento y hacer de la experiencia algo épico!'
  }
]

export default function LandingPage() {
  const [activePage, setActivePage] = useState(0)
  const router = useRouter()

  useEffect(() => {
    const interval = setInterval(() => {
      setActivePage((prevPage) => (prevPage + 1) % pages.length)
    }, 6000)

    return () => clearInterval(interval)
  }, [])

  const handleButtonClick = () => {
    router.push('/auth/login')
  }

  return (
    <div className='relative w-full h-screen overflow-hidden'>
      <div
        className='flex transition-transform duration-700'
        style={{ transform: `translateX(-${activePage * 100}%)` }}
      >
        {pages.map((page) => (
          <div key={page.id} className='flex-shrink-0 w-full h-screen'>
            <div
              className='relative w-full h-full bg-cover bg-center'
              style={{
                backgroundImage: `url(${page.background})`
              }}
            >
              <div className='absolute inset-0 bg-black bg-opacity-20'></div>
              <LandingPageHeader />

              <div className='mt-32 flex flex-col items-center justify-start h-full text-center text-white'>
                <h1 className='text-4xl font-normal z-10'>{page.title}</h1>
                {page.img && (
                  <Image
                    className='z-10 mt-4 px-4'
                    src={page.img}
                    alt='Imagen adicional'
                    width={400}
                    height={400}
                    priority
                  />
                )}
                <p className='m-6 text-l z-10 text-center'>{page.text}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className='absolute bottom-16 left-0 right-0 flex flex-col items-center'>
        <Button
          variant='primary'
          text='Comenzar mi viaje'
          onClick={handleButtonClick}
          className='mb-4'
        />

        <div className='flex justify-center mt-4'>
          {pages.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 mx-2 rounded-full border border-black ${
                activePage === index ? 'bg-[#9747FF]' : 'bg-white'
              }`}
              onClick={() => setActivePage(index)}
              aria-label={`Ir a la imagen ${index + 1}`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  )
}
