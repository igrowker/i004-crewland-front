'use client'

import { useState, useEffect, useMemo } from 'react'
import { getSession } from '@/lib'
import { getAllPublications } from '@/services/publications'  
import { getFestivalById } from '@/services/festivalById'

export default function ReservationsPage() {
    const [publications, setPublications] = useState<any>(null)
    const [userData, setUserData] = useState<{ id: string; token: string }>({ id: '', token: '' })
    const [festivals, setFestivals] = useState<any>({})

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { id, token } = await getSession()
                setUserData({ id, token })

                // Obtener todas las publicaciones
                const response = await getAllPublications(token)
                const publicationsData = response.data.data

                // Filtrar publicaciones que contienen al usuario logueado
                const userPublications = publicationsData.filter((publication: any) => 
                    publication.userIds.includes(id)
                )
                setPublications(userPublications)

                // Obtener los festivales relacionados con las publicaciones
                const festivalIdharcoded = '299b9453-3a14-47e8-b2cf-673210fa54ee'
                const festivalPromises = userPublications.map(async (publication: any) => {
                    if (publication.postId) {
                        const festivalResponse = await getFestivalById(token, festivalIdharcoded)
                        return { postId: publication.postId, festival: festivalResponse.data.data }
                    }
                })

                const festivalData = await Promise.all(festivalPromises)
                const festivalMap = festivalData.reduce((acc: any, { postId, festival }: any) => {
                    if (postId) {
                        acc[postId] = festival
                    }
                    return acc
                }, {})
                setFestivals(festivalMap)

            } catch (error) {
                console.error('Error fetching data:', error)
            }
        }

        fetchData()
    }, [])

    const mFestivals = useMemo(() => festivals, [festivals])

    return (
        <div>
            <ul>
                {publications?.length > 0 ? (
                    publications.map((publication: any) => {
                        const festival = mFestivals[publication.postId]
                        return (
                            <li key={publication.id}>
                                <h3 className='text-2xl'>- PUBLICATION {publication.type}</h3>
                                <div>
                                    <p><strong>Status:</strong> {publication.status}</p>
                                    <p><strong>Created At:</strong> {new Date(publication.createdAt).toLocaleString()}</p>
                                    <p><strong>Festival Name:</strong> {festival ? festival.name : 'Festival not found'}</p>
                                    <p><strong>Festival Place:</strong> {festival ? festival.location : 'Festival not found'}</p>
                                    <p><strong>Festival Date:</strong> {festival ? festival.date : 'Festival not found'}</p>
                                    <p><strong>User IDs:</strong></p>
                                    <ul>
                                        {publication.userIds?.length > 0 ? (
                                            publication.userIds.map((userId: string) => (
                                                <li key={userId}>{userId}</li>
                                            ))
                                        ) : (
                                            <li>No users joined yet</li>
                                        )}
                                    </ul>
                                </div>
                            </li>
                        )
                    })
                ) : (
                    <li>No publications found for the logged-in user.</li>
                )}
            </ul>
        </div>
    )
}
