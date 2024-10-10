import { SVGProps } from 'react'

export const SearchIcon = ({ size = 24, color = 'currentColor', ...props }: SVGProps<SVGSVGElement> & { size?: number, color?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={2}
    stroke={color}
    width={size}
    height={size}
    {...props}
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M11 4a7 7 0 110 14 7 7 0 010-14z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-4.35-4.35"
    />
  </svg>
)
