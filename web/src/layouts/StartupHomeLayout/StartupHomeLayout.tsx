import { createContext, useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import StartupMenuBar from 'src/components/Startup/Navigation/StartupMenuBar/StartupMenuBar'
import { startupPageClassName } from 'src/components/Startup/Navigation/StartupNavigationConsts'

type StartupHomeLayoutProps = {
  children?: React.ReactNode
}

type PageContextProps = {
  pageSelected: string
  setPageSelected: React.Dispatch<React.SetStateAction<string>>
}
export const StartupPageContext = createContext<PageContextProps>({
  pageSelected: 'Home',
  setPageSelected: () => {},
})

const StartupHomeLayout = ({ children }: StartupHomeLayoutProps) => {
  const { currentUser, reauthenticate } = useAuth()
  const [darkMode, setDarkMode] = useState('')
  const [pageSelected, setPageSelected] = useState('Home')

  useEffect(() => {
    //Navigate based on user's type
    const getData = async () => {
      await reauthenticate().then(() => {
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
    <StartupPageContext.Provider value={{ pageSelected, setPageSelected }}>
      <div className={darkMode}>
        <div className="h-screen bg-white px-4 pb-4 dark:bg-black-l1 lg:px-5 lg:pb-5 ">
          <div className="relative flex h-full flex-col gap-4  xl:mx-auto xl:max-w-screen-xl ">
            <StartupMenuBar />
            <div className={startupPageClassName}>{children}</div>
          </div>
        </div>
      </div>
    </StartupPageContext.Provider>
  )
}

export default StartupHomeLayout
