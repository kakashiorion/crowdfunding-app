import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupMyOfferPage = () => {
  return (
    <>
      <MetaTags title="StartupMyOffer" description="StartupMyOffer page" />

      <h1>StartupMyOfferPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/StartupMyOfferPage/StartupMyOfferPage.tsx</code>
      </p>
      <p>
        My default route is named <code>startupMyOffer</code>, link to me with `
        <Link to={routes.startupMyOffer()}>StartupMyOffer</Link>`
      </p>
    </>
  )
}

export default StartupMyOfferPage
