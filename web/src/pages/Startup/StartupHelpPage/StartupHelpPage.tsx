import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupHelpPage = () => {
  return (
    <>
      <MetaTags title="StartupHelp" description="StartupHelp page" />

      <h1>StartupHelpPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/StartupHelpPage/StartupHelpPage.tsx</code>
      </p>
      <p>
        My default route is named <code>startupHelp</code>, link to me with `
        <Link to={routes.startupHelp()}>StartupHelp</Link>`
      </p>
    </>
  )
}

export default StartupHelpPage
