import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import InvestorJoinRoomCell from 'src/components/Investor/Offers/InvestorJoinRoomCell'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorJoinRoomPage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Offers')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="Investor Join Offer Room"
        description="Investor Join Room page for Dealbari platform"
      />

      <InvestorJoinRoomMain />
      <InvestorJoinRoomSidebar />
    </>
  )
}

export default InvestorJoinRoomPage

const InvestorJoinRoomMain = () => {
  return (
    <div className="relative flex h-full w-full flex-col gap-8 overflow-y-auto lg:w-2/3 lg:gap-10">
      <InvestorJoinRoomCell />
    </div>
  )
}

const InvestorJoinRoomSidebar = () => {
  return (
    <div className="hidden lg:relative lg:flex lg:h-full lg:w-1/3 lg:overflow-hidden lg:rounded lg:bg-primary-d1/50 lg:dark:bg-primary-l1/50"></div>
  )
}
