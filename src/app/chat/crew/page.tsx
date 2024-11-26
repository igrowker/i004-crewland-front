import Container from "@/components/elements/Container/Container"
import Title from "@/components/elements/Titles/Title"
import Image from "next/image"

export default function ChatCrew() {

    const chats = [
        {
            title: "Mis grupos Crew",
            chatGroups: [
                {
                    name: "Taylor lovers",
                    time: "12:30",
                    participants: [
                        { name: "Alice", avatar: "/users/01.png" },
                        { name: "Bob", avatar: "/users/02.png" },
                        { name: "Charlie", avatar: "/users/03.png" }
                    ]
                },
                {
                    name: "Swifties United",
                    time: "14:00",
                    participants: [
                        { name: "Diana", avatar: "/users/04.png" },
                        { name: "Eve", avatar: "/users/05.png" }
                    ]
                },
                {
                    name: "Cosquin Rock 2025",
                    time: "15:45",
                    participants: [
                        { name: "Frank", avatar: "/users/06.png" },
                        { name: "Grace", avatar: "/users/07.png" }
                    ]
                },
                {
                    name: "Tomorrowland",
                    time: "17:20",
                    participants: [
                        { name: "Hannah", avatar: "/users/08.png" },
                        { name: "Ivan", avatar: "/users/09.png" }
                    ]
                }
            ]
        },
        {
            title: "Explorar grupos",
            chatGroups: [
                {
                    name: "BBF Crew",
                    time: "12:30",
                    participants: [
                        { name: "Jack", avatar: "/users/10.png" },
                        { name: "Karen", avatar: "/users/01.png" }
                    ]
                },
                {
                    name: "Tomorrowland",
                    time: "14:00",
                    participants: [
                        { name: "Leo", avatar: "/users/02.png" },
                        { name: "Mona", avatar: "/users/03.png" }
                    ]
                },
                {
                    name: "Lollapalooza",
                    time: "15:45",
                    participants: [
                        { name: "Nina", avatar: "/users/04.png" },
                        { name: "Oscar", avatar: "/users/05.png" }
                    ]
                },
                {
                    name: "Brunch Electronic",
                    time: "17:20",
                    participants: [
                        { name: "Paul", avatar: "/users/06.png" },
                        { name: "Quincy", avatar: "/users/07.png" }
                    ]
                }
            ]
        }
    ];


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
                                            <div className={`flex flex-col ${chat.title === "Explorar grupos" ? "gap-2" : "gap-5"}`}>
                                                <p className=" flex flex-row justify-start text-black">{group.name}</p>
                                                <div className="flex flex-row justify-between items-center">
                                                    <div className="flex flex-row justify-start -space-x-2">
                                                        {group.participants.map((user, index) => (
                                                            <img
                                                                key={index}
                                                                src={user.avatar}
                                                                alt="avatar"
                                                                className="w-6 h-6 rounded-full" />
                                                        ))}
                                                    </div>
                                                    <p className="text-black text-xs">{group.time}</p>
                                                </div>
                                                {chat.title === "Explorar grupos" && (
                                                    <button className=" text-background bg-primary border-[1.5px] border-black rounded-lg focus:border-customWhite focus:text-customWhite">
                                                        Unirse
                                                    </button>
                                                )}

                                            </div>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
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
