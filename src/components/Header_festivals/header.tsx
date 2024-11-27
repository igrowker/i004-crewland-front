'use client'
import Image from 'next/image'
import { Menu } from 'lucide-react'
import Title from '@/components/elements/Titles/Title'
import {useBurguerButton} from '@/hooks/useBurgerBotton'

export default function Header() {
  const [globalState, setGlobalState] = useBurguerButton()

  const handleClick = () => {
    setGlobalState({ isToggled: !globalState.isToggled });
  }

  return (
    <header 
      className='absolute top-0 left-0 w-full flex items-center justify-between p-4 bg-gradient-to-b from-black/70 to-transparent z-10'
    >
      <button aria-label='Abrir menú' className='p-2' onClick={handleClick}>
        <Menu className='text-white w-8 h-8' />
      </button>

      <div className='flex items-center'>
        <Title
          text='CREWLAND'
          className='text-white text-[24px] sm:text-[35px] font-bold'
        />
        <Image
          src='/crewland_logo.svg'
          alt='Crewland logo'
          width={40}
          height={50}
        />
      </div>
      <div className='w-10 h-10 rounded-full shadow-md overflow-hidden'>
        <Image
          src='/user01.png'
          alt='Usuario'
          width={40}
          height={40}
          className='object-cover'
        />
      </div>
    </header>
  )
}
