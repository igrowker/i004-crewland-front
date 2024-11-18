"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReusableInput from "@/components/elements/Inputs/ReusableInput";
import Button from "@/components/elements/Buttons/Button";
import Title from "@/components/elements/Titles/Title";
import Container from "@/components/elements/Container/Container";
export default function Login() {
const router = useRouter()
  const  handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()

    const formData = new FormData(event.currentTarget)
    const email = formData.get("email") as string
    const password = formData.get("contraseña") as string

    if(email&&password){
      router.push("/home")
    } else {
      console.error("Fields are required")
    }

  }

  return (
    <Container className="flex flex-col justify-center items-center">
      <header className="absolute top-8 left-0 m-4">
        <div className="bg-white rounded-md p-1">
          <div className="bg-black invert w-[50px] h-[50px] rounded-md">
            <Image src="/crewland_logo.svg" alt="Crewland logo" fill />
          </div>
        </div>
      </header>

      <section className="flex flex-col justify-center items-center mt-32">
        <div className="flex flex-row justify-center items-center mb-8">
          <Title text="CREWLAND" className="text-[35px]" />
          <Image
            className="white top-[0px]"
            src="/crewland_logo.svg"
            alt="Crewland logo"
            width={60}
            height={50}
          />
        </div>

        <form onSubmit={handleLoginSubmit} className="flex flex-col gap-6 w-80">
          <ReusableInput id="email" label="email" hideLabel={true} type="email" placeholder="Correo Electrónico" />
          <ReusableInput id="contraseña" label="contraseña" hideLabel={true} type="password" placeholder="Contraseña" />

          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              className="w-5 h-5 border-2 border-customWhite rounded-sm cursor-pointer"
            />
            <label htmlFor="rememberMe" className="text-customWhite">
              Recordar contraseña
            </label>
          </div>

          <div className="flex flex-col gap-4">
            <Button text="Iniciar Sesión" variant="primary" />
            <Button text="Registrarse" variant="ghost" onClick={() => router.push("/auth/register")} />
          </div>
        </form>

        <Link href="/auth/forgot-password" className="text-customWhite mt-2 hover:text-primary underline">
          ¿Olvidaste tu contraseña?
        </Link>
      </section>
    </Container>
  );
}
