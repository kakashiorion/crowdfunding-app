import * as React from 'react'
import type { SVGProps } from 'react'
const SvgAbout = (props: SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={48}
    height={48}
    viewBox="0 96 960 960"
    {...props}
  >
    <path d="M140 976q-24 0-42-18t-18-42V436q0-24 18-42t42-18h237V236q0-24 18-42t42-18h87q24 0 42 18t18 42v140h236q24 0 42 18t18 42v480q0 24-18 42t-42 18H140Zm0-60h680V436H584q0 28-18.5 44T519 496h-78q-27 0-45.5-16T377 436H140v480Zm92-107h239v-14q0-18-9-32t-23-19q-32-11-50-14.5t-35-3.5q-19 0-40.5 4.5T265 744q-15 5-24 19t-9 32v14Zm336-67h170v-50H568v50Zm-214-50q22.5 0 38.25-15.75T408 638q0-22.5-15.75-38.25T354 584q-22.5 0-38.25 15.75T300 638q0 22.5 15.75 38.25T354 692Zm214-63h170v-50H568v50ZM437 436h87V236h-87v200Zm43 240Z" />
  </svg>
)
export default SvgAbout
