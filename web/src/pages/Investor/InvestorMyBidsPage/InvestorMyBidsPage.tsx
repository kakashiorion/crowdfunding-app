import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestorMyBidsPage = () => {
  return (
    <>
      <MetaTags title="InvestorMyBids" description="InvestorMyBids page" />

      <h1>InvestorMyBidsPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InvestorMyBidsPage/InvestorMyBidsPage.tsx</code>
      </p>
      <p>
        My default route is named <code>investorMyBids</code>, link to me with `
        <Link to={routes.investorMyBids()}>InvestorMyBids</Link>`
      </p>
    </>
  )
}

export default InvestorMyBidsPage
