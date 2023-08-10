import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

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
    </>
  )
}

export default StartupMyOfferPage

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
