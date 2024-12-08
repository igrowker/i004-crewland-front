import { CalendarDays } from "lucide-react";
import React, { useState } from "react";
import Calendar from "../calendar/Calendar";

interface InputCalendarProps {
  label?: string;
  placeholder?: string;
  isRequired?: boolean;
  onChange: (value: string) => void;
  error?: string;
}
export default function InputCalendar({
  label,
  isRequired,
  placeholder,
  onChange,
  error,
}: InputCalendarProps) {
  const [toggleCalendar, setToggleCalendar] = useState<boolean>(false);
  const [currentDate, setCurrentDate] = useState("");

  const handleValueCalendar = (toggle: boolean, value?: string) => {
    setToggleCalendar(toggle);
    if (value) {
      setCurrentDate(value);
      onChange(value);
    }
  };

  return (
    <>
      <div className="flex flex-col gap-2 relative">
        <label
          htmlFor="age"
          className={`${error ? "text-customRed" : "text-customWhite"} ${
            isRequired ? 'after:content-["*"] after:text-customRed' : ""
          } `}
        >
          {error ? `Ops! ${error}` : label}
        </label>
        <input
          id="age"
          name="age"
          type="date"
          placeholder={placeholder}
          value={currentDate}
          className="placeholder:text-red-500 appearance-none outline-none bg-transparent border-b pb-1 text-customWhite"
          readOnly
        />
        <CalendarDays
          color={`#${error ? "fa8080" : "f2f2f2"}`}
          onClick={() => setToggleCalendar(!toggleCalendar)}
          className={`
            cursor-pointer text-customWhite absolute right-0
            ${toggleCalendar ? "top-8" : "bottom-2"}
          `}
        />
        {toggleCalendar && <Calendar selectedDate={handleValueCalendar} />}
      </div>
    </>
  );
}
