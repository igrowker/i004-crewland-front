import { ChevronDown, ChevronLeft, ChevronRight, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import "./Calendar.css";
import SelectYears from "./SelectYears";


interface propCalendar {
  selectedDate: (modal: boolean, date?: string) => void
}

export default function Calendar({ selectedDate }: propCalendar) {
  // Estado para almacenar la fecha actual
  const [currentDate, setCurrentDate] = useState<Date>(new Date());
  const [isYearDropdownOpen, setIsYearDropdownOpen] = useState<boolean>(false);
  const [selecDate, setSelectDate] = useState<string>("");
  const Icon = isYearDropdownOpen ? ChevronDown: ChevronUp;

  // Función para cambiar el mes
  const changeMonth = (direction: number) => {
    const newDate = new Date(currentDate);
    newDate.setMonth(currentDate.getMonth() + direction);
    setCurrentDate(newDate);
  };

  // Función para formatear la fecha
  const formatDate = (date: Date) => {
    const day = String(date.getDate()).padStart(2, "0"); // DD
    const month = String(date.getMonth() + 1).padStart(2, "0"); // MM
    const year = date.getFullYear(); // AAAA
    return `${year}-${month}-${day}`;
  };

  // Función para generar los días del mes
  const generateDays = () => {
    const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();
    const firstDayOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1).getDay();

    const days = [];

    // Ajustar el primer día para que siempre comience desde domingo (0)
    const offset = firstDayOfMonth === 0 ? 0 : firstDayOfMonth;

    // Añadir días vacíos antes del primer día del mes (para comenzar desde domingo)
    for (let i = 0; i < offset; i++) {
      days.push(<div key={`empty-${i}`} className="day empty"></div>);
    }

    // Añadir los días del mes
    for (let day = 1; day <= daysInMonth; day++) {
      days.push(
        <div
          key={day}
          onClick={() => {
            const selected = new Date(currentDate.getFullYear(), currentDate.getMonth(), day);
            selectedDate(true , formatDate(selected))
            setSelectDate(formatDate(selected))
          }}
          className="grid place-items-center h-10 w-10 cursor-pointer hover:bg-primary rounded-full"
        >
          {day}
        </div>
      );
    }

    // Asegurarse de que el mes se llene con suficientes celdas
    const totalCells = Math.ceil((daysInMonth + offset) / 7) * 7; // Rellenar hasta el final de la semana
    const emptyCells = totalCells - days.length;

    // Añadir celdas vacías al final del mes si es necesario
    for (let i = 0; i < emptyCells; i++) {
      days.push(<div key={`empty-end-${i}`} className="day empty"></div>);
    }

    return days;
  };

  const selectedYear = (yearOption: number) => {
    const newDate = new Date(currentDate);
    newDate.setFullYear(yearOption);
    setCurrentDate(newDate);
    setIsYearDropdownOpen(false);
  }

  const weekDays = ["D", "L", "M", "MI", "J", "V", "S"];

  // Obtener el nombre del mes y el año actual
  const monthName = currentDate.toLocaleString('default', { month: 'long' });
  const year = currentDate.getFullYear();

  return (
    <article className="text-center outline outline-1 rounded-lg p-4 top-[70px] z-[100] bg-background select-none">
      <section className="flex justify-between items-center mb-4">
        {/* MES Y ANO ACTUAL */}
        <div className="relative flex items-center gap-1">
          <span onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)} className="cursor-pointer">
            {`${monthName} ${year}`}
          </span>
          <Icon 
            size={20} 
            onClick={() => setIsYearDropdownOpen(!isYearDropdownOpen)}
            className="cursor-pointer"
          />
          {isYearDropdownOpen && <SelectYears monthName={monthName}  selectedYear={selectedYear}/>}
        </div>

        {/* CAMBIO DE MESES */}
        <div className="flex gap-5">
          <ChevronLeft onClick={() => changeMonth(-1)} className="cursor-pointer" />
          <ChevronRight onClick={() => changeMonth(1)} className="cursor-pointer" />
        </div>
      </section>

      {/* DIAS DE LA SEMANA */}
      <section className="grid grid-cols-7 gap-4 pt-3 pb-2">
        {weekDays.map((day) => (
          <span key={day}>{day}</span>
        ))}
      </section>

      {/* NUMERO DE DIAS X MES */}
      <div className="grid grid-cols-7 gap-2 place-items-center mt-2">
        {generateDays()}
      </div>

      <section className="flex gap-4 mt-4">
        <button
          onClick={()=>selectedDate(false, "")}
          className='bg-primary text-background rounded-lg w-full py-2 hover:bg-primaryHover transition font-medium'
        >
          Cancelar
        </button>
        <button
          onClick={()=>selectedDate(false, selecDate)}
          className='bg-primary text-background rounded-lg w-full py-2 hover:bg-primaryHover transition font-medium'
        >
          Guardar
        </button>
      </section>
    </article>
  );
};
