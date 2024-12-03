import { X } from 'lucide-react'
import { useState } from 'react'



interface AddUserModalProps {
    title: string
    onAddUser: (mail: string) => void
    closeModal: () => void

}

export default function AddUserModal({ title, onAddUser, closeModal }: AddUserModalProps) {
    const [email, setEmail] = useState('')

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (email.trim()) {
            onAddUser(email)
            setEmail('')
            closeModal()
        } else {
            alert('Por favor, introduce un email de usuario válido.')
        }
    }
    return (
        <>
            <section className=' bg-black/90 grid place-items-center min-h-screen fixed top-0 left-0 w-full'>
                <div className='overflow-hidden relative bg-background py-5 pt-16 flex flex-col items-center gap-1 rounded-2xl px-4'>

                    <X
                        size={20}
                        className='cursor-pointer absolute right-3 top-6'
                        onClick={closeModal}
                    />
                    <h1 className='text-2xl leading-[28.8px] pb-2'>{title}</h1>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
                        <input
                            type='text'
                            placeholder='Nombre de usuario'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className='w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary'
                        />
                        <button
                            type='submit'
                            className='w-full bg-primary text-white py-2 rounded-lg hover:bg-primary-dark'
                        >
                            Añadir Usuario
                        </button>
                    </form>
                </div>
            </section>
        </>
    )

}

