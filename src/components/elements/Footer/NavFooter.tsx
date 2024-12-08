"use client";
import Link from "next/link";
import { Search, Home, Users } from "lucide-react";
import { usePathname } from "next/navigation";
import { useBurguerButton } from "@/hooks/useBurgerBotton";
import { useContext } from "react";
import { festivalIdContext } from "@/context/FestivalIdContext";
// import { useEffect, useState } from "react";

export function NavFooter() {
  const contexto = useContext(festivalIdContext)
  const [state] = useBurguerButton();
  const pathName = usePathname().split("/")[1];
  const forbiddenPaths = ["", "auth", "home", "chat"];
  // const [isFixed, setIsFixed] = useState(true);

  // useEffect(() => {
  //   let lastScrollTop = 0;

  //   const handleScroll = () => {
  //     const scrollTop =
  //       window.pageYOffset || document.documentElement.scrollTop;
  //     if (scrollTop > lastScrollTop) {
  //       setIsFixed(false);
  //     } else {
  //       setIsFixed(true);
  //     }
  //     lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
  //   };

  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  if (forbiddenPaths.includes(pathName)) return null;

  const links = [
    { href: "/search", label: "Search", icon: Search },
    { href: "/festivals", label: "", icon: Home },
    { href: "/chat", label: "Crew", icon: Users },
  ];

  return (
    <nav
      className="fixed h-20 bottom-0 left-0 right-0 bg-gray-900/60 backdrop-blur-sm text-white flex justify-around items-center"
      style={{
        // transform: `translateY(${
        //   state.isToggled ? "150%" : isFixed ? "0" : "100%"
        // })`,
        transition: `transform 0.3s ${state.isToggled ? "" : ".5s"}`,
      }}
    >
      {links.map(({ href, label, icon: Icon }, index) => (
        <Link
          key={index}
          href={href}
          onClick={() => {
            if (label === "Search") {
              if (contexto) {
                contexto.updateFestId("")
              }
            }
          }}
          className="flex flex-col items-center justify-center w-full h-full"
        >
          <div
            className={
              index === 1
                ? "flex justify-center items-center text-black rounded-full size-14 p-2 bg-primary "
                : ""
            }
          >
            <Icon size={26} />
          </div>
          <span className="text-xs py-1">{label}</span>
        </Link>
      ))}
    </nav>
  );
}
