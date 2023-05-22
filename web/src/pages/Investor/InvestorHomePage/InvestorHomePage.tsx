import { useContext, useEffect } from 'react'

import AddIcon from 'public/icons/add.svg'

import { MetaTags } from '@redwoodjs/web'

import { IconBlackFilledButton } from 'src/components/Button/Button'
import InvestorHomeMetricsCell from 'src/components/Investor/Home/InvestorHomeMetricsCell'
import { PrimaryTextLabel, DisabledTextLabel } from 'src/components/Label/Label'
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
    <div className="flex h-full w-full flex-col items-start justify-start gap-4 overflow-y-scroll rounded lg:w-2/3 lg:gap-6">
      <InvestorBreadCrumbs />
      <InvestorHomeMetricsCell />
      <InvestorFeedBlock />
    </div>
  )
}

const InvestorBreadCrumbs = () => {
  return (
    <div className="flex w-full gap-2 lg:gap-4">
      <PrimaryTextLabel label="HOME" />
    </div>
  )
}

const InvestorFeedBlock = () => {
  return (
    <div id="homeFeedBlock" className="flex w-full flex-col gap-2">
      <div
        id="homeFeedHeader"
        className="flex items-center justify-between gap-4"
      >
        <DisabledTextLabel label="Your Feed" />
        <div
          id="homeFeedActions"
          className="flex items-center justify-end gap-3 lg:gap-4"
        >
          {/* <select
            id="homeFeedSelector"
            className="rounded bg-white-d1 px-2 py-1 text-center text-b2 text-primary placeholder:text-black-l3 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3 lg:px-4 lg:py-2 lg:text-b1"
          >
            <option>Top</option>
            <option>Hot</option>
            <option>New</option>
          </select> */}
          <IconBlackFilledButton
            label="Create"
            action={() => {}}
            icon={
              <AddIcon className="h-4 w-4 fill-black dark:fill-white lg:h-5 lg:w-5" />
            }
          />
        </div>
      </div>
      <div id="homeFeedContent" className="flex flex-col gap-4"></div>
    </div>
  )
}

const InvestorHomeSidebar = () => {
  return (
    <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:rounded lg:bg-white-d1 dark:lg:bg-black-l2 "></div>
  )
}
