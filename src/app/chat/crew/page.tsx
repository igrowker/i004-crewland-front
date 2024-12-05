import Container from '@/components/elements/Container/Container'
import { chats } from '@/json/chatCrew'
import CrewChatCard from '@/components/elements/Chat/crew/CrewChatCard/page'
import NavTitle from '@/components/elements/headers/NavTitle'
import InputSearch from '@/components/elements/Inputs/InputSearch'

export default function ChatCrew() {
    return (
        <Container className="flex flex-col px-4 gap-6 ">
                <NavTitle link="chat" title="Grupos Crew"/>
                <InputSearch/>
                <main className='flex flex-col w-full align-top gap-8 pb-4'>
                    {chats.map(chat => (
                        <CrewChatCard key={chat.id} chat={chat} />
                    ))}
                </main>
        </Container>
    )
}

