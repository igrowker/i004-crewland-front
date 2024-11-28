'use client'
import { CheckCheck } from 'lucide-react'

interface ChatMessageProps {
    message: {
        id: number;
        text: string;
        timestamp: string;
        sentByCurrentUser: boolean;
        isRead?: boolean;
    };
}

export default function ChatMessage({ message }: ChatMessageProps): JSX.Element {

    return (
        <div
            key={message.id}
            className={`flex flex-col ${message.sentByCurrentUser ? 'items-end' : 'items-start'
                } w-full`}>
            <div className={`text-[14px] rounded-3xl ${message.sentByCurrentUser ? 'rounded-br-none bg-primary text-black' : 'rounded-bl-none bg-customWhite text-black'
                } p-4`}>
                <p>{message.text}</p>
            </div>

            <div className={`flex ${message.sentByCurrentUser ? 'justify-end' : 'justify-start'} items-center gap-2 mt-[2px] min-h-[20px]`}>
                <span className='text-[10px] text-gray-400'>{message.timestamp}</span>
                {message.sentByCurrentUser && (
                    <CheckCheck
                        className={`w-[20px] ${message.isRead ? 'text-[#62C0FA]' : 'text-white'}`} />
                )}
            </div>
        </div>)
}
