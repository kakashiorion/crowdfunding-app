import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import InvestorMyPostsCell from 'src/components/Investor/MyProfile/InvestorMyPostsCell'
import InvestorMyProfileCell from 'src/components/Investor/MyProfile/InvestorMyProfileCell'
import { PrimaryTitleLabel } from 'src/components/Label/Label'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorMyProfilePage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Profile')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="My Profile"
        description="Investor profile page for Dealbari platform"
      />
      <div className="flex h-full w-full flex-col gap-4 rounded lg:w-2/3 lg:gap-6">
        <PrimaryTitleLabel label="My Profile" />
        <InvestorMyProfileCell />
      </div>
      <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:flex-col lg:gap-6 lg:rounded">
        <PrimaryTitleLabel label="My Posts" />
        <InvestorMyPostsCell />
      </div>
    </>
  )
}

export default InvestorMyProfilePage
