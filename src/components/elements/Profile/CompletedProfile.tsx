import React, { useEffect, useState } from 'react'
import Button from '../Buttons/Button'
import Title from '../Titles/Title'
import { getUserById, patchUser } from '@/services/api/profile'
import { UserInterface } from '@/interfaces/user'

interface CompletedProfileProps {
  userId: string
  token: string
}

const defaultGenres = [
  'Electrónica',
  'Heavy Metal',
  'Cumbia',
  'Indie Rock',
  'Rock Nacional',
  'Rock',
  'Jazz',
  'Pop',
  'Hip-Hop'
]

export default function CompletedProfile({
  userId,
  token
}: CompletedProfileProps) {
  const [userProfile, setUserProfile] = useState<UserInterface | null>(null)
  const [preferences, setPreferences] = useState<string[]>([])
  const [isSaved, setIsSaved] = useState<boolean>(false)

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        console.log('Fetching user profile...')
        const dataUser = await getUserById(userId, token)

        if (dataUser?.data?.preferences) {
          setUserProfile(dataUser.data)
          setPreferences(dataUser.data.preferences)
        } else {
          console.warn('Las preferencias están vacías o no definidas.')
          setUserProfile(dataUser.data)
          setPreferences([])
        }
      } catch (e) {
        console.error('Error al obtener el perfil del usuario:', e)
      }
    }

    fetchUserProfile()
  }, [userId, token])

  const toggleGenreSelection = (genre: string) => {
    setPreferences((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    )
    setIsSaved(false)
  }

  const handleSave = async () => {
    try {
      console.log('Saving preferences...', preferences)
      await patchUser(userId, token, { preferences })
      setIsSaved(true)
      console.log('Preferences saved.')
    } catch (e) {
      console.error('Error al guardar los datos del usuario:', e)
    }
  }

  const availableGenres = Array.from(
    new Set([...(userProfile?.preferences || []), ...defaultGenres])
  )

  if (!userProfile) {
    console.log('User profile is not loaded yet.')
    return <p>Cargando perfil...</p>
  }

  const birthDate = new Date(userProfile.age + 'T00:00:00')
  const currentDate = new Date()
  const age = currentDate.getFullYear() - birthDate.getFullYear()
  const monthDifference = currentDate.getMonth() - birthDate.getMonth()
  const dayDifference = currentDate.getDate() - birthDate.getDate()
  const calculatedAge =
    monthDifference < 0 || (monthDifference === 0 && dayDifference < 0)
      ? age - 1
      : age

  const birthDateFormatted = `${('0' + birthDate.getDate()).slice(-2)}/${(
    '0' +
    (birthDate.getMonth() + 1)
  ).slice(-2)}/${birthDate.getFullYear()}`

  const description =
    userProfile.description ||
    'Amante de los festivales, los road trips y las buenas vibras. Deseando disfrutar de nuevos amigos y música en vivo.'

  const location =
    userProfile.location === 'Sin definir' || !userProfile.location
      ? 'Rosario'
      : userProfile.location
  return (
    <div className='flex flex-col m-4'>
      <div className='flex items-center rounded-lg bg-primary text-black relative'>
        <button className='flex-1 p-2 rounded-l-lg'>
          <span className='block font-bold'>{location}</span> Lugar
        </button>
        <div className='w-px h-6 bg-black mx-2'></div>
        <button className='flex-1 p-2'>
          <span className='block font-bold'>{calculatedAge}</span> Edad
        </button>
        <div className='w-px h-6 bg-black mx-2'></div>
        <button className='flex-1 p-2 rounded-r-lg'>
          <span className='block font-bold'>{birthDateFormatted}</span>{' '}
          Cumpleaños
        </button>
      </div>

      <p className='my-4'>{description}</p>
      <Title
        text='Tus géneros musicales favoritos'
        size='small'
        align='left'
        className='mb-3 text-xl'
      />

      <div className='flex flex-wrap gap-2'>
        {availableGenres.length === 0 ? (
          <p>No hay géneros disponibles.</p>
        ) : (
          availableGenres.map((genre, index) => (
            <Button
              variant='ghost'
              key={index}
              text={genre}
              className={`rounded-full ${
                preferences.includes(genre)
                  ? 'bg-purple-500 text-white'
                  : 'bg-gray-200 text-black'
              } hover:bg-primaryHover`}
              onClick={() => toggleGenreSelection(genre)}
            />
          ))
        )}

        <Button
          variant='primary'
          text={isSaved ? 'Guardado' : 'Guardar'}
          onClick={handleSave}
          className={`rounded-full ${
            isSaved ? 'bg-green-500 text-white' : 'bg-primary text-black'
          }`}
        />
      </div>
    </div>
  )
}
