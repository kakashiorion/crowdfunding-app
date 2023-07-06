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
    <div className="flex h-full w-full flex-grow overflow-scroll rounded lg:w-2/3  ">
      <div className=""></div>
    </div>
  )
}

const InvestorOffersSidebar = () => {
  return (
    <div className="hidden rounded border-l-2 border-l-white-d4 dark:border-l-black-l4 lg:flex lg:h-full lg:w-1/3"></div>
  )
}
