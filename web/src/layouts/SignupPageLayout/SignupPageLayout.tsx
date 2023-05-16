import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { SmallSecondaryOutlineButton } from 'src/components/Button/Button'

import LogoBlack from '../../../public/logo/LogoBlack.svg'
import LogoWhite from '../../../public/logo/LogoWhite.svg'

type SignupPageLayoutProps = {
  children?: React.ReactNode
}

const SignupPageLayout = ({ children }: SignupPageLayoutProps) => {
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
      <div className="h-screen bg-white px-4 dark:bg-black-l1 lg:px-5 ">
        <div className="flex h-full flex-col xl:mx-auto xl:max-w-screen-xl ">
          <SignupHeader />
          {children}
        </div>
      </div>
    </div>
  )
}
export default SignupPageLayout

const SignupHeader = () => {
  return (
    <div className="flex items-center justify-between py-2 lg:py-3">
      <LogoBlack
        className="flex h-6 w-10 content-start dark:hidden lg:h-8 lg:w-12"
        onClick={() => navigate(routes.landing())}
      />
      <LogoWhite
        className="hidden h-6 w-10 content-start dark:flex lg:h-8 lg:w-12"
        onClick={() => navigate(routes.landing())}
      />
      <div className="flex items-center justify-end gap-4 lg:gap-5">
        <p className="text-end text-b3 text-black-l2 dark:text-white-d2 lg:text-b2">{`Already have an account?`}</p>
        <SmallSecondaryOutlineButton
          action={() => navigate(routes.login())}
          label="LOGIN"
        />
      </div>
    </div>
  )
}
