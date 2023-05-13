import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type LandingPageLayoutProps = {
  children?: React.ReactNode
}

const LandingPageLayout = ({ children }: LandingPageLayoutProps) => {
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser?.type == 'STARTUP') {
      navigate(routes.startupHome(), { replace: true })
    } else if (currentUser?.type == 'INVESTOR') {
      navigate(routes.investorHome(), { replace: true })
    }
  }, [currentUser?.type])
  return (
    <div className="bg-white bg-gradient-to-tr from-white from-30% via-white-d1 via-70% to-primary-l2 px-4 dark:bg-black-l1 dark:bg-gradient-to-tr dark:from-black dark:from-10% dark:via-black-l1 dark:via-70% dark:to-primary-d2 lg:px-5 ">
      {children}
    </div>
  )
}

export default LandingPageLayout
