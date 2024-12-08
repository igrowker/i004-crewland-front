/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
import { useRouter } from "next/navigation";
import Avatar from "../../Avatar/UniqueAvatar/Avatar";

export default function ChatsContainer({ chats }: any) {
  const router = useRouter();
  // console.log("CHATS DESDE CHATSCONTAINER");
  // console.log(chats);
  
  const isNewMessage = true;
  return (
    <div className="flex flex-col w-full">
      {chats.map((chat: object, index: number) => (
        <div onClick={() => {
          router.push(`http://localhost:3001/chat/one-to-one/${chats[index]["id"]}`) //cambiar ruta para q no este hardcodeada
          }} key={chats[index]["id"]} className="flex justify-between items-center gap-4 w-full border-b p-2 border-customGray">
          <Avatar src={chats[index]["image"]} alt="Image avatar" width={50} height={50} className="flex-shrink-0" />
          <div className="flex flex-col flex-grow overflow-hidden">
            <h2 className="text-xl text-ellipsis whitespace-nowrap overflow-hidden">{chats[index]["name"]}</h2>
            <p className="text-customGray text-sm text-ellipsis whitespace-nowrap overflow-hidden">Nuevo mensaje</p>
          </div>
          <div className="flex flex-col justify-center items-center flex-shrink-0">
            <p className="text-xs text-customGray">12:30</p>
            {isNewMessage && (
              <span className="bg-primary text-black rounded-full size-6 text-center">
                1
              </span>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}


