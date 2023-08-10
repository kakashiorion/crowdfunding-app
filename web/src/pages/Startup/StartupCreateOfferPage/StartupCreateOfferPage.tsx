import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupCreateOfferPage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Offer')
  }, [setPageSelected])

  return (
    <>
      <MetaTags
        title="StartupCreateOffer"
        description="Startup Create Offer page for Dealbari platform"
      />
    </>
  )
}

export default StartupCreateOfferPage

/*
Info to create offer:
  - capitalTargetLacs
  - equityBeingIssued
  - minTicketSizeLacs @default(1.0)
  - maxTicketSizeLacs
  - fundingStage
  - maxInvestors
  - willUseFundsFor
  - needHelpWith
*/
