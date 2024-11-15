"use client"
import { useState } from 'react'

interface ReusableInputProps {
  label: string;
  type?: string;
  placeholder: string;
  password?: boolean;
}

export default function ReusableInput({ label, type, placeholder, password }: ReusableInputProps) {
  const [toggleType, setToggleType] = useState<boolean>(false);

  return (
    <div className="flex flex-col gap-2 relative">
      <label htmlFor={label} className='text-customWhite'>{label}*</label>
      {password ? (
        // inputs solamente para tipo password
        <>
          <input
            id={label}
            type={toggleType ? "text" : "password"}
            className="outline-none bg-transparent border-b pb-1"
            placeholder={placeholder}
          />
          <span 
            onClick={()=>setToggleType(!toggleType)}
            className="text-customWhite w-6 h-6 bg-slate-100/50 block absolute bottom-3 right-0 rounded-full"
          />
        </>
      ) : (
        // inputs para cualquier tipo
        <input
          id={label}
          type={type || 'text'}
          className="text-customWhite outline-none bg-transparent border-b pb-1"
          placeholder={placeholder}
        />
      )}
    </div>
  )
}
