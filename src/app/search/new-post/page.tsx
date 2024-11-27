"use client"
import ButtonLink from '@/components/elements/Buttons/ButtonLink'
import Container from '@/components/elements/Container/Container'
import InputSelect from '@/components/elements/Inputs/InputSelect'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Title from '@/components/elements/Titles/Title'
import Image from 'next/image'
import React from 'react'
import "@/components/elements/calendar/Calendar.css"
import SearchCrews from '@/components/search/SearchCrews'


export default function page() {
  return (
    <Container>
      <article className="flex flex-col w-full min-h-screen bg-background">
        <section className="flex justify-start items-center pb-4 gap-5 bg-background">
          <ButtonLink
            href={'/auth/login'}
            text={<Image src="/arrowLeft.svg" alt="Descripción de la imagen" width={25} height={25} />}
            details="Volver a interface Login"
          />
          <Title
            size="small"
            text="Creá tu post"
            className="font-medium text-xl font-title"
          />
        </section>
        <p>Encontrá alojamiento, transporte o compañeros para tu próximo evento</p>
        <form className="flex flex-col py-4 gap-6">
          <InputSelect
            placeholder='Que estas buscando'
            topModal="top-[50px]"
            options={["Alojamiento", "Transporte", "Compañero", "Otro"]}
          />
          <ReusableInput
            label='Titulo'
            placeholder='Busco compañero de recital...'
          />
          <InputSelect
            label='Puestos disponibles'
            placeholder='1'
            topModal="top-[70px]"
            options={["1", "2", "3", "4"]}
          />
          <SearchCrews />
          <div className="flex flex-col gap-2 relative">
            <label htmlFor='details'>Detalles</label>
            <textarea
              id='details'
              name='details'
              placeholder='Contanos más detalles, como el horario, lugares disponibles o cualquier información útil.'
              className='scrollbar-custom bg-transparent border border-1 border-customWhite outline-none p-4 rounded-lg resize-none text-sm h-28'
              required
            />
          </div>
          <div className='flex gap-2'>
            <ButtonLink
              details='Cancelar el post'
              href='/search'
              text='Cancelar'
              className='bg-primary text-background w-full text-center py-3 rounded-lg'
            />
            <ButtonLink
              type='submit'
              details='Crear el post'
              onClick={() => console.log("Creando Post")}
              text='Publicar'
              className='bg-primaryHover text-background w-full text-center py-3 rounded-lg'
            />
          </div>
        </form>
      </article>
    </Container>
  )
}

