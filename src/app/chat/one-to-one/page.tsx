import Container from '@/components/elements/Container/Container'
import Image from 'next/image'
import Title from '@/components/elements/Titles/Title'
import { Heart, EllipsisVertical } from 'lucide-react'

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
            </section>
        </Container >
    )
}
