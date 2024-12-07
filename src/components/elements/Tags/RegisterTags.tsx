type TagsProps = {
    text: string;
    isSelected: boolean;
    onClick?: () => void;
};

export default function RegisterTags({
    text,
    isSelected,
    onClick,
}: TagsProps) {

    const base =
        'bg-transparent rounded-full px-4 py-2 flex items-center justify-center border transition duration-300 ease-in-out cursor-pointer';
    const selected =
        'text-white border-customWhite';
    const unselected =
        'text-white border-customWhite hover:bg-gray-800';

    const buttonStyles = isSelected ? selected : unselected;

    return (
        <label
            onClick={onClick}
            className={`${base} ${buttonStyles}`}
        >
            <input
                type="checkbox"
                checked={isSelected}
                onChange={onClick}
                className="hidden"
            />
            <span
                className={`w-3 h-3 rounded-full mr-2 ${
                    isSelected ? 'bg-purple-400 outline outline-offset-1 outline-1' : 'bg-transparent border border-customWhite'
                }`}
            ></span>
            {text}
        </label>
    );
}
