import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupOfferRoomPage = () => {
  return (
    <>
      <MetaTags title="StartupOfferRoom" description="StartupOfferRoom page" />

      <h1>StartupOfferRoomPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/StartupOfferRoomPage/StartupOfferRoomPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>startupOfferRoom</code>, link to me with
        `<Link to={routes.startupOfferRoom()}>StartupOfferRoom</Link>`
      </p>
    </>
  )
}

export default StartupOfferRoomPage
