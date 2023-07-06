import { useContext, useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import InvestorConversationMainCell from 'src/components/Investor/Conversation/InvestorConversationMainCell'
import InvestorConversationsListCell from 'src/components/Investor/Conversation/InvestorConversationsListCell'
import { InvestorPageContext } from 'src/layouts/InvestorHomeLayout/InvestorHomeLayout'

const QUERY = gql`
  query FindInvestorConversationPageQuery($id: Int!) {
    directConversation(id: $id) {
      id
      users {
        id
      }
    }
  }
`

type InvestorMyConversationsPageProps = {
  id?: number
}

const InvestorMyConversationsPage = (
  props: InvestorMyConversationsPageProps
) => {
  const { setPageSelected } = useContext(InvestorPageContext)
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
        description="Investor Conversations page for Dealbari platform"
      />
      <div
        className={`${
          currentConvo == 0 ? 'flex' : 'hidden'
        } h-full w-full rounded lg:flex lg:w-1/3`}
      >
        <InvestorConversationsListCell
          currentConvo={currentConvo}
          setCurrentConvo={setCurrentConvo}
        />
      </div>
      <div
        className={`${
          currentConvo != 0 ? 'flex' : 'hidden'
        } h-full w-full rounded lg:flex lg:w-2/3`}
      >
        <InvestorConversationMainCell
          id={currentConvo}
          currentConvo={currentConvo}
          setCurrentConvo={setCurrentConvo}
        />
      </div>
    </>
  )
}

export default InvestorMyConversationsPage
