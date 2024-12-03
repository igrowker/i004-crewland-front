import PostCard from "@/components/elements/postCard/PostCard";
import Container from "@/components/elements/Container/Container";
import { dataPost, festivals } from "@/json/post";
import { Plus } from "lucide-react";
import Link from "next/link";
import NavTitle from "@/components/elements/headers/NavTitle";
import InputSearch from "@/components/elements/Inputs/InputSearch";

export default async function Search() {
  return (
    <Container className="p-4">
      <article className="flex flex-col w-full">
        <NavTitle link="festivals" title="Crea tu experiencia" />
        <InputSearch />
        <div className="flex gap-2 flex-wrap mt-4">
          {festivals.map(fest => (
            <span key={fest} className="outline outline-1 px-2 py-1 rounded-full cursor-pointer">
              {fest}
            </span>
          ))}
        </div>
        {dataPost.map((post) => (
          <PostCard key={post.id} {...post} />
        ))}
      </article>
      <Link
        href='/search/new-post'
        className="bg-primaryHover fixed bottom-24 right-4 rounded-full p-3 shadow-xl"
        aria-label="Crear una nueva publicacion"
      >
        <Plus size={30} color="#ffffff" strokeWidth={2} />
      </Link>
    </Container>
  )
}
