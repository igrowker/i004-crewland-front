import React, { useContext } from 'react'
import { ProfileContext } from '@/context/ProfileContext'
import UserChatItem from "../Chat/UserChatCard/UserChatItem"
import HistorialHeader from "../headers/HistorialHeader"

interface GroupSectionProps {
  onDelete: (index: number) => void;
}

const GroupSection: React.FC<GroupSectionProps> = ({ onDelete }) => {
  const { dataProfile } = useContext(ProfileContext) ?? {};
  const { reservations, festivals } = dataProfile || {};

  const groups = reservations?.map((reservation: any) => ({
    ...reservation,
    festival: festivals && festivals[reservation.postId], // Relacionar reserva con su festival
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
        {groups.map((group, chatIndex: number) => (
          <UserChatItem
            key={chatIndex}
            avatar={group.festival?.avatar}
            username={group.festival?.username}
            onDelete={onDelete && (() => onDelete(chatIndex))}
          />
        ))}
      </div>
    </section>
  );
}

export default GroupSection;
