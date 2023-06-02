import { useState, useEffect } from 'react'

import moment from 'moment'
import CloseIcon from 'public/icons/close.svg'
import ChatIcon from 'public/icons/comment.svg'
import AcceptIcon from 'public/icons/done.svg'
import DownIcon from 'public/icons/down.svg'
import ProfileIcon from 'public/icons/profile.svg'
import SearchIcon from 'public/icons/search.svg'
import UpIcon from 'public/icons/up.svg'
import type { StartupConnectionsQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  IconOutlineButton,
  TertiaryIconButton,
} from 'src/components/Button/Button'
import {
  SmallLabel,
  SubTextLabel,
  TertiarySubTitleLabel,
  TertiaryTextLabel,
  TextLabel,
} from 'src/components/Label/Label'

import {
  ButtonIconClassName,
  ConnectionAcceptClassName,
  ConnectionActionClassName,
  ConnectionDivClassName,
  ConnectionHeaderClassName,
  ConnectionRejectClassName,
  ConnectionTabClasName,
  ConvoNameClassName,
  CreatePostDivClassName,
  IconClassName,
  InputDivClassName,
  LightIconClassName,
  PostDividerClassName,
  PostInteractionTextClassName,
  PosterProfilePicClassName,
  SelectedConnectionDivClassName,
  TextInputClassName,
} from '../../StartupConsts'

export const QUERY = gql`
  query StartupConnectionsQuery {
    startupConnections: myConnections {
      id
      status
      createdAt
      updatedAt
      users {
        id
        type
        profilePicURL
        messageVisibility
        blocking {
          id
        }
        directConversations {
          id
          users {
            id
          }
        }
        followedBy {
          id
        }
        investor {
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
  }
`

const CREATE_NEW_CHAT_MUTATION = gql`
  mutation CreateNewChat($input: CreateDirectConversationInput!) {
    createDirectConversation(input: $input) {
      id
    }
  }
`

const UPDATE_CONNECTION_STATUS_MUTATION = gql`
  mutation UpdateConnectionStatus($id: Int!, $input: UpdateConnectionInput!) {
    updateConnection(id: $id, input: $input) {
      id
      status
    }
  }
`

const MUTUAL_FOLLOW_MUTATION = gql`
  mutation MutualFollow($userID: Int!) {
    mutualFollowUser(userID: $userID) {
      id
    }
  }
`

export const beforeQuery = ({ id }: { id: number }) => {
  return {
    variables: { id: id },
    fetchPolicy: 'cache-and-network',
    pollInterval: 30000,
  }
}

export const Empty = () => <div>Empty</div>

export const Success = ({
  startupConnections,
}: CellSuccessProps<StartupConnectionsQuery>) => {
  const statusList = ['ACCEPTED', 'PENDING', 'REJECTED']
  const { currentUser } = useAuth()
  const [selectedTab, setSelectedTab] = useState(statusList[0])
  const [selectedConnID, setSelectedConnID] = useState(0)
  const [connList, setConnList] = useState<typeof startupConnections>(
    startupConnections.filter((c) => c.status == statusList[0])
  )
  const [searchText, setSearchText] = useState('')
  const [createChat] = useMutation(CREATE_NEW_CHAT_MUTATION)
  const [mutualFollow] = useMutation(MUTUAL_FOLLOW_MUTATION)
  const [updateStatus] = useMutation(UPDATE_CONNECTION_STATUS_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        fetchPolicy: 'network-only',
      },
    ],
  })

  const handleSearch = () => {
    setConnList(
      startupConnections.filter(
        (c) =>
          c.status == selectedTab &&
          ((c.users[0]?.type == 'INVESTOR' &&
            c.users[0]?.investor?.name
              .toLowerCase()
              .includes(searchText.toLowerCase())) ||
            c.users[1]?.investor?.name
              .toLowerCase()
              .includes(searchText.toLowerCase()))
      )
    )
  }

  const canChat = (conn: (typeof startupConnections)[0], invIndex: number) => {
    if (conn.users[invIndex]?.messageVisibility == 'PRIVATE') {
      return false
    } else if (
      conn.users[invIndex]?.messageVisibility == 'CONNECTIONS' &&
      selectedTab != statusList[0]
    ) {
      return false
    } else if (
      conn.users[invIndex]?.messageVisibility == 'FOLLOWERS' &&
      !conn.users[invIndex]?.followedBy.some((u) => u?.id == currentUser?.id)
    ) {
      return false
    } else if (
      conn.users[invIndex]?.blocking.some((u) => u?.id == currentUser?.id)
    ) {
      return false
    }
    return true
  }

  const handleNewChat = async (investorID?: number) => {
    await createChat({
      variables: {
        input: {
          userID1: currentUser?.id,
          userID2: investorID,
        },
      },
    }).then((d) => {
      const convoID = d.data.createDirectConversation.id
      navigate(
        routes.startupMyConversations({
          id: convoID,
        })
      )
    })
  }

  const handleRejectConnection = async (connID: number) => {
    await updateStatus({
      variables: {
        id: connID,
        input: {
          status: statusList[2],
        },
      },
    })
  }

  const handleAcceptConnection = async (
    connID: number,
    investorID?: number
  ) => {
    await updateStatus({
      variables: {
        id: connID,
        input: {
          status: statusList[0],
        },
      },
    })
      .then(async () => {
        await mutualFollow({
          variables: {
            userID: investorID,
          },
        })
      })
      .then(() => {
        setSelectedTab(statusList[0])
      })
  }

  useEffect(() => {
    setConnList(startupConnections.filter((c) => c.status == selectedTab))
  }, [selectedTab, startupConnections])

  return (
    <div
      id="ConnectionMainPage"
      className="flex w-full flex-col items-center justify-start gap-3 lg:gap-4"
    >
      <div id="ConnHeader" className={ConnectionHeaderClassName}>
        <div id="ConnTab" className={ConnectionTabClasName}>
          {statusList.map((s) => {
            return (
              <button
                key={s}
                className={`flex items-center justify-center border-2 p-1 lg:p-2 ${
                  selectedTab == s
                    ? ' border-x-transparent border-b-tertiary-d1 border-t-transparent dark:border-b-tertiary-l1'
                    : ' border-transparent '
                }`}
                onClick={() => {
                  setSelectedTab(s)
                  setConnList(startupConnections.filter((c) => c.status == s))
                }}
              >
                {selectedTab == s ? (
                  <TertiaryTextLabel label={s} />
                ) : (
                  <TextLabel label={s} />
                )}
              </button>
            )
          })}
        </div>
        <div id="ConnSearch" className={InputDivClassName}>
          {searchText != '' && (
            <IconOutlineButton
              icon={<CloseIcon className={ButtonIconClassName} />}
              action={() => {
                setSearchText('')
                setConnList(
                  startupConnections.filter((c) => c.status == selectedTab)
                )
              }}
            />
          )}
          <input
            id="SearchBar"
            value={searchText}
            placeholder={'Search connection'}
            type="text"
            onChange={(e) => {
              setSearchText(e.target.value)
            }}
            className={TextInputClassName}
          />
          <TertiaryIconButton
            icon={<SearchIcon className={LightIconClassName} />}
            action={() => {
              handleSearch()
            }}
          />
        </div>
      </div>
      <div className={PostDividerClassName} />
      <div id="ConnContent" className={CreatePostDivClassName}>
        {connList.map((c) => {
          const invIndex = c.users[0]?.type == 'INVESTOR' ? 0 : 1
          return (
            <div
              key={c.id}
              id="ConnectionDiv"
              aria-hidden
              onClick={() => {
                if (selectedConnID == c.id) {
                  setSelectedConnID(0)
                } else {
                  setSelectedConnID(c.id)
                }
              }}
              className={
                selectedConnID == c.id
                  ? SelectedConnectionDivClassName
                  : ConnectionDivClassName
              }
            >
              <div
                id="ConnDivHeader"
                className="flex w-full items-center gap-2 lg:gap-3"
              >
                <button
                  className={PosterProfilePicClassName}
                  id="ProfilePic"
                  onClick={() => {
                    //Navigate to investor profile
                    navigate(
                      routes.startupInvestorProfile({
                        id: c.users[invIndex]?.id ?? 0,
                      })
                    )
                  }}
                >
                  {
                    //TODO: Add Profile pic as BG - phase 2
                    c.users[invIndex]?.investor?.name[0].toUpperCase()
                  }
                </button>
                <div id="ConnName" className={ConvoNameClassName}>
                  <TertiarySubTitleLabel
                    label={c.users[invIndex]?.investor?.name ?? ''}
                  />
                </div>
                {selectedTab == statusList[1] && (
                  <button
                    className={ConnectionAcceptClassName}
                    id="AcceptButton"
                    onClick={() => {
                      handleAcceptConnection(c.id, c.users[invIndex]?.id)
                    }}
                  >
                    <AcceptIcon className={IconClassName} />
                    <SubTextLabel label={'Accept'} />
                  </button>
                )}
                {selectedConnID == c.id ? (
                  <UpIcon className={IconClassName} />
                ) : (
                  <DownIcon className={IconClassName} />
                )}
              </div>
              {selectedConnID == c.id && (
                <div
                  id="ConnMeta"
                  className="flex w-full items-center justify-between gap-2 lg:gap-3"
                >
                  <SubTextLabel
                    label={`${c.users[invIndex]?.investor?.location.city}, ${c.users[invIndex]?.investor?.location.state}`}
                  />
                  <SmallLabel label={moment(c.updatedAt).fromNow()} />
                </div>
              )}
              {selectedConnID == c.id && (
                <div
                  id="ConnActions"
                  className="flex w-full items-center justify-between gap-2 lg:gap-3"
                >
                  <button
                    id="ProfileButton"
                    className={ConnectionActionClassName}
                    onClick={() => {
                      //Navigate to investor profile
                      navigate(
                        routes.startupInvestorProfile({
                          id: c.users[invIndex]?.id ?? 0,
                        })
                      )
                    }}
                  >
                    <ProfileIcon className={IconClassName} />
                    <div className={PostInteractionTextClassName}>
                      <SubTextLabel label={'Profile'} />
                    </div>
                  </button>
                  {canChat(c, invIndex) && (
                    <button
                      id="ChatButton"
                      className={ConnectionActionClassName}
                      onClick={() => {
                        //Chat with investor
                        const convoID = c.users[
                          invIndex
                        ]?.directConversations.find((d) => {
                          return d?.users.some((u) => u?.id == currentUser?.id)
                        })?.id
                        //Does chat already exist?
                        if (convoID) {
                          //If yes, navigate to the chat
                          navigate(
                            routes.startupMyConversations({
                              id: convoID,
                            })
                          )
                        } else {
                          //Else, create a new chat and navigate to it
                          handleNewChat(c.users[invIndex]?.id)
                        }
                      }}
                    >
                      <ChatIcon className={IconClassName} />
                      <div className={PostInteractionTextClassName}>
                        <SubTextLabel label={'Chat'} />
                      </div>
                    </button>
                  )}
                  {selectedTab != statusList[2] ? (
                    <button
                      id="RejectButton"
                      className={ConnectionRejectClassName}
                      onClick={() => {
                        handleRejectConnection(c.id)
                      }}
                    >
                      <CloseIcon className={IconClassName} />
                      <div className={PostInteractionTextClassName}>
                        <SubTextLabel
                          label={
                            selectedTab == statusList[0] ? 'Remove' : 'Reject'
                          }
                        />
                      </div>
                    </button>
                  ) : (
                    <button
                      className={ConnectionAcceptClassName}
                      id="AcceptButton"
                      onClick={() => {
                        handleAcceptConnection(c.id, c.users[invIndex]?.id)
                      }}
                    >
                      <AcceptIcon className={IconClassName} />
                      <div className={PostInteractionTextClassName}>
                        <SubTextLabel label={'Accept'} />
                      </div>
                    </button>
                  )}
                </div>
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

/*
Common:
  - Visit profile
  - Location
  - Timestamp

Accepted Conn:
  - Chat (if messageVisibility is not 'private')
  - Remove

Pending Conn:
  - Chat (if messageVisibility is 'followers' and user is a follower, or if messageVisibility is 'public')
  - Accept
  - Reject

Rejected Conn:
  - Chat (if messageVisibility is 'followers' and user is a follower, or if messageVisibility is 'public')
  - Accept

*/
