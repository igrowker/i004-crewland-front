'use client'

import React, { useEffect, useState } from 'react'
import Button from '../Buttons/Button'
import Title from '../Titles/Title'
import { getUserById, patchUser } from '@/services/api/profile'
import { UserInterface } from '@/interfaces/user'

export default function CompletedProfile() {
  const [userProfile, setUserProfile] = useState<UserInterface | null>(null)
  const [preferences, setPreferences] = useState<string[]>([])
  const [isSaved, setIsSaved] = useState<boolean>(false)
  const userId = '55268970-068d-468a-8523-6314034a53e2'

  useEffect(() => {
    const fetchUserProfile = async () => {
      try {
        const dataUser = await getUserById(userId)
        if (dataUser && dataUser.data && dataUser.data.preferences) {
          setUserProfile(dataUser.data)
          setPreferences(dataUser.data.preferences)
        } else {
          console.warn(
            'Las preferencias están vacías o no definidas en la respuesta de la API.'
          )
          setUserProfile(dataUser.data)
          setPreferences([])
        }
      } catch (e) {
        console.error('Error al obtener el perfil del usuario:', e)
      }
    }

    fetchUserProfile()
  }, [userId])

  const calculateAge = (birthdate: string) => {
    const birthDate = new Date(birthdate)
    const today = new Date()
    let age = today.getFullYear() - birthDate.getFullYear()
    const month = today.getMonth()
    const day = today.getDate()

    if (
      month < birthDate.getMonth() ||
      (month === birthDate.getMonth() && day < birthDate.getDate())
    ) {
      age--
    }

    return age
  }

  const formatBirthday = (birthdate: string) => {
    const birthDate = new Date(birthdate)
    const day = String(birthDate.getDate()).padStart(2, '0')
    const month = String(birthDate.getMonth() + 1).padStart(2, '0')
    const year = birthDate.getFullYear()

    return `${day}/${month}/${year}`
  }

  const toggleGenreSelection = (genre: string) => {
    setPreferences((prev) =>
      prev.includes(genre) ? prev.filter((g) => g !== genre) : [...prev, genre]
    )
    setIsSaved(false)
  }

  const handleSave = async () => {
    try {
      await patchUser(userId, { preferences: preferences })
      setIsSaved(true)
    } catch (e) {
      console.error('Error al guardar los datos del usuario:', e)
    }
  }

  if (!userProfile) return <p>Cargando perfil...</p>

  return (
    <div className='flex flex-col m-4'>
      <div className='flex items-center rounded-lg bg-primary text-black relative'>
        <button className='flex-1 p-2 rounded-l-lg hover:bg-primaryHover'>
          <span className='block font-bold'>
            {userProfile.location ?? 'Sin definir'}
          </span>
          Lugar
        </button>
        <div className='w-px h-6 bg-black mx-2'></div>
        <button className='flex-1 p-2 hover:bg-primaryHover'>
          <span className='block font-bold'>
            {calculateAge(userProfile.age) ?? 'N/A'}
          </span>
          Edad
        </button>
        <div className='w-px h-6 bg-black mx-1'></div>
        <button className='flex-1 p-2 rounded-r-lg hover:bg-primaryHover'>
          <span className='block font-bold'>
            {formatBirthday(userProfile.age) ?? 'N/A'}
          </span>
          Cumpleaños
        </button>
      </div>

      <p className='m-3'>{userProfile.description || 'Sin descripción'}</p>

      <Title
        text='Tus géneros musicales favoritos'
        size='small'
        align='left'
        className='mt-4 mb-3'
      />

      <div className='flex flex-wrap gap-1'>
        {userProfile.preferences?.map((genre, index) => (
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
        ))}
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
