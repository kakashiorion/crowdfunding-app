import * as React from 'react'
import type { SVGProps } from 'react'
const SvgMenu = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 96 960 960"
    {...props}
  >
    <path d="M120 816v-60h720v60H120Zm0-210v-60h720v60H120Zm0-210v-60h720v60H120Z" />
  </svg>
)
export default SvgMenu
