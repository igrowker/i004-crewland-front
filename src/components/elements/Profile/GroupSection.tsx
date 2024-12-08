import React, { useContext } from 'react'
import { ProfileContext } from '@/context/ProfileContext'
import UserChatItem from "../Chat/UserChatCard/UserChatItem"
import HistorialHeader from "../headers/HistorialHeader"
import { usePathname } from 'next/navigation'
import { groups, chats } from '@/json/historial'


interface GroupSectionProps {
    onDelete: (index: number) => void;
}

const GroupSection: React.FC<GroupSectionProps> = ({ onDelete }) => {
    const pathname = usePathname();
    const { dataProfile } = useContext(ProfileContext) ?? {};
    const { publications, festivals } = dataProfile || {};

    const groups = publications?.map((publication: any) => ({
        ...publication,
        festival: festivals && festivals[publication.postId], 
    })) || [];

    return (
        <section className='flex flex-col w-full border-b-[1px] border-gray-200 gap-2 pb-4'>
            <HistorialHeader
                festivalName={groups[0]?.festival?.name || ''}
                date={groups[0]?.date || ''}
                place={groups[0]?.place || ''}
                isActive={groups[0]?.isActive || false}
                typeService={groups[0]?.typeService}
                chatsLength={groups.length}
                showAddButton={true}
            />

            <div className='flex flex-col w-full '>
                {groups.map((group, chatIndex) => (
                    <UserChatItem
                        key={chatIndex}
                        avatar={group.festival?.avatar}
                        username={group.festival?.username}
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
    );
}

export default GroupSection;



