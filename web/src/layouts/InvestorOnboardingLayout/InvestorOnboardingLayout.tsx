import { useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'

type InvestorOnboardingLayoutProps = {
  children?: React.ReactNode
}

const InvestorOnboardingLayout = ({
  children,
}: InvestorOnboardingLayoutProps) => {
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser?.type == 'STARTUP') {
      navigate(routes.startupOnboarding(), { replace: true })
    } else if (currentUser?.type == 'GUEST') {
      navigate(routes.landing(), { replace: true })
    }
  }, [currentUser?.type])
  return (
    <div className="h-screen bg-white px-4 dark:bg-black-l1 lg:px-5 ">
      <div className="flex h-full flex-col xl:mx-auto xl:max-w-screen-xl ">
        {children}
      </div>
    </div>
  )
}

export default InvestorOnboardingLayout
