import Link from 'next/link'
import React from 'react'

interface ButtonLinkProps {
  href?: string
  type?: "button" | "submit"
  className?: string
  text?: React.ReactNode
  details: string
  onClick?: () => void
}

export default function ButtonLink({ href, className, text, type, details, onClick }: ButtonLinkProps) {
  return href ? (
    <Link href={href} className={className} aria-label={details}>
      {text}
    </Link>
  ) : (
    <button type={type} className={className} onClick={onClick} aria-label={details}>
      {text}
    </button>
  )
}
