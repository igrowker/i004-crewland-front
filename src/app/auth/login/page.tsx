"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import ReusableInput from "@/components/elements/Inputs/ReusableInput";
import Button from "@/components/elements/Buttons/Button";
import Title from "@/components/elements/Titles/Title";
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
    <>
      <header className=" absolute top-8 left-0 m-4 bg-background">
      <div className="bg-white rounded-md p-1">
        <div className="bg-black invert w-[50px] h-[50px] rounded-md">
          <Image
            src="/crewland_logo.svg"
            alt="Crewland logo"
            fill
          />
        </div>
      </div>
    </header>
    <div className=" flex flex-col justify-center bg-background min-h-screen">
      <section className="mt-32">
      <div className="flex flex-row justify-center items-center mb-8">
        <Title
          text="CREWLAND"       
          className=" text-[35px]"
        />
        <Image
          className="white top-[0px]"
          src="/crewland_logo.svg"
          alt="Crewland logo"
          width={60}
          height={50}
        />
      </div>
  
      <form onSubmit={handleLoginSubmit}  className="flex flex-col mx-4 py-4 gap-6">
        <div className="flex flex-col">
              <ReusableInput
            id="email"
            label=""
            type="email"
            placeholder="Correo Electronico"
          />
            
          <span></span>
        </div>
        <div className="flex flex-col">
              <ReusableInput
            id="contraseña"
            label=""
            type="password"
            placeholder="Contraseña"
          />
          </div>
          <div className="flex flex-row items-center gap-2">
            <input
              type="checkbox"
              id="rememberMe"
              className="w-5 h-5 appearance-none border-2 border-customWhite rounded-sm bg-transparent checked:bg-transparent checked:border-customWhite checked:text-primary cursor-pointer"
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
      <div className="flex flex-col items-center">
      <Link href="" className="text-customWhite  hover:text-primary underline underline-offset-2 decoration-1">
          ¿Olvidaste tu contraseña?
        </Link>
        </div>
        </section>
      </div>
      </>
  )
}
