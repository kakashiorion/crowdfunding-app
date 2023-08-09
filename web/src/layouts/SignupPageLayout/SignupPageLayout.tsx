import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'

import { useAuth } from 'src/auth'
import { HoverPrimaryTextButton } from 'src/components/Button/Button'
import { DisabledSubTextLabel } from 'src/components/Label/Label'
import SvgLogoOrig from 'src/components/Logo/LogoOrig'
import {
  ActionClassName,
  HeaderClassName,
  LayoutWrapperClassName,
  LogoClassName,
  PageWrapperClassName,
} from 'src/layouts/LayoutConsts'

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
    <div id="darkModeWrapper" className={darkMode}>
      <div id="layoutWrapper" className={LayoutWrapperClassName}>
        <div id="pageWrapper" className={PageWrapperClassName}>
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
    <div className={HeaderClassName}>
      <SvgLogoOrig
        className={LogoClassName}
        onClick={() => navigate(routes.landing())}
      />
      <div className={ActionClassName}>
        <DisabledSubTextLabel label={`Already have an account?`} />
        <HoverPrimaryTextButton
          action={() => navigate(routes.login())}
          label="LOGIN"
        />
      </div>
    </div>
  )
}
