'use client'
import { useState } from 'react'
import { Eye, EyeOff, CircleAlert  } from 'lucide-react';

interface ReusableInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  password?: boolean;
  id?: string;
  name?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  value?: string;
  isRequired?: boolean;
  hideLabel?: boolean;
}

export default function ReusableInput({
  label,
  type,
  placeholder,
  password,
  id,
  onChange,
  error,
  value,
  isRequired = false,
  hideLabel = false,
}: ReusableInputProps) {
  const [toggleType, setToggleType] = useState<boolean>(false)

  return (
    <div className="flex flex-col gap-2 relative">
      {!hideLabel && (
        <label htmlFor={id} className={`text-customWhite ${isRequired ? 'after:content-["*"] after:text-red-600' : ''}`}>
          {label}
        </label>
      )}
      {password ? (
        <>
          <input
            id={id}
            name={id}
            type={toggleType ? "text" : "password"}
            className={`outline-none bg-transparent border-b pb-1 text-customWhite ${error ? 'border-red-600' : 'border-customGray'}`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required={isRequired}
          />
          {toggleType ? (
            <Eye
              className="cursor-pointer text-customWhite absolute bottom-3 right-0"
              onClick={() => setToggleType(!toggleType)}
            />
          ) : (
            <EyeOff
              className="cursor-pointer text-customWhite absolute bottom-3 right-0"
              onClick={() => setToggleType(!toggleType)}
            />
          )}
        </>
      ) : (
        <input
          id={id}
          name={id}
          type={type || 'text'}
          className={`outline-none bg-transparent border-b pb-1 text-customWhite ${error ? 'border-red-600' : 'border-customGray'}`}
          placeholder={placeholder}
          onChange={onChange}
          required={isRequired}
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
  );
}
