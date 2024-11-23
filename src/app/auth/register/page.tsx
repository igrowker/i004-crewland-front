"use client"
// import { useRouter } from 'next/navigation'
import ReusableInput from "@/components/elements/Inputs/ReusableInput";
import { ArrowLeft } from 'lucide-react';
import Title from "@/components/elements/Titles/Title";
import Link from "next/link";
import useRegister from "@/hooks/useRegister";
import Container from '@/components/elements/Container/Container';
import InputCalendar from '@/components/elements/Inputs/InputCalendar';
import InputSelect from '@/components/elements/Inputs/InputSelect';

export default function Register() {
  // const router = useRouter()
  const { errors, register, ValidateRegister, handleChange, setConfirmPassword, setRegister } = useRegister();

  // Navegar a la siguiente pagina despues de validar todos los campos
  const nextPage = () => {

    const isValidForm = ValidateRegister();
    console.log(register)
    console.log(isValidForm)
    if (isValidForm) {
      // router.push("/")
      console.log(register)
    }
  };

  return (
    <Container className="bg-background">
      <section>
        <div className="flex justify-center items-center pb-4 gap-1">
          <Link href={'/auth/login'}>
            <ArrowLeft className="text-customWhite cursor-pointer" />
          </Link>
          <Title
            text="Crear un nuevo Usuario"
            className="w-full font-normal text-lg"
          />
        </div>
        <p className="py-2 font-roboto max-w-[368px]">
          ¡Bienvenido/a! Regístrate para empezar Queremos conocerte un poco más. Completa los campos obligatorios (*) para unirte a nuestra comunidad.
        </p>
        <form className="flex flex-col py-4 gap-6 max-w-[368px]">
          <ReusableInput
            id="name"
            label="Nombre completo"
            placeholder="Juan Perez"
            onChange={(e) => handleChange(e)}
            error={errors.name}
            isRequired
          />
          <ReusableInput
            id="username"
            label="Nombre de usuario"
            placeholder="Juan-Perez24"
            onChange={(e) => handleChange(e)}
            error={errors.username}
            isRequired
          />
          <ReusableInput
            id="email"
            type="email"
            label="Correo Electronico"
            placeholder="juanperez@gmail.com"
            onChange={(e) => handleChange(e)}
            error={errors.email}
            isRequired
          />
          <ReusableInput
            id="tel"
            label="Numero de Telefono"
            placeholder="+54 9"
            onChange={(e) => handleChange(e)}
            error={errors.tel}
            isRequired
          />
          <InputCalendar
            label="Nacimiento"
            placeholder="dd/mm/aa"
            onChange={(val) => setRegister(prev => ({ ...prev, age : val }))}
            error={errors.age}
            isRequired
          />
          <InputSelect 
            label="Género"
            onChange={(e) => handleChange(e)}
            error={errors.gender}
            isRequired
          />
          <ReusableInput
            id="password"
            type="password"
            label="Contraseña"
            password
            placeholder="password"
            onChange={(e) => handleChange(e)}
            error={errors.password}
            isRequired
          />
          <ReusableInput
            id="confirmPassword"
            type="password"
            label="Repite tu Contraseña"
            password
            placeholder="confirmedPassword"
            onChange={(e) => setConfirmPassword(e.target.value)}
            error={errors.confirmPassword}
            isRequired
          />
          <button 
            type='button' 
            onClick={nextPage} 
            className='hover:scale-105 transform duration-300 ease-in-out bg-primary text-background rounded-lg w-full py-3 my-5 transition font-medium'
          >
            Siguiente
          </button>
        </form>
      </section>
    </Container>
  )
}
