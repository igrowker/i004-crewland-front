import { User } from "@/interfaces/publication";
import Avatar from "./UniqueAvatar/Avatar";


export default function AvatarGroup({ users } : { users: User[] }) {    
  return (
    <ul className="flex flex-1 items-center -space-x-1.5">
        {
            users.slice(0,3).map((user) => (
                <li key={user.id} className="relative">
                    <Avatar src={user.imgUser} alt={user.name} width={25} height={25}/>
                </li>
            ))
        }
        {
            users.length > 3 && <p className="z-10 font-medium text-xs pl-0.5">+{users.length - 3}</p>
        }
    </ul>
  )
}