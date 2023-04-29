import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestorMyConversationsPage = () => {
  return (
    <>
      <MetaTags
        title="InvestorMyConversations"
        description="InvestorMyConversations page"
      />

      <h1>InvestorMyConversationsPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/InvestorMyConversationsPage/InvestorMyConversationsPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>investorMyConversations</code>, link to
        me with `
        <Link to={routes.investorMyConversations()}>
          InvestorMyConversations
        </Link>
        `
      </p>
    </>
  )
}

export default InvestorMyConversationsPage
