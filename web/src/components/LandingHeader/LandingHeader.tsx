import { useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import CloseIcon from '../../../public/icons/close.svg'
import MenuIcon from '../../../public/icons/menu.svg'
import Logo from '../../../public/logo/DealbariLogo.svg'
import { HoverPrimaryTextButton, PrimaryOutlineButton } from '../Button/Button'

const LandingHeader = (props: {
  scrollRefsList: React.RefObject<HTMLDivElement>[]
}) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  return (
    <div className="sticky top-0 z-10 flex h-8 w-full items-center justify-between rounded-sm bg-white-d1/30 px-4  backdrop-blur-sm dark:bg-black-l1/60 lg:h-10 lg:px-5  ">
      <Logo className="h-6 w-10 lg:h-8 lg:w-12" />
      <HeaderMenu size="large" scrollRefsList={props.scrollRefsList} />
      {isMenuOpen && (
        <HeaderMenu size="small" scrollRefsList={props.scrollRefsList} />
      )}
      {isMenuOpen ? (
        <CloseIcon
          className="flex h-6 w-6 fill-black dark:fill-white lg:hidden"
          onClick={() => setMenuOpen(false)}
        ></CloseIcon>
      ) : (
        <MenuIcon
          className="flex h-6 w-6 fill-black dark:fill-white lg:hidden"
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
  let className = ''
  if (props.size == 'large') {
    className =
      'hidden lg:flex gap-6 lg:flex-row lg:items-center lg:justify-end lg:gap-6 lg:bg-transparent  lg:p-0 lg:opacity-100 lg:dark:bg-transparent '
  } else {
    className =
      'absolute z-10 lg:hidden right-4 top-9 flex flex-col items-center justify-start gap-5 rounded-sm bg-white-d1 py-4 px-6 dark:bg-black-l1 '
  }

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
      <PrimaryOutlineButton
        action={() => navigate(routes.login())}
        label="LOGIN"
      />
    </div>
  )
}

export default LandingHeader
