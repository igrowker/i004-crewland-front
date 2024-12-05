import Avatar from '@/components/elements/Avatar/UniqueAvatar/Avatar'
import ChatActionMenu from '../ChatActionMenu';

interface UserChatItemProps {
    avatar: string
    username: string
    customClasses?: string
    onClick?: () => void
    onDelete?: () => void
}
const UserChatItem: React.FC<UserChatItemProps> = ({
    avatar,
    username,
    onClick,
    onDelete
}) => {
    return (
        <div
            className='flex justify-between items-center gap-4 w-full pl-0 p-1'
            onClick={onClick}
        >
            <Avatar src={avatar} alt='Image avatar' width={40} height={40} className='flex-shrink-0' />
            <div className='flex flex-col flex-grow overflow-hidden'>
                <p>{username}</p>
            </div>
            {onDelete && <ChatActionMenu onDelete={onDelete} />}

        </div>
    )
}

export default UserChatItem