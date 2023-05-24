import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorOffersPage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Offers')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="Investor Offers"
        description="Investor Offers page for Dealbari platform."
      />

      <InvestorOffersMain />
      <InvestorOffersSidebar />
    </>
  )
}

export default InvestorOffersPage

const InvestorOffersMain = () => {
  return (
    <div className="flex h-full w-full min-w-[360px] flex-grow overflow-scroll rounded  ">
      <div className="h-[1200px] w-full"></div>
    </div>
  )
}

const InvestorOffersSidebar = () => {
  return (
    <div className="hidden rounded border-l-2 border-l-white-d4 dark:border-l-black-l4 lg:flex lg:h-full lg:min-w-[240px] "></div>
  )
}
