interface ContainerProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties
}

export default function Container({ children, className }: ContainerProps) {
  const baseStyles = `
<<<<<<< HEAD
  min-w-screen min-h-screen min-w-screen-sm md:min-w-screen-md lg:min-w-screen-lg xl:min-w-screen-xl
  mx-auto p-4 md:p-6 lg:p-8 bg-background text-customWhite flex flex-col justify-center items-center
=======
  min-w-screen min-h-screen mx-auto bg-background text-customWhite flex justify-center items-center
>>>>>>> efae4cfa22b27965024ddc9d7b683c463b7c0966
`;
  return (
    <div className={`${baseStyles} ${className}`}>
      {children}
    </div>
  )
}