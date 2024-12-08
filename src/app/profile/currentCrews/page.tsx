'use client'
import { useContext, useEffect } from 'react'
import { ProfileContext } from '@/context/ProfileContext'
import { getSession } from '@/lib'
import { getAllPublications } from '@/services/publications' 
import { getFestivalById } from '@/services/festivalById'
import Container from '@/components/elements/Container/Container'
import NavTitle from '@/components/elements/headers/NavTitle'
import GroupSection from '@/components/elements/Profile/GroupSection'

export default function currentCrews() {
  const profileContext = useContext(ProfileContext);

  useEffect(() => {
    if (profileContext) {
      const fetchData = async () => {
        const { id, token } = await getSession();

        const publicationsResponse = await getAllPublications(token);
        const allPublications = publicationsResponse.data.data;

        const filteredPublications = allPublications.filter((publication: any) => publication.userId === id);

        const festivalPromises = filteredPublications.map(async (publication: any) => {
          if (publication.postId) {
            const festivalResponse = await getFestivalById(token, publication.postId);
            return { postId: publication.postId, festival: festivalResponse.data.data };
          }
        });

        const festivalData = await Promise.all(festivalPromises);
        const festivalMap = festivalData.reduce((acc: any, { postId, festival }: any) => {
          if (postId) {
            acc[postId] = festival;
          }
          return acc;
        }, {});

        profileContext.setDataProfile({
          ...profileContext.dataProfile,
          publications: filteredPublications, 
          festivals: festivalMap,  
        });
      };

      fetchData();
    }
  }, [profileContext]);

  const handleDelete = (chatIndex: number) => {
    console.log(`Eliminar chat en índice: ${chatIndex}`)
  }

  if (!profileContext) {
    return null;
  }

  return (
    <Container className='flex flex-col px-4 gap-6'>
      <article className='flex flex-col w-full min-h-screen bg-background'>
        <NavTitle link='profile' title='Crews Actuales' />
        <div className='flex flex-col justify-center mt-3 gap-6'>
          <GroupSection
            onDelete={handleDelete}
          />
        </div>
      </article>
    </Container>
  )
}
