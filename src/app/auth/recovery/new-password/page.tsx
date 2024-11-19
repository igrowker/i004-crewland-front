'use client'
import { useRouter } from 'next/navigation'
import Container from '@/components/elements/Container/Container'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Title from '@/components/elements/Titles/Title'
import { ArrowLeft } from 'lucide-react'
import Link from 'next/link'
import useRegister from '@/hooks/useRegister'
import { useContext } from 'react'
import { AuthRegisterContext } from '@/context/AuthContext'
import Button from '@/components/elements/Buttons/Button'

export default function NewPasswordPage() {
  const {
    register,
    errors,
    ValidateRegister,
    handleChange,
    setConfirmPassword
  } = useRegister()
  const router = useRouter()
  const contexto = useContext(AuthRegisterContext)
  if (!contexto) return null
  const { setAuthRegister } = contexto

  const nextPage = () => {
    const isValidForm = ValidateRegister()

    if (isValidForm) {
      setAuthRegister(register)
      router.push('/auth/login')
    }
  }

  return (
    <Container className='flex flex-col justify-center items-center'>
      <section className='bg-background min-h-screen px-16'>
        <div className='flex flex-col items-start gap-5 mb-8'>
          <div className='flex items-center'>
            <Link href='/auth/recovery'>
              <ArrowLeft
                className='text-customWhite cursor-pointer'
                size={30}
              />
            </Link>
            <Title
              text='Recuperar contraseña'
              size='large'
              weight='extrabold'
              className='text-white'
            />
          </div>
        </div>

        <form className='flex flex-col gap-6'>
          <ReusableInput
            id='password'
            name='password'
            type='password'
            label='Nueva contraseña*'
            placeholder='*************'
            onChange={handleChange}
            error={errors.password}
          />
          <ReusableInput
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            label='Repite tu nueva contraseña*'
            placeholder='*************'
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
          />

          <div className='text-center bg-primary text-background rounded-lg py-3 font-bold mt-4'>
            <Button onClick={nextPage} text='Confirmar' />
          </div>
        </form>
      </section>
    </Container>
  )
}
