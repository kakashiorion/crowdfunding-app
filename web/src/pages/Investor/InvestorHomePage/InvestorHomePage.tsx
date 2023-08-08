import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import InvestorHomeFeedCell from 'src/components/Investor/Home/InvestorHomeFeedCell'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorHomePage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Home')
  }, [setPageSelected])

  return (
    <>
      <MetaTags
        title="Home"
        description="Investor Home page for Dealbari platform."
      />
      <InvestorHomeMain />
      <InvestorHomeSidebar />
    </>
  )
}

export default InvestorHomePage

const InvestorHomeMain = () => {
  return (
    <div className="h-full w-full lg:w-2/3">
      <InvestorHomeFeedCell />
    </div>
  )
}

//TODO: Show recommendations
const InvestorHomeSidebar = () => {
  return <div className="hidden lg:flex lg:h-full lg:w-1/3"></div>
}
