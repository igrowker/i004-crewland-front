"use client"
// import { useRouter } from 'next/navigation'
import ReusableInput from "@/components/elements/Inputs/ReusableInput";
import { X } from 'lucide-react';
import Title from "@/components/elements/Titles/Title";
import Link from "next/link";
import useRegister from "@/hooks/useRegister";
import Container from '@/components/elements/Container/Container';
import InputCalendar from '@/components/elements/Inputs/InputCalendar';
import InputSelect from '@/components/elements/Inputs/InputSelect';

export default function Register() {
  // const router = useRouter()
  const { errors, register, ValidateRegister, handleChange, setConfirmPassword } = useRegister();

  // Navegar a la siguiente pagina despues de validar todos los campos
  const nextPage = () => {

    const isValidForm = ValidateRegister();
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
            <X className="text-customWhite cursor-pointer" />
          </Link>
          <Title
            text="Crear un nuevo Usuario"
            className="w-full font-normal text-lg"
          />
        </div>
        <form className="flex flex-col py-4 gap-6">
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
            id="phoneNumber"
            label="Numero de Telefono"
            placeholder="+54 9"
            onChange={(e) => handleChange(e)}
            error={errors.phoneNumber}
            isRequired
          />
          <InputCalendar
            label="Nacimiento"
            placeholder="dd/mm/aa"
            onChange={(e) => handleChange(e)}
            error={errors.birth}
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
          <button type='button' onClick={nextPage} className='bg-primary text-background rounded-lg w-full py-3 mt-5 hover:bg-primaryHover transition font-medium'>
            Siguiente
          </button>
        </form>
      </section>
    </Container>
  )
}
