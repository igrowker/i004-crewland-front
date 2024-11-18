import React from 'react';

type TitleProps = {
    text: string;
    size?: 'small' | 'medium' | 'large';
    color?: string;
    align?: 'left' | 'center' | 'right';
    weight?: 'bold' | 'extrabold' | 'black';
    className?: string;
};

export default function Title({
    text,
    size = 'medium',
    color = 'text-customWhite',
    align = 'center',
    weight = 'bold',
    className = '',
}: TitleProps) {

    const sizeStyles = {
        small: 'text-sm',
        medium: 'text-xl md:text-2xl',
        large: 'text-3xl md:text-4xl',
    };

    const weightStyles = {
        bold: 'font-bold',
        extrabold: 'font-extrabold',
        black: 'font-black',
    };

    const titleStyles = `font-title ${sizeStyles[size]} ${weightStyles[weight]} ${color} text-${align} ${className}`;

    return <h1 className={titleStyles}>{text}</h1>;
}
