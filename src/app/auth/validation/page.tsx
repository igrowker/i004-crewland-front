"use client";
import Container from "../../../components/elements/Container/Container";
import Title from "@/components/elements/Titles/Title";
import Link from "next/link";
import Button from "@/components/elements/Buttons/Button";
import Image from "next/image";
import { X } from "lucide-react";
import { useState } from "react";

export default function Register() {
  const [code, setCode] = useState("");
  const maxDigits = 4;

  // Maneja el cambio de valor en el input
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value.replace(/[^0-9]/g, "");
    if (value.length <= maxDigits) {
      setCode(value);
    }
  };
  
  return (
    <Container>
      <div className="flex justify-center items-center p-4 pt-6">
        <Link href={"/auth/login"}>
          <X className="text-customWhite cursor-pointer" />
        </Link>
        <Title
          text="Vamos a verificar tu Correo Electrónico"
          className="w-full font-normal"
        />
      </div>
      <Image
        src="/verification_icon.svg"
        alt="Verification Icon"
        width={150}
        height={150}
        priority
      />
      <p className="text-white mt-8">
        Hemos enviado un código de verificación de 4 dígitos a tu correo
        electrónico. Por favor, escribe el código a continuación para continuar.
      </p>
      <div className="flex justify-center gap-2 mb-6">
  <input
    type="text"
    value={code}
    onChange={handleChange}
    maxLength={maxDigits}
    className="w-[14ch] h-12 text-center text-xl font-bold text-white tracking-[1ch] border-b-2 border-purple-400 bg-transparent focus:outline-none focus:border-purple-600"
  />
</div>
<div className="text-center text-sm mb-6">
          <p>¿No lo has recibido?</p>
          <p >02:00:00</p>
          <div className="flex justify-center gap-6 mt-2">
            <button>Enviar nuevamente</button>
            <button>Corregir correo</button>
          </div>
        </div>

      <div className="mx-4 mt-8">
        <Button text="Siguiente" />
      </div>
    </Container>
  );
}
