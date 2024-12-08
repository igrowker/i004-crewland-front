"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { images } from "@/json/post";
import { UserInterface } from "@/interfaces/publication";
import "../calendar/Calendar.css";

type searchCrewsType = {
  participants: (participant: string[]) => void
  dataUsers: UserInterface[]
}

export default function SearchCrews({ participants, dataUsers }: searchCrewsType) {
  const [users, setUsers] = useState<string[]>([]);
  const [openModal, setOpenModal] = useState<boolean>(false);
  const Icon = openModal ? ChevronUp : ChevronDown;

  const handleChangeUsers = (
    e: React.ChangeEvent<HTMLInputElement>,
    userName: string
  ) => {
    if (e.target.checked) {
      // Agregar usuario si se selecciona
      setUsers((prevUsers) => [...prevUsers, userName]);
    } else {
      // Eliminar usuario si se desmarca
      setUsers((prevUsers) => prevUsers.filter((user) => user !== userName));
    }
  };

  useEffect(() => {
    participants(users);
  }, [users, participants]);

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
      {openModal && (
        <section className="flex flex-col bg-background rounded-lg w-full outline outline-1 outline-[#B7B7B8] z-50 p-4 top-[100px] pt-8">
          <input
            placeholder="@nombredeusuario"
            className="bg-transparent outline outline-1 outline-customWhite border-none rounded-full p-1 pl-3 py-2 text-sm"
          />
          <div className="grid gap-3 max-h-64 overflow-hidden overflow-y-auto scrollbar-custom">
            {dataUsers.map((crew) => (
              <section
                key={crew.id}
                className="first:border-none border-t flex items-center justify-between py-2 pt-4"
              >
                <div className="flex items-center gap-3">
                  <Image
                    src={crew.imgUser || process.env.NEXT_PUBLIC_DEFAULT_IMG_USER_CLOUDINARY || ""}
                    alt={`user-${crew.id}`}
                    width={40}
                    height={40}
                  />
                  <p>{crew.name}</p>
                </div>
                <label htmlFor={`checkCrew${crew.id}`}>
                  <input
                    type="checkbox"
                    id={`checkCrew${crew.id}`}
                    className="peer hidden"
                    checked={users.includes(crew.name)}
                    onChange={(e) => handleChangeUsers(e, crew.name)}
                  />
                  <span className="cursor-pointer h-5 w-5 flex rounded-full border border-slate-600 dark:bg-transparent peer-checked:bg-primary peer-checked:border-2 transition" />
                </label>
              </section>
            ))}
          </div>
        </section>
      )}
    </article>
  );
}
