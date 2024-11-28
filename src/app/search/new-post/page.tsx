"use client"
import Container from '@/components/elements/Container/Container'
import InputSelect from '@/components/elements/Inputs/InputSelect'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Title from '@/components/elements/Titles/Title'
import Image from 'next/image'
import React, { useState } from 'react'
import "@/components/elements/calendar/Calendar.css"
import SearchCrews from '@/components/elements/search/SearchCrews'
import ModalPost from '@/components/elements/search/ModalPost'
import Link from 'next/link'


export default function NewPost() {
  const [stateModal, setStateModal] = useState({
    cancelPost: false,
    createPost: false
  });

  return (
    <Container>
      <article className="flex flex-col w-full min-h-screen bg-background">
        <section className="flex justify-start items-center pb-4 gap-5 bg-background">
          <Link href="/search" aria-label="Volver a la interface de search">
            <Image src="/arrowLeft.svg" alt="Descripción de la imagen" width={25} height={25} />
          </Link>
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
            <button 
              type="button"
              className="bg-primary text-background w-full text-center py-3 rounded-lg"
              onClick={() => setStateModal(prev => ({ ...prev, cancelPost: true }))}
              aria-label="Cancelar el post"
            >
              Cancelar
            </button>
            <button 
              type="button"
              className="bg-primaryHover text-background w-full text-center py-3 rounded-lg"
              onClick={() => setStateModal(prev => ({ ...prev, createPost: true }))}
              aria-label="Crear el post"
            >
              Publicar
            </button>
          </div>
        </form>
        {stateModal.cancelPost &&
          <ModalPost
            link='/search'
            title='¿Estás seguro de cancelar?'
            content='Perderás los cambios realizados en tu publicación'
            details='cancelar un post'
            closeModal={() => setStateModal(prev => ({ ...prev, cancelPost: false }))}
            textButton="Sí, cancelar"
          />
        }
        {stateModal.createPost &&
          <ModalPost
            link='/search'
            title='🎉 ¡Publicación Exitosa! 🎉'
            content='Tu publicación ahora está disponible en el feed. ¡Conéctate con tu crew ahora'
            details='crear un post'
            closeModal={() => setStateModal(prev => ({ ...prev, createPost: false }))}
            textButton="Ir a publicación"
          />
        }
      </article>
    </Container>
  )
}

