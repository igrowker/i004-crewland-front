'use client'
import { useState } from 'react'
import { Eye, EyeOff, CircleAlert  } from 'lucide-react';

interface ReusableInputProps {
  label?: string
  type?: string
  placeholder?: string
  password?: boolean
  id?: string
  name?: string
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void
  error?: string
  value?: string
}

export default function ReusableInput({
  label,
  type,
  placeholder,
  password,
  id,
  onChange,
  error,
  value
}: ReusableInputProps) {
  const [toggleType, setToggleType] = useState<boolean>(false)

  return (
    <div className='flex flex-col gap-2 relative'>
      <label htmlFor={id} className='text-customWhite'>
        {label}
      </label>
      {password ? (
        // inputs solamente para tipo password
        <>
          <input
            id={id}
            name={id}
            type={toggleType ? 'text' : 'password'}
            className='outline-none bg-transparent border-b pb-1 text-customWhite'
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required
          />
          {toggleType ? (
            <Eye
              className='cursor-pointer text-customWhite absolute bottom-3 right-0'
              onClick={() => setToggleType(!toggleType)}
            />
          ) : (
            <EyeOff
              className='cursor-pointer text-customWhite absolute bottom-3 right-0'
              onClick={() => setToggleType(!toggleType)}
            />
          )}
        </>
      ) : (
        // inputs para cualquier tipo
        <input
          id={id}
          name={id}
          type={type || 'text'}
          className='text-customWhite outline-none bg-transparent border-b pb-1'
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      )}
      {/* Error de validacion */}
      {error && 
        <span className='p-1 flex items-center outline outline-1 absolute -bottom-11 z-40 bg-customYellow text-background rounded-md'>
          <span className='z-30 absolute -top-1 left-4 w-3 h-3 bg-customYellow rotate-45'></span>
          <CircleAlert className='w-12 text-3xl relative z-50'/>
          <p className='w-full text-sm'>{error}</p>
        </span>
      }
    </div>
  )
}
