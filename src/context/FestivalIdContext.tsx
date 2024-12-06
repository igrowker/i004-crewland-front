"use client";
import { FestDataContext, FestivalData } from "@/interfaces/festivals";
import { createContext, ReactNode, useState } from "react";

export const festivalIdContext = createContext<FestDataContext | null>(null);

export const FestivalProvider = ({ children }: { children: ReactNode }) => {
  const [festivalData, setFestivalData] = useState<FestivalData>({
    festivalId: "2eb48296-17b8-4058-9ab6-2f2dd64af42c",
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

// // Custom hook para usar el contexto fácilmente
// export const useFestivalContext = () => {
//   const context = useContext(festivalIdContext);
//   if (!context) {
//     throw new Error("useFestivalContext debe ser usado dentro de un FestivalProvider");
//   }
//   return context;
// };