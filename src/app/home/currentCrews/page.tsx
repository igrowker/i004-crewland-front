'use client'
import Container from '@/components/elements/Container/Container'
import '@/components/elements/calendar/Calendar.css'
import NavTitle from '@/components/elements/headers/NavTitle'
import GroupSection from '@/components/elements/Chat/GroupSection'

const groups = [
  {
    id: '1',
    name: 'Lola Crew 2024',
    status: 'online'
  },
  {
    id: '2',
    name: 'Lola Crew 2023',
    status: 'online'
  },
  {
    id: '3',
    name: 'Lola Crew 2022',
    status: 'online'
  },
  {
    id: '4',
    name: 'Lola Crew 2021',
    status: 'online'
  }
]
const chats = [
  {
    avatar: '/users/01.png',
    username: 'Pepito Grillo',
    message: 'Hola, como va, yo estaré por Palermo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus earum, nihil sit totam, magnam maiores debitis molestiae aspernatur, iste et vel quo consequuntur repudiandae laudantium necessitatibus dignissimos labore consectetur.',
  },
  {
    avatar: '/users/02.png',
    username: 'Juanita Pérez',
    message: '¡Hola! Bien, gracias. ¿Y tú?',
  },
  {
    avatar: '/users/03.png',
    username: 'María Rodríguez',
    message: '¡Hola! Bien, gracias. ¿Y tú?',
  },
  {
    avatar: '/users/04.png',
    username: 'José López',
    message: '¡Hola! Bien, gracias. ¿Y tú?',
  },
  {
    avatar: '/users/05.png',
    username: 'Ana García',
    message: '¡Hola! Bien, gracias. ¿Y tú?',
  },
  {
    avatar: '/users/06.png',
    username: 'Pedro Martínez',
    message: '¡Hola! Bien, gracias. ¿Y tú?',
  },
  {
    avatar: '/users/07.png',
    username: 'Sofía Pérez',
    message: '¡Hola! Bien, gracias. ¿Y tú?',
  },
  {
    avatar: '/users/08.png',
    username: 'Carlos García',
    message: '¡Hola! Bien, gracias. ¿Y tú?',
  },
  {
    avatar: '/users/09.png',
    username: 'Lucía Martínez',
    message: '¡Hola! Bien, gracias. ¿Y tú?',
  },
  {
    avatar: '/users/10.png',
    username: 'Juanita López',
    message: '¡Hola! Bien, gracias. ¿Y tú?',
  }
]


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


