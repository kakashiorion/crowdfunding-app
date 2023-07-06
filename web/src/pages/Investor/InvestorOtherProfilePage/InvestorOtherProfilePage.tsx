import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import InvestorViewOtherPostsCell from 'src/components/Investor/OtherInvestorProfile/InvestorViewOtherPostsCell'
import InvestorViewOtherProfileCell from 'src/components/Investor/OtherInvestorProfile/InvestorViewOtherProfileCell'
import { PrimaryTitleLabel } from 'src/components/Label/Label'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorOtherProfilePage = ({ id }: { id: number }) => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Investor')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="Other Investor Profile"
        description="Other Investor profile page for Dealbari platform"
      />
      <div className="flex h-full w-full flex-col gap-4 rounded lg:w-2/3 lg:gap-6">
        <PrimaryTitleLabel label="Investor Profile" />
        <InvestorViewOtherProfileCell id={id} />
      </div>
      <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:flex-col lg:gap-6 lg:rounded">
        <PrimaryTitleLabel label="Investor Posts" />
        <InvestorViewOtherPostsCell id={id} />
      </div>
    </>
  )
}

export default InvestorOtherProfilePage
