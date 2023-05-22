import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestorOffersPage = () => {
  return (
    <>
      <MetaTags title="InvestorOffers" description="InvestorOffers page" />

      <h1>InvestorOffersPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InvestorOffersPage/InvestorOffersPage.tsx</code>
      </p>
      <p>
        My default route is named <code>investorOffers</code>, link to me with `
        <Link to={routes.investorOffers()}>InvestorOffers</Link>`
      </p>
    </>
  )
}

export default InvestorOffersPage
