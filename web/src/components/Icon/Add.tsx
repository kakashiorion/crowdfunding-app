import * as React from 'react'
import type { SVGProps } from 'react'
const SvgAdd = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 96 960 960"
    {...props}
  >
    <path d="M450 856V606H200v-60h250V296h60v250h250v60H510v250h-60Z" />
  </svg>
)
export default SvgAdd
