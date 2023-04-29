import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const StartupOnboardingPage = () => {
  return (
    <>
      <MetaTags
        title="StartupOnboarding"
        description="StartupOnboarding page"
      />

      <h1>StartupOnboardingPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/StartupOnboardingPage/StartupOnboardingPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>startupOnboarding</code>, link to me
        with `<Link to={routes.startupOnboarding()}>StartupOnboarding</Link>`
      </p>
    </>
  )
}

export default StartupOnboardingPage
