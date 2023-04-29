import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const OtherInvestorProfilePage = () => {
  return (
    <>
      <MetaTags
        title="OtherInvestorProfile"
        description="OtherInvestorProfile page"
      />

      <h1>OtherInvestorProfilePage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/OtherInvestorProfilePage/OtherInvestorProfilePage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>otherInvestorProfile</code>, link to me
        with `
        <Link to={routes.otherInvestorProfile()}>OtherInvestorProfile</Link>`
      </p>
    </>
  )
}

export default OtherInvestorProfilePage
