import { Bookmark, Heart, Share2 } from "lucide-react";

export const icons = (icon: { favorite: boolean; like: boolean }) => [
  {
    icon: Share2,
    key: "",
    status: false,
  },
  {
    icon: Bookmark,
    key: "favorite",
    status: icon.favorite,
  },
  {
    icon: Heart,
    key: "like",
    status: icon.like,
  },
];
