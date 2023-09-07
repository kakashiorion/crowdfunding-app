import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import StartupCreateOfferCell from 'src/components/Startup/Offer/StartupCreateOfferCell'
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
      <StartupCreateOfferMain />
      <StartupCreateOfferSide />
    </>
  )
}

export default StartupCreateOfferPage

const StartupCreateOfferMain = () => {
  return (
    <div className="flex h-full w-full flex-col gap-3 lg:w-2/3 lg:gap-4">
      <StartupCreateOfferCell />
    </div>
  )
}

const StartupCreateOfferSide = () => {
  return (
    <div className="hidden lg:relative lg:flex lg:h-full lg:w-1/3 lg:overflow-hidden lg:rounded lg:bg-tertiary-d1/50 lg:dark:bg-tertiary-l1/50"></div>
  )
}
