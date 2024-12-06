"use client"
import ReusableInput from "@/components/elements/Inputs/ReusableInput";
import useRegister from "@/hooks/useRegister";
import Container from '@/components/elements/Container/Container';
import InputCalendar from '@/components/elements/Inputs/InputCalendar';
import InputSelect from '@/components/elements/Inputs/InputSelect';
import { useState } from "react";
import ModalPost from "@/components/elements/search/ModalPost";
import NavTitle from "@/components/elements/headers/NavTitle";
import { useRouter } from 'next/navigation'
import { userRegister } from "@/services/api/users/auth/register";

export default function Register() {
  const router = useRouter()

  const { errors, register, ValidateRegister, handleChange, setConfirmPassword, setRegister } = useRegister();

  const [stateModal, setStateModal] = useState<boolean>(false);


  const handleRegistro = async () => {
    try {
      // Funcion que valida todos los campos del registro y devuelve booleano
      const isValidForm = ValidateRegister();
      if (isValidForm) {
        setStateModal(true)
        // Envio de datos al back
        const response = await userRegister(register.email, register.password, register.name, register.username, register.age, register.tel, register.gender);
        if (!response.success) {
          throw new Error("Error al enviar la solicitud de registro")
        }
        router.push('/home')
      }
    }
    catch (e) {
      console.error("Respuesta fallida del front: " + e)
    }
  };

  return (
    <Container className="bg-background">
      <article className="mx-2 my-4">
        <NavTitle link="auth/login" title="Crear un nuevo Usuario" />
        <p className="py-2 font-roboto">
          ¡Bienvenido/a! Regístrate para empezar Queremos conocerte un poco más. Completa los campos obligatorios (*) para unirte a nuestra comunidad.
        </p>
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
            onChange={(val) => setRegister(prev => ({ ...prev, age: val }))}
            error={errors.age}
            isRequired
          />
          <InputSelect
            label="Género"
            onChange={(e) => handleChange(e)}
            error={errors.gender}
            topModal="top-[70px]"
            options={["hombre", "mujer", "prefiero no especificar", "otro"]}
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
            type="button"
            className="bg-primary text-background rounded-lg w-full py-3 my-5 font-medium"
            onClick={handleRegistro}
            aria-label="Registar nuevo usuario"
          >
            Registrarse
          </button>
        </form>
        {stateModal &&
          <ModalPost
            title="🎉 ¡Registro exitoso! 🎉"
            content="¡Gracias por unirte a nuestra comunidad! Estamos emocionados de tenerte con nosotros."
            details="registro exitoso"
            closeModal={() => setStateModal(false)}
          />
        }
      </article>
    </Container>
  )
}
