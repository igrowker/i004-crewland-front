import ReusableInput from '@/components/elements/Inputs/ReusableInput'
import Title from '@/components/elements/Titles/Title'
import Image from 'next/image'

export default function RecoveryPage() {
  return (
    <section className='bg-background min-h-screen p-16'>
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

        <p className='text-white mt-8'>
          Ingresa tu correo y te enviaremos un enlace para que accedas
          nuevamente a tu cuenta.
        </p>
      </div>

      <form className='flex flex-col gap-6'>
        <ReusableInput
          type='email'
          label='Correo electrónico'
          placeholder='juanperez@gmail.com'
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
