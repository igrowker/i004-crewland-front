'use client'
import Container from '@/components/elements/Container/Container'
//import '@/components/elements/calendar/Calendar.css'
import NavTitle from '@/components/elements/headers/NavTitle'
import GroupSection from '@/components/elements/Profile/GroupSection'
import { chats } from '@/json/historial'
import { useState, useEffect } from 'react'
import { getFestivalById } from '@/services/festivalById'
import { getPublicationById } from '@/services/publicationById'


export default function CurrentCrews() {
  const [publications, setPublications] = useState<any>(null)
  const [festival, setFestival] = useState<any>(null)
  const postId = "8303e915-ccb3-4354-9ebc-16540765df36"
  const festivalId = "2eb48296-17b8-4058-9ab6-2f2dd64af42c"


  useEffect(() => {
    const fetchData = async () => {
      const [posts, fest] = await Promise.all([getPublicationById(postId), getFestivalById(festivalId)])
      setPublications(posts.data.data)
      setFestival(fest.data.data)
    }
    fetchData()
  }, [])


  const groups = publications ? [{
    id: publications.id,
    name: festival?.name || 'Desconocido',
    location: festival?.location || 'Desconocido',
    date: festival?.date || 'Desconocida',
    usuarios: publications.participants,
    titulo: publications.title,
    isActive: publications.isActive,
    typeService: publications.type,
    creationDate: publications.creationDate
  }] : []


  const handleDelete = (chatIndex: number) => {
    console.log(`Eliminar chat en índice: ${chatIndex}`)
  }

  return (
    <Container className='flex flex-col px-4 gap-6'>
      <article className='flex flex-col w-full min-h-screen bg-background'>
        <NavTitle link='profile' title='Crews Actuales' />
        <div className='flex flex-col justify-center mt-3 gap-6'>
          {groups.map((group) => (
            <GroupSection
              key={group.id}
              festival={festival} 
              publications={publications} 
              chats={chats} 
              showAddButton={true}
              onDelete={handleDelete}
              {...group}
            />
          ))}
        </div>
      </article>
    </Container>
  )
}


