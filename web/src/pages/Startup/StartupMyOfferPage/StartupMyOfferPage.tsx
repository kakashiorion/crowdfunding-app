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
      <MetaTags title="StartupMyOffer" description="StartupMyOffer page" />
    </>
  )
}

export default StartupMyOfferPage
