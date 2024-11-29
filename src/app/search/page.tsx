import PostCard from "@/components/elements/postCard/PostCard";
import Container from "@/components/elements/Container/Container";
import { dataPost } from "@/json/post";
import { ListFilter, Plus } from "lucide-react";
import Link from "next/link";
import NavTitle from "@/components/elements/headers/NavTitle";

export default async function Search() {
  return (
    <Container>
      <article className="flex flex-col w-full">
        <NavTitle link="festivals" title="Crea tu experiencia"/>
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
