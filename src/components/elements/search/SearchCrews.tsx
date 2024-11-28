"use client"
import Image from "next/image";
import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { crews } from "@/json/post";

export default function SearchCrews() {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const Icon = openModal ? ChevronUp : ChevronDown;

  // Arreglo con las rutas de las imágenes
  const images = [
  {
    img: "/users/01.png",
    style: "left-0"
   }, {
    img: "/users/02.png",
    style: "left-8"
   },
  {
     img: "/users/03.png",
    style: "left-16"
  }
];

  return (
    <article className="flex flex-col gap-2 relative">
      <label htmlFor="crews">Etiquetar Personas</label>
      <div className="border-b border-customWhite flex relative pb-12 pt-2 rea">
        {images.map((img, index) => (
          <Image
            key={index}
            src={img.img}
            alt={`persona${index + 1}`}
            width={40}
            height={40}
            className={`absolute ${img.style}`}
          />
        ))}
      </div>
      <Icon
        onClick={() => setOpenModal(!openModal)}
        className="cursor-pointer text-customWhite absolute top-14 right-0"
      />
      {openModal &&
        <section className="flex flex-col bg-background rounded-lg w-full outline outline-1 outline-[#B7B7B8] z-50 p-4 top-[100px] pt-8">
          <input
            placeholder="@nombredeusuario"
            className="bg-transparent outline outline-1 outline-customWhite border-none rounded-full p-1 pl-3 py-2 text-sm"
          />
          <div className="grid gap-3">
            {crews.map(crew => (
              <section key={crew.id} className="first:border-none border-t flex items-center justify-between py-2 pt-4">
                <div className="flex items-center gap-3">
                  <Image
                    src={crew.img}
                    alt={`persona${crew.id}`}
                    width={40}
                    height={40}
                  />
                  <p>{crew.name}</p>
                </div>
                <label htmlFor={`checkCrew${crew.id}`}>
                  <input type="checkbox" id={`checkCrew${crew.id}`}
                    className="peer hidden"
                  />
                  <span
                    className="cursor-pointer h-5 w-5 flex rounded-full border border-slate-600 dark:bg-transparent peer-checked:bg-primary peer-checked:border-2 transition"
                  />
                </label>
              </section>
            ))}
          </div>
        </section>
      }
    </article>
  );
}
