import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupMyConnectionsPage = () => {
  return (
    <>
      <MetaTags
        title="StartupMyConnections"
        description="StartupMyConnections page"
      />

      <h1>StartupMyConnectionsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/StartupMyConnectionsPage/StartupMyConnectionsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>startupMyConnections</code>, link to me
        with `
        <Link to={routes.startupMyConnections()}>StartupMyConnections</Link>`
      </p>
    </>
  )
}

export default StartupMyConnectionsPage
