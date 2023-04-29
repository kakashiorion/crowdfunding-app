import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestorOnboardingPage = () => {
  return (
    <>
      <MetaTags
        title="InvestorOnboarding"
        description="InvestorOnboarding page"
      />

      <h1>InvestorOnboardingPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/InvestorOnboardingPage/InvestorOnboardingPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>investorOnboarding</code>, link to me
        with `<Link to={routes.investorOnboarding()}>InvestorOnboarding</Link>`
      </p>
    </>
  )
}

export default InvestorOnboardingPage
