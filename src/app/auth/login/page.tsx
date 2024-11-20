'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react';
import Image from 'next/image'
import Link from 'next/link'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Button from '@/components/elements/Buttons/Button'
import Title from '@/components/elements/Titles/Title'
import Container from '@/components/elements/Container/Container'
import {User} from 'lucide-react';

export default function Login() {
  const router = useRouter()

  const [rememberMe, setRememberMe] = useState(false)
  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(event.target.checked)
  }
  const handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get('email') as string
    const password = formData.get('contraseña') as string

    if (email && password) {
      if (rememberMe) {
        //localStorage.setItem('rememberMe', 'true');
      }
      router.push('/home');
    } else {
      console.error('Fields are required')
    }
  }

  return (
    <Container className='flex flex-col justify-center items-center'>
      <header className=' absolute top-8 left-0 m-4 bg-background rounded-md z-10'>

        <div className='bg-white rounded-md p-1 '>
          <div className='bg-black invert w-[50px] h-[50px] rounded-md'>
            <Image
              src='/crewland_logo.svg'
              alt='Crewland logo'
              fill
            />
          </div>
        </div>
      </header>
      <div
        className='relative flex flex-col justify-center bg-background min-h-screen'
        style={{
          backgroundImage: 'url(/login.png)',
          backgroundPosition: 'center 100px',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div
          className='absolute top-0 left-0 w-full h-full bg-background'
          style={{
            opacity: 0.5,
          }}
        ></div>
        <section className='relative z-10 mt-32'>
          <div className='flex flex-row justify-center items-center mb-8'>
            <Title
              text='CREWLAND'
              className=' text-[35px]'
            />
            <Image
              className='white top-[0px]'
              src='/crewland_logo.svg'
              alt='Crewland logo'
              width={60}
              height={50}
            />
          </div>

          <form onSubmit={handleLoginSubmit} className='flex flex-col mx-4 py-4 gap-6'>
            <div className='flex flex-col'>
            <ReusableInput
            id='email'
            label='email'
            hideLabel={true}
            type='email'
            placeholder='Correo Electrónico'
          /> 
    
              <span>
              <User className=' text-customWhite absolute top-[110px] right-4'/>
              </span>
            </div>
            <div className='flex flex-col'>
            <ReusableInput
            id='contraseña'
            label='contraseña'
            hideLabel={true}
            type='password'
            placeholder='Contraseña'
          />
            </div>
            <div className='flex flex-row items-center gap-2'>
              <input
                type='checkbox'
                id='rememberMe'
                name='rememberMe'
                checked={rememberMe}
                onChange={handleCheckboxChange}
                className={`w-5 h-5 appearance-none border-2 rounded-sm bg-transparent cursor-pointer 
    ${rememberMe ? 'border-primary checked:bg-primary' : 'border-customWhite'} `}
              />
              <label htmlFor='rememberMe' className='text-customWhite'>
                Recordar contraseña
              </label>
            </div>
            <div className='flex flex-col gap-4'>
              <Button text='Iniciar Sesión' variant='primary' />
              <Button
                text='Registrarse'
                variant='ghost'
                onClick={() => router.push('/auth/register')} />
            </div>
          </form>
          <div className='flex flex-col items-center'>
            <Link
              href='/auth/recovery'
              className='text-customWhite  hover:text-primary underline underline-offset-2 decoration-1'>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </section>
      </div>
    </Container>
  )
}
