import { MetaTags } from '@redwoodjs/web'

import InvestorNavigationMenu from 'src/components/Investor/Navigation/InvestorNavigationMenu/InvestorNavigationMenu'

const InvestorMyConnectionsPage = () => {
  return (
    <>
      <MetaTags
        title="Investor Connections"
        description="Investor Connections page for Dealbari platform."
      />
      <div className="flex w-full flex-grow flex-row gap-2 overflow-hidden py-2 lg:gap-4 lg:py-4">
        <InvestorNavigationMenu selectedPage="Connections" />
        <InvestorConnectionsMain />
        <InvestorConnectionsSidebar />
      </div>
    </>
  )
}

export default InvestorMyConnectionsPage

const InvestorConnectionsMain = () => {
  return (
    <div className="flex h-full w-full min-w-[360px] flex-grow overflow-scroll rounded-sm  ">
      <div className="h-[1200px] w-full"></div>
    </div>
  )
}

const InvestorConnectionsSidebar = () => {
  return (
    <div className="hidden rounded-sm border-l-2 border-l-white-d4 dark:border-l-black-l4 lg:flex lg:h-full lg:min-w-[240px] "></div>
  )
}
