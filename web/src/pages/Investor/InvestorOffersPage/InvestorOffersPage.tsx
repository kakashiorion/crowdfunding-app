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
    <div className="flex h-full w-full flex-grow overflow-y-auto rounded lg:w-2/3  ">
      <div className=""></div>
    </div>
  )
}

const InvestorOffersSidebar = () => {
  return (
    <div className="hidden rounded border-l-2 border-l-white-d4 dark:border-l-black-l4 lg:flex lg:h-full lg:w-1/3"></div>
  )
}

/*
Offers page shall have:
  - Option to search and join public offer rooms
  - Option to join a private offer room with passcode

  - List of interacting offer rooms:
    - Join status (waiting, joined)
    - High-level details (capital, equity, ticketSize, funding stage, max investors, status)
    - Recent updates (joined/kicked from room, startup answered question, startup closed deal)
    - Option to leave offer room
    - Option to visit offer room (if in participant list) -> Offer room page

  - Recent successful deals made
*/
