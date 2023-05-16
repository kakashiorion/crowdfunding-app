import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { SmallSecondaryOutlineButton } from 'src/components/Button/Button'
import { DisabledSubTextLabel } from 'src/components/Label/Label'

import LogoOrig from '../../../public/logo/LogoOrig.svg'

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
      <LogoOrig
        className="flex h-6 w-10 cursor-pointer content-start lg:h-8 lg:w-12"
        onClick={() => navigate(routes.landing())}
      />
      <div className="flex items-center justify-end gap-2 lg:gap-3">
        <DisabledSubTextLabel label={`Already have an account?`} />
        <SmallSecondaryOutlineButton
          action={() => navigate(routes.login())}
          label="LOGIN"
        />
      </div>
    </div>
  )
}
