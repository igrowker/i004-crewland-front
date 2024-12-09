import React, { useContext } from 'react'
import { ProfileContext } from '@/context/ProfileContext'
import UserChatItem from '../Chat/UserChatCard/UserChatItem'
import HistorialHeader from '../headers/HistorialHeader'
import { usePathname } from 'next/navigation'
import { chats } from '@/json/historial'
import Link from 'next/link'
interface GroupSectionProps {
    showAddButton?: boolean; // add this line

    onDelete?: (index: number) => void
}

const GroupSection: React.FC<GroupSectionProps> = ({ onDelete, showAddButton }) => {
    const pathname = usePathname()
    const { dataProfile } = useContext(ProfileContext) ?? {}
    const { publications, festivals } = dataProfile || {}
    const userPhotos = [
        '/users/01.png',
        '/users/02.png',
        '/users/03.png',
        '/users/04.png',
        '/users/05.png',
        '/users/06.png',
        '/users/07.png',
        '/users/08.png',
        '/users/09.png',
        '/users/10.png'
    ]
    const getRandomPhoto = () => {
        const randomIndex = Math.floor(Math.random() * userPhotos.length)
        return userPhotos[randomIndex]
    }

    return (
        <section className='flex flex-col w-full border-b-[1px] border-gray-200 gap-2 pb-4'>
            {publications && festivals && publications.length > 0 && publications.map((publication, index) => {
                const festival = festivals[publication.festivalId] // Obtener el festival relacionado con la publicación

                return (
                    <div key={index}>
                        <HistorialHeader
                            festivalName={festival?.name || ''}
                            date={festival?.date || ''}
                            place={festival?.location || ''}
                            isActive={publication?.isActive || false}
                            typeService={publication?.type}
                            chatsLength={chats?.length || 0}
                            showAddButton={showAddButton || false}
                        />

                        <div className='flex flex-col w-full'>
                            {publication.participants?.map((participant: any, index: number) => {
                                const participantAvatar = getRandomPhoto()

                                return (
                                    <UserChatItem
                                        key={index}
                                        avatar={participantAvatar}
                                        username={participant}
                                        onDelete={onDelete && (() => onDelete(index))}
                                    />
                                )
                            })}
                        </div>
                        {pathname === '/profile/currentCrews' && (
                             <div className='flex flex-row items-center gap-1'>
                             <Link
                                 href="/chat"
                                 className='w-full my-3 p-2 rounded-lg outline outline-1 text-customWhite outline-customWhite text-[14px] text-center flex justify-center items-center'>
                                 Ir al Chat
                             </Link>
                         </div>
                        )}
                    </div>
                )
            })}
        </section>
    )
}

export default GroupSection
