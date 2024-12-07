"use client";
import { festivalsInterface } from "@/interfaces/festivals";
import { getFestivals } from "@/services/festivals";
import { logicTime } from "@/utils/calculateTime";
import { ArrowUpRight, Asterisk } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";

export default function AllFestivalst({ token }: { token: string }) {
  const [dataFestivals, setDataFestivals] = useState<festivalsInterface[]>([]);

  useEffect(() => {
    console.log("Antes peticion");
    getFestivals(token).then((data) => {
      console.log("Data", data);
      setDataFestivals(data);
    });
  }, [token]);

  return (
    <article className="mt-10">
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-6 mb-24">
        {dataFestivals.length === 0 ? (
          <p>No tienes festivales</p> // Mensaje de carga
        ) : (
          dataFestivals.map((festival) => (
            <section
              id={`festival-${festival.id}`}
              key={festival.id}
              className="relative shadow-lg text-black rounded-xl"
            >
              <div className="realtive w-full top-40">
                <Image
                  src={festival.imageUrls[0]}
                  alt={festival.name}
                  width={300}
                  height={200}
                  className="w-full h-32 object-cover brightness-75 rounded-tl-xl rounded-tr-xl"
                />
                <Link
                  href={`/festivals/${festival.id}`}
                  className="absolute top-2 right-2 bg-[#CE9DF9] rounded-full p-2 shadow-md hover:shadow-lg transition-all"
                  aria-label={`Más detalles sobre ${festival.name}`}
                >
                  <ArrowUpRight className="text-black w-5 h-5" />
                </Link>
              </div>
              <div
                className="p-4 flex flex-col justify-between relative rounded-bl-xl rounded-br-xl"
                style={{
                  backgroundImage: `url('/bg-home.png')`,
                  backgroundSize: "115% 100%",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              >
                <Asterisk
                  className="absolute top-8 right-2 text-[#0d0b0f] w-5 h-5"
                  aria-label="Campo obligatorio"
                />

                <h3 className="bottom-2 left-2 text-lg font-bold pt-4">
                  {festival.name}
                </h3>

                <p className="text-sm my-4 text-black font-[450]">
                  {festival.description}
                </p>

                <div className="flex gap-1 mt-2">
                  <button className="border border-black rounded-md px-4 py-1 text-sm font-[500]">
                    {festival.date}
                  </button>
                  <button className="border border-black rounded-md px-4 py-1 text-sm font-[500]">
                    {logicTime(festival.time)} hrs
                  </button>
                </div>
              </div>
            </section>
          ))
        )}
      </section>
    </article>
  );
}
