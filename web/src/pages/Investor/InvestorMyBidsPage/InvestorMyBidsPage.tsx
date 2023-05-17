import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorMyBidsPage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Bids')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="Investor Bids"
        description="Investor Bids page for Dealbari platform."
      />
      <InvestorBidsMain />
      <InvestorBidsSidebar />
    </>
  )
}

export default InvestorMyBidsPage

const InvestorBidsMain = () => {
  return (
    <div className="flex h-full w-full min-w-[360px] flex-grow overflow-scroll rounded  ">
      <div className="h-[1200px] w-full"></div>
    </div>
  )
}

const InvestorBidsSidebar = () => {
  return (
    <div className="hidden rounded border-l-2 border-l-white-d4 dark:border-l-black-l4 lg:flex lg:h-full lg:min-w-[240px] "></div>
  )
}
