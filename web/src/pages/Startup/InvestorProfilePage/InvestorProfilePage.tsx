import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestorProfilePage = () => {
  return (
    <>
      <MetaTags title="InvestorProfile" description="InvestorProfile page" />

      <h1>InvestorProfilePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InvestorProfilePage/InvestorProfilePage.tsx</code>
      </p>
      <p>
        My default route is named <code>investorProfile</code>, link to me with
        `<Link to={routes.investorProfile()}>InvestorProfile</Link>`
      </p>
    </>
  )
}

export default InvestorProfilePage
