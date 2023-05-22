import { Link, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

const InvestorOfferRoomPage = () => {
  return (
    <>
      <MetaTags
        title="InvestorOfferRoom"
        description="InvestorOfferRoom page"
      />

      <h1>InvestorOfferRoomPage</h1>
      <p>
        Find me in{' '}
        <code>
          ./web/src/pages/InvestorOfferRoomPage/InvestorOfferRoomPage.tsx
        </code>
      </p>
      <p>
        My default route is named <code>investorOfferRoom</code>, link to me
        with `<Link to={routes.investorOfferRoom()}>InvestorOfferRoom</Link>`
      </p>
    </>
  )
}

export default InvestorOfferRoomPage
