import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

import { LayoutWrapperClassName, PageWrapperClassName } from '../LayoutConsts'

type InvestorOnboardingLayoutProps = {
  children?: React.ReactNode
}

const InvestorOnboardingLayout = ({
  children,
}: InvestorOnboardingLayoutProps) => {
  const { currentUser } = useAuth()
  const [darkMode, setDarkMode] = useState('')

  useEffect(() => {
    if (currentUser?.type == 'STARTUP') {
      navigate(routes.startupOnboarding(), { replace: true })
    } else if (currentUser?.type == 'GUEST') {
      navigate(routes.landing(), { replace: true })
    }
    //Set dark mode
    if (currentUser?.prefersTheme == 'DARK') {
      setDarkMode('dark')
    } else if (currentUser?.prefersTheme == 'SYSTEM') {
      if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setDarkMode('dark')
      }
    }
  }, [currentUser?.prefersTheme, currentUser?.type])
  return (
    <div id="darkModeWrapper" className={darkMode}>
      <div id="layoutWrapper" className={LayoutWrapperClassName}>
        <div id="pageWrapper" className={PageWrapperClassName}>
          {children}
        </div>
      </div>
    </div>
  )
}

export default InvestorOnboardingLayout
