import Link from "next/link";

type ButtonProps = {
    submit?: boolean;
    text: string;
    variant?: 'primary' | 'ghost';
    icon?: React.ReactNode;
    onClick?: () => void;
    href?: string;
    className?: string;
    target?: string
};

export default function Button({
    submit = false,
    text,
    variant = 'primary',
    icon,
    onClick,
    href,
    className = '',
    target
}: ButtonProps) {

    const buttonStyles = {
        primary: 'bg-primary text-black hover:scale-105 transform transition duration-300 ease-in-out',
        ghost: 'border border-customGray text-white bg-transparent hover:scale-105 transform transition duration-300 ease-in-out'
    };

    const content = (
        <span
            className={`rounded-lg px-4 py-2 flex items-center justify-center ${buttonStyles[variant]} ${className}`}
        >
            {icon && <span className="mr-2">{icon}</span>}
            {text}
        </span>
    );

    return href ? (
        <Link href={href} className={className} target={target}>
            {content}
        </Link>
    ) : (
        <button onClick={onClick} type={submit ? 'submit' : 'button'} className="inline-block">{content}</button>
    );
}