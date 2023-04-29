import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupExplorePage = () => {
  return (
    <>
      <MetaTags title="StartupExplore" description="StartupExplore page" />

      <h1>StartupExplorePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/StartupExplorePage/StartupExplorePage.tsx</code>
      </p>
      <p>
        My default route is named <code>startupExplore</code>, link to me with `
        <Link to={routes.startupExplore()}>StartupExplore</Link>`
      </p>
    </>
  )
}

export default StartupExplorePage
