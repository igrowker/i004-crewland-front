"use server"
import Container from "@/components/elements/Container/Container";
import NavTitle from "@/components/elements/headers/NavTitle";
import { getPosts, getUsersForPublications } from "@/services/posts";
import PostFilterers from "@/components/elements/search/PostFilterers";
import { getFestivals } from "@/services/festivals";
import CreateNewPost from "@/components/elements/search/CreateNewPost";

export default async function Search() {
  const dataPublications = await getPosts()
  const dataFestivals = await getFestivals();
  const dataUsersForPublications = await getUsersForPublications();

  return (
    <Container className="p-4">
      <article className="flex flex-col w-full">
        <NavTitle link="festivals" title="Crea tu experiencia" />
        <PostFilterers 
          publications={dataPublications.data.data}
          festivals={dataFestivals.data.data}
          userByPublications={dataUsersForPublications.data}
        />
      </article>
      <CreateNewPost />
    </Container>
  )
}
