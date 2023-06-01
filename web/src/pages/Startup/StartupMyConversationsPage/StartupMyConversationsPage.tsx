import { useContext, useEffect, useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import StartupConversationMainCell from 'src/components/Startup/Conversation/StartupConversationMainCell'
import StartupConversationsListCell from 'src/components/Startup/Conversation/StartupConversationsListCell'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

type StartupMyConversationsPageProps = {
  id?: number
}

const StartupMyConversationsPage = (props: StartupMyConversationsPageProps) => {
  const { setPageSelected } = useContext(StartupPageContext)
  const [currentConvo, setCurrentConvo] = useState(props.id ?? 0)

  useEffect(() => {
    setPageSelected('Conversations')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="My Conversations"
        description="Startup Conversations page for Dealbari platform"
      />
      <div
        className={`${
          currentConvo == 0 ? 'flex' : 'hidden'
        } h-full w-full rounded lg:flex lg:w-1/3`}
      >
        <StartupConversationsListCell
          currentConvo={currentConvo}
          setCurrentConvo={setCurrentConvo}
        />
      </div>
      <div
        className={`${
          currentConvo != 0 ? 'flex' : 'hidden'
        } h-full w-full rounded lg:flex lg:w-2/3`}
      >
        <StartupConversationMainCell
          id={currentConvo}
          currentConvo={currentConvo}
          setCurrentConvo={setCurrentConvo}
        />
      </div>
    </>
  )
}

export default StartupMyConversationsPage
