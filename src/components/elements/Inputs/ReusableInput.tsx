"use client";
import { useState } from "react";
import { Eye, EyeOff, CircleAlert } from "lucide-react";

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
  icon?: React.ReactNode;
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
  icon,
}: ReusableInputProps) {
  const [toggleType, setToggleType] = useState<boolean>(false);
  const Icon = toggleType ? Eye : EyeOff;

  return (
    <div className="flex flex-col gap-2 relative">
      {!hideLabel && (
        <label
          htmlFor={id}
          className={`${error ? "text-customRed" : "text-customWhite"} ${
            isRequired ? 'after:content-["*"] after:text-customRed' : ""
          }`}
        >
          {error ? `Ops! ${error}` : label}
        </label>
      )}
      {icon && !password && (
        <div className="absolute right-1 bottom-3">{icon}</div>
      )}
      {password ? (
        <>
          <input
            id={id}
            name={id}
            type={toggleType ? "text" : "password"}
            className={`outline-none bg-transparent border-b pb-1 text-customWhite ${
              error ? "border-customRed" : "border-customGray"
            } pl-2`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required={isRequired}
          />
          <Icon
            color={`#${error ? "fa8080" : "f2f2f2"}`}
            className="cursor-pointer text-customWhite absolute bottom-3 right-1"
            onClick={() => setToggleType(!toggleType)}
          />
        </>
      ) : (
        <>
          <input
            id={id}
            name={id}
            type={type || "text"}
            className={`outline-none bg-transparent border-b pb-1 text-customWhite ${
              error ? "border-customRed" : "border-customGray"
            } pl-2`}
            placeholder={placeholder}
            onChange={onChange}
            value={value}
            required={isRequired}
          />
          {error && (
            <CircleAlert
              color={`#${error ? "fa8080" : "f2f2f2"}`}
              className="cursor-pointer text-customWhite absolute bottom-3 right-0"
              onClick={() => setToggleType(!toggleType)}
            />
          )}
        </>
      )}
    </div>
  );
}
