import Container from '@/components/elements/Container/Container'
import NavTitle from '@/components/elements/headers/NavTitle'
import { configPerfil } from '@/json/perfil'
import { ChevronDown, Moon, Trash2, Languages } from 'lucide-react'
import React from 'react'

export default function Config() {
  return (
    <Container>
      <article className='w-full p-4 flex flex-col items-'>
        <NavTitle 
          link='profile' 
          title='Configuracion'
          className='mt-2'
        />
        <p className='mt-5 text-left leading-5 font-semibold'>
          Centro de ayuda
        </p>
        <section className='flex flex-col gap-6 mt-5'>
          {configPerfil.map(option => (
            <div key={option.text} className="flex gap-2 items-center cursor-pointer">
              <option.src />
              <p>{option.text}</p>
            </div>
          ))}
        </section>
        <p className="text-left leading-5 font-semibold my-5">
          Centro de ayuda
        </p>
        <div className="cursor-pointer flex items-center justify-between">
          <div className="flex gap-2 justify-center">
            <Languages />
            <p>Opciones de Idioma</p>
          </div>
          <ChevronDown />
        </div>
        <div className="my-5 flex items-center justify-between mr-[3px]">
          <div className="flex gap-2 justify-center">
            <Moon />
            <p>Modo Oscuro</p>
          </div>
          <label htmlFor={`checkCrew1`}>
            <input type="checkbox" id={`checkCrew1`}
              className="peer hidden"
            />
            <span
              className="cursor-pointer h-5 w-5 flex rounded-full border border-slate-600 dark:bg-transparent peer-checked:bg-primary peer-checked:border-2 transition"
            />
          </label>
        </div>
        <div className="cursor-pointer flex items-center gap-2">
          <Trash2 />
          <p>Desactivar/ Eliminar Cuenta</p>
        </div>
      </article>
    </Container>
  )
}
