'use client'
import Container from '@/components/elements/Container/Container'
import '@/components/elements/calendar/Calendar.css'
import NavTitle from '@/components/elements/headers/NavTitle'
import GroupSection from '@/components/elements/Profile/GroupSection'
import { groups, chats } from '@/json/historial'

export default function CurrentCrews() {
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
              groupName={group.name}
              status={group.status}
              service={group.service as 'transporte' | 'alojamiento' | 'compañero' | 'otro'}
              chats={chats}
              showAddButton={true}
              onDelete={handleDelete}
            />
          ))}
        </div>
      </article>
    </Container>
  )
}


