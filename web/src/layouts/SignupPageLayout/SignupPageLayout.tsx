import { navigate, routes } from '@redwoodjs/router'

import { SmallSecondaryOutlineButton } from 'src/components/Button/Button'

import Logo from '../../../public/logo/DealbariLogo.svg'

type SignupPageLayoutProps = {
  children?: React.ReactNode
}

const SignupPageLayout = ({ children }: SignupPageLayoutProps) => {
  return (
    <div className="h-screen bg-white px-5 dark:bg-black-l1 lg:px-6 ">
      <div className="flex h-full flex-col xl:mx-auto xl:max-w-screen-xl ">
        <SignupHeader />
        {children}
      </div>
    </div>
  )
}
export default SignupPageLayout

const SignupHeader = () => {
  return (
    <div className="flex items-center justify-between py-2 lg:py-3">
      <Logo
        className="h-6 w-10 content-start lg:h-8 lg:w-12"
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
