'use client'

import { useState, useEffect, useMemo } from 'react'
import { getSession } from '@/lib'
import { getAllReservations } from '@/services/reservations/reservations'
import { getPublicationById } from '@/services/publicationById'
import { getFestivalById } from '@/services/festivalById'

export default function ReservationsPage() {
    const [reservations, setReservations] = useState<any>(null)
    const [userData, setUserData] = useState<{ id: string; token: string; name: string }>({ id: '', token: '', name: '' })
    const [posts, setPosts] = useState<any>({})
    const [festivals, setFestivals] = useState<any>({})

    useEffect(() => {
        const fetchData = async () => {
            const { id, token, name } = await getSession()
            setUserData({ id, token, name })
            try {
                const response = await getAllReservations(token)
                const allReservations = response.data.data
                const testId = "9ed774b0-97cf-48c0-9dc6-08d91da03c8b"


                const filteredReservations = allReservations.filter(
                    (reservation: any) => Array.isArray(reservation.userIds) && reservation.userIds.includes(testId)
                );

                console.log(filteredReservations);


                // Resultado después de filtrar
                console.log('Filtered Reservations:', filteredReservations)
                setReservations(filteredReservations)

                // POST
                const hardcodedPostId = '60fac0ef-0d49-45bc-9462-f4b709906dcd'
                const postResponse = await getPublicationById(token, hardcodedPostId)

                const postData = postResponse.data.data
                const postMap = filteredReservations.reduce((acc: any, reservation: any) => {
                    acc[reservation.postId] = postData
                    return acc
                }, {})
                setPosts(postMap)

                // FESTIVAL
                const festivalPromises = filteredReservations.map(async (reservation: any) => {
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
    }, [])


    const memoizedPosts = useMemo(() => posts, [posts])

    const memoizedFestivals = useMemo(() => festivals, [festivals])

    return (
        <div>
            <h1>Welcome, {userData.name}!</h1>
            <h1>ID: {userData.id}</h1>
            <h2>Your Reservations:</h2>
            <ul>
                {reservations?.length > 0 ? (
                    reservations.map((reservation: any) => {
                        const post = memoizedPosts[reservation.postId]
                        const festival = memoizedFestivals[post?.festivalId]
                        console.log(reservation)
                        return (
                            <li key={reservation.id}>
                                <h3 className='text-xl'>- RESERVATION {reservation.type} </h3>
                                {post ? (
                                    <div>
                                        <h4>Post Title: {post.id}</h4>
                                        <p><strong>Active:</strong> {post.isActive ? 'Yes' : 'No'}</p>
                                        <p><strong>Festival Name:</strong> {festival ? festival.name : 'Festival not found'}</p>
                                        <p><strong>Creation Date:</strong> {post.creationDate}</p>
                                        <p><strong>Users:</strong></p>
                                        <ul>
                                            {reservation.userIds.map((userId, index) => (
                                                <li key={index}>* {userId}</li>
                                            ))}
                                        </ul>
                                    </div>
                                ) : (
                                    <p>Post not found.</p>
                                )}
                            </li>
                        )
                    })
                ) : (
                    <li>No reservations available.</li>
                )}
            </ul>
        </div>
    )
}
