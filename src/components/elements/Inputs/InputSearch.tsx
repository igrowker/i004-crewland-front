import { Search, ListFilter } from "lucide-react"

export default function InputSearch() {
  return (
    <div className="flex justify-center items-center gap-2 w-full">
      <div className="flex items-center justify-center relative w-full">
          <Search className="absolute left-3 size-4" />
          <input type="text" placeholder="Buscar un Chat o un grupo" className="bg-transparent border border-customGray rounded-full pl-9 py-2 w-full" />
      </div>
      <ListFilter className="size-5"/>
    </div>
  )
}