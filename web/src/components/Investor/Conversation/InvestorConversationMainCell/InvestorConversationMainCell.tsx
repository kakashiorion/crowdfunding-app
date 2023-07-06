import { useEffect, useRef, useState } from 'react'

import moment from 'moment'
import CloseIcon from 'public/icons/close.svg'
import ChatIcon from 'public/icons/comment.svg'
import BackIcon from 'public/icons/left.svg'
import AttachIcon from 'public/icons/link.svg'
import SendIcon from 'public/icons/send.svg'
import type {
  FindInvestorConversationMainQuery,
  FindInvestorConversationMainQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation, type CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  BlackTextButton,
  IconOutlineButton,
  PrimaryIconButton,
} from 'src/components/Button/Button'
import {
  ActionGroupClassName,
  ButtonIconClassName,
  ChatContentClassName,
  DividerClassName,
  EmptyDivClassName,
  EmptyIconClassName,
  InputDivClassName,
  LargeIconClassName,
  LightIconClassName,
  ProfilePicClassName,
  TextInputClassName,
} from 'src/components/Investor/InvestorConsts'
import {
  GreySubTitleLabel,
  MediumLabel,
  PrimaryMediumLabel,
  PrimarySubTitleLabel,
  SmallLabel,
  TextLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorConversationMainQuery($id: Int!) {
    investorConversationMain: directConversation(id: $id) {
      id
      users {
        id
        type
        profilePicURL
        investor {
          id
          name
        }
        startup {
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
    <ChatIcon className={EmptyIconClassName} />
    <GreySubTitleLabel label="Select and continue a conversation thread" />
  </div>
)

export const Success = ({
  investorConversationMain,
  currentConvo,
  setCurrentConvo,
}: CellSuccessProps<
  FindInvestorConversationMainQuery,
  FindInvestorConversationMainQueryVariables
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
  const otherIndex =
    investorConversationMain.users[0]?.id == currentUser?.id ? 1 : 0

  const isOtherInvestor =
    investorConversationMain.users[otherIndex]?.type == 'INVESTOR'

  const otherName =
    investorConversationMain.users[otherIndex]?.type == 'INVESTOR'
      ? investorConversationMain.users[otherIndex]?.investor?.name
      : investorConversationMain.users[otherIndex]?.startup?.name

  const sortedMessages = [...investorConversationMain.messages].sort((a, b) => {
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
    bottomRef.current?.scrollIntoView()
  }, [bottomRef, setReadConversation, investorConversationMain])

  return (
    <div id="ChatContainer" className="flex h-full w-full flex-col gap-4">
      <div id="ChatHeader" className={ActionGroupClassName}>
        <BackIcon
          className={LargeIconClassName}
          onClick={() => {
            setCurrentConvo(0)
          }}
        />
        <button
          id="InvestorProfPic"
          className={ProfilePicClassName}
          onClick={() => {
            if (isOtherInvestor) {
              navigate(
                routes.investorOtherProfile({
                  id: investorConversationMain.users[otherIndex]?.id ?? 0,
                })
              )
            } else {
              navigate(
                routes.investorStartupProfile({
                  id: investorConversationMain.users[otherIndex]?.id ?? 0,
                })
              )
            }
          }}
        >
          {
            //TODO: Add Profile pic as BG - phase 2
            otherName && otherName[0].toUpperCase()
          }
        </button>
        <PrimaryMediumLabel label={otherName} />
      </div>
      <div id="Divider" className={DividerClassName} />
      <div id="ChatContent" className={ChatContentClassName}>
        <span className="mt-auto"></span>
        <PrimarySubTitleLabel label={`Started a new chat with ${otherName}`} />
        {sortedMessages.length > 0 ? (
          sortedMessages.map((message, i) => (
            <div
              key={message?.id}
              ref={i == sortedMessages.length - 1 ? bottomRef : otherRef}
              className={`flex flex-col gap-1 p-3 lg:gap-2 lg:p-4 ${
                message?.senderID == currentUser?.id
                  ? ' items-end self-end rounded-b-2xl rounded-tl-2xl bg-white-d3/70 dark:bg-black-l3/70 '
                  : ' items-start self-start rounded-b-2xl rounded-tr-2xl bg-primary-d1/70 dark:bg-primary-l1/70 '
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
              <CloseIcon className={ButtonIconClassName} />
            ) : (
              <AttachIcon className={ButtonIconClassName} />
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
        <PrimaryIconButton
          icon={<SendIcon className={LightIconClassName} />}
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
