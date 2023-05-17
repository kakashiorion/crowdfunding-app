import { createContext, useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { investorPageClassName } from 'src/components/Investor/Navigation/InvestorNavigationConsts'
import InvestorTopBar from 'src/components/Investor/Navigation/InvestorTopBar/InvestorTopBar'

type InvestorHomeLayoutProps = {
  children?: React.ReactNode
}

type InvestorPageContextProps = {
  pageSelected: string
  setPageSelected: React.Dispatch<React.SetStateAction<string>>
}

export const InvestorPageContext = createContext<InvestorPageContextProps>({
  pageSelected: 'Home',
  setPageSelected: () => {},
})

const InvestorHomeLayout = ({ children }: InvestorHomeLayoutProps) => {
  const { currentUser } = useAuth()
  const [darkMode, setDarkMode] = useState('')
  const [pageSelected, setPageSelected] = useState('Home')

  //TODO: Phase 2 - Implment isUserOnline feature
  useEffect(() => {
    //Navigate based on user's type
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
    //Set dark mode
    if (currentUser?.prefersTheme == 'DARK') {
      setDarkMode('dark')
    } else if (currentUser?.prefersTheme == 'SYSTEM') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode('dark')
      }
    }
  }, [currentUser?.type, currentUser?.isOnboarded, currentUser?.prefersTheme])
  return (
    <InvestorPageContext.Provider value={{ pageSelected, setPageSelected }}>
      <div className={darkMode}>
        <div className="h-screen bg-white px-4 pb-4 dark:bg-black-l1 lg:px-5 lg:pb-5 ">
          <div className="relative flex h-full flex-col gap-4  xl:mx-auto xl:max-w-screen-xl ">
            <InvestorTopBar />
            <div className={investorPageClassName}>{children}</div>
          </div>
        </div>
      </div>
    </InvestorPageContext.Provider>
  )
}

export default InvestorHomeLayout
