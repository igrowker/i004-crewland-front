"use client"
import { publicationInterface } from '@/interfaces/publication'
import { X } from 'lucide-react'
import Image from 'next/image'
import BoxIcons from './BoxIcons'
//import { calculateTime } from '@/utils/calculateTime'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { festivalIdContext } from '@/context/FestivalIdContext'

interface ModalPostCardProps {
  post: publicationInterface
  setModal: (bool: boolean) => void
}

export default function ModalPostCard({ post, setModal }: ModalPostCardProps) {
  const router = useRouter();
  const contexto = useContext(festivalIdContext)

  const handleChat = (id: string) => {
    router.push('/chat');
    contexto?.updateUserId(id)
    console.log(id)
  };

  return (
    <section className="fixed min-h-screen w-full grid place-items-center top-0 left-0 bg-background/50 select-none">
      <div className="bg-background w-full p-4 py-5 rounded-[20px] relative max-w-[368px]">
        <X
          size={20}
          className="absolute right-3 cursor-pointer"
          onClick={() => setModal(false)}
        />
        <header className="flex items-center justify-between mt-6">
          <div className="flex items-center gap-2">
            <Image
              className="rounded-full"
              src={post.user?.imgUser || process.env.NEXT_PUBLIC_DEFAULT_IMG_USER_CLOUDINARY || ""}
              alt={`user02`}
              width={40}
              height={40}
            />
            <p>{post.user?.name || "Pedro Rodriguez"}</p>
          </div>
          <time className='text-sm'>{post.creationDate}</time>
        </header>
        <h2 className="my-4 text-xl leading-5 font-semibold">{post.title}</h2>
        <p className="text-[14px] leading-[15.4px] text-left">{post.details}</p>
        <button
          onClick={() => {
            const userId = post.user?.id;
            if (typeof userId === "number") {
              handleChat(userId.toString());
            } else if (typeof userId === "string") {
              handleChat(userId);
            }
          }}
          aria-label={`Ver más sobre ${post.title}`}
          className="w-full flex justify-center my-3 p-1 py-2 mt-4 rounded-lg outline-1 text-customWhite outline outline-customWhite text-[14px]">
          Chatear con {post.user?.name.split(" ")[0] || "Pedro"}
        </button>
        <BoxIcons />
      </div>
    </section>
  );
}

