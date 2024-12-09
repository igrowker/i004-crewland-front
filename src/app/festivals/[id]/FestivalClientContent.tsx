"use client";

import React, { useContext, useEffect, useState } from "react";

import Container from "@/components/elements/Container/Container";
import Title from "@/components/elements/Titles/Title";
import Button from "@/components/elements/Buttons/Button";

import Image from "next/image";
import FestivalsHeader from "@/components/elements/headers/FestivalsHeader";
import { festivalIdContext } from "@/context/FestivalIdContext";
import { festivalById } from "@/services/festivals";
import { festivalsInterface } from "@/interfaces/festivals";
import { logicTime } from "@/utils/calculateTime";
import { getSession } from "@/lib";

export default function FestivalClientContent({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const contexto = useContext(festivalIdContext);
  const [dataFestival, setDataFestival] = useState<festivalsInterface>();
  const [isResolved, setIsResolved] = useState<boolean>(false); // Estado de control
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const resolveParams = async () => {
      if (!isResolved) {
        try {
          const result = await params;
          if (contexto) {
            contexto.updateFestId(result.id);
          }
          setIsResolved(true);
        } catch (error) {
          console.error("Error al resolver params:", error);
        } finally {
          setLoading(false);
        }
      }
    };
    resolveParams();

    const handleFestivals = async () => {
      try {
        const session = await getSession();
        const { token } = session;
        if (contexto) {
          const response = await festivalById(token, contexto.festivalData.festivalId);
          setDataFestival(response?.data);
        }
      } catch (e) {
        console.error(e);
      }
    };
    handleFestivals();

  }, [params, contexto, isResolved]);

  if (loading) {
    return (
      <Container>
        <div className="py-10 text-center">
          <h1 className="text-2xl font-bold">Cargando...</h1>
        </div>
      </Container>
    );
  }

  const icons = [
    "/users/01.png",
    "/users/02.png",
    process.env.NEXT_PUBLIC_DEFAULT_IMG_USER_CLOUDINARY || "",
    process.env.NEXT_PUBLIC_DEFAULT_IMG_USER_CLOUDINARY || "",
    "/users/05.png",
    "/users/06.png",
    process.env.NEXT_PUBLIC_DEFAULT_IMG_USER_CLOUDINARY || "",
    "/share.png",
  ];

  const handleShareClick = () => {
    console.log("Compartir");
  };

  return (
    <Container className="w-full">
      <FestivalsHeader />
      {dataFestival ? (
        <>
          <main className="flex flex-col py-20 pb-24 px-2">
            <Title
              text={dataFestival.name}
              size="medium"
              align="left"
              className="mb-2"
            />
            <p className="text-sm leading-snug font-normal max-w-md mb-5">
              {dataFestival.description}
            </p>

            <div className="relative w-full h-64 mb-4">
              <Image
                src={dataFestival.imageUrls[0]}
                alt={dataFestival.name}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 800px"
                className="rounded-md object-cover"
                priority
              />
              <div className="absolute top-2 left-2 flex gap-2">
                <button className="border border-white text-black font-bold bg-customWhite/30 rounded-full px-4 py-2 text-xs">
                  {dataFestival.date}
                </button>
                <button className="border border-white text-black font-bold bg-customWhite/30 rounded-full px-4 py-2 text-xs">
                  {logicTime(dataFestival.time)} hrs
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
                    className={`object-cover rounded-full ${icon === "/share.png" ? "bg-[#CE9DF9] p-3 cursor-pointer" : ""
                      }`}
                    onClick={icon === "/share.png" ? handleShareClick : undefined}
                  />
                </div>
              ))}
            </div>
            <div className="flex flex-col sm:flex-row justify-center gap-3 mt-5">
              <Button
                href={dataFestival.url}
                variant="primary"
                text="Comprar entradas"
                target="_BLANK"
                className="text-[15px] w-full"
              />
              <Button
                href={"/search"}
                text="Crea tu experiencia"
                className="bg-primaryHover text-[15px] w-full rounded-md"
              />
            </div>
          </main>
        </>
      ) : null
      }
    </Container >
  );
}
