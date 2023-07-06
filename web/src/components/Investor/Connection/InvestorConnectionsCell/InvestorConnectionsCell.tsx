import { useCallback, useEffect, useState } from 'react'

import moment from 'moment'
import CloseIcon from 'public/icons/close.svg'
import ChatIcon from 'public/icons/comment.svg'
import DeleteIcon from 'public/icons/delete.svg'
import AcceptIcon from 'public/icons/done.svg'
import DownIcon from 'public/icons/down.svg'
import InfoIcon from 'public/icons/info.svg'
import ProfileIcon from 'public/icons/profile.svg'
import SearchIcon from 'public/icons/search.svg'
import UpIcon from 'public/icons/up.svg'
import type { InvestorConnectionsQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation, type CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  IconOutlineButton,
  PrimaryIconButton,
} from 'src/components/Button/Button'
import {
  ButtonIconClassName,
  ConnectionAcceptClassName,
  ConnectionActionClassName,
  ConnectionDivClassName,
  ConnectionDivHeaderClassName,
  ConnectionHeaderClassName,
  ConnectionInfoClassName,
  ConnectionInfoIconClassName,
  ConnectionMainClassName,
  ConnectionMetaClassName,
  ConnectionRejectClassName,
  ConnectionTabClasName,
  DividerClassName,
  HideShowClassName,
  IconClassName,
  InputDivClassName,
  LightIconClassName,
  NameClassName,
  PageDivClassName,
  ProfilePicClassName,
  SelectedConnectionDivClassName,
  TextInputClassName,
} from 'src/components/Investor/InvestorConsts'
import {
  PrimaryMediumLabel,
  PrimaryTextLabel,
  PrimaryTitleLabel,
  SmallLabel,
  SubTextLabel,
  TextLabel,
  WarnSubTextLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query InvestorConnectionsQuery {
    investorConnections: myConnections {
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
  investorConnections,
}: CellSuccessProps<InvestorConnectionsQuery>) => {
  const { currentUser } = useAuth()
  const [selectedTab, setSelectedTab] = useState(statusList[0])
  const [selectedConnID, setSelectedConnID] = useState(0)
  const [connList, setConnList] = useState<typeof investorConnections>(
    investorConnections.filter((c) => c.status == statusList[0])
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
          c.users[0]?.startup?.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          c.users[0]?.investor?.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          c.users[1]?.investor?.name
            .toLowerCase()
            .includes(searchText.toLowerCase()) ||
          c.users[1]?.startup?.name
            .toLowerCase()
            .includes(searchText.toLowerCase())
      )
    )
  }

  const canChat = (
    conn: (typeof investorConnections)[0],
    otherIndex: number
  ) => {
    if (conn.users[otherIndex]?.messageVisibility == 'PRIVATE') {
      return false
    } else if (
      conn.users[otherIndex]?.messageVisibility == 'CONNECTIONS' &&
      selectedTab != statusList[0]
    ) {
      return false
    } else if (
      conn.users[otherIndex]?.messageVisibility == 'FOLLOWERS' &&
      !conn.users[otherIndex]?.followedBy.some((u) => u?.id == currentUser?.id)
    ) {
      return false
    } else if (
      conn.users[otherIndex]?.blocking.some((u) => u?.id == currentUser?.id)
    ) {
      return false
    }
    return true
  }

  const handleNewChat = async (userID?: number) => {
    await createChat({
      variables: {
        input: {
          userID1: currentUser?.id,
          userID2: userID,
        },
      },
    }).then((d) => {
      const convoID = d.data.createDirectConversation.id
      navigate(
        routes.investorMyConversations({
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

  const handleAcceptConnection = async (connID: number, userID?: number) => {
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
          userID: userID,
        },
      })
    })
  }

  const showInfo = (): string => {
    if (selectedTab == statusList[0]) {
      return 'These are your accepted connections'
    } else if (selectedTab == statusList[1]) {
      return 'These users want to connect with you'
    } else if (selectedTab == statusList[2]) {
      return 'You had rejected these connection requests... You may still accept them!'
    } else {
      return 'These are the connection requests you have sent... We will let you know when they are accepted.'
    }
  }

  const filterConnections = useCallback(
    (s: string): typeof investorConnections => {
      if (s == statusList[0]) {
        return investorConnections.filter((c) => c.status == 'ACCEPTED')
      } else if (s == statusList[1]) {
        return investorConnections.filter(
          (c) => c.status == 'PENDING' && c.requesterID != currentUser?.id
        )
      } else if (s == statusList[2]) {
        return investorConnections.filter(
          (c) => c.status == 'REJECTED' && c.requesterID != currentUser?.id
        )
      } else {
        return investorConnections.filter(
          (c) => c.status != 'ACCEPTED' && c.requesterID == currentUser?.id
        )
      }
    },
    [currentUser?.id, investorConnections]
  )

  useEffect(() => {
    setConnList(filterConnections(selectedTab))
  }, [filterConnections, selectedTab, investorConnections])

  return (
    <div id="ConnectionMainPage" className={ConnectionMainClassName}>
      <PrimaryTitleLabel label="Connections" />
      <div id="ConnHeader" className={ConnectionHeaderClassName}>
        <div id="ConnTab" className={ConnectionTabClasName}>
          {statusList.map((s) => {
            return (
              <button
                key={s}
                className={`flex items-center justify-center border-2 p-1 lg:p-2 ${
                  selectedTab == s
                    ? ' border-x-transparent border-b-primary-d1 border-t-transparent dark:border-b-primary-l1'
                    : ' border-transparent '
                }`}
                onClick={() => {
                  setSelectedTab(s) //Change the tab
                  setConnList(filterConnections(s)) //Show connection list based on the selected tab
                }}
              >
                {selectedTab == s ? (
                  <PrimaryTextLabel label={s} />
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
          <PrimaryIconButton
            icon={<SearchIcon className={LightIconClassName} />}
            action={() => {
              handleSearch() //Show conn list based on search text
            }}
          />
        </div>
      </div>
      <div className={DividerClassName} />
      <div className={ConnectionInfoClassName}>
        <InfoIcon className={ConnectionInfoIconClassName} />
        <WarnSubTextLabel label={showInfo()} />
      </div>
      <div id="ConnContent" className={PageDivClassName}>
        {connList.map((c) => {
          const otherIndex = c.users[0]?.id == currentUser?.id ? 1 : 0
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
                    if (c.users[otherIndex]?.type == 'INVESTOR') {
                      //Navigate to other investor profile
                      navigate(
                        routes.investorOtherProfile({
                          id: c.users[otherIndex]?.id ?? 0,
                        })
                      )
                    } else {
                      //Navigate to startup profile
                      navigate(
                        routes.investorStartupProfile({
                          id: c.users[otherIndex]?.id ?? 0,
                        })
                      )
                    }
                  }}
                >
                  {
                    //TODO: Add Profile pic as BG - phase 2
                    c.users[otherIndex]?.type == 'INVESTOR'
                      ? c.users[otherIndex]?.investor?.name[0].toUpperCase()
                      : c.users[otherIndex]?.startup?.name[0].toUpperCase()
                  }
                </button>
                <div id="ConnName" className={NameClassName}>
                  <PrimaryMediumLabel
                    label={
                      c.users[otherIndex]?.type == 'INVESTOR'
                        ? c.users[otherIndex]?.investor?.name
                        : c.users[otherIndex]?.startup?.name
                    }
                  />
                </div>
                {selectedTab == statusList[1] && (
                  <>
                    <button
                      className={ConnectionAcceptClassName}
                      id="AcceptButton"
                      onClick={() => {
                        handleAcceptConnection(c.id, c.users[otherIndex]?.id)
                      }}
                    >
                      <AcceptIcon className={IconClassName} />
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
                      <CloseIcon className={IconClassName} />
                      <div className={HideShowClassName}>
                        <SubTextLabel label={'Reject'} />
                      </div>
                    </button>
                  </>
                )}
                {selectedConnID == c.id ? (
                  <UpIcon className={IconClassName} />
                ) : (
                  <DownIcon className={IconClassName} />
                )}
              </div>
              {selectedConnID == c.id && (
                <div id="ConnMeta" className={ConnectionMetaClassName}>
                  <SubTextLabel
                    label={
                      c.users[otherIndex]?.type == 'INVESTOR'
                        ? `${c.users[otherIndex]?.investor?.location.city}, ${c.users[otherIndex]?.investor?.location.state}`
                        : `${c.users[otherIndex]?.startup?.location.city}, ${c.users[otherIndex]?.startup?.location.state}`
                    }
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
                      if (c.users[otherIndex]?.type == 'INVESTOR') {
                        //Navigate to other investor profile
                        navigate(
                          routes.investorOtherProfile({
                            id: c.users[otherIndex]?.id ?? 0,
                          })
                        )
                      } else {
                        //Navigate to startup profile
                        navigate(
                          routes.investorStartupProfile({
                            id: c.users[otherIndex]?.id ?? 0,
                          })
                        )
                      }
                    }}
                  >
                    <ProfileIcon className={IconClassName} />
                    <div className={HideShowClassName}>
                      <SubTextLabel label={'Profile'} />
                    </div>
                  </button>
                  {canChat(c, otherIndex) && (
                    <button
                      id="ChatButton"
                      className={ConnectionActionClassName}
                      onClick={() => {
                        //Chat with investor
                        const convoID = c.users[
                          otherIndex
                        ]?.directConversations.find((d) => {
                          return d?.users.some((u) => u?.id == currentUser?.id)
                        })?.id
                        if (convoID) {
                          //If chat already exists, navigate to that chat
                          navigate(
                            routes.investorMyConversations({
                              id: convoID,
                            })
                          )
                        } else {
                          //Else, create a new chat and navigate to it
                          handleNewChat(c.users[otherIndex]?.id)
                        }
                      }}
                    >
                      <ChatIcon className={IconClassName} />
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
                        handleAcceptConnection(c.id, c.users[otherIndex]?.id)
                      }}
                    >
                      <AcceptIcon className={IconClassName} />
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
                    <DeleteIcon className={IconClassName} />
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
