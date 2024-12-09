"use client"
import { publicationInterface } from '@/interfaces/publication'
import { festivalsInterface } from '@/interfaces/festivals'
import { ListFilter, Search, X } from 'lucide-react'
import React, { useContext, useMemo, useState } from 'react'
import PostCard from './PostCard'
import { options } from '@/json/post'
import { festivalIdContext } from '@/context/FestivalIdContext'

interface PostFiltererInterface {
  publications: publicationInterface[],
  festivals: festivalsInterface[],
}

export default function PostFilterers({ publications, festivals }: PostFiltererInterface) {
  const contexto = useContext(festivalIdContext);
  const [resetInput, setResetInput] = useState<string>("")
  const filteredPosts = useMemo(() => {
    if (contexto?.festivalData.festivalId !== "") {
      return publications.filter(post => post.festivalId === contexto?.festivalData.festivalId);
    }
    return publications;
    }, [publications, contexto]);

  const [posts, setPosts] = useState<publicationInterface[]>(filteredPosts)
  const [toggle, setToggle] = useState({
    festivals: false,
    typePost: false
  });

  // Maneja la búsqueda de publicaciones
  const handleSearchPublication = (e: React.ChangeEvent<HTMLInputElement>) => {
    const searchValue = e.target.value;
    setResetInput(searchValue);
    setPosts(filteredPosts.filter(post =>
      post.title?.toLowerCase().includes(searchValue.toLowerCase())
    ));
  };

  const handleResetInput = () => {
    setResetInput("");  // Borra el texto en el input
    setPosts(filteredPosts); // Restaura las publicaciones filtradas
  };


  // Aplicando los filtros por tipo de publicacion
  const selectPostType = (postType: string) => {
    setPosts(filteredPosts.filter(post => post.type === postType))
    setToggle(prev => ({ ...prev, typePost: false }))
  }

  // Aplicando los filtros por festival
  const selectPostFestival = (id: string) => {
    setPosts(publications.filter(post => post.festivalId === id))
    contexto?.updateFestId(id)
    setToggle(prev => ({ ...prev, festivals: false }))
  }

  return (
    <>
      <div className="flex justify-center items-center gap-2 w-full">
        <div className="mt-4 flex items-center justify-center relative w-full">
          <Search className="absolute left-3 size-4" />
          <input
            onClick={() => setToggle({ festivals: !toggle.festivals, typePost: false })}
            onChange={handleSearchPublication}
            type="text"
            value={resetInput}
            placeholder="Buscar publicacion.."
            className="bg-transparent border border-customGray rounded-full pl-9 py-2 w-full"
          />
          {resetInput && (
            <X
              onClick={handleResetInput}
              className="absolute right-3 size-4 cursor-pointer"
            />
          )}
        </div>
        <ListFilter
          size={30}
          onClick={() => setToggle({ typePost: !toggle.typePost, festivals: false })}
          className='cursor-pointer mt-4'
        />
      </div>
      {toggle.festivals && (
        <div className="flex gap-2 flex-wrap mt-4">
          {festivals.map(fest => (
            <span
              key={fest.name}
              onClick={() => selectPostFestival(fest.id || "")}
              className="outline outline-1 px-2 py-1 rounded-full cursor-pointer"
            >
              {fest.name}
            </span>
          ))}
        </div>
      )}
      {
        toggle.typePost && (
          <div className={`absolute flex flex-col bg-background rounded-lg outline outline-1 outline-[#B7B7B8] z-50 top-28 right-4 w-64`}>
            {options.map((option) => (
              <span
                key={option.value}
                className="border-t border-[#B7B7B8] first:border-none py-[10px] pl-3 cursor-pointer"
                onClick={() => selectPostType(option.value)}
              >
                {option.label}
              </span>
            ))}
          </div>
        )
      }
      <section className='min-h-80 mb-20'>
        {posts.map((post: publicationInterface) => (
          <PostCard key={post.id} {...post} />
        ))}
      </section>
    </>
  )
}
