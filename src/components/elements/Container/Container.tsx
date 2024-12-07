interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export default function Container({ children, className }: ContainerProps) {
  const baseStyles = `
  min-w-screen min-h-screen mx-auto bg-background text-customWhite flex justify-center
`;
  return <main className={`${baseStyles} ${className}`}>{children}</main>;
}
