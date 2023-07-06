import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import InvestorConnectionsCell from 'src/components/Investor/Connection/InvestorConnectionsCell'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorMyConnectionsPage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Connections')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="Investor Connections"
        description="Investor Connections page for Dealbari platform."
      />
      <InvestorConnectionsMain />
      <InvestorConnectionsSidebar />
    </>
  )
}

export default InvestorMyConnectionsPage

const InvestorConnectionsMain = () => {
  return (
    <div className="h-full w-full rounded lg:w-2/3">
      <InvestorConnectionsCell />
    </div>
  )
}

const InvestorConnectionsSidebar = () => {
  return <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:rounded"></div>
}
