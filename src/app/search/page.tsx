import PostCard from "@/components/elements/postCard/PostCard";
import Container from "@/components/elements/Container/Container";
import Title from "@/components/elements/Titles/Title";
import { dataPost } from "@/json/post";
import { Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import InputSearch from "@/components/elements/Inputs/InputSearch";

export default async function Search() {
  return (
    <Container>
      <article className="flex flex-col w-full m-4">
        <section className="flex justify-start items-center pb-4 gap-5">
          <Link href="/festivals" aria-label="Volver a la interface de festivales">
            <Image src="/arrowLeft.svg" alt="Descripción de la imagen" width={25} height={25} />
          </Link>
          <Title
            size="small"
            text="Crea tu experiencia"
            className="font-medium text-xl font-title"
          />
        </section>
        <section className="flex flex-col items-start justify-center gap-4">
          <InputSearch />
          <div className="flex gap-3 flex-wrap">
            <span className="px-2 py-1 outline outline-1 outline-white rounded-full">
              Lolapalloza2025
            </span>
            <span className="px-2 py-1 outline outline-1 outline-white rounded-full">
              + 100 Bandas
            </span>
          </div>
        </section>
        {dataPost.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </article>
      <Link
        href='/search/new-post'
        className="bg-primaryHover fixed bottom-28 right-4 rounded-full p-3"
        aria-label="Crear una nueva publicacion"
      >
        <Plus size={30} color="#ffffff" strokeWidth={2} />
      </Link>
    </Container>
  )
}
