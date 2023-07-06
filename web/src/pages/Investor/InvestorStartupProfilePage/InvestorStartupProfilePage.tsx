import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import InvestorViewStartupPostsCell from 'src/components/Investor/StartupProfile/InvestorViewStartupPostsCell'
import InvestorViewStartupProfileCell from 'src/components/Investor/StartupProfile/InvestorViewStartupProfileCell'
import { PrimaryTitleLabel } from 'src/components/Label/Label'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorStartupProfilePage = ({ id }: { id: number }) => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Profile')
  }, [setPageSelected])

  return (
    <>
      <MetaTags
        title="Startup Profile"
        description="Startup Profile page for Dealbari platform"
      />
      <div className="flex h-full w-full flex-col gap-4 rounded lg:w-2/3 lg:gap-6">
        <PrimaryTitleLabel label="Startup Profile" />
        <InvestorViewStartupProfileCell id={id} />
      </div>
      <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:flex-col lg:gap-6 lg:rounded">
        <PrimaryTitleLabel label="Startup Posts" />
        <InvestorViewStartupPostsCell id={id} />
      </div>
    </>
  )
}

export default InvestorStartupProfilePage
