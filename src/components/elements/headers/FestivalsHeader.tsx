"use client";
import { Menu } from "lucide-react";
import Title from "@/components/elements/Titles/Title";
import Avatar from "../Avatar/UniqueAvatar/Avatar";
import { useBurguerButton } from "@/hooks/useBurgerBotton";
import Link from "next/link";

export default function FestivalsHeader() {
  const [state, setGlobalState] = useBurguerButton();

  const toggleSidebar = () => {
    setGlobalState({ isToggled: !state.isToggled });
  };
  return (
    <header className="absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-gradient-to-b from-black/70 to-transparent z-10">
      <button aria-label="Abrir menú" className="p-2" onClick={toggleSidebar}>
        <Menu className="text-white w-8 h-8" />
      </button>

      <div className="flex items-center">
        <Title
          text="CREWLAND"
          className="text-white text-[24px] sm:text-[35px] font-bold"
        />
      </div>
      <Link href={'/profile'}>
        <Avatar
          src="/users/profile.png"
          alt="Usuario"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full shadow-md overflow-hidden"
        />
      </Link>
    </header>
  );
}
