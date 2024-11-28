'use client'
import Container from '@/components/elements/Container/Container'
import Image from 'next/image'
import { ArrowUpRight, Asterisk } from 'lucide-react'
import Title from '@/components/elements/Titles/Title'
import { useEffect, useState } from 'react'
import Link from 'next/link'
import { user, festivals, images } from '@/json/festivals'
import FestivalsHeader from '@/components/headers/FestivalsHeader'

export default function FestivalsPage() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const imagesLength = images.length

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength)
    }, 4000)

    return () => clearInterval(interval)
  }, [imagesLength])

  return (
    <Container>
      <FestivalsHeader />
      <main className='pt-[50px] sm:pt-[70px] lg:pt-[80px] px-0'>
        <div className='shadow-md rounded-lg py-6 px-1 mb-6'>
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
                  width={800}
                  height={600}
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

                  <Link
                    href={`/festivals/${festival.id}`}
                    className='absolute top-2 right-2 bg-[#CE9DF9] rounded-full p-2 shadow-md hover:shadow-lg transition-all'
                    aria-label={`Más detalles sobre ${festival.name}`}
                  >
                    <ArrowUpRight className='text-black w-5 h-5' />
                  </Link>
                </div>

                <div
                  className='p-4 flex flex-col justify-between relative rounded-md'
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

                  <h3 className=' bottom-2 left-2 text-lg font-bold pt-4'>
                    {festival.name}
                  </h3>

                  <p className='text-sm my-4 text-black font-[450]'>
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
