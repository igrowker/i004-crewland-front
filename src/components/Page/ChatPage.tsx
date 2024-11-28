import CrewContainer from "@/components/elements/Chat/CrewContainer";
import Container from "@/components/elements/Container/Container";
import InputSearch from "@/components/elements/Inputs/InputSearch";
import { User } from "@/interfaces/postCard";
// import BackArrow from "../elements/icons/BackArrow";
import ChatsContainer from "../elements/Chat/Container/ChatsContainer";
export default function ChatPage() {
    const users:User[] = [
        {
            id: 1,
            name: "John Doe",
            imgUser: "/users/01.png"
        },
        {
            id: 2,
            name: "Jane Doe",
            imgUser: "/users/02.png"
        },
        {
            id: 3,
            name: "John Doe",
            imgUser: "/users/03.png"
        },
        {
            id: 4,
            name: "Jane Doe",
            imgUser: "/users/02.png"
        },
        {
            id: 5,
            name: "John Doe",
            imgUser: "/users/03.png"
        }
    ]
    return (
        <Container className="flex flex-col px-4 gap-6">
            {/* <BackArrow /> */}
            <h1>Sala de chat</h1>
            <InputSearch />
            <CrewContainer users={users}/>
            <ChatsContainer />
        </Container>
    );
};