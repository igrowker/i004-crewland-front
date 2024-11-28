import Button from '@/components/elements/Buttons/Button'
import Container from '@/components/elements/Container/Container'
import TagsList from '@/components/elements/Tags/ListTags'
import Title from '@/components/elements/Titles/Title'
import Image from 'next/image'

export default function Home() {
  //comentario
  // Ejemplo de tags:
  const tags = [
    'Rock & Alternativo',
    'Hip-Hop & Urbano',
    'Hip-Hop',
    'Folk & Country',
    'Pop & Mainstream',
    'Metal & Hardcore',
    'Clásica & Instrumental',
    'Jazz, Blues & Soul',
    'Reggae & Tropical',
    'Latino & Regional',
    'Electrónica & Dance'
  ]

  return (
    <Container>
      <main className='flex flex-col gap-8 row-start-2 items-center sm:items-start'>
        <div className='flex justify-center items-center'>
          <Title text='EVERYONE' size='large' weight='black' />
          <Image
            src='http://localhost:3000/crewland_logo.svg'
            alt='Crewland Logo'
            width={200}
            height={100}
            style={{ width: '100%', height: 'auto' }}
            priority
          />
        </div>
        <ol className='list-inside list-decimal text-sm text-center sm:text-left'>
          <Title
            text='Vamos a verificar tu número telefónico.'
            size='small'
            weight='extrabold'
          />
          <p className='pt-4'>Cuerpo de formularios, etc.</p>
        </ol>

        <div className='flex gap-4 items-center flex-col sm:flex-row'>
          <Button
            text='Register'
            variant='primary'
            className='min-w-96 min-h-16'
          />
          <Button text='Register' variant='ghost' />
        </div>
        <TagsList tags={tags} />
      </main>
    </Container>
  )
}
