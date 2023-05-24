import { useEffect, useState } from 'react'

import LogoOrig from 'public/logo/LogoOrig.svg'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { HoverSecondaryTextButton } from 'src/components/Button/Button'
import { DisabledSubTextLabel } from 'src/components/Label/Label'

import {
  ActionClassName,
  HeaderClassName,
  LayoutWrapperClassName,
  LogoClassName,
  PageWrapperClassName,
} from '../LayoutConsts'

type LoginPageLayoutProps = {
  children?: React.ReactNode
}

const LoginPageLayout = ({ children }: LoginPageLayoutProps) => {
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
    <div id="darkModeWrapper" className={darkMode}>
      <div id="layoutWrapper" className={LayoutWrapperClassName}>
        <div id="pageWrapper" className={PageWrapperClassName}>
          <LoginHeader />
          {children}
        </div>
      </div>
    </div>
  )
}
export default LoginPageLayout

const LoginHeader = () => {
  return (
    <div className={HeaderClassName}>
      <LogoOrig
        className={LogoClassName}
        onClick={() => navigate(routes.landing())}
      />
      <div className={ActionClassName}>
        <DisabledSubTextLabel label={`Don't have an account yet?`} />
        <HoverSecondaryTextButton
          action={() => navigate(routes.signup())}
          label="SIGNUP"
        />
      </div>
    </div>
  )
}
