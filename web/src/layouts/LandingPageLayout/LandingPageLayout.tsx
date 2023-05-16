import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type LandingPageLayoutProps = {
  children?: React.ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  const { currentUser } = useAuth()
  const [darkMode, setDarkMode] = useState('')

  useEffect(() => {
    if (currentUser?.type == 'STARTUP') {
      navigate(routes.startupHome(), { replace: true })
    } else if (currentUser?.type == 'INVESTOR') {
      navigate(routes.investorHome(), { replace: true })
    }
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode('dark')
    }
  }, [currentUser?.type])
  return (
    <div className={darkMode}>
      <div className="bg-white px-4 dark:bg-black-l1 lg:px-5 ">{children}</div>
    </div>
  )
}

export default LandingPageLayout
