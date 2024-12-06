import { ChevronRight } from "lucide-react";
import CrewCard from "./Card/CrewCard";
import { User } from "@/interfaces/publication";

export default function CrewContainer({ users } : { users: User[] }) {
  return (
    <div className="flex flex-col w-full gap-4">
        <div className="flex place-content-between">
            <h1>Mis grupos Crew</h1>
            <ChevronRight />
        </div>
        <CrewCard users={users} />
    </div>
  )
}