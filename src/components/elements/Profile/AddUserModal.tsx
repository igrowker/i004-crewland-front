import { X } from 'lucide-react'
import { useState } from 'react'
import ReusableInput from '../Inputs/ReusableInput'
import Button from '../Buttons/Button'



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
                <div className='overflow-hidden relative bg-background py-5 pt-8 flex flex-col items-center w-[300px] gap-1 rounded-2xl px-4'>
                    <X
                        size={20}
                        className='cursor-pointer absolute right-3 top-3'
                        onClick={closeModal}
                    />
                    <h3 className='text-xl  pb-2'>{title}</h3>
                    <form onSubmit={handleSubmit} className='w-full flex flex-col gap-4'>
                        <ReusableInput
                            id='email'
                            label='Email'
                            placeholder='newUser@user.com'
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <Button
                            submit={true}
                            text='Añadir Usuario'
                            variant='primary'
                        />
                    </form>
                </div>
            </section>
        </>
    )

}

