import { useCallback, useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import moment from 'moment'
import AddIcon from 'public/icons/add.svg'
import CloseIcon from 'public/icons/close.svg'
import ChatIcon from 'public/icons/right.svg'
import SearchIcon from 'public/icons/search.svg'
import type {
  FindInvestorConversationsListQuery,
  FindInvestorConversationsListQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation, type CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  LeadingIconBlackFilledButton,
  IconOutlineButton,
  PrimaryIconButton,
} from 'src/components/Button/Button'
import {
  ButtonIconClassName,
  ConvoDivClassName,
  ConvoInfoClassName,
  CountClassName,
  DividerClassName,
  InputDivClassName,
  LargeIconClassName,
  LightIconClassName,
  NameClassName,
  PageDivClassName,
  ProfilePicClassName,
  SelectedConvoDivClassName,
  TextInputClassName,
} from 'src/components/Investor/InvestorConsts'
import {
  ErrorSubTextLabel,
  PrimaryTextLabel,
  PrimaryTitleLabel,
  SmallLabel,
  SubTextLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorConversationsListQuery {
    investorConversationsList: myDirectConversations {
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

const FIND_NEW_USERS_QUERY = gql`
  query FindNewChatUsers($term: String!) {
    findNewChatUsers: findNewChatUsers(term: $term) {
      id
      type
      investor {
        id
        name
        location {
          id
          city
          state
        }
      }
      startup {
        id
        name
        location {
          id
          city
          state
        }
      }
    }
  }
`

type NewUser = {
  id: number
  type: string
  investor: {
    id: number
    name: string
    location: {
      id: number
      city: string
      state: string
    }
  }
  startup: {
    id: number
    name: string
    location: {
      id: number
      city: string
      state: string
    }
  }
}

const CREATE_NEW_CHAT_MUTATION = gql`
  mutation CreateNewChat($input: CreateDirectConversationInput!) {
    createDirectConversation(input: $input) {
      id
    }
  }
`

export const beforeQuery = ({ id }: { id: number }) => {
  return {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
    pollInterval: 15000,
  }
}

export const Success = ({
  investorConversationsList,
  currentConvo,
  setCurrentConvo,
}: CellSuccessProps<
  FindInvestorConversationsListQuery,
  FindInvestorConversationsListQueryVariables
> & {
  currentConvo: number
  setCurrentConvo: React.Dispatch<React.SetStateAction<number>>
}) => {
  const { currentUser } = useAuth()
  const [searchText, setSearchText] = useState('')
  const [errorMsg, setErrorMsg] = useState('')
  const [newChat, setNewChat] = useState(false)
  const [convoList, setConvoList] = useState<typeof investorConversationsList>(
    []
  )
  const [findList, setFindList] = useState<NewUser[]>([])
  const [createChat] = useMutation(CREATE_NEW_CHAT_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        fetchPolicy: 'network-only',
      },
    ],
  })
  const [getUsersList] = useLazyQuery(FIND_NEW_USERS_QUERY, {
    variables: { term: searchText },
  })

  const handleSearch = () => {
    setConvoList(
      investorConversationsList.filter(
        (c) =>
          c.users[0]?.investor?.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          c.users[1]?.investor?.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          c.users[0]?.startup?.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          c.users[1]?.startup?.name
            .toLowerCase()
            .includes(searchText.toLowerCase())
      )
    )
  }

  const findUsers = async () => {
    await getUsersList().then((d) => {
      if (d.data.findNewChatUsers.length == 0) {
        setErrorMsg('No users found!')
      }
      setFindList(d.data.findNewChatUsers)
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

  type ItemType = (typeof investorConversationsList)[0]

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
    setConvoList([...investorConversationsList].sort(sortFn))
  }, [sortFn, investorConversationsList])

  return (
    <div id="ConversationSide" className="flex w-full flex-col gap-4">
      <PrimaryTitleLabel label="Conversations" />
      <LeadingIconBlackFilledButton
        label={newChat ? 'CANCEL' : 'START NEW CHAT'}
        action={() => {
          if (newChat) {
            setConvoList([...investorConversationsList].sort(sortFn))
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
              setConvoList([...investorConversationsList].sort(sortFn))
            }}
          />
        )}
        <input
          id="SearchBar"
          value={searchText}
          placeholder={newChat ? 'Find new users' : 'Search conversation'}
          type="text"
          onChange={(e) => {
            setSearchText(e.target.value)
          }}
          className={TextInputClassName}
        />

        <PrimaryIconButton
          icon={<SearchIcon className={LightIconClassName} />}
          action={() => {
            if (newChat) {
              findUsers()
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
                    if (item.type == 'INVESTOR') {
                      navigate(
                        routes.investorOtherProfile({
                          id: item.id,
                        })
                      )
                    } else {
                      navigate(
                        routes.investorStartupProfile({
                          id: item.id,
                        })
                      )
                    }
                  }}
                >
                  {
                    //TODO: Add Profile pic as BG - phase 2
                    item.type == 'INVESTOR'
                      ? item.investor.name[0].toUpperCase()
                      : item.startup.name[0].toUpperCase()
                  }
                </button>
                <div className={NameClassName}>
                  <PrimaryTextLabel
                    label={
                      item.type == 'INVESTOR'
                        ? item.investor.name
                        : item.startup.name
                    }
                  />
                  <SubTextLabel
                    label={
                      item.type == 'INVESTOR'
                        ? `${item.investor.location.city}, ${item.investor.location.state}`
                        : `${item.startup.location.city}, ${item.startup.location.state}`
                    }
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
              const otherIndex = item.users[0]?.id == currentUser?.id ? 1 : 0
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
                      if (item.users[otherIndex]?.type == 'INVESTOR') {
                        navigate(
                          routes.investorOtherProfile({
                            id: item.users[otherIndex]?.investor?.id ?? 0,
                          })
                        )
                      } else {
                        navigate(
                          routes.investorStartupProfile({
                            id: item.users[otherIndex]?.startup?.id ?? 0,
                          })
                        )
                      }
                    }}
                  >
                    {
                      //TODO: Add Profile pic as BG - phase 2
                      item.users[otherIndex]?.type == 'INVESTOR'
                        ? item.users[
                            otherIndex
                          ]?.investor?.name[0].toUpperCase()
                        : item.users[otherIndex]?.startup?.name[0].toUpperCase()
                    }
                  </button>
                  <div className={NameClassName}>
                    <PrimaryTextLabel
                      label={
                        item.users[otherIndex]?.type == 'INVESTOR'
                          ? item.users[otherIndex]?.investor?.name
                          : item.users[otherIndex]?.startup?.name
                      }
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
