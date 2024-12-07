'use client'
import Link from 'next/link'
import { Search, Home, Users } from 'lucide-react'
import { usePathname} from 'next/navigation';
import {useBurguerButton} from '@/hooks/useBurgerBotton';

export function NavFooter() {
    const [state] = useBurguerButton();
    const pathName = usePathname().split('/')[1];
    const forbiddenPaths = ['', 'auth', 'home', 'chat'];

    if (forbiddenPaths.includes(pathName) ) return null;
  
    const links = [
        { href: '/search', label: 'Search', icon: Search },
        { href: '/festivals', label: '', icon: Home },
        { href: '/chat', label: 'Crew', icon: Users },
    ]

    return (
      <nav 
        className="fixed h-20 bottom-0 left-0 right-0 bg-gray-900/60 backdrop-blur-sm text-white flex justify-around items-center"
        style={{ transform: `translateY(${state.isToggled ? '150%' : '0'})`, transition: `transform 0.3s ${state.isToggled ? '' : '.5s'}` }}  
      >
        {
          links.map(({ href, label, icon: Icon }, index) => (
            <Link 
              key={index} 
              href={href}
              className="flex flex-col items-center justify-center w-full h-full"
            >
              <div className={
                index === 1 ? "flex justify-center items-center text-black rounded-full size-14 p-2 bg-primary " : ''} >
                <Icon size={26} />
              </div>
                <span className="text-xs">{label}</span>
            </Link>
          ))
        }
      </nav>
    );
  }
