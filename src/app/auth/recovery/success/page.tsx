'use client'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Title from '@/components/elements/Titles/Title'
import Image from 'next/image'
import { useEffect, useState } from 'react'

export default function SuccessPage() {
  const [email, setEmail] = useState('')
  const [timeLeft, setTimeLeft] = useState(120)

  const formatTime = (seconds: number) => {
    const hours = Math.floor(seconds / 3600)
    const minutes = Math.floor((seconds % 3600) / 60)
    const remainingSeconds = seconds % 60
    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(
      2,
      '0'
    )}:${String(remainingSeconds).padStart(2, '0')}`
  }

  useEffect(() => {
    if (timeLeft <= 0) return
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => prevTime - 1)
    }, 1000)

    return () => clearInterval(timer)
  }, [timeLeft])

  useEffect(() => {
    const savedEmail = localStorage.getItem('recoveryEmail')
    if (savedEmail) {
      setEmail(savedEmail)
    }
  }, [])

  return (
    <section className='bg-background min-h-screen px-16'>
      <div className='flex flex-col items-start gap-5 mb-8'>
        <Title
          text='Recuperar contraseña'
          size='large'
          weight='extrabold'
          className='text-white'
        />

        <div className='flex justify-center w-full'>
          <Image
            src='/recovery_password_lock.svg'
            alt='Recovery password'
            width={180}
            height={180}
            priority
          />
        </div>

        <p className='text-white mt-8 text-center'>
          Se ha enviado un correo de recuperación a la casilla: <br />
          <span className='font-bold'>
            {email || 'No se encontró el correo'}
          </span>
        </p>
      </div>

      <form className='flex flex-col gap-6'>
        <ReusableInput
          type='email'
          label='Correo electrónico'
          placeholder='juanperez@gmail.com'
        />

        <div className='flex flex-col items-center justify-center mt-4'>
          <p className='text-white'>¿No lo has recibido?</p>
          <span
            className={`text-white ${
              timeLeft === 0 ? 'cursor-pointer' : 'cursor-not-allowed'
            } mt-2`}
            style={{ textDecoration: 'none' }}
          >
            {formatTime(timeLeft)}
          </span>
        </div>

        <button
          type='submit'
          disabled={timeLeft !== 0}
          className={`text-center bg-primary text-background rounded-lg py-3 font-bold mt-4 ${
            timeLeft !== 0 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          Enviar nuevamente
        </button>
      </form>

      <div className='flex flex-col items-center justify-center mt-8'>
        <p className='text-white'>¿No puedes cambiar la contraseña?</p>
        <span className='text-white underline cursor-pointer'>
          Crear una nueva cuenta
        </span>
      </div>
    </section>
  )
}
