import { CalendarDays } from 'lucide-react';
import React  from 'react'

interface InputCalendarProps {
  label?: string
  placeholder?: string
  isRequired?: boolean
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}
export default function InputCalendar({ label, isRequired, placeholder, onChange, error }: InputCalendarProps) {


  const modalCalendar = () => {
    const inputElement = document.getElementById("nacimiento") as HTMLInputElement;
    if (inputElement) inputElement.showPicker?.();
    inputElement.focus();
  }
  return (
    <>
      <div className="flex flex-col gap-2 relative">
        <label htmlFor="birth" className={`${error ? "text-customRed": "text-customWhite"} ${isRequired ? 'after:content-["*"] after:text-customRed' : ''} `}>
          {error ? `Ops! ${error}` : label}
        </label>
        <input
          id="birth"
          name="birth"
          type="date"
          placeholder={placeholder}
          onChange={onChange}
          className='placeholder:text-red-500 appearance-none outline-none bg-transparent border-b pb-1 text-customWhite'
        />
        <CalendarDays
          color={`#${error ? "fa8080" : "f2f2f2"}`}
          className="cursor-pointer text-customWhite absolute bottom-2 right-0"
          onClick={modalCalendar}
        />
      </div>
    </>
  )
}
