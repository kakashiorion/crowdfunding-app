import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestorMyConnectionsPage = () => {
  return (
    <>
      <MetaTags
        title="InvestorMyConnections"
        description="InvestorMyConnections page"
      />

      <h1>InvestorMyConnectionsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/InvestorMyConnectionsPage/InvestorMyConnectionsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>investorMyConnections</code>, link to me
        with `
        <Link to={routes.investorMyConnections()}>InvestorMyConnections</Link>`
      </p>
    </>
  )
}

export default InvestorMyConnectionsPage
