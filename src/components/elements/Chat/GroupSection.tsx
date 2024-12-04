import HistorialHeader from "../headers/HistorialHeader"
import UserChatItem from "./UserChatCard/UserChatItem"
import { usePathname } from 'next/navigation'

interface GroupSectionProps {
    groupName: string
    status: string
    service?: 'alojamiento' | 'transporte' | 'compañero' | 'otro'
    chatsLength?: number
    showAddButton?: boolean
    chats: {
        avatar: string
        username: string
    }[]
    onDelete?: (chatIndex: number) => void

}
const GroupSection: React.FC<GroupSectionProps> = ({ groupName, status, service, chats, onDelete, showAddButton }) => {
    const pathname = usePathname()

    return (
        <section className='flex flex-col w-full border-b-[1px] border-gray-200 gap-2 pb-4'>
            <HistorialHeader
                groupName={groupName}
                status={status}
                service={service}
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

            {pathname === '/home/currentCrews' && (
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