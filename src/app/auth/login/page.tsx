"use client";
import Image from "next/image";
import Link from "next/link";
import ReusableInput from "@/components/elements/Inputs/ReusableInput";
import Button from "@/components/elements/Buttons/Button";
import Title from "@/components/elements/Titles/Title";
export default function Login() {

  const  handleLoginSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const username = formData.get('username');
    const password = formData.get('password');

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
      <div className="flex flex-row justify-center p-4">
        <Title
          text="CREWLAND"       
          className=" text-4xl"
        />
        <Image
          className="white"
          src="/crewland_logo.svg"
          alt="Crewland logo"
          width={70}
          height={50}
        />
      </div>
  
      <form onSubmit={handleLoginSubmit}  className="flex flex-col mx-4 py-4 gap-6">
        <div className="flex flex-col">
          <ReusableInput
            label=""
            type="email"
            placeholder="Correo Electronico"
          />
            
          <span></span>
        </div>
        <div className="flex flex-col">
          <ReusableInput
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
        <Button text="Iniciar Sesión" variant="primary"  />
        <Button text="Registrarse" variant="ghost"  />
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
