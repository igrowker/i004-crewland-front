'use client'
import React, { useState } from 'react'
import { Car, Building, Users, CirclePlus } from 'lucide-react'
import { usePathname } from 'next/navigation'
import AddUserModal from '../Profile/AddUserModal'
export interface HeaderProps {
    groupName: string
    status: string
    service?: 'alojamiento' | 'transporte' | 'compañero' | 'otro'
    chatsLength?: number
    showAddButton?: boolean
}

const HistorialHeader: React.FC<HeaderProps> = ({ groupName, status, service, chatsLength, showAddButton }) => {
    const pathname = usePathname()
    const headerText = pathname === '/profile/historial' ? 'Miembros Actuales' : 'Acompañantes'
    const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);

    const handleAddUser = (email: string) => {
        console.log(`Usuario añadido: ${email}`);
    }

    const serviceIcons = {
        transporte: <Car className='mr-1' size={25} strokeWidth={1.5} />,
        alojamiento: <Building className='mr-1' size={25} strokeWidth={1.5} />,
        compañero: <Users className='mr-1' size={25} strokeWidth={1.5} />,
        otro: <p></p>
    }

    return (
        <>
            {/* Titulo  */}
            <div className='flex flex-row justify-between items-center'>
                <h3 className='text-2xl leading-none'>{groupName}</h3>
                <div className='flex flex-row gap-4 items-center'>
                    <span
                        className={`rounded-full w-3 h-3 inline-block ${status === 'online' ? 'bg-[#26874A]' : 'bg-[#FA8080]'}`}>
                    </span>
                    <p className='text-[16px] text-customWhite'>
                        {status === 'online' ? 'Activo' : 'Inactivo'}</p>
                </div>
            </div>
            {/* Tags  */}
            <div className='flex flex-row justify-between mt-2'>
                <span className='flex flex-row gap-1'>
                    <button className='border border-white rounded-md px-4 py-1 text-sm'>Date</button>
                    <button className='border border-white rounded-md px-4 py-1 text-sm'>Place</button>
                </span>

                {service && serviceIcons[service]}

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