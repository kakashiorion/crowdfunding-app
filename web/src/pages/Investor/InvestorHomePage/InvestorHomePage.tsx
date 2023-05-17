import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import InvestorHomeMetricsCell from 'src/components/Investor/Home/InvestorHomeMetricsCell'
import { TitleLabel } from 'src/components/Label/Label'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorHomePage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Home')
  }, [setPageSelected])

  return (
    <>
      <MetaTags
        title="Investor Home"
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
    <div className="h-full w-full rounded lg:w-2/3">
      <TitleLabel label="Home" />
      <InvestorHomeMetricsCell />
    </div>
  )
}

const InvestorHomeSidebar = () => {
  return (
    <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:rounded lg:bg-white-d1 dark:lg:bg-black-l2 "></div>
  )
}
