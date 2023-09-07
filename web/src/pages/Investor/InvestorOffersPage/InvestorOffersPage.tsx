import { useContext, useEffect } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { BlackOutlineButton } from 'src/components/Button/Button'
import InvestorCurrentOffersCell from 'src/components/Investor/Offers/InvestorCurrentOffersCell'
import InvestorPreviousOffersCell from 'src/components/Investor/Offers/InvestorPreviousOffersCell'
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
        description="Investor Offers page for Dealbari platform"
      />

      <InvestorOffersMain />
      <InvestorOffersSidebar />
    </>
  )
}

export default InvestorOffersPage

const InvestorOffersMain = () => {
  return (
    <div className="relative flex h-full w-full flex-col gap-8 overflow-y-auto lg:w-2/3 lg:gap-10">
      <BlackOutlineButton
        label="JOIN A ROOM"
        action={() => navigate(routes.investorJoinRoom())}
      />
      <InvestorCurrentOffersCell />
      <InvestorPreviousOffersCell />
    </div>
  )
}

const InvestorOffersSidebar = () => {
  return (
    <div className="hidden lg:relative lg:flex lg:h-full lg:w-1/3 lg:overflow-hidden lg:rounded lg:bg-primary-d1/50 lg:dark:bg-primary-l1/50"></div>
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
