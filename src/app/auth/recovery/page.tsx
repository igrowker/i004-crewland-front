'use client'
import Container from '@/components/elements/Container/Container'
import BackArrow from '@/components/elements/icons/BackArrow'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Title from '@/components/elements/Titles/Title'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'

export default function RecoveryPage() {
  const [email, setEmail] = useState('')

  const handleLinkClick = () => {
    if (email) {
      localStorage.setItem('recoveryEmail', email)
    }
  }

  return (
    <Container className='flex flex-col justify-center items-center'>
      <section className='bg-background min-h-screen px-1'>
        <div className='flex flex-col items-start gap-5 mb-8'>
          <div className='flex items-center justify-center gap-2 pt-1'>
            <Link href='/auth/login'>
              <BackArrow />
            </Link>
            <Title
              text='Recuperar contraseña'
              size='medium'
              align='center'
              weight='extrabold'
              className='text-white'
            />
          </div>

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

        <form className='flex flex-col gap-6'>
          <ReusableInput
            id='email'
            type='email'
            label='Correo electrónico'
            placeholder='juanperez@gmail.com'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <Link
            href='/auth/recovery/success'
            className='text-center bg-primary text-background rounded-lg py-3 font-bold mt-4 block'
            onClick={handleLinkClick}
          >
            Siguiente
          </Link>
        </form>

        <div className='flex flex-col items-center justify-center mt-8'>
          <p className='text-white'>¿No puedes cambiar la contraseña?</p>
          <Link href='/auth/register'>
            <span className='text-white underline cursor-pointer'>
              Crear una nueva cuenta
            </span>
          </Link>
        </div>
      </section>
    </Container>
  )
}
