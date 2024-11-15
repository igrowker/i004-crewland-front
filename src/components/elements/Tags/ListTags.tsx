"use client";

import RegisterTags from "./RegisterTags";
import { useState } from "react";

type TagsListProps = {
    tags: string[];
};

export default function TagsList({ tags }: TagsListProps) {
    const [selectedTags, setSelectedTags] = useState<string[]>([]);

    const toggleTag = (tag: string) => {
        setSelectedTags((prevTags) =>
            prevTags.includes(tag) ? prevTags.filter((t) => t !== tag) : [...prevTags, tag]
        );
    };

    return (
        <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
                <RegisterTags
                    key={tag}
                    text={tag}
                    isSelected={selectedTags.includes(tag)}
                    onClick={() => toggleTag(tag)}
                />
            ))}
        </div>
    );
}
