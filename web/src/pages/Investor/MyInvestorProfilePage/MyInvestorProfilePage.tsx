import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const MyInvestorProfilePage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Profile')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="MyInvestorProfile"
        description="MyInvestorProfile page"
      />
    </>
  )
}

export default MyInvestorProfilePage
