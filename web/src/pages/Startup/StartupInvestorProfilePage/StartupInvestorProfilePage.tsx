import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { TertiaryTitleLabel } from 'src/components/Label/Label'
import StartupViewInvestorPostsCell from 'src/components/Startup/InvestorProfile/StartupViewInvestorPostsCell'
import StartupViewInvestorProfileCell from 'src/components/Startup/InvestorProfile/StartupViewInvestorProfileCell'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupInvestorProfilePage = ({ id }: { id: number }) => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Investor')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="Investor Profile"
        description="Investor profile page for Dealbari platform"
      />
      <div className="flex h-full w-full flex-col gap-4 rounded lg:w-2/3 lg:gap-6">
        <TertiaryTitleLabel label="Investor Profile" />
        <StartupViewInvestorProfileCell id={id} />
      </div>
      <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:flex-col lg:gap-6 lg:rounded">
        <TertiaryTitleLabel label="Investor Posts" />
        <StartupViewInvestorPostsCell id={id} />
      </div>
    </>
  )
}

export default StartupInvestorProfilePage
