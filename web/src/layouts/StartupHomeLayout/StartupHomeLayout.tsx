import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type StartupHomeLayoutProps = {
  children?: React.ReactNode
}

const StartupHomeLayout = ({ children }: StartupHomeLayoutProps) => {
  const { currentUser } = useAuth()

  useEffect(() => {
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
  }, [currentUser?.type, currentUser?.isOnboarded])
  return (
    <div className="h-screen bg-white px-4 dark:bg-black-l1 lg:px-5 ">
      <div className="flex h-full xl:mx-auto xl:max-w-screen-xl ">
        {children}
      </div>
    </div>
  )
}

export default StartupHomeLayout
