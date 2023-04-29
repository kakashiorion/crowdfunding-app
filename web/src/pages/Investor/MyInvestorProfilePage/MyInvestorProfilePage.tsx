import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const MyInvestorProfilePage = () => {
  return (
    <>
      <MetaTags
        title="MyInvestorProfile"
        description="MyInvestorProfile page"
      />

      <h1>MyInvestorProfilePage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/MyInvestorProfilePage/MyInvestorProfilePage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>myInvestorProfile</code>, link to me
        with `<Link to={routes.myInvestorProfile()}>MyInvestorProfile</Link>`
      </p>
    </>
  )
}

export default MyInvestorProfilePage
