'use client'
import Container from '@/components/elements/Container/Container'
import '@/components/elements/calendar/Calendar.css'
import NavTitle from '@/components/elements/headers/NavTitle'
import {  Car, CirclePlus } from 'lucide-react'
import UserChatItem from '@/components/elements/Chat/UserChatCard/UserChatItem'


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
            <section key={group.id} className='flex flex-col w-full border-b-[1px] border-gray-200 gap-2 pb-4'>
              <div className='flex flex-row justify-between items-center'>
                <h3 className='text-2xl leading-none'>{group.name}</h3>
                <div className='flex flex-row gap-4 items-center'>
                  <span
                    className={`rounded-full w-3 h-3 inline-block ${group.status === 'online' ? 'bg-[#26874A]' : 'bg-[#FA8080]'}`}>
                  </span>
                  <p className='text-[16px] text-customWhite'>{group.status === 'online' ? 'Activo' : 'Inactivo'}</p>
                </div>
              </div>
              <div className='flex flex-row justify-between mt-2'>
                <span className='flex flex-row gap-1'>
                  <button className='border border-white rounded-md px-4 py-1 text-sm'>Date</button>
                  <button className='border border-white rounded-md px-4 py-1 text-sm'>Place</button>
                </span>
                <Car className='mr-1' size={25} strokeWidth={1.5} />
              </div>
              <div className='flex flex-row justify-between items-center'>
                <p className='text-lg tracking-wide mt-2'>Miembros Actuales </p>
                <span>
                  <CirclePlus
                    className='fill-primaryHover text-black'
                    strokeWidth={1.5}
                    size={35}
                  />
                </span>
              </div>

              <div className='flex flex-col w-full'>
                {chats.map((chat, chatIndex) => (
                  <UserChatItem
                  key={chatIndex}
                  avatar={chat.avatar}
                  username={chat.username}
                  onDelete = {() => handleDelete(chatIndex)}
              />

                ))}
              </div>
              <div className='flex flex-row gap-1'>
                <button className='w-full my-3 p-2 rounded-lg outline-1 text-customWhite outline outline-customWhite text-[14px]'>
                  Ir al Chat
                </button>
              </div>
            </section>
          ))}
        </div>
      </article>
    </Container>
  )
}


