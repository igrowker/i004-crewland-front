"use client"
import { festivalIdContext } from '@/context/FestivalIdContext'
import { Plus } from 'lucide-react'
import { useRouter } from 'next/navigation'
import React, { useContext, useState } from 'react'
import ModalPost from './ModalPost'

export default function CreateNewPost() {
  const router = useRouter();
  const contexto = useContext(festivalIdContext)
  const [toggleModal, setToggleModal] = useState<boolean>(false);

  const handleNewPost = () => {
    if (contexto?.festivalData.festivalId) {
      router.push('/search/new-post')
    } else {
      setToggleModal(true)
    }
  }

  return (
    <>
      <button
        onClick={handleNewPost}
        className="bg-primaryHover fixed bottom-24 right-3 rounded-full p-3 shadow-xl"
        aria-label="Crear una nueva publicacion"
      >
        <Plus size={30} color="#ffffff" strokeWidth={2} />
      </button>
      {
        toggleModal && (
          <ModalPost 
            title='Necesitas escoger un festival'
            content=''
            details='navegar hacia festivales'
            textButton='Ir a festivales'
            link="/festivals"
            closeModal={() => setToggleModal(false)}
          />
        )
      }
    </>
  )
}
