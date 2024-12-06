import { publicationInterface } from "@/interfaces/publication";
import { useState } from "react";

export default function usePost() {
  const [createdPost, setCreatedPost] = useState<publicationInterface>({
    type: "",
    title: "",
    details: "",
    maxParticipants: 0,
    participants: [],
  });

  const handleChange = (e: React.ChangeEvent<(HTMLInputElement | HTMLTextAreaElement)>) => {
    const { name, value } = e.target;
    setCreatedPost((prev) => ({ ...prev, [name]: value }));
  };

  return { createdPost, setCreatedPost, handleChange };
}
