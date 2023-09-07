import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorOfferRoomPage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Offers')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="Investor Offer Room"
        description="Investor Offer Room page for Dealbari platform"
      />
    </>
  )
}

export default InvestorOfferRoomPage

/*
Offer room page shall have:
  - Offer details
  - Room details (timeline, share link)
  - Participant list (joinLimit, waiting list)
  - Option to kick a participant & Kicked list (secondary info)
  - Room group chat
  - Q&As
  - Resources/Links
  - Option to leave room

  - Option to join negotiation table
  - Negotiation table (once on it - investors list, messages, option to leave table)

  - Option to make deal
  - Deal details (investors-funding amount, option to leave deal)
*/
