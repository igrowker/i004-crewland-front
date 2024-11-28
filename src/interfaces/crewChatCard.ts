interface Participant {
    id: string;
    name: string;
    avatar: string;
}

interface ChatGroup {
    id: string;
    name: string;
    time: string;
    participants: Participant[];
}

interface Chat {
    id: string;
    title: string;
    chatGroups: ChatGroup[];
}

export interface ICrewChatCard {
    chat: Chat;
}