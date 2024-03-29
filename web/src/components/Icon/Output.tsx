import * as React from 'react'
import type { SVGProps } from 'react'
const SvgOutput = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 -960 960 960"
    {...props}
  >
    <path d="M180-120q-24 0-42-18t-18-42v-600q0-24 18-42t42-18h600q24 0 42 18t18 42v90h-60v-90H180v600h600v-90h60v90q0 24-18 42t-42 18H180Zm513-174-42-42 113-114H383v-60h381L651-624l42-42 186 186-186 186Z" />
  </svg>
)
export default SvgOutput
