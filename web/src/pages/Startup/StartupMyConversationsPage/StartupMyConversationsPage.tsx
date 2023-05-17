import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupMyConversationsPage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Conversations')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="StartupMyConversations"
        description="StartupMyConversations page"
      />
    </>
  )
}

export default StartupMyConversationsPage
