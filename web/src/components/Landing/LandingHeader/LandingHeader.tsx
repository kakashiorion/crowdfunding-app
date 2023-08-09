import { useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { HoverPrimaryTextButton } from 'src/components/Button/Button'
import SvgMenu from 'src/components/Icon/Menu'
import SvgUp from 'src/components/Icon/Up'
import SvgLogoOrig from 'src/components/Logo/LogoOrig'
import { LogoClassName } from 'src/layouts/LayoutConsts'

const LandingHeader = (props: {
  scrollRefsList: React.RefObject<HTMLDivElement>[]
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <div className="sticky top-0 z-10 flex w-full items-center justify-between rounded py-3 backdrop-blur-sm lg:py-4">
      <SvgLogoOrig className={LogoClassName} />
      <HeaderMenu size="large" scrollRefsList={props.scrollRefsList} />
      {isMenuOpen && (
        <HeaderMenu size="small" scrollRefsList={props.scrollRefsList} />
      )}
      {isMenuOpen ? (
        <SvgUp
          className={
            'flex h-7 w-7 fill-primary-l1 dark:fill-primary-l1 lg:hidden'
          }
          onClick={() => setMenuOpen(false)}
        />
      ) : (
        <SvgMenu
          className={
            'flex h-7 w-7 fill-black hover:fill-primary-d1 dark:fill-white dark:hover:fill-primary-l1 lg:hidden'
          }
          onClick={() => setMenuOpen(true)}
        />
      )}
    </div>
  )
}

type HeaderMenuProps = {
  size: string
  scrollRefsList: React.RefObject<HTMLDivElement>[]
}
const HeaderMenu = (props: HeaderMenuProps) => {
  const className = `${
    props.size == 'large'
      ? 'hidden lg:flex lg:gap-7 lg:flex-row lg:items-center lg:justify-end lg:p-0 lg:opacity-100'
      : 'absolute z-10 lg:hidden right-0 top-9 flex flex-col items-center justify-start gap-6 rounded bg-white-d1/95 py-4 px-6 dark:bg-black-l1/95 '
  }`

  //  const scrollRefsList = [investorRef, startupRef, aboutRef, contactRef]

  return (
    <div className={className}>
      <HoverPrimaryTextButton
        action={() =>
          props.scrollRefsList[0].current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
        label="INVESTORS"
      />
      <HoverPrimaryTextButton
        action={() =>
          props.scrollRefsList[1].current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
        label="STARTUPS"
      />
      <HoverPrimaryTextButton
        action={() =>
          props.scrollRefsList[2].current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
        label="ABOUT"
      />
      <HoverPrimaryTextButton
        action={() =>
          props.scrollRefsList[3].current?.scrollIntoView({
            behavior: 'smooth',
          })
        }
        label="CONTACT"
      />
      <HoverPrimaryTextButton
        action={() => navigate(routes.login())}
        label="LOGIN"
      />
    </div>
  )
}

export default LandingHeader
