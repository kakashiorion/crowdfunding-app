import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupCreatePostPage = () => {
  return (
    <>
      <MetaTags
        title="StartupCreatePost"
        description="StartupCreatePost page"
      />

      <h1>StartupCreatePostPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/StartupCreatePostPage/StartupCreatePostPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>startupCreatePost</code>, link to me
        with `<Link to={routes.startupCreatePost()}>StartupCreatePost</Link>`
      </p>
    </>
  )
}

export default StartupCreatePostPage
