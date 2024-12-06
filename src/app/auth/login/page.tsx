'use client'
import { redirect } from 'next/navigation'
import { useActionState, useEffect, useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Button from '@/components/elements/Buttons/Button'
import Title from '@/components/elements/Titles/Title'
import Container from '@/components/elements/Container/Container'
import { User, Check } from 'lucide-react'
import { FormState, login } from '@/lib'

export default function LoginPage() {
  
  const [errors, setErrors] = useState<{ type: string, message: string }>({ type: '', message: '' })
  const [formState, formAction] = useActionState(login, {
    success: false,
    data: { token: '', msg: '' },
  } as FormState)

  useEffect(() => {
    if (formState.success) redirect('/home')
    if (!formState.success) {
      setErrors(
        formState.data.msg.includes('Email')
          ? { type: 'email', message: formState.data.msg }
          : { type: 'password', message: formState.data.msg }
      )
    }
  }, [formState])

  const [rememberMe, setRememberMe] = useState(false)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked)
  }

  const errorEmail = errors.type === 'email' ? errors.message : '';
  const errorPassword = errors.type === 'password' ? errors.message : '';
  return (
    <Container>
      <header className='absolute top-8 left-0 m-4  rounded-md z-10'>
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
        className='relative flex flex-col justify-center w-full h-screen'
        style={{
          backgroundImage: 'url(/login.png)',
          backgroundPosition: 'center 15vh',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
      >
        <div
          className='absolute top-0 left-0 w-full h-full bg-background opacity-50'
        ></div>
        <section className='relative z-10 mt-32'>
          <div className='flex flex-row justify-center items-center mb-8'>
            <Title
              text='CREWLAND'
              className=' text-[36px]'
            />
            <Image
              className='white top-[0px]'
              src='/crewland_logo.svg'
              alt='Crewland logo'
              width={60}
              height={50}
            />
          </div>

          <form action={formAction} className='flex flex-col gap-6 pt-10 p-4 md:p-6 lg:p-8'>

            <div className='flex flex-col'>
              <ReusableInput
                id='email'
                name='email'
                label='email'
                hideLabel={true}
                type='email'
                placeholder='Correo Electrónico'
                error={errorEmail}

              />
              <span>
                <User className='absolute text-customWhite top-[100px] right-4' />
              </span>
              {errorEmail && <span className='text-customRed'>{errorEmail}</span>}
            </div>
            <div className='flex flex-col'>
              <ReusableInput
                id='password'
                name='password'
                label='password'
                password={true}
                hideLabel={true}
                type='password'
                placeholder='Contraseña'
                error={errorPassword}
              />
              {errorPassword && <span className='text-customRed'>{errorPassword}</span>}

            </div>
            <div className="flex flex-row items-center gap-2 z-10">
              <div className="relative w-5 h-5">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                  className={`appearance-none w-full h-full border-2 rounded-sm cursor-pointer ${rememberMe
                    ? 'bg-primary border-primary'
                    : 'bg-transparent border-customWhite'
                    }`}
                />
                <span
                  className={`absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-xl ${rememberMe ? 'opacity-100' : 'opacity-0'
                    }`}
                  style={{ pointerEvents: 'none' }}
                >
                  <Check />
                </span>
              </div>

              <label htmlFor="rememberMe" className="text-customWhite cursor-pointer">
                Recordar contraseña
              </label>
            </div>
            <div className='flex flex-col gap-4 '>
              <Button submit text='Iniciar Sesión' variant='primary' />
              <Button
                text='Registrarse'
                variant='ghost'
                onClick={() => redirect('/auth/register')}
              />
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
