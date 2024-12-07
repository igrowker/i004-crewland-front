import Avatar from "../../Avatar/UniqueAvatar/Avatar";

export default function ChatsContainer() {
    const CHATS = [
        {
            avatar: "/users/01.png",
            username: "Pepito Grillo",
            message: "Hola, como va, yo estaré por Palermo. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Incidunt delectus earum, nihil sit totam, magnam maiores debitis molestiae aspernatur, iste et vel quo consequuntur repudiandae laudantium necessitatibus dignissimos labore consectetur.",
        },
        {
            avatar: "/users/02.png",
            username: "Juanita Pérez",
            message: "¡Hola! Bien, gracias. ¿Y tú?",
        },
        {
            avatar: "/users/03.png",
            username: "María Rodríguez",
            message: "¡Hola! Bien, gracias. ¿Y tú?",
        },
        {
            avatar: "/users/04.png",
            username: "José López",
            message: "¡Hola! Bien, gracias. ¿Y tú?",
        },
        {
            avatar: "/users/05.png",
            username: "Ana García",
            message: "¡Hola! Bien, gracias. ¿Y tú?",
        },
        {
            avatar: "/users/06.png",
            username: "Pedro Martínez",
            message: "¡Hola! Bien, gracias. ¿Y tú?",
        },
        {
            avatar: "/users/07.png",
            username: "Sofía Pérez",
            message: "¡Hola! Bien, gracias. ¿Y tú?",
        },
        {
            avatar: "/users/08.png",
            username: "Carlos García",
            message: "¡Hola! Bien, gracias. ¿Y tú?",
        },
        {
            avatar: "/users/09.png",
            username: "Lucía Martínez",
            message: "¡Hola! Bien, gracias. ¿Y tú?",
        },
        {
            avatar: "/users/10.png",
            username: "Juanita López",
            message: "¡Hola! Bien, gracias. ¿Y tú?",
        }
    ]
    const isNewMessage = true;
  return (
    <div className="flex flex-col w-full">
      {CHATS.map((chat, index) => (
        <div key={index} className="flex justify-between items-center gap-4 w-full border-b p-2 border-customGray">
          <Avatar src={chat.avatar} alt="Image avatar" width={50} height={50} className="flex-shrink-0"/>
          <div className="flex flex-col flex-grow overflow-hidden">
            <h2 className="text-xl text-ellipsis whitespace-nowrap overflow-hidden">{chat.username}</h2>
            <p className="text-customGray text-sm text-ellipsis whitespace-nowrap overflow-hidden">{chat.message}</p>
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