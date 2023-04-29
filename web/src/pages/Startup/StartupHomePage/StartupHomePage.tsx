import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupHomePage = () => {
  return (
    <>
      <MetaTags title="StartupHome" description="StartupHome page" />

      <h1>StartupHomePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/StartupHomePage/StartupHomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>startupHome</code>, link to me with `
        <Link to={routes.startupHome()}>StartupHome</Link>`
      </p>
    </>
  )
}

export default StartupHomePage
