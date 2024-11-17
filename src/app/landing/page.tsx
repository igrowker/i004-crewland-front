"use client";

import Header from "../../components/Header_landingPage/header";
import { useState } from "react";

const pages = [
  {
    id: 0,
    background: "/landing1.png", // Ruta de la imagen de fondo (asegúrate de que las imágenes estén en `public/images`)
    title: "Crewland",
    text: "Bienvenidos a",
  },
  {
    id: 1,
    background: "/images/page2.jpg",
    title: "Bienvenido a Página 2",
    text: "Aquí tienes información adicional.",
  },
  {
    id: 2,
    background: "/images/page3.jpg",
    title: "Bienvenido a Página 3",
    text: "Gracias por visitarnos.",
  },
];

export default function LandingPage() {
  const [activePage, setActivePage] = useState(0);

  // Detectar gestos de deslizamiento
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e: TouchEvent) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e: TouchEvent) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
  };

  const handleSwipe = () => {
    const swipeDistance = touchEndX - touchStartX;

    // Detectar deslizamiento hacia la izquierda
    if (swipeDistance < -50) {
      setActivePage((prev) => (prev < pages.length - 1 ? prev + 1 : prev));
    }
    // Detectar deslizamiento hacia la derecha
    if (swipeDistance > 50) {
      setActivePage((prev) => (prev > 0 ? prev - 1 : prev));
    }
  };

  return (
    <div
      className="absolute inset-0 bg-cover bg-center "
      style={{
        backgroundImage: `url(${pages[activePage].background})`,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      {/* Logo */}
      <Header />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <p className="mt-4 text-xl z-10">{pages[activePage].text}</p>
        {/* <div className="flex items-center">
          <h1 className="text-4xl font-bold z-10">{pages[activePage].title}</h1>
          <img className="z-10" src="/logo_no-background.png" alt="" />
        </div> */}
        <img className="z-10 w-3/4 mb-6" src="/crewland.png" alt="" />
        <p className="z-10">!Tu aventura empieza acá!</p>
        <p className="z-10">Te ayudamos a disfrutar de una</p>
        <p className="z-10">experiencia unica</p>
      </div>

      {/* Indicadores (puntos) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        {pages.map((page) => (
          <div
            key={page.id}
            className={`w-3 h-3 mx-2 rounded-full ${
              activePage === page.id ? "bg-white" : "bg-gray-400"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
