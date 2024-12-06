import AvatarGroup from "../../Avatar/AvatarGroup";
import { User } from "@/interfaces/publication";

export default function CrewCard({ users } : { users: User[] }) {  
  return (
    <div className="flex flex-col w-40 rounded-xl bg-primary p-2.5 gap-5 text-black">
        <p className="text-lg">Titulo Blablaba</p>
        <div className="flex w-full place-content-between items-center text-xs">
            <AvatarGroup users={users}/>
            20:30
        </div>
    </div>
  )
}