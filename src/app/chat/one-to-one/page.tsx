import Container from '@/components/elements/Container/Container'
import ChatHeader from '@/components/headers/ChatHeader'
import ChatArea from '@/components/ChatArea/page'


export default function OneToOne() {
  
    return (
        <Container>
            <section className='flex flex-col w-full h-screen'>
                <ChatHeader />
                <ChatArea />
            </section>
        </Container >
    )
}
