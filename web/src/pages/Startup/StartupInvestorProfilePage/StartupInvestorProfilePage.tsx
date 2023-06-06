import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { TertiaryTitleLabel } from 'src/components/Label/Label'
import StartupViewInvestorProfileCell from 'src/components/Startup/Profile/StartupViewInvestorProfileCell'
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
      <StartupInvestorProfileMain id={id} />
      <StartupInvestorProfileSide />
    </>
  )
}

export default StartupInvestorProfilePage

const StartupInvestorProfileMain = ({ id }: { id: number }) => {
  return (
    <div className="flex h-full w-full flex-col gap-4 rounded lg:w-2/3 lg:gap-6">
      <TertiaryTitleLabel label="Investor Profile" />
      <StartupViewInvestorProfileCell id={id} />
    </div>
  )
}

const StartupInvestorProfileSide = () => {
  return <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:rounded"></div>
}
