"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import ReusableInput from "@/components/elements/Inputs/ReusableInput";
import Button from "@/components/elements/Buttons/Button";
import Title from "@/components/elements/Titles/Title";
import Container from "@/components/elements/Container/Container";
import { User, Check } from "lucide-react";
import useLogin from "@/hooks/useLogin";
import { userLogin } from "@/lib";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const { login, errors, handleChange, handleSubmit } = useLogin();
  const [errorsBack, setErrorsBack] = useState<string[] | string>();
  const [rememberMe, setRememberMe] = useState(false);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setRememberMe(e.target.checked);
  };

  const handleLogin = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const isValidForm = await handleSubmit();
      console.log(isValidForm);
      console.log(1);
      if (isValidForm) {
        console.log(2);
        const response = await userLogin(login.email, login.password);
        if (response?.status !== 200) {
          setErrorsBack(response?.data || "Error desconocido.");
        } else {
          console.log(">>> Inicio de sesión exitoso");
          router.push("/festivals");
        }
      }
    } catch (error) {
      console.error("Error al iniciar sesión: ", error);
    }
  };

  return (
    <Container>
      <header className="absolute top-8 left-0 m-4 rounded-md z-10">
        <div className="bg-white rounded-md p-1">
          <div className="bg-black invert w-[50px] h-[50px] rounded-md">
            <Image src="/crewland_logo.svg" alt="Crewland logo" fill />
          </div>
        </div>
      </header>
      <div
        className="relative flex flex-col justify-center w-full h-screen"
        style={{
          backgroundImage: "url(/login.png)",
          backgroundPosition: "center 15vh",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute top-0 left-0 w-full h-full bg-background opacity-50"></div>
        <section className="relative z-10 mt-32">
          <div className="flex flex-row justify-center items-center mb-8">
            <Title text="CREWLAND" className="text-[46px]" />
            <Image
              className="white top-[0px]"
              src="/crewland_logo.svg"
              alt="Crewland logo"
              width={60}
              height={50}
            />
          </div>

          <form className="flex flex-col gap-6 pt-10 p-4 md:p-6 lg:p-8">
            <div className="flex flex-col">
              <ReusableInput
                id="email"
                name="email"
                label="Correo Electrónico"
                hideLabel={true}
                onChange={(e) => handleChange(e)}
                type="email"
                placeholder="Correo Electrónico"
                error={errors.email}
                icon={<User />}
              />
            </div>
            <div className="flex flex-col">
              <ReusableInput
                id="password"
                name="password"
                label="Contraseña"
                password={true}
                hideLabel={true}
                onChange={(e) => handleChange(e)}
                type="password"
                placeholder="Contraseña"
                error={errors.password}
              />
            </div>
            <div className="flex flex-row items-center gap-2 z-10">
              <div className="relative w-5 h-5">
                <input
                  type="checkbox"
                  id="rememberMe"
                  name="rememberMe"
                  checked={rememberMe}
                  onChange={handleCheckboxChange}
                  className={`appearance-none w-full h-full border-2 rounded-sm cursor-pointer ${
                    rememberMe
                      ? "bg-primary border-primary"
                      : "bg-transparent border-customWhite"
                  }`}
                />
                <span
                  className={`absolute top-0 left-0 w-full h-full flex justify-center items-center text-white text-xl ${
                    rememberMe ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ pointerEvents: "none" }}
                >
                  <Check />
                </span>
              </div>

              <label
                htmlFor="rememberMe"
                className="text-customWhite cursor-pointer"
              >
                Recordar contraseña
              </label>
            </div>
            <div className="flex flex-col gap-4">
              <Button
                submit
                onClick={(e) => handleLogin(e)}
                text="Iniciar Sesión"
                variant="primary"
              />
              <Button
                text="Registrarse"
                variant="ghost"
                onClick={() => router.push("/auth/register")}
              />
            </div>
          </form>
          {errorsBack && (
            <div className="mt-4 text-red-500">
              {Array.isArray(errorsBack) ? (
                errorsBack.map((err, idx) => <p key={idx}>{err}</p>)
              ) : (
                <p>{errorsBack}</p>
              )}
            </div>
          )}
          <div className="flex flex-col items-center mt-4">
            <Link
              href="/auth/recovery"
              className="text-customWhite hover:text-primary underline underline-offset-2 decoration-1"
            >
              ¿Olvidaste tu contraseña?
            </Link>
          </div>
        </section>
      </div>
    </Container>
  );
}
