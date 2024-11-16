'use client'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Title from '@/components/elements/Titles/Title'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function RecoveryPage() {
  const router = useRouter()
  const [email, setEmail] = useState('')

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      localStorage.setItem('recoveryEmail', email)
    }
    router.push('/auth/recovery/success')
  }
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
            width={150}
            height={150}
            priority
          />
        </div>

        <p className='text-white mt-8'>
          Ingresa tu correo y te enviaremos un enlace para que accedas
          nuevamente a tu cuenta.
        </p>
      </div>

      <form onSubmit={handleSubmit} className='flex flex-col gap-6'>
        <ReusableInput
          type='email'
          label='Correo electrónico'
          placeholder='juanperez@gmail.com'
          /* value={email}
          onChange={(e) => setEmail(e.target.value)} */
        />
        <button
          type='submit'
          className='text-center bg-primary text-background rounded-lg py-3 font-bold'
        >
          Siguiente
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
