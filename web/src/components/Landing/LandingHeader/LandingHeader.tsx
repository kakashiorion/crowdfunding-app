import { useState } from 'react'

import MenuIcon from 'public/icons/menu.svg'
import UpIcon from 'public/icons/up.svg'
import Logo from 'public/logo/LogoOrig.svg'

import { navigate, routes } from '@redwoodjs/router'

import { HoverPrimaryTextButton } from 'src/components/Button/Button'
import { LogoClassName } from 'src/layouts/LayoutConsts'

const LandingHeader = (props: {
  scrollRefsList: React.RefObject<HTMLDivElement>[]
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <div className="sticky top-0 z-10 flex w-full items-center justify-between rounded py-2 backdrop-blur-sm lg:py-3">
      <Logo
        className={LogoClassName}
        onClick={() => navigate(routes.landing())}
      />
      <HeaderMenu size="large" scrollRefsList={props.scrollRefsList} />
      {isMenuOpen && (
        <HeaderMenu size="small" scrollRefsList={props.scrollRefsList} />
      )}
      {isMenuOpen ? (
        <UpIcon
          className={
            'flex h-7 w-7 fill-primary-l1 dark:fill-primary-l1 lg:hidden'
          }
          onClick={() => setMenuOpen(false)}
        />
      ) : (
        <MenuIcon
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
        action={() => props.scrollRefsList[0].current?.scrollIntoView()}
        label="INVESTORS"
      />
      <HoverPrimaryTextButton
        action={() => props.scrollRefsList[1].current?.scrollIntoView()}
        label="STARTUPS"
      />
      <HoverPrimaryTextButton
        action={() => props.scrollRefsList[2].current?.scrollIntoView()}
        label="ABOUT"
      />
      <HoverPrimaryTextButton
        action={() => props.scrollRefsList[3].current?.scrollIntoView()}
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
