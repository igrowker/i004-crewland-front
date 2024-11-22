import Container from "@/components/elements/Container/Container"
import Title from "@/components/elements/Titles/Title"
export default function ChatCrew() {

    return (
        <Container>
            <section className="flex flex-col w-full h-screen gap-3">
                <header className="flex flex-col items-center justify-between">
                    <Title text="Grupos Crew" size="medium" />
                    <div>
                        Buscador
                    </div>
                </header>
                <main className='flex flex-col w-full align-top gap-5'>
                    <div className="flex flex-col gap-2">
                        <Title text="Mis grupos Crew" size="small" />
                        <div>
                            <ul className="grid grid-cols-2 gap-2">
                            <li className="border rounded-[4px] p-3 ">
                                    <div className="flex flex-col gap-5">
                                        <Title text="Taylor lovers" size="small" className=" flex flex-row justify-start" />
                                        <div className="flex flex-row justify-between items-center">
                                            <img src="#" alt="avatar" className="w-5 h-5 rounded-full" />
                                            <p>12:30</p>
                                        </div>
                                    </div>
                                </li><li className="border rounded-[4px] p-3 ">
                                    <div className="flex flex-col gap-5">
                                        <Title text="Taylor lovers" size="small" className=" flex flex-row justify-start" />
                                        <div className="flex flex-row justify-between items-center">
                                            <img src="#" alt="avatar" className="w-5 h-5 rounded-full" />
                                            <p>12:30</p>
                                        </div>
                                    </div>
                                </li><li className="border rounded-[4px] p-3 ">
                                    <div className="flex flex-col gap-5">
                                        <Title text="Taylor lovers" size="small" className=" flex flex-row justify-start" />
                                        <div className="flex flex-row justify-between items-center">
                                            <img src="#" alt="avatar" className="w-5 h-5 rounded-full" />
                                            <p>12:30</p>
                                        </div>
                                    </div>
                                </li><li className="border rounded-[4px] p-3 ">
                                    <div className="flex flex-col gap-5">
                                        <Title text="Taylor lovers" size="small" className=" flex flex-row justify-start" />
                                        <div className="flex flex-row justify-between items-center">
                                            <img src="#" alt="avatar" className="w-5 h-5 rounded-full" />
                                            <p>12:30</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Title text="Explorar grupos" size="small" />
                        <div>
                            <ul className="grid grid-cols-2 gap-2">
                                <li className="border rounded-[4px] p-3 ">
                                    <div className="flex flex-col gap-5">
                                        <Title text="Taylor lovers" size="small" className=" flex flex-row justify-start" />
                                        <div className="flex flex-row justify-between items-center">
                                            <img src="#" alt="avatar" className="w-5 h-5 rounded-full" />
                                            <p>12:30</p>
                                        </div>
                                    </div>
                                </li>
                                <li className="border rounded-[4px] p-3 ">
                                    <div className="flex flex-col gap-5">
                                        <Title text="Taylor lovers" size="small" className=" flex flex-row justify-start" />
                                        <div className="flex flex-row justify-between items-center">
                                            <img src="#" alt="avatar" className="w-5 h-5 rounded-full" />
                                            <p>12:30</p>
                                        </div>
                                    </div>
                                </li><li className="border rounded-[4px] p-3 ">
                                    <div className="flex flex-col gap-5">
                                        <Title text="Taylor lovers" size="small" className=" flex flex-row justify-start" />
                                        <div className="flex flex-row justify-between items-center">
                                            <img src="#" alt="avatar" className="w-5 h-5 rounded-full" />
                                            <p>12:30</p>
                                        </div>
                                    </div>
                                </li><li className="border rounded-[4px] p-3 ">
                                    <div className="flex flex-col gap-5">
                                        <Title text="Taylor lovers" size="small" className=" flex flex-row justify-start" />
                                        <div className="flex flex-row justify-between items-center">
                                            <img src="#" alt="avatar" className="w-5 h-5 rounded-full" />
                                            <p>12:30</p>
                                        </div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </main>
            </section>
            <footer className="fixed flex flex-row justify-around bottom-0 gap-3 w-full">
                <p>Search</p>
                <p>Home</p>
                <p>Crew</p>
            </footer>
        </Container>
    )
}
