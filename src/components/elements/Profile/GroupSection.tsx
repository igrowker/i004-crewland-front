import HistorialHeader from "../headers/HistorialHeader"
import UserChatItem from "../Chat/UserChatCard/UserChatItem"
import { usePathname } from 'next/navigation'
import { festivalsInterface } from '@/interfaces/festivals'
import { publicationInterface, UserInterface } from '@/interfaces/publication'

interface GroupSectionProps {
    festival: festivalsInterface[];
    publications: publicationInterface[];
    chats: {
        avatar: string;
        username: string;
    }[];
    showAddButton?: boolean;
    onDelete?: (chatIndex: number) => void
    id: string;
    name: string;
    location: string;
    date: string;
    typeService?: "alojamiento" | "transporte" | "compañero" | "otro" | undefined;
    usuarios: any[]; // o el tipo adecuado para los participantes
    isActive: boolean;
    creationDate: string;
}
const GroupSection: React.FC<GroupSectionProps> = ({
    chats,
    showAddButton = false,
    onDelete,
    name: festivalName,
    date,
    location: place,
    isActive,
    usuarios,
    typeService,
    creationDate
}) => {
    const pathname = usePathname();

    return (
        <section className='flex flex-col w-full border-b-[1px] border-gray-200 gap-2 pb-4'>
            <HistorialHeader
                festivalName={festivalName}
                date={date}
                place={place}
                isActive={isActive}
                typeService={typeService}
                chatsLength={chats.length}
                showAddButton={showAddButton}
            />
            <div className='flex flex-col w-full '>

                {chats.map((chat, chatIndex) => (
                    <UserChatItem
                        key={chatIndex}
                        avatar={chat.avatar}
                        username={chat.username}
                        onDelete={onDelete && (() => onDelete(chatIndex))}
                    />
                ))}
            </div>

            {pathname === '/profile/currentCrews' && (
                <div className='flex flex-row gap-1'>
                    <button className='w-full my-3 p-2 rounded-lg outline-1 text-customWhite outline outline-customWhite text-[14px]'>
                        Ir al Chat
                    </button>
                </div>
            )}
        </section>
    )
}

export default GroupSection