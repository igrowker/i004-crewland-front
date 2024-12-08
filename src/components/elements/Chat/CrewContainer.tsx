/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { ChevronRight } from "lucide-react";
import CrewCard from "./Card/CrewCard";
// import { User } from "@/interfaces/publication";

export default function CrewContainer({ users } : any) {
  console.log(users);

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