import { User, History, Settings } from 'lucide-react'
import Button from '../Buttons/Button'

export default function UncompletedProfile() {
  return (
    <div className='px-6 pt-6'>
      <p className='font-thin text-sm'>
        Tu viaje apenas comienza. Ayúdanos a conocerte mejor completando tu
        información. Un perfil completo te permitirá disfrutar de una
        experiencia más personalizada y aprovechar al máximo todo lo que tenemos
        para ti.
      </p>
      <div className='py-4 my-3 flex justify-center'>
        <Button
          variant='primary'
          text='Completa tu biografía'
          className='w-full h-12 text-center'
        />
      </div>
      <div className='grid grid-cols-2 gap-2 text-sm'>
        <Button
          variant='primary'
          text='Información de Contacto'
          icon={<User className='w-5 h-5' />}
          className='w-full h-16 text-start'
        />
        <Button
          variant='primary'
          text='Crews actuales'
          icon={<User className='w-5 h-5' />}
          className='w-full h-16 text-left'
        />
        <Button
          variant='primary'
          text='Historial'
          icon={<History className='w-5 h-5' />}
          className='w-full h-16 text-start'
        />
        <Button
          variant='primary'
          text='Configuración de la cuenta'
          icon={<Settings className='w-5 h-5' />}
          className='w-full h-16 text-start'
        />
      </div>
    </div>
  )
}
