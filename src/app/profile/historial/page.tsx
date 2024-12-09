'use client'
import { useContext, useEffect } from 'react'
import { ProfileContext } from '@/context/ProfileContext'
import { getSession } from '@/lib'
import { getAllPublications } from '@/services/publications'
import { getFestivalById } from '@/services/festivalById'
import Container from '@/components/elements/Container/Container'
import NavTitle from '@/components/elements/headers/NavTitle'
import GroupSection from '@/components/elements/Profile/GroupSection'

export default function Historial() {
    const profileContext = useContext(ProfileContext)

    useEffect(() => {
        if (profileContext) {
            const fetchData = async () => {
                const { id, token } = await getSession()

                const publicationsResponse = await getAllPublications(token)
                const allPublications = publicationsResponse.data.data

                const filteredPublications = allPublications.filter((publication: any) => publication.userId === id)
                //console.log(`filteredPublications: ${JSON.stringify(filteredPublications, null, 2)}`)
                const festivalPromises = filteredPublications.map(async (publication: any) => {
                    if (publication.festivalId) {
                        try {
                            const festivalResponse = await getFestivalById(token, publication.festivalId)
                            return { festivalId: publication.festivalId, festival: festivalResponse.data.data }
                        } catch (error) {
                            console.error(`Error fetching festival for festivalId ${publication.festivalId}:`, error)
                            return null
                        }
                    }
                    return null
                })

                const festivalData = await Promise.all(festivalPromises)
                const festivalMap = festivalData.reduce((acc: any, item: any) => {
                    if (item && item.festivalId) {
                        acc[item.festivalId] = item.festival
                    }
                    console.log(`festivalid: ${item.festivalId}}`)
                    return acc
                }, {})

                profileContext.setDataProfile({
                    ...profileContext.dataProfile,
                    publications: filteredPublications,
                    festivals: festivalMap,
                })
                console.log(filteredPublications)

            }

            fetchData()
        }
    }, [])



    if (!profileContext) {
        return null
    }

    return (
        <Container className='flex flex-col px-4 gap-6'>
            <article className='flex flex-col w-full min-h-screen bg-background'>
                <NavTitle link='profile' title='Historial' className='mt-4'/>
                <div className='flex flex-col justify-center mt-3 gap-6'>
                    <GroupSection
                        showAddButton={false}
                    />
                </div>
            </article>
        </Container>
    )
}
