"use client"
import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

interface inputSelectProps {
  label?: string;
  isRequired?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
  options?: string[];
  placeholder?: string;
  topModal?: string; // Esta propiedad es para calibrar la distancia entre el input y modal
}

export default function InputSelect({ label, isRequired, onChange, error, placeholder, options, topModal }: inputSelectProps) {
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [option, setOption] = useState<string>("");
  const Icon = openModal ? ChevronUp : ChevronDown;

  const selectedOption = (option: string) => {
    setOpenModal(false)
    setOption(option)

    // Simulacion de un onChange
    if (onChange) {
      const event = {
        target: {
          name: "gender",
          value: option,
        },
      } as React.ChangeEvent<HTMLInputElement>;
      onChange(event);
    }
  }
  const handleModal = () => setOpenModal(!openModal);

  return (
    <section className="flex flex-col gap-2 relative">
      <label 
        htmlFor="gender"
        className={`
          ${error ? "text-customRed": "text-customWhite"}
          ${isRequired ? 'after:content-["*"] after:text-customRed' : ''} 
        `}
      >
        {error ? `Ops! ${error}` : label}
      </label>
      <input
        id="gender"
        onClick={handleModal}
        name="gender"
        placeholder={placeholder}
        value={option}
        className="placeholder:text-customWhite outline-none bg-transparent border-b pb-1 text-customWhite select-none cursor-pointer"
        readOnly
      />
      <Icon
        color={`#${error ? "fa8080" : "f2f2f2"}`}
        onClick={handleModal}
        className="cursor-pointer text-customWhite absolute bottom-2 right-0"
      />
      {openModal && (
        <div className={`absolute flex flex-col bg-background rounded-lg w-full outline outline-1 outline-[#B7B7B8] z-50 ${topModal}`}>
          {options && options.map((option) => (
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
  )
}
