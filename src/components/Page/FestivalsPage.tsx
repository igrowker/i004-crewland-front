"use client";
import Container from "@/components/elements/Container/Container";
import Image from "next/image";
import Title from "@/components/elements/Titles/Title";
import { useEffect, useState } from "react";
import { images } from "@/json/festivals";
import FestivalsHeader from "@/components/elements/headers/FestivalsHeader";
import AllFestivalst from "@/components/elements/Festivals/AllFestivalst";

export default function FestivalsPage({
  name,
  token,
}: {
  name: string;
  token: string;
}) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesLength = images.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % imagesLength);
    }, 4000);

    return () => clearInterval(interval);
  }, [imagesLength]);

  return (
    <Container>
      <FestivalsHeader />
      <main className="pt-[50px] sm:pt-[70px] lg:pt-[80px] px-3 ">
        <div className="shadow-md rounded-lg pt-6 px-4 mb-6">
          <Title
            text={`Bienvenido, ${name}`}
            size="medium"
            align="left"
            className="mt-4"
          />
          <p className="leading-relaxed pt-2">
            Estamos súper contentos de tenerte con nosotros. Aquí podrás
            encontrar compañeros para compartir transporte, alojamiento y hacer
            que tu próxima experiencia sea aún más divertida. ¡Comencemos a
            planear tu aventura!
          </p>
        </div>

        <div className="relative w-full overflow-hidden">
          <div
            className="flex transition-transform duration-700"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <div key={index} className="flex-shrink-0 w-full">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={800}
                  height={600}
                  sizes="100vw"
                  className="w-full h-auto"
                  priority={index === 0}
                />
              </div>
            ))}
          </div>

          <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-3 h-3 rounded-full border border-black ${
                  currentIndex === index ? "bg-[#9747FF]" : "bg-white"
                }`}
                onClick={() => setCurrentIndex(index)}
                aria-label={`Ir a la imagen ${index + 1}`}
              ></button>
            ))}
          </div>
        </div>
        <AllFestivalst token={token} />
      </main>
    </Container>
  );
}
