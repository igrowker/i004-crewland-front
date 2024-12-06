'use client'
import Container from '@/components/elements/Container/Container'
import '@/components/elements/calendar/Calendar.css'
import NavTitle from '@/components/elements/headers/NavTitle'
import GroupSection from '@/components/elements/Profile/GroupSection'
import { groups, chats } from '@/json/historial'

export default function Historial() {

    return (
        <Container className='flex flex-col px-4 gap-6'>
            <article className='flex flex-col w-full min-h-screen bg-background'>
                <NavTitle link='profile' title='Historial' />
                <div className='flex flex-col justify-center mt-3 gap-6'>
                    {groups.map((group) => (
                        <GroupSection
                            key={group.id}
                            groupName={group.name}
                            status={group.status}
                            chats={chats}
                            chatsLength={chats.length}
                        />
                    ))}
                </div>
            </article>
        </Container>
    )
}


