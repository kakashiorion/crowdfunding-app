import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupMyProfilePage = () => {
  return (
    <>
      <MetaTags title="StartupMyProfile" description="StartupMyProfile page" />

      <h1>StartupMyProfilePage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/StartupMyProfilePage/StartupMyProfilePage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>startupMyProfile</code>, link to me with
        `<Link to={routes.startupMyProfile()}>StartupMyProfile</Link>`
      </p>
    </>
  )
}

export default StartupMyProfilePage
