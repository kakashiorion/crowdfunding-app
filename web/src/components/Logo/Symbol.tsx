import * as React from 'react'
import type { SVGProps } from 'react'
const SvgSymbol = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={8}
    height={26}
    fill="none"
    viewBox="0 0 8 26"
    {...props}
  >
    <g clipPath="url(#Symbol_svg__a)">
      <path fill="#4B27AE" d="M1.5 5.35 4 5v21l-2-2.8-2-1.794 1-8.356.5-7.7Z" />
      <path fill="#694AC1" d="M6.5 5.35 4 5v21l2-2.8 2-1.794-1-7.656-.5-8.4Z" />
      <path
        fill="#A0B831"
        d="M4 22.333a1 1 0 1 0 0-2 1 1 0 0 0 0 2ZM4 4a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"
      />
    </g>
    <defs>
      <clipPath id="Symbol_svg__a">
        <path fill="#fff" d="M0 0h8v26H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSymbol
