"use client";
import { FestDataContext, FestivalData } from "@/interfaces/festivals";
import { createContext, ReactNode, useState } from "react";

export const festivalIdContext = createContext<FestDataContext | null>(null);

export const FestivalProvider = ({ children }: { children: ReactNode }) => {
  const [festivalData, setFestivalData] = useState<FestivalData>({
    festivalId: "",
    chatUserId: ""
  });

  // Función para actualizar el ID del festival
  const updateFestId = (festId: string) => {
    setFestivalData(prev => ({ ...prev, festivalId: festId }));
  };

  // Función para actualizar el ID del usuario del chat
  const updateUserId = (userId: string) => {
    setFestivalData(prev => ({ ...prev, chatUserId: userId }));
  };

  return (
    <festivalIdContext.Provider value={{ festivalData, updateFestId, updateUserId }}>
      {children}
    </festivalIdContext.Provider>
  );
};