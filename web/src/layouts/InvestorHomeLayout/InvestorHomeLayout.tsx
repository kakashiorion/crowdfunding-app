import { createContext, useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import InvestorTopBar from 'src/components/Investor/Navigation/InvestorTopBar/InvestorTopBar'

type InvestorHomeLayoutProps = {
  children?: React.ReactNode
}

type MenuContextProps = {
  isMenuOpen: boolean
  setMenuOpen: React.Dispatch<React.SetStateAction<boolean>>
}

export const MenuOpenContext = createContext<MenuContextProps>({
  isMenuOpen: false,
  setMenuOpen: () => {},
})

const InvestorHomeLayout = ({ children }: InvestorHomeLayoutProps) => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  const { currentUser } = useAuth()

  //TODO: Phase 2 - Implment isUserOnline feature
  useEffect(() => {
    if (currentUser?.type == 'STARTUP') {
      navigate(routes.startupHome(), { replace: true })
    } else if (currentUser?.type == 'GUEST') {
      navigate(routes.landing(), { replace: true })
    } else if (
      currentUser?.type == 'INVESTOR' &&
      currentUser?.isOnboarded == false
    ) {
      navigate(routes.investorOnboarding(), { replace: true })
    }
  }, [currentUser?.type, currentUser?.isOnboarded])
  return (
    <MenuOpenContext.Provider value={{ isMenuOpen, setMenuOpen }}>
      <div className="h-screen bg-white px-4 dark:bg-black-l1 lg:px-5 ">
        <div className="relative flex h-full w-full flex-col xl:mx-auto xl:max-w-screen-xl ">
          <InvestorTopBar setMenuOpen={setMenuOpen} isMenuOpen={isMenuOpen} />
          {children}
        </div>
      </div>
    </MenuOpenContext.Provider>
  )
}

export default InvestorHomeLayout
