import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestorExplorePage = () => {
  return (
    <>
      <MetaTags title="InvestorExplore" description="InvestorExplore page" />

      <h1>InvestorExplorePage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InvestorExplorePage/InvestorExplorePage.tsx</code>
      </p>
      <p>
        My default route is named <code>investorExplore</code>, link to me with
        `<Link to={routes.investorExplore()}>InvestorExplore</Link>`
      </p>
    </>
  )
}

export default InvestorExplorePage
