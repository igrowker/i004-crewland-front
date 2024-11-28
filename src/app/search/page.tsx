import PostCard from "@/components/elements/postCard/PostCard";
import Container from "@/components/elements/Container/Container";
import Title from "@/components/elements/Titles/Title";
import { dataPost } from "@/json/post";
import { ListFilter, Plus } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default async function Search() {
  return (
    <Container>
      <article className="flex flex-col w-full">
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
        <section className="flex items-center justify-center gap-4">
          <ListFilter size={30} className="cursor-pointer" />
        </section>
        {dataPost.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </article>
      <Link
        href='/search/new-post'
        className="bg-primaryHover fixed bottom-20 right-4 rounded-full p-3"
        aria-label="Crear una nueva publicacion"
      >
        <Plus size={30} color="#ffffff" strokeWidth={2} />
      </Link>
    </Container>
  )
}
