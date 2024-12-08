"use client"
import { ProfileContextInterface, ProfileInterface } from "@/interfaces/user";
import { createContext, useState } from "react";

//CONTEXTO, el cual son la estructura en la cual los datos van a navegar.
export const ProfileContext = createContext<ProfileContextInterface | null>(null);

//PROOVEDOR, en donde se establecen los estados globales para manejarlos en los componentes hijos(children)
export const ProfileProvider = ({ children }: { children: React.ReactNode }) => {
  const [dataProfile, setDataProfile] = useState<ProfileInterface>({
    groupName: "",
    isActive: "",
    service: "otro",
    publications: [],
    festivals: {},
    festivalName: "",
    date: "",
    place: "",



  });

  return (
    <ProfileContext.Provider value={{ dataProfile, setDataProfile }}>
      {children}
    </ProfileContext.Provider>
  )
}