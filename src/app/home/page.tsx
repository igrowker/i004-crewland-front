'use client'
import Container from '@/components/elements/Container/Container'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import Title from '@/components/elements/Titles/Title'
import { useEffect, useState } from 'react'

export default function Home() {
  const user = {
    name: 'Alex'
  }

  const images = [
    { src: '/home1.png', alt: 'Imagen 1' },
    { src: '/home2.png', alt: 'Imagen 2' },
    { src: '/home3.png', alt: 'Imagen 3' },
    { src: '/home4.png', alt: 'Imagen 4' }
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [images.length])

  return (
    <Container>
      <header className='absolute top-0 left-0 w-full flex items-center justify-between p-4'>
        <button aria-label='Abrir menú' className='p-2'>
          <Menu className='text-white-800 w-9 h-9' />
        </button>

        <div className='flex items-center'>
          <Title text='CREWLAND' className='text-[35px]' />
          <Image
            className='ml-2'
            src='/crewland_logo.svg'
            alt='Crewland logo'
            width={40}
            height={50}
          />
        </div>

        <div className='w-10 h-10 bg-gray-300 rounded-full'></div>
      </header>

      <main className='pt-[5px] sm:pt-[50px] md:pt-[60px] lg:pt-[80px] p-4'>
        <Title text={`¡Bienvenido ${user.name}`} size='medium' align='left' />
        <p className='leading-tight mb-6 mt-2'>
          Estamos súper contentos de tenerte con nosotros. Aquí podrás encontrar
          compañeros para compartir transporte, alojamiento y hacer que tu
          próxima experiencia sea aún más divertida. ¡Comencemos a planear tu
          aventura!
        </p>

        <div className='relative w-full overflow-hidden'>
          <div
            className='flex transition-transform duration-700'
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className='flex-shrink-0 w-full'>
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={0}
                  height={0}
                  sizes='100vw'
                  className='w-full h-auto'
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <div className='absolute bottom-4 left-0 right-0 flex justify-center space-x-2'>
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full ${
                  currentIndex === index ? 'bg-[#9747FF]' : 'bg-gray-400'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
      </main>
    </Container>
  )
}
