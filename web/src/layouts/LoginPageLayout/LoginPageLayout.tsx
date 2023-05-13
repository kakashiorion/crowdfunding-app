import { useEffect } from 'react'

import LogoBlack from 'public/logo/LogoBlack.svg'
import LogoWhite from 'public/logo/LogoWhite.svg'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { SmallSecondaryOutlineButton } from 'src/components/Button/Button'

type LoginPageLayoutProps = {
  children?: React.ReactNode
}

const LoginPageLayout = ({ children }: LoginPageLayoutProps) => {
  const { currentUser } = useAuth()

  useEffect(() => {
    if (currentUser?.type == 'STARTUP') {
      navigate(routes.startupHome(), { replace: true })
    } else if (currentUser?.type == 'INVESTOR') {
      navigate(routes.investorHome(), { replace: true })
    }
  }, [currentUser?.type])
  return (
    <div className="h-screen bg-white px-4 dark:bg-black-l1 lg:px-5 ">
      <div className="flex h-full flex-col xl:mx-auto xl:max-w-screen-xl ">
        <LoginHeader />
        {children}
      </div>
    </div>
  )
}
export default LoginPageLayout

const LoginHeader = () => {
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
        <p className="text-end text-b3 text-black-l2 dark:text-white-d2 lg:text-b2">{`Don't have an account?`}</p>
        <SmallSecondaryOutlineButton
          action={() => navigate(routes.signup())}
          label="SIGNUP"
        />
      </div>
    </div>
  )
}
