import * as React from 'react'
import type { SVGProps } from 'react'
const SvgDropdown = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 96 960 960"
    {...props}
  >
    <path d="M480 696 280 497h400L480 696Z" />
  </svg>
)
export default SvgDropdown
