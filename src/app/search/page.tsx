"use server"
import PostCard from "@/components/search/PostCard";
import Container from "@/components/elements/Container/Container";
import Title from "@/components/elements/Titles/Title";
import { dataPost } from "@/json/post";
import { ListFilter, Plus } from "lucide-react";
import ButtonLink from "@/components/elements/Buttons/ButtonLink";
import Image from "next/image";

export default async function Search() {
  return (
    <Container>
      <article className="flex flex-col w-full max-w-[328px]">
        <section className="flex justify-start items-center pb-4 gap-5">
          <ButtonLink
            href={'/auth/login'}
            text={<Image src="/arrowLeft.svg" alt="Descripción de la imagen" width={25} height={25} />}
            details="Volver a interface Login"
          />
          <Title
            size="small"
            text="Crea tu experiencia"
            className="font-medium text-xl font-title"
          />
        </section>
        <section className="flex items-center justify-center gap-4">
          <ListFilter size={30} className="cursor-pointer" />
        </section>
        {dataPost.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </article>
      <ButtonLink
        href={'/search/new-post'}
        details="Crear una nueva publicacion"
        className="bg-primaryHover fixed bottom-20 right-4 rounded-full p-3"
        text={<Plus size={30} color="#ffffff" strokeWidth={2} />}
      />
    </Container>
  )
}
