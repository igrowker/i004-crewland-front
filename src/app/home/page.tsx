'use client'
import Container from '@/components/elements/Container/Container'
import Image from 'next/image'
import { ArrowUpRight, Menu, Asterisk } from 'lucide-react'
import Title from '@/components/elements/Titles/Title'
import { useEffect, useState } from 'react'

export default function Home() {
  const user = {
    name: 'Alex'
  }

  const festivals = [
    {
      id: '1',
      name: 'Lollapalooza',
      description:
        'Un festival icónico que combina música, arte y cultura. Con presentaciones de artistas de renombre mundial.',
      date: '15-17 marzo',
      hour: '14:00',
      image: '/landing3.svg'
    },
    {
      id: '2',
      name: 'Tomorrowland',
      description:
        'El festival de música electrónica más grande del mundo, famoso por su increíble producción y line-ups llenos de estrellas.',
      date: '20-23 marzo',
      hour: '12:00',
      image: '/landing2.svg'
    },
    {
      id: '3',
      name: 'Coachella',
      description:
        'Un festival que define la cultura pop, ofreciendo una mezcla de música, arte y experiencias únicas en el desierto.',
      date: '14-17 octubre',
      hour: '13:00',
      image: '/landing1.svg'
    }
  ]

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
      <header className='absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-gradient-to-b from-black/70 to-transparent z-10'>
        <button aria-label='Abrir menú' className='p-2'>
          <Menu className='text-white w-8 h-8' />
        </button>

        <div className='flex items-center'>
          <Title
            text='CREWLAND'
            className='text-white text-[24px] sm:text-[35px] font-bold'
          />
          <Image
            src='/crewland_logo.svg'
            alt='Crewland logo'
            width={40}
            height={50}
          />
        </div>

        <div className='w-10 h-10 bg-gray-300 rounded-full shadow-md'></div>
      </header>

      <main className='pt-[30px] sm:pt-[50px] lg:pt-[60px] px-4'>
        <div className='shadow-md rounded-lg p-6 mb-6'>
          <Title text={`Bienvenido, ${user.name}`} size='medium' align='left' />
          <p className='leading-relaxed pt-4'>
            Estamos súper contentos de tenerte con nosotros. Aquí podrás
            encontrar compañeros para compartir transporte, alojamiento y hacer
            que tu próxima experiencia sea aún más divertida. ¡Comencemos a
            planear tu aventura!
          </p>
        </div>

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
                className={`w-3 h-3 rounded-full border border-black ${
                  currentIndex === index ? 'bg-[#9747FF]' : 'bg-white'
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>

        <section className='mt-10'>
          <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6'>
            {festivals.map((festival) => (
              <div
                id={`festival-${festival.id}`}
                key={festival.id}
                className='relative shadow-lg rounded-lg overflow-hidden text-black'
              >
                <div className='relative'>
                  <Image
                    src={festival.image}
                    alt={festival.name}
                    width={300}
                    height={200}
                    className='w-full h-32 object-cover brightness-75'
                  />

                  <h3 className='absolute bottom-2 left-2 text-white text-lg font-bold'>
                    {festival.name}
                  </h3>

                  <a
                    href={`#festival-${festival.id}`}
                    className='absolute top-2 right-2 bg-[#9747FF] rounded-full p-2 shadow-md hover:shadow-lg transition-all'
                    aria-label={`Más detalles sobre ${festival.name}`}
                  >
                    <ArrowUpRight className='text-black w-5 h-5' />
                  </a>
                </div>

                <div
                  className='p-4 flex flex-col justify-between relative'
                  style={{
                    backgroundImage: `url('/bg-home.png')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                  }}
                >
                  <Asterisk
                    className='absolute top-4 right-2 text-[#0d0b0f] w-5 h-5'
                    aria-label='Campo obligatorio'
                  />

                  <p className='text-sm my-4 text-black font-[500]'>
                    {festival.description}
                  </p>

                  <div className='flex gap-1 mt-2'>
                    <button className='border border-black rounded-md px-4 py-1 text-sm font-[500]'>
                      {festival.date}
                    </button>
                    <button className='border border-black rounded-md px-4 py-1 text-sm font-[500]'>
                      {festival.hour} hrs
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>
    </Container>
  )
}
