import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const InvestorMyConversationsPage = () => {
  const { setPageSelected } = useContext(InvestorPageContext)

  useEffect(() => {
    setPageSelected('Conversations')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="InvestorMyConversations"
        description="InvestorMyConversations page"
      />
    </>
  )
}

export default InvestorMyConversationsPage
