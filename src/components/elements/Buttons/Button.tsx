import Link from "next/link";

type ButtonProps = {
    text: string;
    variant?: 'primary' | 'ghost';
    icon?: React.ReactNode;
    width?: string;
    height?: string;
    onClick?: () => void;
    font?: boolean;
    href?: string;
};

export default function Button({
    text,
    variant = 'primary',
    icon,
    width = 'auto',
    height = 'auto',
    onClick,
    href,
}: ButtonProps) {

    const buttonStyles = {
        primary: 'bg-primary text-black hover:scale-105 transform transition duration-300 ease-in-out',
        ghost: 'border border-customGray text-white bg-transparent hover:scale-105 transform transition duration-300 ease-in-out'
    };

    const content = (
        <span
            style={{ width, height,}}
            className={`rounded-lg px-4 py-2 flex items-center justify-center min-w-80 ${buttonStyles[variant]}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </span>
    );

    return href ? (
        <Link href={href}>
            <a onClick={onClick} className="inline-block">{content}</a>
        </Link>
    ) : (
        <button onClick={onClick} className="inline-block">{content}</button>
    );
}