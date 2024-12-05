'use client'
import { useRouter } from 'next/navigation'
import Container from '@/components/elements/Container/Container'
import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Title from '@/components/elements/Titles/Title'
import Link from 'next/link'
import Button from '@/components/elements/Buttons/Button'
import { useState } from 'react'
import BackArrow from '@/components/elements/icons/BackArrow'

export default function NewPasswordPage() {
  const router = useRouter()

  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [errors, setErrors] = useState<{ [key: string]: string }>({})

  const validatePasswordFields = () => {
    const currentErrors: { [key: string]: string } = {}

    if (!password || password.length < 8) {
      currentErrors.password = 'La contraseña debe tener al menos 8 caracteres.'
    }

    if (!confirmPassword) {
      currentErrors.confirmPassword = 'Debes confirmar la contraseña.'
    } else if (password !== confirmPassword) {
      currentErrors.confirmPassword = 'Las contraseñas no coinciden.'
    }

    setErrors(currentErrors)
    return Object.keys(currentErrors).length === 0
  }

  const nextPage = () => {
    const isValidForm = validatePasswordFields()

    if (isValidForm) {
      router.push('/auth/login')
    }
  }

  return (
    <Container className='flex flex-col justify-center items-center'>
      <section className='bg-background min-h-screen px-1'>
        <div className='flex flex-col items-start gap-5 mb-8'>
          <div className='flex items-center justify-center gap-2 pt-1'>
            <Link href='/auth/recovery'>
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
        </div>

        <form
          className='flex flex-col gap-6'
          onSubmit={(e) => e.preventDefault()}
        >
          <ReusableInput
            id='password'
            name='password'
            type='password'
            label='Nueva contraseña*'
            placeholder='*************'
            onChange={(e) => setPassword(e.target.value)}
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

          <div className='flex flex-col gap-4'>
            <Button variant='primary' onClick={nextPage} text='Confirmar' />
          </div>
        </form>
      </section>
    </Container>
  )
}
