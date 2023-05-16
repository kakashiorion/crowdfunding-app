import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type StartupOnboardingLayoutProps = {
  children?: React.ReactNode
}

const StartupOnboardingLayout = ({
  children,
}: StartupOnboardingLayoutProps) => {
  const { currentUser } = useAuth()
  const [darkMode, setDarkMode] = useState('')

  useEffect(() => {
    if (currentUser?.type == 'INVESTOR') {
      navigate(routes.investorOnboarding(), { replace: true })
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
  }, [currentUser?.isOnboarded, currentUser?.prefersTheme, currentUser?.type])
  return (
    <div className={darkMode}>
      <div className="h-screen bg-white px-4 dark:bg-black-l1 lg:px-5 ">
        <div className="flex h-full flex-col xl:mx-auto xl:max-w-screen-xl ">
          {children}
        </div>
      </div>
    </div>
  )
}

export default StartupOnboardingLayout
