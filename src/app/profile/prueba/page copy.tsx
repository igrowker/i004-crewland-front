'use client'

import { useState, useEffect, useMemo } from 'react'
import { getSession } from '@/lib'
import { getReservationsByUserId } from '@/services/reservations/reservationsByUserId'
import { getPublicationById } from '@/services/publicationById'
import { getFestivalById } from '@/services/festivalById'

export default function ReservationsPage() {
    const [reservations, setReservations] = useState<any>(null)
    const [userData, setUserData] = useState<{ id: string; token: string }>({ id: '', token: '' })
    const [posts, setPosts] = useState<any>({})
    const [festivals, setFestivals] = useState<any>({}) // Nuevo estado para los festivales

    useEffect(() => {
        const fetchData = async () => {
            const { id, token } = await getSession()
            setUserData({ id, token })
            try {
                const response = await getReservationsByUserId(token, id)
                const reservationsData = response.data.data
                setReservations(reservationsData)

                //POST
                const hardcodedPostId = '60fac0ef-0d49-45bc-9462-f4b709906dcd'
                const postResponse = await getPublicationById(token, hardcodedPostId)

                const postData = postResponse.data.data
                const postMap = reservationsData.reduce((acc: any, reservation: any) => {
                    acc[reservation.postId] = postData
                    return acc
                }, {})
                setPosts(postMap)

                //FESTIVAL

                const festivalPromises = reservationsData.map(async (reservation: any) => {
                    const post = postMap[reservation.postId]
                    if (post) {
                        const festivalResponse = await getFestivalById(token, post.festivalId)
                        return { festivalId: post.festivalId, festival: festivalResponse.data.data }
                    }
                })

                const festivalData = await Promise.all(festivalPromises)
                const festival = festivalData.reduce((acc: any, { festivalId, festival }: any) => {
                    if (festivalId) {
                        acc[festivalId] = festival
                    }
                    return acc
                }, {})
                setFestivals(festival)
            } catch (error) {
                console.error('Error fetching reservations:', error)
            }
        }

        fetchData()
    }, [])  // Solo se ejecuta una vez cuando el componente se monta


    // Memorizar el mapeo de posts para evitar cálculos innecesarios en cada render
    const memoizedPosts = useMemo(() => posts, [posts])

    // Memorizar el mapeo de festivales para evitar cálculos innecesarios en cada render
    const memoizedFestivals = useMemo(() => festivals, [festivals])

    return (
        <div>
            <h1>Welcome, {userData.id}!</h1>
            <h2>Your Reservations:</h2>
            <ul>
                {reservations?.length > 0 ? (
                    reservations.map((reservation: any) => {
                        const post = memoizedPosts[reservation.postId] // Acceder al post por postId
                        const festival = memoizedFestivals[post?.festivalId]
                        console.log(reservation.userIds)
                        return (
                            <li key={reservation.id}>
                                <h3 className='text-2xl'>- RESERVATION {reservation.type} </h3>
                                {post ? (
                                    <div>
                                        <h4>Post Title: {post.id}</h4>
                                        {/* <p><strong>Max Participants:</strong> {post.maxParticipants}</p> */}
                                        {/* <p><strong>Festival ID:</strong> {post.festivalId}</p> */}
                                        <p>Hola{reservation?.userIds}</p>
                                        <p><strong>Active:</strong> {post.isActive ? 'Yes' : 'No'}</p>
                                        <p><strong>Festival Name:</strong> {festival ? festival.name : 'Festival not found'}</p>

                                    </div>
                                ) : (
                                    <p>Post not found.</p>
                                )}
                            </li>
                        )
                    })
                ) : (
                    <li>No reservations available.</li> // Mensaje en caso de no haber reservas
                )}
            </ul>
        </div>
    )
}
