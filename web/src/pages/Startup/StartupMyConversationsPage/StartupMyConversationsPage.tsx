import { useContext, useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import StartupConversationMainCell from 'src/components/Startup/Conversation/StartupConversationMainCell'
import StartupConversationsListCell from 'src/components/Startup/Conversation/StartupConversationsListCell'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const QUERY = gql`
  query FindStartupConversationPageQuery($id: Int!) {
    directConversation(id: $id) {
      id
      users {
        id
      }
    }
  }
`

type StartupMyConversationsPageProps = {
  id?: number
}

const StartupMyConversationsPage = (props: StartupMyConversationsPageProps) => {
  const { setPageSelected } = useContext(StartupPageContext)
  const { currentUser } = useAuth()
  const [getData] = useLazyQuery(QUERY, {
    variables: {
      id: Number(props.id),
    },
  })
  const [currentConvo, setCurrentConvo] = useState(
    props.id ? Number(props.id) : 0
  )

  useEffect(() => {
    //If not user's chat, dont't load it
    if (props.id) {
      getData().then((d) => {
        if (
          !d.data?.directConversation?.users?.some(
            (u: { id: number }) => u.id == currentUser?.id
          )
        ) {
          setCurrentConvo(0)
        }
      })
    }
    setPageSelected('Conversations')
  }, [currentUser?.id, getData, props.id, setPageSelected])

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
