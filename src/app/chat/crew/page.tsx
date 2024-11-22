import Container from "@/components/elements/Container/Container"
import Title from "@/components/elements/Titles/Title"
import Image from "next/image"

export default function ChatCrew() {

    const chats = [
        {
            title: "Mis grupos Crew",
            chatGroups: [
                { name: "Taylor lovers", time: "12:30", avatar: "#" },
                { name: "Swifties United", time: "14:00", avatar: "#" },
                { name: "Music Crew", time: "15:45", avatar: "#" },
                { name: "Fan Zone", time: "17:20", avatar: "#" },
            ]
        },
        {
            title: "Explorar grupos",
            chatGroups: [
                { name: "Taylor lovers", time: "12:30", avatar: "#" },
                { name: "Swifties United", time: "14:00", avatar: "#" },
                { name: "Music Crew", time: "15:45", avatar: "#" },
                { name: "Fan Zone", time: "17:20", avatar: "#" },
            ]
        }
    ]

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
                    {chats.map((chat, index) => (
                        <div key={index} className="flex flex-col gap-2">
                            <h3 className="text-2xl font-normal tracking-wide">{chat.title}</h3>
                            <div>
                                <ul className="grid grid-cols-2 gap-4">
                                    {chat.chatGroups.map((group, index) => (
                                        <li key={index} className="rounded-lg p-2 bg-primary">
                                            <div className="flex flex-col gap-5">
                                                <p className=" flex flex-row justify-start text-black">{group.name}</p>
                                                <div className="flex flex-row justify-between items-center">
                                                    <img src={group.avatar} alt="avatar" className="w-5 h-5 rounded-full" />
                                                    <p className="text-black text-xs">{group.time}</p>
                                                </div>
                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </main>
            </section>
            <footer className="fixed flex flex-row justify-around bottom-0 gap-3 w-full h-16">
                <p>Search</p>
                <p>Home</p>
                <p>Crew</p>
            </footer>
        </Container>
    )
}
