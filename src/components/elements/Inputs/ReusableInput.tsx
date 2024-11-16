"use client"
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react';

interface ReusableInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  password?: boolean;
  id: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

export default function ReusableInput({ label, type, placeholder, password, id, onChange, error }: ReusableInputProps) {
  const [toggleType, setToggleType] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor={id} className='text-customWhite'>{label}*</label>
      {password ? (
        // inputs solamente para tipo password
        <>
          <input
            id={id}
            name={id}
            type={toggleType ? "text" : "password"}
            className="outline-none bg-transparent border-b pb-1 text-customWhite"
            placeholder={placeholder}
            onChange={onChange}
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
          className="text-customWhite outline-none bg-transparent border-b pb-1"
          placeholder={placeholder}
          onChange={onChange}
          required
        />
      )}
      {/* Error de validacion */}
      {error && <span className='text-red-600'>{error}</span>}
    </div>
  )
}
