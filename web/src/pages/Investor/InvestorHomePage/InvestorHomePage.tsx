import { MetaTags } from '@redwoodjs/web'

import InvestorHomeMetricsCell from 'src/components/Investor/Home/InvestorHomeMetricsCell'
import InvestorNavigationMenu from 'src/components/Investor/Navigation/InvestorNavigationMenu/InvestorNavigationMenu'
import { TitleLabel } from 'src/components/Label/Label'

const InvestorHomePage = () => {
  return (
    <>
      <MetaTags
        title="Investor Home"
        description="Investor Home page for Dealbari platform."
      />
      <div className="flex w-full flex-grow flex-row gap-2 overflow-hidden py-2 lg:gap-4 lg:py-4">
        <InvestorNavigationMenu selectedPage="Home" />
        <InvestorHomeMain />
        <InvestorHomeSidebar />
      </div>
    </>
  )
}

export default InvestorHomePage

const InvestorHomeMain = () => {
  return (
    <div className="flex w-full min-w-[360px] flex-grow flex-col gap-2 overflow-scroll rounded">
      <TitleLabel label="Home" />
      <InvestorHomeMetricsCell />
    </div>
  )
}

const InvestorHomeSidebar = () => {
  return (
    <div className="hidden rounded bg-white-d4 dark:bg-black-l4 lg:flex lg:min-w-[240px] "></div>
  )
}
