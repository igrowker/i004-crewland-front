"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface inputSelectProps {
  value?: string | number;
  label?: string;
  id?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  options?: (string | number)[];
  placeholder?: string;
  topModal?: string;
}

export default function InputSelect({
  label,
  isRequired,
  onChange,
  error,
  placeholder,
  options,
  topModal,
  id,
  value,
}: inputSelectProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const Icon = openModal ? ChevronUp : ChevronDown;

  const selectedOption = (selectedOption: string | number) => {
    setOpenModal(false);

    // Simulacion de un onChange
    if (onChange) {
      const event = {
        target: {
          name: id,
          value: selectedOption,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  };

  const handleModal = () => setOpenModal(!openModal);

  return (
    <section className="flex flex-col gap-2 relative">
      <label
        htmlFor={id}
        className={`${error ? "text-customRed" : "text-customWhite"} ${isRequired ? 'after:content-["*"] after:text-customRed' : ''}`}
      >
        {error ? `Ops! ${error}` : label}
      </label>
      <input
        id={id}
        onClick={handleModal}
        name={id}
        placeholder={placeholder}
        value={value}
        className="placeholder:text-customWhite outline-none bg-transparent border-b pb-1 text-customWhite select-none cursor-pointer"
        readOnly
      />
      <Icon color={`#${error ? "fa8080" : "f2f2f2"}`} onClick={handleModal} className="cursor-pointer text-customWhite absolute bottom-2 right-0" />
      {openModal && (
        <div className={`absolute flex flex-col bg-background rounded-lg w-full outline outline-1 outline-[#B7B7B8] z-50 ${topModal}`}>
          {options &&
            options.map((option) => (
              <span
                key={option}
                className="border-t border-[#B7B7B8] first:border-none py-[10px] pl-3 cursor-pointer"
                onClick={() => selectedOption(option)}
              >
                {option}
              </span>
            ))}
        </div>
      )}
    </section>
  );
}
