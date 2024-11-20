'use client'
import { useRouter } from 'next/navigation'
import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Button from '@/components/elements/Buttons/Button'
import Title from '@/components/elements/Titles/Title'
import Container from '@/components/elements/Container/Container'
import { User, Check } from 'lucide-react'
import useLogin from '@/hooks/useLogin'

export default function Login() {
  const router = useRouter()

  const {
    login,
    errors,
    handleChange,
    validateLogin
  } = useLogin();

  const handleLogin = () => {
    const isValidForm = validateLogin()

    if (isValidForm) {
      router.push('/home')
    }
  }
  const [rememberMe, setRememberMe] = useState(false)

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked)
  }

  return (
    <>
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
        className='relative flex flex-col justify-center bg-background min-h-screen '
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

          <form className='flex flex-col mx-4 py-4 gap-6'>

            <div className='flex flex-col'>
              <ReusableInput
                id='email'
                label='email'
                hideLabel={true}
                type='email'
                placeholder='Correo Electrónico'
                onChange={(e) => handleChange(e)}
                error={errors.email}

              />
              <span>
                <User className=' text-customWhite absolute top-[80px] right-4' />
              </span>
            </div>
            <div className='flex flex-col'>
              <ReusableInput
                id='password'
                label='password'
                password={true}
                hideLabel={true}
                type='password'
                placeholder='Contraseña'
                onChange={(e) => handleChange(e)}
                error={errors.password}
              />
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

          </form>
          <div className='flex flex-col gap-4'>
            <Button text='Iniciar Sesión' variant='primary' onClick={handleLogin} />
            <Button
              text='Registrarse'
              variant='ghost'
              onClick={() => router.push('/auth/register')}
            />
          </div>
          <div className='flex flex-col items-center'>
            <Link
              href='/auth/recovery'
              className='text-customWhite  hover:text-primary underline underline-offset-2 decoration-1'>
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </section>
      </div>
    </>
  )
}
