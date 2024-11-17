interface ContainerProps {
    children: React.ReactNode;
    className?: string;
}

export default function Container({ children, className }: ContainerProps) {
    const baseStyles = 'min-w-screen min-h-screen bg-background text-customWhite flex justify-center items-center p-8'
  return (
    <div className={`${baseStyles} ${className}`}>
        {children}
    </div>
  )
}