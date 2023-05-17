import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorHelpPage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Help')
  }, [setPageSelected])
  return (
    <>
      <MetaTags title="InvestorHelp" description="InvestorHelp page" />
    </>
  )
}

export default InvestorHelpPage
