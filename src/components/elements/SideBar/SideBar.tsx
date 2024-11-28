'use client'
import { Facebook, FileBadge, FileQuestion, Instagram, Music2, ShieldAlert, X, Youtube } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation"
import Button from "../Buttons/Button";
import { useBurguerButton } from "@/hooks/useBurgerBotton";

export function SideBar() {
    const [state] = useBurguerButton();
    const pathName = usePathname().split('/')[1];
    const availablePaths = ['festivals'];

    if (!availablePaths.includes(pathName)) return null;

    const socials = [
        { href: 'https://www.instagram.com/', label: 'Instagram', icon: Instagram },
        { href: 'https://www.facebook.com/', label: 'Facebook', icon: Facebook },
        { href: 'https://www.youtube.com/', label: 'Youtube', icon: Youtube },
        { href: 'https://www.tiktok.com/', label: 'TikTok', icon: Music2 },
        { href: 'https://www.x.com/', label: 'X', icon: X },
    ]

    const links = [
        { href: '/faq', label: 'FAQ', icon: FileQuestion },
        { href: '/conditions', label: 'Conditions', icon: FileBadge },
        { href: '/privacy', label: 'Privacy', icon: ShieldAlert },
    ]
  return (
    <div 
        className="fixed left-0 top-0 w-[70vw] h-screen bg-background/90 backdrop-blur-sm z-10 text-customGray p-4 flex flex-col gap-6 justify-center"
        style={{ transform: `translateX(${state.isToggled ? '0' : '-100%'})`, transition: `transform 0.3s ${state.isToggled ? '0.5s' : ''}` }}
    >
        <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-lg">Contacto</h1>
            {
                socials.map(({ href, label, icon: Icon }, index) => (
                    <Link
                        key={index}
                        href={href}
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        <Icon size={20} />
                        <span className="text-sm">{label}</span>
                    </Link>
            ))}
        </div>
        <hr />
        <div className="flex flex-col gap-3">
            <h1 className="font-semibold text-lg">Información</h1>
            {
                links.map(({ href, label, icon: Icon }, index) => (
                    <Link
                        key={index}
                        href={href}
                        className="flex items-center gap-2 hover:opacity-80 transition-opacity"
                    >
                        <Icon size={20} />
                        <span className="text-sm">{label}</span>
                    </Link>
            ))}
        </div>
        <Button text="Cerrar sesión" href="/logout"/>
    </div>
  )
}