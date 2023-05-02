import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupPostPage = () => {
  return (
    <>
      <MetaTags title="StartupPost" description="StartupPost page" />

      <h1>StartupPostPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/StartupPostPage/StartupPostPage.tsx</code>
      </p>
      <p>
        My default route is named <code>startupPost</code>, link to me with `
        <Link to={routes.startupPost()}>StartupPost</Link>`
      </p>
    </>
  )
}

export default StartupPostPage
