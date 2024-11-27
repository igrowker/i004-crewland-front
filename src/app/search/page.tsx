import PostCard from "@/components/elements/postCard/PostCard";
import Container from "@/components/elements/Container/Container";
import Title from "@/components/elements/Titles/Title";
import { dataPost } from "@/json/post";
import { ArrowLeft, ListFilter } from "lucide-react";
import Link from "next/link";

export default function page() {
  return (
    <Container>
      <article className="flex flex-col w-full max-w-[328px]">
        <section className="flex justify-start items-center pb-4 gap-5">
          <Link href={'/home'} aria-label="Volver a la página principal">
            <ArrowLeft className="text-customWhite cursor-pointer" />
          </Link>
          <Title
            size="small"
            text="Crea tu experiencia"
            className="font-medium text-xl font-title"
          />
        </section>
        <section className="flex items-center justify-center gap-4">
          <Link
            href={'/post'}
            className="text-xl leading-5 flex-1 p-4 flex items-center justify-center rounded-[20px] border border-1"
            aria-label="Crear un nuevo post"
          >
            Crear Publicación
          </Link>
          <ListFilter size={30} className="cursor-pointer" />
        </section>
        {dataPost.map((post) => (
          <PostCard key={post.id} {...post}/>
        ))}
      </article>
    </Container>
  )
}
