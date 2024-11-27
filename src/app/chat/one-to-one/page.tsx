'use client'
import { messages } from '@/json/onteToOneChat'
import Container from '@/components/elements/Container/Container'
import { CheckCheck } from 'lucide-react'
import HeaderChatOneToOne from '@/components/headers/Header_chatOneToOne/page'
import InputChat from '@/components/elements/Inputs/InputChat'

export default function OneToOne() {

    return (
        <Container>
            <section className='flex flex-col w-full h-screen'>

                <HeaderChatOneToOne />
                <main className='flex flex-col w-full h-full justify-start items-center mt-28 gap-2 px-4'>
                    {messages.map((message) => (
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
                                        className={`w-[20px] ${message.isRead ? 'text-[#62C0FA]' : 'text-white' }`}/>
                                )}
                            </div>
                        </div>
                    ))}
                </main>

                <InputChat onSendMessage={() => { console.log(`${messages}`) }} />

            </section>
        </Container >
    )
}
