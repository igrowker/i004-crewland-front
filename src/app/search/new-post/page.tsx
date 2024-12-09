"use client"
import Container from '@/components/elements/Container/Container'
import InputSelect from '@/components/elements/Inputs/InputSelect'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import React, { useCallback, useContext, useEffect, useState } from 'react'
import "@/components/elements/calendar/Calendar.css"
import SearchCrews from '@/components/elements/search/SearchCrews'
import ModalPost from '@/components/elements/search/ModalPost'
import NavTitle from '@/components/elements/headers/NavTitle'
import usePost from '@/hooks/usePost'
import { festivalIdContext } from '@/context/FestivalIdContext'
import Link from 'next/link'
import { getUsersForPublications, postPublication } from '@/services/posts'
import { useRouter } from 'next/navigation'
import { getSession } from '@/lib'
import { UserInterface } from '@/interfaces/publication'
import { postReservation } from '@/services/reservations'


export default function NewPost() {
  const router = useRouter()
  const contexto = useContext(festivalIdContext)
  const [isFestivalId, setIsFestivalId] = useState<boolean>(false);
  const [errosBack, setErrosBack] = useState<string[] | string>();
  const [dataUsers, setDataUsers] = useState<{users: UserInterface[], usersId: string[]}>({
    users: [],
    usersId: []
  })
  const { createdPost, handleChange, setCreatedPost } = usePost();
  const [stateModal, setStateModal] = useState({
    cancelPost: false,
    createPost: false,
    errorPost: false
  });

  // Si no se ha escogido un festival no puede acceder a esta pantalla
  useEffect(() => {
    const getUsers = async () => {
      try {
        const session = await getSession();
        const response = await getUsersForPublications(session.token);
        setDataUsers(prev => ({...prev, users: response?.data}))
      } catch (e) {
        console.error(e)
      }
    }
    getUsers();

    if (!contexto?.festivalData.festivalId) {
      setIsFestivalId(true);
    }

  }, [contexto]);

  // Recoleccion de usuarios
  const handleParticipants = useCallback((participants: string[]) => {
    setCreatedPost((prev) => ({ ...prev, participants }));

    const participantIds = participants.map(name => {
      const matchedUser = dataUsers.users.find(user => user.name === name);
      return matchedUser ? String(matchedUser.id) : "";
    })
    setDataUsers(prev => ({...prev, usersId: participantIds}))
  }, [dataUsers.users, setCreatedPost]);


  // envio de datos al back para crear un nuevo post
  const handleCreatePublication = async () => {
    try {
      const session = await getSession()
      const dataCreatePost =
      {
        ...createdPost,
        festivalId: contexto?.festivalData.festivalId
      }

      const response = await postPublication(session.token, contexto?.festivalData.festivalId || "", dataCreatePost)

      console.log("NUEVA PUBLICACION")
      console.log(response?.response.data);

      if (response?.response.status !== 201) {
        setStateModal(prev => ({ ...prev, errorPost: true }))
        setErrosBack(response?.response.data)
      } else {

        const newReservation = {
          type: response.response.data.type,
          postId: response.response.data.id,
          userIds: dataUsers.usersId,
          peopleAmount: response.response.data.maxParticipants
        }
        console.log("RESERVA A ENVIAR")
        console.log(newReservation)

        // envia de datos al back para crear una nueva reserva
        const reservationPost = await postReservation(session.token, newReservation);
        console.log("`NUEVA RESERVACION")
        console.log(reservationPost?.response.data)

        setStateModal(prev => ({ ...prev, createPost: true }))
        router.push('/search')
      }
      // Reinicio de campos
      setCreatedPost({
        title: "",
        type: "",
        maxParticipants: 0,
        details: "",
        participants: [],
      });
    } catch (e) {
      console.error(e)
    }
  }

  // Enviar el tipado en ingles al black
  const changePostType = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const postType: { [key: string]: string } = {
      "Alojamiento": "accommodation",
      "Transporte": "transport",
      "Compañero": "crew",
    };
    const newType = postType[value] || "";
    setCreatedPost(prev => ({ ...prev, type: newType }));
  }

  // Mostrar en espanol el tipo de post
  const viewPostType = (type: string) => {
    const postType: { [key: string]: string } = {
      "accommodation": "Alojamiento",
      "transport": "Transporte",
      "crew": "Compañero",
      "other": "Otro",
    };
    return postType[type] || "";
  }

  return (
    <>
      {
        isFestivalId
          ? (
            <Container className='flex flex-col gap-3'>
              <h1 className='text-2xl text-center'>Festival no seleccionado</h1>
              <p className='text-center'>Necesitas escoger un festival para crear una publicacion</p>
              <Link
                href={"/festivals"}
                className="mx-4 cursor-pointer z-50 bg-primary text-background rounded-lg py-4 leading-4 mt-3 text-center"
                aria-label="Redigir a interfaz festivales">
                Ir a festivales
              </Link>
            </Container>
          )
          : (
            <Container>
              <article className="flex flex-col w-full min-h-screen bg-background m-4">
                <NavTitle link="search" title="Creá tu post" />
                <p className='mt-3'>Encontrá alojamiento, transporte o compañeros para tu próximo evento</p>
                <form className="flex flex-col py-4 gap-6">
                  <InputSelect
                    id='type'
                    placeholder='Que estas buscando'
                    topModal="top-[50px]"
                    options={["Alojamiento", "Transporte", "Compañero", "Otro"]}
                    onChange={changePostType}
                    value={viewPostType(createdPost.type || "")}
                  />
                  <ReusableInput
                    id='title'
                    label='Titulo'
                    placeholder='Busco compañero de recital...'
                    onChange={(e) => handleChange(e)}
                    value={createdPost.title}
                  />
                  <InputSelect
                    id="maxParticipants"
                    label='Puestos disponibles'
                    placeholder='1'
                    topModal="top-[70px]"
                    options={[1, 2, 3, 4]}
                    onChange={(e) => handleChange(e)}
                    value={createdPost.maxParticipants}
                  />
                  <SearchCrews participants={handleParticipants} dataUsers={dataUsers.users} />
                  <div className="flex flex-col gap-2 relative">
                    <label htmlFor='details'>Detalles</label>
                    <textarea
                      id='details'
                      name='details'
                      placeholder='Contanos más detalles, como el horario, lugares disponibles o cualquier información útil.'
                      className='scrollbar-custom bg-transparent border border-1 border-customWhite outline-none p-4 rounded-lg resize-none text-sm h-28'
                      required
                      onChange={(e) => handleChange(e)}
                      value={createdPost.details}
                    />
                  </div>
                  <div className='flex gap-2 mb-20'>
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
                      onClick={handleCreatePublication}
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
                    title='🎉 ¡Publicación Exitosa! 🎉'
                    content='Tu publicación ahora está disponible en el feed. ¡Conéctate con tu crew ahora!'
                    details='crear un post'
                    closeModal={() => setStateModal(prev => ({ ...prev, createPost: false }))}
                  />
                }
                {stateModal.errorPost &&
                  <ModalPost
                    title=" 🚫 ¡Registro Fallido! 🚫"
                    content=""
                    details="registro fallido"
                    closeModal={() => setStateModal(prev => ({ ...prev, errorPost: false }))}
                    arrErros={errosBack}
                  />
                }
              </article>
            </Container>
          )
      }
    </>
  )
}

