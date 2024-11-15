import ReusableInput from "@/components/elements/Inputs/ReusableInput";
import { X } from 'lucide-react';
import Title from "@/components/elements/Titles/Title";
import Link from "next/link";

export default function Register() {
  return (
    <section className="bg-background min-h-screen">
      <div className="flex items-center p-4 pt-6">
        <Link href={'/auth/login'}>
          <X className="text-customWhite cursor-pointer"/>
        </Link>
        <Title 
          text="Crear un nuevo Usuario"
          className="w-full font-normal"
        />
      </div>
      <form className="flex flex-col mx-4 py-4 gap-6 text-sans">
        <ReusableInput
          label="Nombre completo"
          placeholder="Juan Perez"
        />
        <ReusableInput
          label="Nombre de usuario"
          placeholder="Juan-Perez24"
        />
        <ReusableInput
          type="email"
          label="Correo Electronico"
          placeholder="juanperez@gmail.com"
        />
        <ReusableInput
          type="number"
          label="Numero de Telefono"
          placeholder="+51 123 456 789"
        />
        <ReusableInput
          type="password"
          label="Contraseña"
          password={true}
          placeholder="password"
        />
        <ReusableInput
          type="password"
          label="Repite tu Contraseña"
          password={true}
          placeholder="confirmedPassword"
        />

        <Link href={'/auth/codePhone'} className="text-center bg-primary text-background rounded-lg mt-4 py-3 font-medium">
          Siguiente
        </Link>
      </form>
    </section>
  )
}
