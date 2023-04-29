import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestorHomePage = () => {
  return (
    <>
      <MetaTags title="InvestorHome" description="InvestorHome page" />

      <h1>InvestorHomePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InvestorHomePage/InvestorHomePage.tsx</code>
      </p>
      <p>
        My default route is named <code>investorHome</code>, link to me with `
        <Link to={routes.investorHome()}>InvestorHome</Link>`
      </p>
    </>
  )
}

export default InvestorHomePage
