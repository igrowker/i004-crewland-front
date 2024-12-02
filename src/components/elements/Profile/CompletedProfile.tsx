import Button from '../Buttons/Button'
import { userProfile } from '@/json/profile'
import Title from '../Titles/Title'

export default function CompletedProfile() {
  return (
    <div className='flex flex-col m-4'>
      <div className='flex items-center rounded-lg bg-primary text-black relative'>
        <button className='flex-1 p-2 rounded-l-lg'>
          <span className='block font-bold'>{userProfile.city}</span> Lugar
        </button>
        <div className='w-px h-6 bg-black mx-2'></div>
        <button className='flex-1 p-2'>
          <span className='block font-bold'>{userProfile.age}</span> Edad
        </button>
        <div className='w-px h-6 bg-black mx-1'></div>
        <button className='flex-1 p-2 rounded-r-lg'>
          <span className='block font-bold'>{userProfile.birtday}</span>{' '}
          Cumpleaños
        </button>
      </div>
      <p className='m-3'>{userProfile.description}</p>
      <Title
        text='Tus géneros musicales favoritos'
        size='small'
        align='left'
        className='mt-4 mb-3'
      />
      <div className='flex flex-wrap gap-1'>
        {userProfile.musicalGenres.map((genre, index) => (
          <Button
            variant='ghost'
            key={index}
            text={genre}
            className='rounded-full'
          />
        ))}
      </div>
    </div>
  )
}
