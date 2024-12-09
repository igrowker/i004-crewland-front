'use client'

import { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import Container from '@/components/elements/Container/Container'
import CompletedProfile from '@/components/elements/Profile/CompletedProfile'
import UncompletedProfile from '@/components/elements/Profile/UncompletedProfile'
import Title from '@/components/elements/Titles/Title'
import Image from 'next/image'
import Button from '@/components/elements/Buttons/Button'
import { User, History, Settings } from 'lucide-react'
import { getUserById } from '@/services/api/profile'
import { UserInterface } from '@/interfaces/user'

interface ProfilePageProps {
  token: string
  userId: string
}

export default function ProfilePage({ token, userId }: ProfilePageProps) {
  const [userProfile, setUserProfile] = useState<UserInterface | null>(null)
  const [isCompleted, setIsCompleted] = useState(false)
  const router = useRouter()

  const userPhoto = '/users/profile.png'
  const defaultPhoto = '/users/profile.png'
  const editIcon = '/edit-profile.png'

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const dataUser = await getUserById(userId, token)
        if (dataUser?.data) {
          setUserProfile(dataUser.data)

          const isProfileComplete =
            dataUser.data.location?.toString().trim() &&
            dataUser.data.age?.toString().trim()

          setIsCompleted(!!isProfileComplete)
        }
      } catch (e) {
        console.error('Error al obtener el perfil del usuario:', e)
      }
    }

    fetchUserProfile()
  }, [userId, token])

  const handleEditClick = () => {
    router.push('/profile/information')
  }

  return (
    <div style={{ position: 'absolute', width: '100%', minHeight: '100vh' }}>
      <Image src='/flower.svg' alt='Background' fill quality={100} />
      <Container className='flex flex-col items-center outline outline-1 outline-slate-200 pb-24'>
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
            text={userProfile?.name || 'Usuario sin nombre'}
            size='small'
            className='mt-5 text-xl'
          />
        </div>
        {isCompleted ? (
          <CompletedProfile userId={userId} token={token} />
        ) : (
          <UncompletedProfile />
        )}
        <div className='grid grid-cols-2 gap-4 text-sm px-4 mt-4'>
          <Button
            variant='primary'
            text='Información de Contacto'
            icon={<User className='w-5 h-5' />}
            className='w-full h-16 text-start'
            onClick={() => router.push('/profile/information')}
          />
          <Button
            variant='primary'
            text='Crews actuales'
            icon={<User className='w-5 h-5' />}
            className='w-full h-16 text-left'
            onClick={() => router.push('/profile/currentCrews')}
          />
          <Button
            variant='primary'
            text='Historial'
            icon={<History className='w-5 h-5' />}
            className='w-full h-16 text-start'
            onClick={() => router.push('/profile/historial')}
          />
          <Button
            variant='primary'
            text='Configuración de la cuenta'
            icon={<Settings className='w-5 h-5' />}
            className='w-full h-16 text-start'
            onClick={() => router.push('/profile/config')}
          />
        </div>
      </Container>
    </div>
  )
}
