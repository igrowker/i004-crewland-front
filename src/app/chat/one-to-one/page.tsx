import Container from '@/components/elements/Container/Container'
import Image from 'next/image'
import Title from '@/components/elements/Titles/Title'
import { Heart, EllipsisVertical, CheckCheck, Smile, SendHorizontal } from 'lucide-react'

export default function OneToOne() {
    return (
        <Container>
            <section className='flex flex-col w-full h-screen'>
                <header className='fixed flex flex-row justify-between items-center border-b-2 left-0 w-full px-4 py-3'>
                    <div className='flex flex-row items-center gap-4'>
                        <Image
                            src='/arrowLeft.svg'
                            alt='Back'
                            width={24}
                            height={12}
                        />

                        <div className='flex flex-row items-center gap-2'>
                            <Image
                                src='/user01.png'
                                alt='User'
                                width={40}
                                height={40}
                            />
                            <div className='flex flex-col justify-center '>
                                <h3 className='text-xl leading-none'>User Name</h3>
                                <div className='flex flex-row gap-2 items-center'>
                                    <span className='bg-[#26874A] rounded-full w-2 h-2 inline-block'></span>
                                    <p className='text-[10px] text-gray-400 font-normal'>Conectado</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-row gap-2'>
                        <Heart className='text-white fill-white w-[20px]' />
                        <EllipsisVertical className='text-white' />
                    </div>
                </header>
                <main className='flex flex-col w-full h-full justify-start items-center mt-28 gap-2'>

                    <div>
                        <div className='text-[black] text-[14px] rounded-3xl rounded-br-none bg-primary p-4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex justify-end items-center gap-2 mt-[2px] min-h-[20px]'>
                            <span className="text-[10px] text-gray-400 ">12:47 pm</span>
                            <CheckCheck className='text-white w-[20px]' />
                        </div>
                    </div>
                    <div>
                        <div className='text-black text-[14px] rounded-3xl rounded-bl-none bg-customWhite p-4'>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                        </div>
                        <div className='flex justify-start items-center gap-2 mt-[2px] min-h-[24px]'>
                            <span className="text-[10px] text-gray-400 items-end">12:47 pm</span>
                        </div>
                    </div>
                </main>

                <footer className='fixed bottom-0 flex flex-row items-center left-0 w-full px-4 py-3 '>
                    <div className="relative w-full flex items-center rounded-lg border-[1px]  bg-transparent">
                        <Smile
                            className="absolute left-3 "
                        />
                        <input
                            className='w-full p-3 pl-10 bg-transparent text-customWhite outline-none'
                            type="text"
                            placeholder="Escribir mensaje..."
                        />
                        <div className='absolute right-3 flex justify-center items-center w-8 h-8 bg-primary rounded-full'>
                            <SendHorizontal
                                className="text-black"
                            />
                        </div>
                    </div>
                </footer>

            </section>
        </Container >
    )
}
