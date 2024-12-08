"use server"
import Container from "@/components/elements/Container/Container";
import NavTitle from "@/components/elements/headers/NavTitle";
import { getPosts } from "@/services/posts";
import PostFilterers from "@/components/elements/search/PostFilterers";
import { getFestivals } from "@/services/festivals";
import CreateNewPost from "@/components/elements/search/CreateNewPost";
import { getSession } from "@/lib";

export default async function Search() {
  const session = await getSession();
  const { token } = session;

  const dataPublications = await getPosts(token)
  const dataFestivals = await getFestivals(token);

  return (
    <Container className="p-4">
      <article className="flex flex-col w-full">
        <NavTitle link="festivals" title="Crea tu experiencia" />
        <PostFilterers
          publications={dataPublications?.data}
          festivals={dataFestivals?.data}
        />
      </article>
      <CreateNewPost />
    </Container>
  )
}
