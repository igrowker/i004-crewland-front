'use client'
import { useState } from 'react'
import Container from '@/components/elements/Container/Container'
import CompletedProfile from '@/components/elements/Profile/CompletedProfile'
import UncompletedProfile from '@/components/elements/Profile/UncompletedProfile'
import Title from '@/components/elements/Titles/Title'
import Image from 'next/image'

export default function ProfilePage() {
  const [isCompleted, setIsCompleted] = useState(false)
  const userPhoto = '/user-photo.jpg'
  const defaultPhoto = '/profile-img.png'
  const editIcon = '/edit-profile.png'

  return (
    <Container className='flex flex-col items-center'>
      <div className='flex flex-col items-center'>
        <Title text='Perfil de usuario' size='medium' className='m-4' />
        <div className='relative w-48 h-48 mt-4'>
          <Image
            src={isCompleted ? userPhoto : defaultPhoto}
            width={180}
            height={180}
            alt='Foto de perfil'
            className='rounded-full'
          />
          <div className='absolute top-2/3 right-5 transform translate-x-1/2 -translate-y-1/2 bg-[#CE9DF9] p-1 rounded-full shadow-md w-10 h-10 flex items-center justify-center'>
            <Image src={editIcon} width={16} height={16} alt='Editar perfil' />
          </div>
        </div>
        <Title text='Fernando González' size='small' className='mt-5 text-xl' />
      </div>
      {isCompleted ? <CompletedProfile /> : <UncompletedProfile />}
    </Container>
  )
}
