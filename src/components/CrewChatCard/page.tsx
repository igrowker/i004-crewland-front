import { ICrewChatCard } from "@/interfaces/crewChatCard"

export default function CrewChatCard({chat}: ICrewChatCard) {

    return (
        <div key={chat.id} className="flex flex-col gap-2">
            <h3 className="text-2xl font-normal tracking-wide">{chat.title}</h3>
            <div>
                <ul className="grid grid-cols-2 gap-4">
                    {chat.chatGroups.map(group => (
                        <li key={group.id} className="rounded-lg p-2 bg-primary">
                            <div className={`flex flex-col ${chat.title === "Explorar grupos" ? "gap-2" : "gap-5"}`}>
                                <p className=" flex flex-row justify-start text-black">{group.name}</p>
                                <div className="flex flex-row justify-between items-center">
                                    <div className="flex flex-row justify-start -space-x-2">
                                        {group.participants.map(user => (
                                            <img
                                                key={user.id}
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
    )
}