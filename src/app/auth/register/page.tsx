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
  const [errosBack, setErrosBack] = useState<string[] | string>()
  const [toggleModal, setToggleModal] = useState({
    modalSuccess: false,
    modalErrors: false
  });


  const handleRegistro = async () => {
    try {
      // Funcion que valida todos los campos del registro y devuelve booleano
      const isValidForm = ValidateRegister();
      console.log(register)
      if (isValidForm) {
        // Envio de datos al back
        const response = await userRegister(register.email, register.password, register.name, register.username, register.age, register.tel, register.gender);

        if (response?.request !== 201) {
          setToggleModal(prev => ({ ...prev, modalErrors: true }))
          setErrosBack(response?.response.data)
          console.log(response)
        } else {
          setToggleModal(prev => ({ ...prev, modalSuccess: true }))
          console.log(response)
          router.push('/auth/login')
        }
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
            label="Nombre Completo"
            placeholder="Juan Perez"
            onChange={(e) => handleChange(e)}
            error={errors.name}
            isRequired
          />
          <ReusableInput
            id="username"
            type="text"
            label="Nombre de Usuario"
            placeholder="JuanPerez123"
            onChange={(e) => handleChange(e)}
            error={errors.username}
            isRequired
          />
          <ReusableInput
            id="email"
            type="email"
            label="Correo Electrónico"
            placeholder="juanperez@gmail.com"
            onChange={(e) => handleChange(e)}
            error={errors.email}
            isRequired
          />
          <ReusableInput
            id="tel"
            label="Número de Teléfono"
            placeholder="+54 123"
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
            id="gender"
            label="Género"
            onChange={(e) => handleChange(e)}
            error={errors.gender}
            topModal="top-[70px]"
            options={["hombre", "mujer", "no especifica", "otro"]}
            value={register.gender}
            isRequired
          />
          <ReusableInput
            id="password"
            type="password"
            label="Contraseña"
            password
            placeholder="Contraseña"
            onChange={(e) => handleChange(e)}
            error={errors.password}
            isRequired
          />
          <ReusableInput
            id="confirmPassword"
            type="password"
            label="Repite tu Contraseña"
            password
            placeholder="Confirmar contraseña"
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
        {toggleModal.modalSuccess &&
          <ModalPost
            title="🎉 ¡Registro exitoso! 🎉"
            content="¡Gracias por unirte a nuestra comunidad! Estamos emocionados de tenerte con nosotros."
            details="registro exitoso"
            closeModal={() => setToggleModal(prev => ({ ...prev, modalSuccess: false }))}
          />
        }
        {toggleModal.modalErrors &&
          <ModalPost
            title=" 🚫 ¡Registro Fallido!  🚫"
            content=""
            details="registro exitoso"
            closeModal={() => setToggleModal(prev => ({ ...prev, modalErrors: false }))}
            arrErros={errosBack}
          />
        }
      </article>
    </Container>
  )
}
