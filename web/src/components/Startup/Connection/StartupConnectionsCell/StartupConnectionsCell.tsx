import { useEffect, useState, useCallback } from 'react'

import moment from 'moment'
import type { StartupConnectionsQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  IconOutlineButton,
  TertiaryIconButton,
} from 'src/components/Button/Button'
import SvgClose from 'src/components/Icon/Close'
import SvgComment from 'src/components/Icon/Comment'
import SvgDelete from 'src/components/Icon/Delete'
import SvgDone from 'src/components/Icon/Done'
import SvgDown from 'src/components/Icon/Down'
import SvgInfo from 'src/components/Icon/Info'
import SvgProfile from 'src/components/Icon/Profile'
import SvgSearch from 'src/components/Icon/Search'
import SvgUp from 'src/components/Icon/Up'
import {
  SmallLabel,
  SubTextLabel,
  TertiaryMediumLabel,
  TertiaryTextLabel,
  TertiaryTitleLabel,
  TextLabel,
  WarnSubTextLabel,
} from 'src/components/Label/Label'
import {
  ButtonIconClassName,
  ConnectionAcceptClassName,
  ConnectionActionClassName,
  ConnectionDivClassName,
  ConnectionHeaderClassName,
  ConnectionMainClassName,
  ConnectionRejectClassName,
  ConnectionTabClasName,
  NameClassName,
  PageDivClassName,
  IconClassName,
  InputDivClassName,
  LightIconClassName,
  DividerClassName,
  HideShowClassName,
  ProfilePicClassName,
  SelectedConnectionDivClassName,
  TextInputClassName,
  ConnectionMetaClassName,
  ConnectionDivHeaderClassName,
  ConnectionInfoClassName,
  ConnectionInfoIconClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query StartupConnectionsQuery {
    startupConnections: myConnections {
      id
      status
      requesterID
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

const DELETE_CONNECTION_MUTATION = gql`
  mutation DeleteConnection($id: Int!) {
    deleteConnection(id: $id) {
      id
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
const statusList = ['ACCEPTED', 'PENDING', 'REJECTED', 'REQUESTED']

export const Success = ({
  startupConnections,
}: CellSuccessProps<StartupConnectionsQuery>) => {
  const { currentUser } = useAuth()
  const [selectedTab, setSelectedTab] = useState(statusList[0])
  const [selectedConnID, setSelectedConnID] = useState(0)
  const [connList, setConnList] = useState<typeof startupConnections>(
    startupConnections.filter((c) => c.status == statusList[0])
  )
  const [searchText, setSearchText] = useState('')
  const [createChat] = useMutation(CREATE_NEW_CHAT_MUTATION)
  const [mutualFollow] = useMutation(MUTUAL_FOLLOW_MUTATION)
  const [deleteConnection] = useMutation(DELETE_CONNECTION_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        fetchPolicy: 'network-only',
      },
    ],
  })
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
      filterConnections(selectedTab).filter(
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
          status: 'REJECTED',
        },
      },
    })
  }

  const handleDeleteConnection = async (connID: number) => {
    await deleteConnection({
      variables: {
        id: connID,
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
          status: 'ACCEPTED',
        },
      },
    }).then(async () => {
      await mutualFollow({
        variables: {
          userID: investorID,
        },
      })
    })
  }

  const showInfo = (): string => {
    if (selectedTab == statusList[0]) {
      return 'These are your accepted connections'
    } else if (selectedTab == statusList[1]) {
      return 'These investors want to connect with you'
    } else if (selectedTab == statusList[2]) {
      return 'You had rejected these connection requests... You may still accept them!'
    } else {
      return 'These are the connection requests you have sent... We will let you know when they are accepted.'
    }
  }

  const filterConnections = useCallback(
    (s: string): typeof startupConnections => {
      if (s == statusList[0]) {
        return startupConnections.filter((c) => c.status == 'ACCEPTED')
      } else if (s == statusList[1]) {
        return startupConnections.filter(
          (c) => c.status == 'PENDING' && c.requesterID != currentUser?.id
        )
      } else if (s == statusList[2]) {
        return startupConnections.filter(
          (c) => c.status == 'REJECTED' && c.requesterID != currentUser?.id
        )
      } else {
        return startupConnections.filter(
          (c) => c.status != 'ACCEPTED' && c.requesterID == currentUser?.id
        )
      }
    },
    [currentUser?.id, startupConnections]
  )

  useEffect(() => {
    setConnList(filterConnections(selectedTab))
  }, [filterConnections, selectedTab, startupConnections])

  return (
    <div id="ConnectionMainPage" className={ConnectionMainClassName}>
      <TertiaryTitleLabel label="Connections" />
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
                  setSelectedTab(s) //Change the tab
                  setConnList(filterConnections(s)) //Show connection list based on the selected tab
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
              icon={<SvgClose className={ButtonIconClassName} />}
              action={() => {
                setSearchText('') //Clear search text
                setConnList(filterConnections(selectedTab)) //Show conn list based on tab selected (remove search filter)
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
            icon={<SvgSearch className={LightIconClassName} />}
            action={() => {
              handleSearch() //Show conn list based on search text
            }}
          />
        </div>
      </div>
      <div className={DividerClassName} />
      <div className={ConnectionInfoClassName}>
        <SvgInfo className={ConnectionInfoIconClassName} />
        <WarnSubTextLabel label={showInfo()} />
      </div>
      <div id="ConnContent" className={PageDivClassName}>
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
              <div id="ConnDivHeader" className={ConnectionDivHeaderClassName}>
                <button
                  className={ProfilePicClassName}
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
                <div id="ConnName" className={NameClassName}>
                  <TertiaryMediumLabel
                    label={c.users[invIndex]?.investor?.name ?? ''}
                  />
                </div>
                {selectedTab == statusList[1] && (
                  <>
                    <button
                      className={ConnectionAcceptClassName}
                      id="AcceptButton"
                      onClick={() => {
                        handleAcceptConnection(c.id, c.users[invIndex]?.id)
                      }}
                    >
                      <SvgDone className={IconClassName} />
                      <div className={HideShowClassName}>
                        <SubTextLabel label={'Accept'} />
                      </div>
                    </button>
                    <button
                      className={ConnectionRejectClassName}
                      id="RejectButton"
                      onClick={() => {
                        handleRejectConnection(c.id)
                      }}
                    >
                      <SvgClose className={IconClassName} />
                      <div className={HideShowClassName}>
                        <SubTextLabel label={'Reject'} />
                      </div>
                    </button>
                  </>
                )}
                {selectedConnID == c.id ? (
                  <SvgUp className={IconClassName} />
                ) : (
                  <SvgDown className={IconClassName} />
                )}
              </div>
              {selectedConnID == c.id && (
                <div id="ConnMeta" className={ConnectionMetaClassName}>
                  <SubTextLabel
                    label={`${c.users[invIndex]?.investor?.location.city}, ${c.users[invIndex]?.investor?.location.state}`}
                  />
                  <SmallLabel label={moment(c.updatedAt).fromNow()} />
                </div>
              )}
              {selectedConnID == c.id && (
                <div id="ConnActions" className={ConnectionMetaClassName}>
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
                    <SvgProfile className={IconClassName} />
                    <div className={HideShowClassName}>
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
                        if (convoID) {
                          //If chat already exists, navigate to that chat
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
                      <SvgComment className={IconClassName} />
                      <div className={HideShowClassName}>
                        <SubTextLabel label={'Chat'} />
                      </div>
                    </button>
                  )}
                  {selectedTab == statusList[2] && (
                    <button
                      className={ConnectionActionClassName}
                      id="AcceptButton"
                      onClick={() => {
                        handleAcceptConnection(c.id, c.users[invIndex]?.id)
                      }}
                    >
                      <SvgDone className={IconClassName} />
                      <div className={HideShowClassName}>
                        <SubTextLabel label={'Accept'} />
                      </div>
                    </button>
                  )}
                  <button
                    id="DeleteButton"
                    className={ConnectionRejectClassName}
                    onClick={() => {
                      handleDeleteConnection(c.id)
                    }}
                  >
                    <SvgDelete className={IconClassName} />
                    <div className={HideShowClassName}>
                      <SubTextLabel label={'Delete'} />
                    </div>
                  </button>
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
  - Location  (in mid)
  - Timestamp (in mid)
  - Visit profile (in bottom)
  - Delete conn (in bottom)

Accepted tab:
  - Chat (in bottom - if messageVisibility is not 'private')

Pending tab:
  - Accept (at the top)
  - Reject (at the top)
  - Chat (in bottom - if messageVisibility is 'followers' and user is a follower, or if messageVisibility is 'public')

Rejected tab:
  - Chat (in bottom - if messageVisibility is 'followers' and user is a follower, or if messageVisibility is 'public')
  - Accept (in bottom)

Requested tab:
  - Chat (in bottom - if messageVisibility is 'followers' and user is a follower, or if messageVisibility is 'public')
*/
