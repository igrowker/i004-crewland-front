import Image from "next/image"

export default function Avatar({ 
  src, 
  alt, 
  width, 
  height,
  className
}: {
  src: string,
  alt: string,
  width: number,
  height: number,
  className?: string
}) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
    />
  )
}