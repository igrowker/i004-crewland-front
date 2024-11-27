import Container from "@/components/elements/Container/Container"
import Title from "@/components/elements/Titles/Title"
import Image from "next/image"
import { chats } from "@/json/chatCrew"
import CrewChatCard from "@/components/CrewChatCard/page"

export default function ChatCrew() {
    return (
        <Container>
            <section className="flex flex-col w-full h-screen gap-20">
                <header className="flex flex-row gap-5">
                    <Image
                        src='/arrowLeft.svg'
                        alt='Back'
                        width={24}
                        height={12}
                    />
                    <Title text="Grupos Crew" size="medium" className="flex flex-row justify-start font-medium " />

                </header>
                <main className='flex flex-col w-full align-top gap-8'>
                    {chats.map(chat => (
                        <CrewChatCard key={chat.id} chat={chat} />
                    ))}
                </main>
            </section>
            <footer className="fixed flex flex-row justify-around bottom-0 gap-3 w-full h-16 bg-background">
                <p>Search</p>
                <p>Home</p>
                <p>Crew</p>
            </footer>
        </Container>
    )
}
