'use client'
import { userProfile } from '@/json/profile'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Container from '@/components/elements/Container/Container'
import CompletedProfile from '@/components/elements/Profile/CompletedProfile'
import UncompletedProfile from '@/components/elements/Profile/UncompletedProfile'
import Title from '@/components/elements/Titles/Title'
import Image from 'next/image'

export default function ProfilePage() {
  const router = useRouter()
  const [isCompleted, setIsCompleted] = useState(false)
  const userPhoto = '/users/profile.png'
  const defaultPhoto = '/profile-img.png'
  const editIcon = '/edit-profile.png'

  useEffect(() => {
    const isProfileComplete = Object.values(userProfile).every((value) =>
      Array.isArray(value) ? value.length > 0 : value.trim() !== ''
    )
    setIsCompleted(isProfileComplete)
  }, [])

  const handleEditClick = () => {
    router.push('/edit-profile')
  }

  return (
    <div style={{ position: 'absolute', width: '100%', minHeight: '100vh' }}>
      <Image src='/flower.svg' alt='Background' fill quality={100} />
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
              priority
            />
            <button
              onClick={handleEditClick}
              className='absolute top-2/3 right-5 transform translate-x-1/2 -translate-y-1/2 bg-[#CE9DF9] p-1 rounded-full shadow-md w-10 h-10 flex items-center justify-center'
            >
              <Image
                src={editIcon}
                width={16}
                height={16}
                alt='Editar perfil'
              />
            </button>
          </div>
          <Title
            text='Fernando González'
            size='small'
            className='mt-5 text-xl'
          />
        </div>
        {isCompleted ? <CompletedProfile /> : <UncompletedProfile />}
      </Container>
    </div>
  )
}
