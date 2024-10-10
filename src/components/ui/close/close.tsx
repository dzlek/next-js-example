import { FC } from 'react'

type CloseProps = {
  size?: number
  color?: string
  onClick?: () => void
}

export const Close: FC<CloseProps> = ({ size = 24, color = 'black', onClick }) => {
  return (
    <svg
      onClick={onClick}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color}
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      role="button"
      aria-label="Close"
      style={{ cursor: 'pointer' }}
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  )
}
