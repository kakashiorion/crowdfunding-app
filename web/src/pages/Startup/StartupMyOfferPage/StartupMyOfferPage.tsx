import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import StartupMyOfferCell from 'src/components/Startup/Offer/StartupMyOfferCell'
import StartupPreviousOffersCell from 'src/components/Startup/Offer/StartupPreviousOffersCell'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupMyOfferPage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Offer')
  }, [setPageSelected])

  return (
    <>
      <MetaTags
        title="StartupMyOffer"
        description="Startup My Offer page for Dealbari platform"
      />
      <StartupMyOfferMain />
      <StartupMyOfferSide />
    </>
  )
}

export default StartupMyOfferPage

const StartupMyOfferMain = () => {
  return (
    <div className="flex h-full w-full flex-col gap-8 overflow-y-auto lg:w-2/3 lg:gap-10">
      <StartupMyOfferCell />
      <StartupPreviousOffersCell />
    </div>
  )
}

const StartupMyOfferSide = () => {
  return (
    <div className="hidden lg:relative lg:flex lg:h-full lg:w-1/3 lg:overflow-hidden lg:rounded lg:bg-tertiary-d1/50 lg:dark:bg-tertiary-l1/50"></div>
  )
}

/*
Offer page shall have:
  - Option to create an offer if no offer is active
  - Currently active offer at the top:
    - High-level details (capital, equity, ticketSize, funding stage, success/max investors, status)
    - Recent updates from investors (joined/left negotiation table, makes/leaves deal, asked question,  )
    - Successful deals made if any
    - Option to visit offer room
    - Option to edit offer 3 times (applicable)

  - Recent offers with their final details
*/
