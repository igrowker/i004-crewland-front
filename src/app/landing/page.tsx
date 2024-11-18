"use client";

import Header from "../../components/Header_landingPage/header";
import { useState } from "react";

const pages = [
  {
    id: 0,
    background: "/landing1.png",
    // title: "Crewland",
    title: "Bienvenidos a",
    img: "/crewland.png",
    text: "!Tu aventura empieza acá! Te ayudamos a disfrutar de una experiencia inolvidable",
  },
  {
    id: 1,
    background: "/landing2.png",
    title: "Publica anuncios y cordina",
    text: "Crea un anuncio para buscar compañeros o responder a otros. Con la mensajeria de Crewland, es fácil coordinar el punto de encuentro y los detalles del viaje",
  },
  {
    id: 2,
    background: "/landing3.png",
    title: "Encuentra y conecta con Crews",
    text: "Encuentra a otros que van al mismo evento. !Puedes conseguir compañeros para el transporte, el alojamiento y hacer de la experiencia algo épico",
  },
];

export default function LandingPage() {
  const [activePage, setActivePage] = useState(0);

  // Detectar gestos de deslizamiento
  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (e) => {
    touchStartX = e.changedTouches[0].screenX;
  };

  const handleTouchEnd = (e) => {
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
      className="relative w-screen h-screen overflow-hidden inset-0 bg-cover bg-center"
      style={{
        backgroundImage: `url(${pages[activePage].background})`,
      }}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
    >
      {/* Fondo oscuro */}
      <div className="absolute inset-0 bg-black bg-opacity-20"></div>
      {/* Logo */}
      <Header />

      {/* Contenido principal */}
      <div className="flex flex-col items-center justify-center h-full text-center text-white">
        <h1 className="text-4xl font-bold z-10">{pages[activePage].title}</h1>
        {pages[activePage].img && (
          <img
            className="z-10 mt-4 px-4"
            src={pages[activePage].img}
            alt="Imagen adicional"
          />
        )}
        <p className="mt-4 text-xl z-10 text-center">
          {pages[activePage].text}
        </p>
      </div>

      {/* Indicadores (puntos) */}
      <div className="absolute bottom-8 left-0 right-0 flex justify-center">
        {pages.map((page) => (
          <div
            key={page.id}
            className={`w-3 h-3 mx-2 rounded-full ${
              activePage === page.id ? "bg-primary" : "bg-customWhite"
            }`}
          ></div>
        ))}
      </div>
    </div>
  );
}
