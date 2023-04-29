import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupMyConversationsPage = () => {
  return (
    <>
      <MetaTags
        title="StartupMyConversations"
        description="StartupMyConversations page"
      />

      <h1>StartupMyConversationsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/StartupMyConversationsPage/StartupMyConversationsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>startupMyConversations</code>, link to
        me with `
        <Link to={routes.startupMyConversations()}>StartupMyConversations</Link>
        `
      </p>
    </>
  )
}

export default StartupMyConversationsPage
