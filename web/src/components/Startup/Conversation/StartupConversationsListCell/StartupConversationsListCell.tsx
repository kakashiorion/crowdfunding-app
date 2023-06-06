import { useState, useEffect, useCallback } from 'react'

import { useLazyQuery } from '@apollo/client'
import moment from 'moment'
import AddIcon from 'public/icons/add.svg'
import CloseIcon from 'public/icons/close.svg'
import ChatIcon from 'public/icons/right.svg'
import SearchIcon from 'public/icons/search.svg'
import type {
  FindStartupConversationsListQuery,
  FindStartupConversationsListQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  IconOutlineButton,
  LeadingIconBlackFilledButton,
  TertiaryIconButton,
} from 'src/components/Button/Button'
import {
  ErrorSubTextLabel,
  SmallLabel,
  SubTextLabel,
  TertiaryTextLabel,
  TertiaryTitleLabel,
} from 'src/components/Label/Label'
import {
  ButtonIconClassName,
  ConvoDivClassName,
  ConvoInfoClassName,
  CountClassName,
  PageDivClassName,
  InputDivClassName,
  LightIconClassName,
  DividerClassName,
  NameClassName,
  SelectedConvoDivClassName,
  TextInputClassName,
  ProfilePicClassName,
  LargeIconClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query FindStartupConversationsListQuery {
    startupConversationsList: myDirectConversations {
      id
      createdAt
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
        content
        senderID
        createdAt
        unread
      }
    }
  }
`

const FIND_NEW_INVESTORS_QUERY = gql`
  query FindNewChatInvestors($term: String!) {
    findNewChatInvestors: findNewChatInvestors(term: $term) {
      id
      name
      location {
        id
        city
        state
      }
    }
  }
`

const CREATE_NEW_CHAT_MUTATION = gql`
  mutation CreateNewChat($input: CreateDirectConversationInput!) {
    createDirectConversation(input: $input) {
      id
    }
  }
`

type NewInvestor = {
  id: number
  name: string
  location: {
    id: number
    city: string
    state: string
  }
}

export const beforeQuery = ({ id }: { id: number }) => {
  return {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
    pollInterval: 15000,
  }
}

export const Success = ({
  startupConversationsList,
  currentConvo,
  setCurrentConvo,
}: CellSuccessProps<
  FindStartupConversationsListQuery,
  FindStartupConversationsListQueryVariables
> & {
  currentConvo: number
  setCurrentConvo: React.Dispatch<React.SetStateAction<number>>
}) => {
  const { currentUser } = useAuth()
  const [searchText, setSearchText] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [newChat, setNewChat] = useState(false)
  const [convoList, setConvoList] = useState<typeof startupConversationsList>(
    []
  )
  const [findList, setFindList] = useState<NewInvestor[]>([])
  const [createChat] = useMutation(CREATE_NEW_CHAT_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        fetchPolicy: 'network-only',
      },
    ],
  })
  const [getInvestorList] = useLazyQuery(FIND_NEW_INVESTORS_QUERY, {
    variables: { term: searchText },
  })

  const handleSearch = () => {
    setConvoList(
      startupConversationsList.filter(
        (c) =>
          (c.users[0]?.type == 'INVESTOR' &&
            c.users[0]?.investor?.name
              .toLowerCase()
              .includes(searchText.toLowerCase())) ||
          c.users[1]?.investor?.name
            .toLowerCase()
            .includes(searchText.toLowerCase())
      )
    )
  }

  const findInvestors = async () => {
    await getInvestorList().then((d) => {
      if (d.data.findNewChatInvestors.length == 0) {
        setErrorMsg('No investors found!')
      }
      setFindList(d.data.findNewChatInvestors)
    })
  }

  const createNewConversation = async (id: number) => {
    await createChat({
      variables: {
        input: {
          userID1: currentUser?.id,
          userID2: id,
        },
      },
    }).then((d) => {
      setCurrentConvo(d.data.createDirectConversation.id)
      setNewChat(false)
    })
  }

  type ItemType = (typeof startupConversationsList)[0]

  const sortFn = useCallback((a: ItemType, b: ItemType) => {
    if (a?.messages.length > 0 && b?.messages) {
      if (b.messages.length > 0) {
        return (
          new Date(
            b?.messages[b?.messages.length - 1]?.createdAt ?? 0
          ).getTime() -
          new Date(
            a?.messages[a?.messages.length - 1]?.createdAt ?? 0
          ).getTime()
        )
      } else {
        return (
          new Date(b?.createdAt).getTime() -
          new Date(
            a?.messages[a?.messages.length - 1]?.createdAt ?? 0
          ).getTime()
        )
      }
    } else {
      return new Date(b?.createdAt).getTime() - new Date(a?.createdAt).getTime()
    }
  }, [])

  useEffect(() => {
    setConvoList([...startupConversationsList].sort(sortFn))
  }, [sortFn, startupConversationsList])

  return (
    <div id="ConversationSide" className="flex w-full flex-col gap-4">
      <TertiaryTitleLabel label="Conversations" />
      <LeadingIconBlackFilledButton
        label={newChat ? 'CANCEL' : 'START NEW CHAT'}
        action={() => {
          if (newChat) {
            setConvoList([...startupConversationsList].sort(sortFn))
          } else {
            setFindList([])
          }
          setNewChat(!newChat)
          setSearchText('')
        }}
        icon={
          newChat ? (
            <CloseIcon className={ButtonIconClassName} />
          ) : (
            <AddIcon className={ButtonIconClassName} />
          )
        }
      />
      <div id="SearchDiv" className={InputDivClassName}>
        {searchText != '' && (
          <IconOutlineButton
            icon={<CloseIcon className={ButtonIconClassName} />}
            action={() => {
              setSearchText('')
              setConvoList([...startupConversationsList].sort(sortFn))
            }}
          />
        )}
        <input
          id="SearchBar"
          value={searchText}
          placeholder={newChat ? 'Find new investors' : 'Search conversation'}
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          className={TextInputClassName}
        />

        <TertiaryIconButton
          icon={<SearchIcon className={LightIconClassName} />}
          action={() => {
            if (newChat) {
              findInvestors()
            } else {
              handleSearch()
            }
          }}
        />
      </div>
      <div id="SearchResultList" className={DividerClassName} />
      {newChat ? (
        <div className={PageDivClassName}>
          {findList.length > 0 ? (
            findList.map((item) => (
              <div
                className={ConvoDivClassName}
                onClick={() => createNewConversation(item.id)}
                key={item.id}
                aria-hidden
              >
                <button
                  className={ProfilePicClassName}
                  onClick={() => {
                    navigate(
                      routes.startupInvestorProfile({
                        id: item.id,
                      })
                    )
                  }}
                >
                  {
                    //TODO: Add Profile pic as BG - phase 2
                    item.name[0].toUpperCase()
                  }
                </button>
                <div className={NameClassName}>
                  <TertiaryTextLabel label={item.name} />
                  <SubTextLabel
                    label={`${item.location.city}, ${item.location.state}`}
                  />
                </div>
                <ChatIcon className={LargeIconClassName} />
              </div>
            ))
          ) : (
            <ErrorSubTextLabel label={errorMsg} />
          )}
        </div>
      ) : (
        <div id="ConversationsList" className={PageDivClassName}>
          {convoList ? (
            convoList.map((item) => {
              const invIndex = item.users[0]?.type == 'INVESTOR' ? 0 : 1
              return (
                <div
                  className={
                    currentConvo == item.id
                      ? SelectedConvoDivClassName
                      : ConvoDivClassName
                  }
                  onClick={() => setCurrentConvo(item.id)}
                  key={item.id}
                  aria-hidden
                >
                  <button
                    className={ProfilePicClassName}
                    onClick={() => {
                      navigate(
                        routes.startupInvestorProfile({
                          id: item.users[invIndex]?.investor?.id ?? 0,
                        })
                      )
                    }}
                  >
                    {
                      //TODO: Add Profile pic as BG - phase 2
                      item.users[invIndex]?.investor?.name[0].toUpperCase()
                    }
                  </button>
                  <div className={NameClassName}>
                    <TertiaryTextLabel
                      label={item.users[invIndex]?.investor?.name ?? 'Investor'}
                    />
                    <SubTextLabel
                      label={
                        item.messages[item.messages.length - 1]?.content ??
                        '(New Conversation)'
                      }
                    />
                  </div>
                  <div className={ConvoInfoClassName}>
                    <SmallLabel
                      label={moment(
                        item.messages.length > 0
                          ? item.messages[item.messages.length - 1]?.createdAt
                          : item.createdAt
                      ).fromNow()}
                    />
                    {item.messages.filter(
                      (m) => m?.unread == true && m?.senderID != currentUser?.id
                    ).length > 0 && (
                      <div className={CountClassName}>
                        {item.messages.filter(
                          (m) =>
                            m?.unread == true && m?.senderID != currentUser?.id
                        ).length < 10
                          ? item.messages
                              .filter(
                                (m) =>
                                  m?.unread == true &&
                                  m?.senderID != currentUser?.id
                              )
                              .length.toString()
                          : '9+'}
                      </div>
                    )}
                  </div>
                </div>
              )
            })
          ) : (
            <ErrorSubTextLabel label="No conversations yet!" />
          )}
        </div>
      )}
    </div>
  )
}
