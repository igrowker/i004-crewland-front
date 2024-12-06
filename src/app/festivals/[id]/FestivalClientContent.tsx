"use client";

import React, { useContext, useEffect, useState } from "react";

import Container from "@/components/elements/Container/Container";
import Title from "@/components/elements/Titles/Title";
import { festivals } from "@/json/festivals";
import Button from "@/components/elements/Buttons/Button";
import Link from "next/link";
import Image from "next/image";
import FestivalsHeader from "@/components/elements/headers/FestivalsHeader";
import { festivalIdContext } from "@/context/FestivalIdContext";

export default function FestivalClientContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const contexto = useContext(festivalIdContext);
  const [festId, setFestId] = useState<string>("");
  const [isResolved, setIsResolved] = useState<boolean>(false); // Estado de control

  useEffect(() => {
    const resolveParams = async () => {
      if (!isResolved) {
        try {
          const result = await params;
          console.log(result);
          setFestId(result.id);
          if (contexto) {
            contexto.updateFestId(result.id);
          }
          setIsResolved(true);
        } catch (error) {
          console.error("Error al resolver params:", error);
        }
      }
    };

    resolveParams();
  }, [params, contexto, isResolved]);

  if (!festId) {
    return (
      <Container>
        <div className="py-10 text-center">
          <h1 className="text-2xl font-bold">Cargando...</h1>
        </div>
      </Container>
    );
  }
  const festival = festivals.find((festival) => festival.id === festId);
  if (!festival) {
    return (
      <Container>
        <div className="py-10 text-center">
          <h1 className="text-2xl font-bold">Festival no encontrado</h1>
          <Link
            href="/"
            className="mt-4 inline-block px-4 py-2 bg-[#9747FF] text-white rounded-lg shadow-md hover:bg-[#8637e6] transition"
          >
            Volver a inicio
          </Link>
        </div>
      </Container>
    );
  }

  const icons = [
    "/users/01.png",
    "/users/02.png",
    "/users/03.png",
    "/users/04.png",
    "/users/05.png",
    "/users/06.png",
    "/users/07.png",
    "/share.png",
  ];

  const handleShareClick = () => {
    console.log("Compartir");
  };

  return (
    <Container>
      <FestivalsHeader />
      <main className="flex flex-col pt-[40px] sm:pt-[70px] lg:pt-[80px] px-6">
        <Title
          text={festival.name}
          size="medium"
          align="left"
          className="mb-2"
        />
        <p className="text-sm leading-snug font-normal max-w-md mb-5">
          {festival.description}
        </p>

        <div className="relative w-full h-64 mb-4">
          <Image
            src={festival.image}
            alt={festival.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
            className="rounded-md object-cover"
            priority
          />
          <div className="absolute top-2 left-2 flex gap-2">
            <button className="bg-transparent border border-white text-white rounded-full px-4 py-2 text-xs">
              {festival.date}
            </button>
            <button className="bg-transparent border border-white text-white rounded-full px-4 py-2 text-xs">
              {festival.hour} hrs
            </button>
          </div>
        </div>

        <Title
          text="Espectadores"
          size="medium"
          align="left"
          className="font-normal"
        />

        <div className="relative flex items-center w-full justify-start pt-1">
          {icons.map((icon, index) => (
            <div
              key={index}
              className="relative"
              style={{
                marginLeft: index === 0 ? 0 : "-10px",
                zIndex: index === icons.length - 1 ? 10 : index,
              }}
            >
              <Image
                src={icon}
                alt={`Icono ${index + 1}`}
                width={48}
                height={48}
                className={`object-cover rounded-full ${
                  icon === "/share.png" ? "bg-[#CE9DF9] p-3 cursor-pointer" : ""
                }`}
                onClick={icon === "/share.png" ? handleShareClick : undefined}
              />
            </div>
          ))}
        </div>
        <div className="flex mt-5 gap-2">
          <Button
            variant="primary"
            text="Comprar entradas"
            className="text-[16px] "
          />
          <Button
            href={"/search"}
            text="Crea tu experiencia"
            className="!bg-[#B771F5] text-[16px] "
          />
        </div>
      </main>
    </Container>
  );
}
