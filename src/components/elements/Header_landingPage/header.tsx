import Image from "next/image";

export default function Header() {
  return (
    <header className="flex flex-wrap items-center justify-start max-w-5xl p-4 mx-auto md:py-8 z-10">
      <Image
        src="/logo.png"
        alt="Logo de Crewland"
        width={150}
        height={50}
        priority
      />
    </header>
  );
}

