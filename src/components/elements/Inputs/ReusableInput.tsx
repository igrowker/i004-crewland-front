'use client'
import { useState } from 'react'
import { Eye, EyeOff } from 'lucide-react'

interface ReusableInputProps {
  label: string;
  type?: string;
  placeholder?: string;
  password?: boolean;
  id: string;
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
      {error && <span className='text-red-600'>{error}</span>}
    </div>
  );
}
