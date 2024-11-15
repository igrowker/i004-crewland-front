import Button from "@/components/elements/Buttons/Button";
import TagsList from "@/components/elements/Tags/ListTags";
import Title from "@/components/elements/Titles/Title";
import Image from "next/image";

export default function Home() {
  //comentario
  // Ejemplo de tags:
  const tags = [
    'Rock & Alternativo',
    'Hip-Hop & Urbano',
    'Hip-Hop',
    'Folk & Country',
    'Pop & Mainstream',
    'Metal & Hardcore',
    'Clásica & Instrumental',
    'Jazz, Blues & Soul',
    'Reggae & Tropical',
    'Latino & Regional',
    'Electrónica & Dance',
  ];

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center text-customWhite justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <div className="flex justify-center items-center">
          <Title text="CREWLAND" size="medium" weight="bold"/>
          <Image
          className=""
          src="/crewland_logo.svg"
          alt="Crewland logo"
          width={24}
          height={12}
          priority
        />
        </div>
        <ol className="list-inside list-decimal text-sm text-center sm:text-left">
          <Title text="Vamos a verificar tu número telefónico." size="large" weight="black"/>
          <p className="pt-4">Cuerpo de formularios, etc.</p>
        </ol>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          
          <Button text="Register" variant="primary"/>
          <Button text="Register" variant="ghost"/>
        </div>
        <TagsList tags={tags} />
      </main>
    </div>
  );
}
