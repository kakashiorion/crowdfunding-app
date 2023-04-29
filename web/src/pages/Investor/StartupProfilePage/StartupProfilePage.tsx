import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupProfilePage = () => {
  return (
    <>
      <MetaTags title="StartupProfile" description="StartupProfile page" />

      <h1>StartupProfilePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/StartupProfilePage/StartupProfilePage.tsx</code>
      </p>
      <p>
        My default route is named <code>startupProfile</code>, link to me with `
        <Link to={routes.startupProfile()}>StartupProfile</Link>`
      </p>
    </>
  )
}

export default StartupProfilePage
