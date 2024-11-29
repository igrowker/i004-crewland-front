import Container from '@/components/elements/Container/Container'
import { chats } from '@/json/chatCrew'
import CrewChatCard from '@/components/elements/Chat/crew/CrewChatCard/page'
import NavTitle from '@/components/elements/headers/NavTitle'
import InputSearch from '@/components/elements/Inputs/InputSearch'

export default function ChatCrew() {
    return (
        <Container>
            <section className='flex flex-col w-full h-screen gap-20'>
                <NavTitle link="chat" title="Grupos Crew"/>
                <InputSearch/>
                <main className='flex flex-col w-full align-top gap-8'>
                    {chats.map(chat => (
                        <CrewChatCard key={chat.id} chat={chat} />
                    ))}
                </main>
            </section>
        </Container>
    )
}

