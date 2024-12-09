'use client'
import React, { useState, useContext } from 'react'

import { Car, Building, Users, CirclePlus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import AddUserModal from '../Profile/AddUserModal'
import { chats } from '@/json/historial'

interface HeaderProps {
    festivalName?: string;
    date?: string;
    place?: string;
    isActive?: boolean;
    typeService?: "transport" | "accommodation" | "crew";
    chatsLength: number;
    showAddButton: boolean;
}

const HistorialHeader: React.FC<HeaderProps> = ({
    festivalName,
    date,
    place,
    isActive,
    typeService,
    chatsLength,
    showAddButton
}) => {
    const pathname = usePathname()
    const headerText = pathname === '/profile/historial' ? 'Miembros Actuales' : 'Acompañantes'
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);


    const handleAddUser = (email: string) => {
        console.log(`Usuario añadido: ${email}`);
    }

    const serviceIcons = {
        transport: <Car className='mr-1' size={25} strokeWidth={1.5} />,
        accommodation: <Building className='mr-1' size={25} strokeWidth={1.5} />,
        crew: <Users className='mr-1' size={25} strokeWidth={1.5} />,
        default: <p></p>
    }

    return (
        <>
            {/* Titulo  */}
            <div className='flex flex-row justify-between items-center mb-3'>
                <h3 className='text-xl leading-none'>{festivalName}</h3>
                <div className='flex flex-row gap-4 items-center'>
                    <span
                        className={`rounded-full w-3 h-3 inline-block ${isActive ? 'bg-[#26874A]' : 'bg-[#FA8080]'}`}>
                    </span>
                    <p className='text-[16px] text-customWhite'>
                        {pathname === '/profile/historial' ? (isActive ? 'Asistido' : 'No asistido') : (isActive ? 'Activo' : 'Inactivo')}
                    </p>
                    </div>
            </div>
            {/* Tags  */}
            <div className='flex flex-row justify-between items-center mt-2 gap-2'>
                <span className='flex flex-row gap-1'>
                    <button className='border border-white rounded-md shrink-0 px-2 py-1 text-[10px]'>{date}</button>
                    <button className='border border-white rounded-md  px-2 py-1 text-xs'>{place}</button>
                </span>

                {typeService && serviceIcons[typeService]}

            </div>
            {/* Subtitul */}
            <div className='flex flex-row justify-between items-center'>
                <p className='text-lg tracking-wide mt-2'>{headerText} </p>
                <span >
                    {showAddButton ? (
                        <>
                            <button onClick={() => setIsMenuOpen(true)}>
                                <CirclePlus
                                    className='fill-primaryHover text-black'
                                    strokeWidth={1.5}
                                    size={35}
                                />
                            </button>
                            {isMenuOpen && (
                                <AddUserModal
                                    title='Agregar miembro'
                                    onAddUser={handleAddUser}
                                    closeModal={() => setIsMenuOpen(false)}
                                />
                            )}
                        </>
                    ) : (
                        <p className='flex flex-row gap-2 justify-center items-center bg-primaryHover rounded-lg w-7 h-7 text-black text-lg'>{chatsLength}</p>
                    )}
                </span>
            </div>
        </>
    )
}

export default HistorialHeader