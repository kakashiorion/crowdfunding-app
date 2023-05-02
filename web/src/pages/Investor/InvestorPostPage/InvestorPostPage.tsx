import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestorPostPage = () => {
  return (
    <>
      <MetaTags title="InvestorPost" description="InvestorPost page" />

      <h1>InvestorPostPage</h1>
      <p>
        Find me in{' '}
        <code>./web/src/pages/InvestorPostPage/InvestorPostPage.tsx</code>
      </p>
      <p>
        My default route is named <code>investorPost</code>, link to me with `
        <Link to={routes.investorPost()}>InvestorPost</Link>`
      </p>
    </>
  )
}

export default InvestorPostPage
