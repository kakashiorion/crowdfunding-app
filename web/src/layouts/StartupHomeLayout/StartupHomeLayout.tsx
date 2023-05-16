import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type StartupHomeLayoutProps = {
  children?: React.ReactNode
}

const StartupHomeLayout = ({ children }: StartupHomeLayoutProps) => {
  // const [isMenuOpen, setMenuOpen] = useState(false)
  const { currentUser } = useAuth()
  const [darkMode, setDarkMode] = useState('')

  useEffect(() => {
    // console.log(currentUser)
    //Navigate based on user's type
    if (currentUser?.type == 'INVESTOR') {
      navigate(routes.investorHome(), { replace: true })
    } else if (currentUser?.type == 'GUEST') {
      navigate(routes.landing(), { replace: true })
    } else if (
      currentUser?.type == 'STARTUP' &&
      currentUser?.isOnboarded == false
    ) {
      navigate(routes.startupOnboarding(), { replace: true })
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
    <div className={darkMode}>
      <div className="h-screen bg-white px-4 dark:bg-black-l1 lg:px-5 ">
        <div className="flex h-full xl:mx-auto xl:max-w-screen-xl ">
          {children}
        </div>
      </div>
    </div>
  )
}

export default StartupHomeLayout
