import { useEffect, useRef, useState } from 'react'

import moment from 'moment'
import type {
  FindStartupConversationMainQuery,
  FindStartupConversationMainQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  BlackTextButton,
  IconOutlineButton,
  TertiaryIconButton,
} from 'src/components/Button/Button'
import SvgClose from 'src/components/Icon/Close'
import SvgComment from 'src/components/Icon/Comment'
import SvgLeft from 'src/components/Icon/Left'
import SvgLink from 'src/components/Icon/Link'
import SvgSend from 'src/components/Icon/Send'
import {
  GreySubTitleLabel,
  SmallLabel,
  TextLabel,
  MediumLabel,
  TertiarySubTitleLabel,
  TertiaryMediumLabel,
} from 'src/components/Label/Label'
import {
  ChatContentClassName,
  ProfilePicClassName,
  ActionGroupClassName,
  ButtonIconClassName,
  InputDivClassName,
  LightIconClassName,
  DividerClassName,
  TextInputClassName,
  EmptyIconClassName,
  EmptyDivClassName,
  LargeIconClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query FindStartupConversationMainQuery($id: Int!) {
    startupConversationMain: directConversation(id: $id) {
      id
      users {
        id
        type
        profilePicURL
        investor {
          id
          name
        }
      }
      messages {
        id
        senderID
        unread
        content
        attachmentURL
        createdAt
        updatedAt
      }
    }
  }
`

const CREATE_MESSAGE_MUTATION = gql`
  mutation CreateMessage($input: CreateDirectMessageInput!) {
    createDirectMessage(input: $input) {
      id
      content
      senderID
      attachmentURL
      createdAt
      unread
    }
  }
`
const SET_READ_CONVERSATION_MUTATION = gql`
  mutation updateReadMessages($convoID: Int!) {
    updateReadMessages(convoID: $convoID) {
      count
    }
  }
`

export const Empty = () => (
  <div className={EmptyDivClassName}>
    <SvgComment className={EmptyIconClassName} />
    <GreySubTitleLabel label="Select and continue a conversation thread" />
  </div>
)

export const Success = ({
  startupConversationMain,
  currentConvo,
  setCurrentConvo,
}: CellSuccessProps<
  FindStartupConversationMainQuery,
  FindStartupConversationMainQueryVariables
> & {
  currentConvo: number
  setCurrentConvo: React.Dispatch<React.SetStateAction<number>>
}) => {
  const { currentUser } = useAuth()
  const [chatText, setChatText] = useState('')
  const [attachURL, setAttachURL] = useState('')
  const [attaching, setAttaching] = useState(false)
  const [setReadConversation] = useMutation(SET_READ_CONVERSATION_MUTATION, {
    variables: {
      convoID: currentConvo,
    },
  })
  const [createMessage] = useMutation(CREATE_MESSAGE_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        variables: { id: currentConvo },
        fetchPolicy: 'network-only',
      },
    ],
  })
  const investorIndex =
    startupConversationMain.users[0]?.type == 'INVESTOR' ? 0 : 1

  const investorName =
    startupConversationMain.users[investorIndex]?.investor?.name

  const sortedMessages = [...startupConversationMain.messages].sort((a, b) => {
    if (a?.id && b?.id) {
      return a?.id - b?.id
    } else {
      return 0
    }
  })
  const bottomRef = useRef<HTMLDivElement>(null)
  const otherRef = useRef<HTMLDivElement>(null)

  const handleSendMessage = async () => {
    await createMessage({
      variables: {
        input: {
          conversationID: currentConvo,
          senderID: currentUser?.id,
          content: chatText,
          attachmentURL: attachURL,
          unread: true,
        },
      },
    }).then(() => {
      setChatText('')
      setAttachURL('')
      setAttaching(false)
      setReadConversation()
    })
  }

  useEffect(() => {
    setReadConversation()
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [bottomRef, setReadConversation, startupConversationMain])

  return (
    <div id="ChatContainer" className="flex h-full w-full flex-col gap-4">
      <div id="ChatHeader" className={ActionGroupClassName}>
        <SvgLeft
          className={LargeIconClassName}
          onClick={() => {
            setCurrentConvo(0)
          }}
        />
        <button
          id="InvestorProfPic"
          className={ProfilePicClassName}
          onClick={() => {
            //Navigate to investor's profile
            navigate(
              routes.startupInvestorProfile({
                id: startupConversationMain.users[investorIndex]?.id ?? 0,
              })
            )
          }}
        >
          {
            //TODO: Add Profile pic as BG - phase 2
            (investorName ?? 'Investor')[0].toUpperCase()
          }
        </button>
        <TertiaryMediumLabel label={investorName ?? 'Investor'} />
      </div>
      <div id="Divider" className={DividerClassName} />
      <div id="ChatContent" className={ChatContentClassName}>
        <span className="mt-auto"></span>
        <TertiarySubTitleLabel
          label={`Started a new chat with ${investorName}`}
        />
        {sortedMessages.length > 0 ? (
          sortedMessages.map((message, i) => (
            <div
              key={message?.id}
              ref={i == sortedMessages.length - 1 ? bottomRef : otherRef}
              className={`flex flex-col gap-1 p-3 lg:gap-2 lg:p-4 ${
                message?.senderID == currentUser?.id
                  ? ' items-end self-end rounded-b-2xl rounded-tl-2xl bg-white-d3/70 dark:bg-black-l3/70 '
                  : ' items-start self-start rounded-b-2xl rounded-tr-2xl bg-tertiary-d1/70 dark:bg-tertiary-l1/70 '
              }`}
            >
              <SmallLabel label={moment(message?.createdAt).calendar()} />
              <MediumLabel label={message?.content ?? ''} />
              {message?.attachmentURL && (
                <BlackTextButton
                  label={message?.attachmentURL}
                  action={() => {
                    message.attachmentURL &&
                      window.open(message.attachmentURL)?.focus()
                  }}
                />
              )}
            </div>
          ))
        ) : (
          <TextLabel label={`Say Hello!`} />
        )}
      </div>
      {attaching && (
        <input
          id="AttachInput"
          value={attachURL}
          placeholder={'Enter link to share...'}
          type="text"
          onChange={(e) => {
            setAttachURL(e.target.value)
          }}
          className={TextInputClassName}
        />
      )}
      <div id="ChatFooter" className={InputDivClassName}>
        <IconOutlineButton
          icon={
            attaching ? (
              <SvgClose className={ButtonIconClassName} />
            ) : (
              <SvgLink className={ButtonIconClassName} />
            )
          }
          action={() => {
            setAttaching(!attaching)
            if (attaching) {
              setAttachURL('')
            }
          }}
        />
        <input
          id="ChatInput"
          value={chatText}
          placeholder={'Type here...'}
          type="text"
          onChange={(e) => {
            setChatText(e.target.value)
          }}
          className={TextInputClassName}
        />
        <TertiaryIconButton
          icon={<SvgSend className={LightIconClassName} />}
          action={() => {
            if (chatText != '') {
              handleSendMessage()
            }
          }}
        />
      </div>
    </div>
  )
}
