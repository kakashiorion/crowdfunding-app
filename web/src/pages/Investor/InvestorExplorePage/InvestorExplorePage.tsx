import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorExplorePage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Explore')
  }, [setPageSelected])
  return (
    <>
      <MetaTags title="InvestorExplore" description="InvestorExplore page" />
    </>
  )
}

export default InvestorExplorePage
