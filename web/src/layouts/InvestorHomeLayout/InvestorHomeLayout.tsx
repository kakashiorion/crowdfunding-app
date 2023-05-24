import { createContext, useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { investorPageClassName } from 'src/components/Investor/Navigation/InvestorNavigationConsts'
import InvestorTopBar from 'src/components/Investor/Navigation/InvestorTopBar/InvestorTopBar'

import {
  HomeLayoutWrapperClassName,
  HomePageWrapperClassName,
} from '../LayoutConsts'

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
  const { currentUser, reauthenticate } = useAuth()
  const [darkMode, setDarkMode] = useState('')
  const [pageSelected, setPageSelected] = useState('Home')

  //TODO: Phase 2 - Implment isUserOnline feature
  useEffect(() => {
    //Navigate based on user's type
    const getData = async () => {
      await reauthenticate().then(() => {
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
      })
    }
    getData()
  }, [
    currentUser?.type,
    currentUser?.isOnboarded,
    currentUser?.prefersTheme,
    reauthenticate,
  ])
  return (
    <InvestorPageContext.Provider value={{ pageSelected, setPageSelected }}>
      <div id="darkModeWrapper" className={darkMode}>
        <div id="layoutWrapper" className={HomeLayoutWrapperClassName}>
          <div id="pageWrapper" className={HomePageWrapperClassName}>
            <InvestorTopBar />
            <div className={investorPageClassName}>{children}</div>
          </div>
        </div>
      </div>
    </InvestorPageContext.Provider>
  )
}

export default InvestorHomeLayout
