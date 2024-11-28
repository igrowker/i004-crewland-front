interface SelectYearsProps {
  monthName: string
  selectedYear: (yearOption: number) => void
}

export default function SelectYears({monthName, selectedYear}: SelectYearsProps) {

  // Generar los años disponibles desde 1970 hasta el año actual
  const generateYears = () => {
    const currentYear = new Date().getFullYear();
    const years = [];
    for (let year = 1970; year <= currentYear; year++) {
      years.push(year);
    }
    return years;
  };

  return (
    <div className="scrollbar-custom bg-background max-h-72 w-36 overflow-hidden overflow-y-auto border rounded-md shadow-lg absolute top-8 text-sm">
      <ul>
        {generateYears().map((yearOption) => (
          <li
            key={yearOption}
            onClick={() => selectedYear(yearOption)}
            className="cursor-pointer py-2"
          >
            {`${monthName} ${yearOption}`}
          </li>
        ))}
      </ul>
    </div>
  )
}
