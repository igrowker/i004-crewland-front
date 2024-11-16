"use client"
import { useRouter } from 'next/navigation'
import ReusableInput from "@/components/elements/Inputs/ReusableInput";
import { X } from 'lucide-react';
import Title from "@/components/elements/Titles/Title";
import Link from "next/link";
import useRegister from "@/hooks/useRegister";
import { AuthRegisterContext } from "@/context/AuthContext";
import { useContext } from "react";
import Button from '@/components/elements/Buttons/Button';

export default function Register() {
  const router = useRouter()
  const { register, errors, ValidateRegister, handleChange, setConfirmPassword } = useRegister();
  
  // Contexto
  const contexto = useContext(AuthRegisterContext);
  if (!contexto) return null
  const { setAuthRegister } = contexto;

  // Navegar a la siguiente pagina despues de validar todos los campos
  const nextPage = async () => {
    const isValidForm = await ValidateRegister();

    if (isValidForm) {
      setAuthRegister(register);
      router.push("/auth/login")
    }
  };

  return (
    <section className="bg-background min-h-screen">
      <div className="flex justify-center items-center p-4 pt-6">
        <Link href={'/auth/login'}>
          <X className="text-customWhite cursor-pointer" />
        </Link>
        <Title
          text="Crear un nuevo Usuario"
          className="w-full font-normal"
        />
      </div>
      <form className="flex flex-col mx-4 py-4 gap-6">
        <ReusableInput
          id="name"
          label="Nombre completo"
          placeholder="Juan Perez"
          onChange={(e) => handleChange(e)}
          error={errors.name}
        />
        <ReusableInput
          id="username"
          label="Nombre de usuario"
          placeholder="Juan-Perez24"
          onChange={(e) => handleChange(e)}
          error={errors.username}
        />
        <ReusableInput
          id="email"
          type="email"
          label="Correo Electronico"
          placeholder="juanperez@gmail.com"
          onChange={(e) => handleChange(e)}
          error={errors.email}
        />
        <ReusableInput
          id="phoneNumber"
          label="Numero de Telefono"
          placeholder="123 456 789"
          onChange={(e) => handleChange(e)}
          error={errors.phoneNumber}
        />
        <ReusableInput
          id="password"
          type="password"
          label="Contraseña"
          password={true}
          placeholder="password"
          onChange={(e) => handleChange(e)}
          error={errors.password}
        />
        <ReusableInput
          id="confirmPassword"
          type="password"
          label="Repite tu Contraseña"
          password={true}
          placeholder="confirmedPassword"
          onChange={(e) => setConfirmPassword(e.target.value)}
          error={errors.confirmPassword}
        />
      </form>
      <div className="mx-4 mt-8">
        <Button
          onClick={nextPage}
          text="Siguiente"
        />
      </div>
    </section>
  )
}
