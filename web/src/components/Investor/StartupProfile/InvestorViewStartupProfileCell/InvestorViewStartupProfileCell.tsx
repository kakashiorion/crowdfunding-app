import { useState } from 'react'

import moment from 'moment'
import AddIcon from 'public/icons/add.svg'
import AboutIcon from 'public/icons/book.svg'
import CalendarIcon from 'public/icons/calendar.svg'
import SectorIcon from 'public/icons/category.svg'
import CloseIcon from 'public/icons/close.svg'
import ChatIcon from 'public/icons/comment.svg'
import LIIcon from 'public/icons/connect.svg'
import DeleteIcon from 'public/icons/delete.svg'
import EmptyIcon from 'public/icons/dnd.svg'
import DoneIcon from 'public/icons/done.svg'
import DownIcon from 'public/icons/down.svg'
import InfoIcon from 'public/icons/info.svg'
import LocationIcon from 'public/icons/location.svg'
import UpIcon from 'public/icons/up.svg'
import WorldIcon from 'public/icons/world.svg'
import type {
  FindInvestorViewStartupProfileQuery,
  FindInvestorViewStartupProfileQueryVariables,
} from 'types/graphql'

import { back, navigate, routes } from '@redwoodjs/router'
import { useMutation, type CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  DropDownButton,
  LeadingIconBlackFilledButton,
  PrimaryFilledButton,
} from 'src/components/Button/Button'
import {
  ActionGroupClassName,
  ButtonIconClassName,
  EmptyDivClassName,
  EmptyIconClassName,
  ErrorIconClassName,
  InfoIconClassName,
  InvestorProfilePicClassName,
  LargeIconClassName,
  ProfileActionsClassName,
  ProfileHeaderClassName,
  ProfileMetaClassName,
  ProfilePageClassName,
  ProfileStatsClassName,
  SmallIconClassName,
  StatItemClassName,
  SuccessIconClassName,
} from 'src/components/Investor/InvestorConsts'
import InvestorViewStartupBackgroundCell from 'src/components/Investor/StartupProfile/InvestorViewStartupBackgroundCell'
import InvestorViewStartupBusinessCell from 'src/components/Investor/StartupProfile/InvestorViewStartupBusinessCell'
import InvestorViewStartupFinancialsCell from 'src/components/Investor/StartupProfile/InvestorViewStartupFinancialsCell'
import InvestorViewStartupMarketCell from 'src/components/Investor/StartupProfile/InvestorViewStartupMarketCell'
import InvestorViewStartupObjectiveCell from 'src/components/Investor/StartupProfile/InvestorViewStartupObjectiveCell'
import {
  SmallLabel,
  SubDisplayLabel,
  SubTextLabel,
  PrimaryTextLabel,
  GreySubTitleLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorViewStartupProfileQuery($id: Int!) {
    investorViewStartupProfile: startup(id: $id) {
      id
      name
      writeUp
      dateIncorporated
      websiteURL
      linkedInURL
      createdAt
      user {
        id
        posts {
          id
        }
        comments {
          id
        }
        profilePicURL
        blocking {
          id
        }
        following {
          id
        }
        followedBy {
          id
        }
        directConversations {
          id
          users {
            id
          }
        }
        connections {
          id
          status
          requesterID
          users {
            id
          }
        }
      }
      sectorCategory {
        id
        sector
        category
      }
      location {
        id
        city
        state
      }
    }
  }
`

const CREATE_CONNECTION_MUTATION = gql`
  mutation CreateConnection($input: CreateConnectionInput!) {
    createConnection(input: $input) {
      id
    }
  }
`

const ACCEPT_CONNECTION_MUTATION = gql`
  mutation AcceptConnection($id: Int!, $input: UpdateConnectionInput!) {
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

const UNFOLLOW_USER_MUTATION = gql`
  mutation UnfollowUser($userID: Int!) {
    unfollowUser(userID: $userID) {
      id
    }
  }
`

const FOLLOW_USER_MUTATION = gql`
  mutation FollowUser($userID: Int!) {
    followUser(userID: $userID) {
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

const CREATE_DIRECT_CONVERSATION_MUTATION = gql`
  mutation CreateDirectConversation($input: CreateDirectConversationInput!) {
    createDirectConversation(input: $input) {
      id
    }
  }
`

//Handle no investor found
export const Empty = () => (
  <div className={EmptyDivClassName}>
    <EmptyIcon className={EmptyIconClassName} />
    <GreySubTitleLabel label="No such investor exists!" />
    <PrimaryFilledButton label="GO BACK" action={() => back()} />
  </div>
)

const tabs = [
  { title: 'Background', comp: InvestorViewStartupBackgroundCell },
  { title: 'Business', comp: InvestorViewStartupBusinessCell },
  { title: 'Market', comp: InvestorViewStartupMarketCell },
  { title: 'Financials', comp: InvestorViewStartupFinancialsCell },
  { title: 'Objective', comp: InvestorViewStartupObjectiveCell },
]
export const Success = ({
  investorViewStartupProfile,
}: CellSuccessProps<
  FindInvestorViewStartupProfileQuery,
  FindInvestorViewStartupProfileQueryVariables
>) => {
  const [selectedTab, setSelectedTab] = useState(-1)
  const { currentUser } = useAuth()
  const [mutualFollow] = useMutation(MUTUAL_FOLLOW_MUTATION)
  const [createConnection] = useMutation(CREATE_CONNECTION_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        variables: {
          id: investorViewStartupProfile.id,
        },
        fetchPolicy: 'network-only',
      },
    ],
  })
  const [acceptConnection] = useMutation(ACCEPT_CONNECTION_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        variables: {
          id: investorViewStartupProfile.id,
        },
        fetchPolicy: 'network-only',
      },
    ],
  })
  const [deleteConnection] = useMutation(DELETE_CONNECTION_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        variables: {
          id: investorViewStartupProfile.id,
        },
        fetchPolicy: 'network-only',
      },
    ],
  })
  const [unFollowUser] = useMutation(UNFOLLOW_USER_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        variables: {
          id: investorViewStartupProfile.id,
        },
        fetchPolicy: 'network-only',
      },
    ],
  })
  const [followUser] = useMutation(FOLLOW_USER_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        variables: {
          id: investorViewStartupProfile.id,
        },
        fetchPolicy: 'network-only',
      },
    ],
  })
  const [createConversation] = useMutation(
    CREATE_DIRECT_CONVERSATION_MUTATION,
    {
      refetchQueries: [
        {
          query: QUERY,
          variables: {
            id: investorViewStartupProfile.id,
          },
          fetchPolicy: 'network-only',
        },
      ],
    }
  )

  const followersCount = investorViewStartupProfile.user.followedBy.length
  const followingsCount = investorViewStartupProfile.user.following.length
  const postsCount = investorViewStartupProfile.user.posts.length
  const commentsCount = investorViewStartupProfile.user.comments.length
  const connectionCount = investorViewStartupProfile.user.connections.filter(
    (c) => c?.status == 'ACCEPTED'
  ).length

  const isBlocking = investorViewStartupProfile.user.blocking.some(
    (u) => u?.id == currentUser?.id
  )

  const isFollowed = investorViewStartupProfile.user.followedBy.some(
    (u) => u?.id == currentUser?.id
  )

  const isConnected = investorViewStartupProfile.user.connections.find(
    (c) =>
      c?.users.some((u) => u?.id == currentUser?.id) && c.status == 'ACCEPTED'
  )

  const isRequestedByMe = investorViewStartupProfile.user.connections.find(
    (c) => c?.requesterID == currentUser?.id && c?.status != 'ACCEPTED'
  )

  const isPendingOnMe = investorViewStartupProfile.user.connections.find(
    (c) =>
      c?.users.some((u) => u?.id == currentUser?.id) &&
      c.status != 'ACCEPTED' &&
      c.requesterID != currentUser?.id
  )

  const isConversing = investorViewStartupProfile.user.directConversations.find(
    (d) => d?.users.some((u) => u?.id == currentUser?.id)
  )

  const canMessage = (): boolean => {
    if (investorViewStartupProfile.user.messageVisibility == 'PRIVATE') {
      return false
    } else if (
      investorViewStartupProfile.user.messageVisibility == 'CONNECTIONS' &&
      !investorViewStartupProfile.user.connections.some((c) =>
        c?.users.some((u) => u?.id == currentUser?.id)
      )
    ) {
      return false
    } else if (
      investorViewStartupProfile.user.messageVisibility == 'FOLLOWERS' &&
      !investorViewStartupProfile.user.followedBy.some(
        (u) => u?.id == currentUser?.id
      )
    ) {
      return false
    }
    return true
  }

  const isProfileVisible = (): boolean => {
    if (investorViewStartupProfile.user.profileVisbility == 'PRIVATE') {
      return false
    } else if (
      investorViewStartupProfile.user.profileVisbility == 'CONNECTIONS' &&
      !investorViewStartupProfile.user.connections.some(
        (c) =>
          c?.users.some((u) => u?.id == currentUser?.id) &&
          c.status == 'ACCEPTED'
      )
    ) {
      return false
    } else if (
      investorViewStartupProfile.user.profileVisbility == 'FOLLOWERS' &&
      !investorViewStartupProfile.user.followedBy.some(
        (u) => u?.id == currentUser?.id
      )
    ) {
      return false
    }
    return true
  }

  const connectButton = (): React.JSX.Element => {
    if (isBlocking) {
      return <></>
    } else if (isConnected) {
      return (
        <DropDownButton
          key="Connected"
          leadingIcon={<DoneIcon className={SuccessIconClassName} />}
          label={'Connected'}
          dropIcon={<DeleteIcon className={ErrorIconClassName} />}
          dropLabel={'Remove'}
          dropAction={async () => {
            await deleteConnection({
              variables: {
                id: isConnected.id,
              },
            })
          }}
        />
      )
    } else if (isRequestedByMe) {
      return (
        <DropDownButton
          key="Request"
          leadingIcon={<InfoIcon className={InfoIconClassName} />}
          label={'Sent request'}
          dropIcon={<DeleteIcon className={ErrorIconClassName} />}
          dropLabel={'Remove'}
          dropAction={async () => {
            await deleteConnection({
              variables: {
                id: isRequestedByMe.id,
              },
            })
          }}
        />
      )
    } else if (isPendingOnMe) {
      return (
        <DropDownButton
          key="Accept"
          leadingIcon={<InfoIcon className={InfoIconClassName} />}
          label={'Pending'}
          dropIcon={<DoneIcon className={SuccessIconClassName} />}
          dropLabel={'Accept'}
          dropAction={async () => {
            await acceptConnection({
              variables: {
                id: isPendingOnMe.id,
                input: {
                  status: 'ACCEPTED',
                },
              },
            }).then(async () => {
              await mutualFollow({
                variables: {
                  userID: isPendingOnMe.requesterID,
                },
              })
            })
          }}
        />
      )
    } else {
      return (
        <LeadingIconBlackFilledButton
          key="Connect"
          label="CONNECT"
          icon={<AddIcon className={ButtonIconClassName} />}
          action={async () => {
            await createConnection({
              variables: {
                input: {
                  requesterID: currentUser?.id,
                  accepterID: investorViewStartupProfile.user.id,
                },
              },
            })
          }}
        />
      )
    }
  }

  const messageButton = (): React.JSX.Element => {
    if (isBlocking) {
      return <></>
    } else if (canMessage()) {
      return (
        <LeadingIconBlackFilledButton
          label="MESSAGE"
          icon={<ChatIcon className={ButtonIconClassName} />}
          action={async () => {
            if (isConversing) {
              navigate(
                routes.investorMyConversations({
                  id: isConversing.id,
                })
              )
            } else {
              await createConversation({
                variables: {
                  input: {
                    userID1: currentUser?.id,
                    userID2: investorViewStartupProfile.user.id,
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
          }}
        />
      )
    } else {
      return <></>
    }
  }

  const followButton = (): React.JSX.Element => {
    if (isBlocking) {
      return <></>
    } else if (isFollowed) {
      return (
        <DropDownButton
          leadingIcon={<DoneIcon className={SuccessIconClassName} />}
          label={'Following'}
          dropIcon={<CloseIcon className={ErrorIconClassName} />}
          dropLabel={'Unfollow'}
          dropAction={async () => {
            await unFollowUser({
              variables: {
                userID: investorViewStartupProfile.user.id,
              },
            })
          }}
        />
      )
    } else {
      return (
        <LeadingIconBlackFilledButton
          label="FOLLOW"
          icon={<AddIcon className={ButtonIconClassName} />}
          action={async () => {
            await followUser({
              variables: {
                userID: investorViewStartupProfile.user.id,
              },
            })
          }}
        />
      )
    }
  }

  return (
    <div id="StartupProfilePageContainer" className={ProfilePageClassName}>
      <div id="StartupProfileHeader" className={ProfileHeaderClassName}>
        <div id="StartupProfilePic" className={InvestorProfilePicClassName}>
          {/* //TODO: Add Profile pic: Phase - 2 */}
          {investorViewStartupProfile.name[0].toUpperCase()}
        </div>
        <SubDisplayLabel label={investorViewStartupProfile.name} />
      </div>
      <div id="StartupProfileInfo" className={ProfileMetaClassName}>
        {!isBlocking && (
          <>
            <div id="StartupWriteup" className={ActionGroupClassName}>
              <AboutIcon className={SmallIconClassName} />
              <SubTextLabel label={investorViewStartupProfile.writeUp} />
            </div>
            <div id="StartupLocation" className={ActionGroupClassName}>
              <LocationIcon className={SmallIconClassName} />
              <SubTextLabel
                label={`${investorViewStartupProfile.location.city}, ${investorViewStartupProfile.location.state}`}
              />
            </div>
            <div id="StartupSector" className={ActionGroupClassName}>
              <SectorIcon className={SmallIconClassName} />
              <SubTextLabel
                label={`${investorViewStartupProfile.sectorCategory.category} (${investorViewStartupProfile.sectorCategory.sector})`}
              />
            </div>
            <div id="StartupIncorpDate" className={ActionGroupClassName}>
              <CalendarIcon className={SmallIconClassName} />
              <SmallLabel
                label={`Estd. ${moment(
                  investorViewStartupProfile.dateIncorporated
                ).format('DD MMM YYYY')}`}
              />
            </div>
            <div id="StartupLI" className={ActionGroupClassName}>
              <LIIcon className={SmallIconClassName} />
              <SmallLabel
                label={investorViewStartupProfile.linkedInURL ?? '-'}
              />
            </div>
            <div id="StartupWebsite" className={ActionGroupClassName}>
              <WorldIcon className={SmallIconClassName} />
              <SmallLabel
                label={investorViewStartupProfile.websiteURL ?? '-'}
              />
            </div>
            <div id="ProfileActions" className={ProfileActionsClassName}>
              {connectButton()}
              {messageButton()}
              {followButton()}
            </div>
          </>
        )}
        {!isBlocking && isProfileVisible() ? (
          <>
            <div id="ProfileStats" className={ProfileStatsClassName}>
              <button
                id="StartupConnectionStats"
                className={StatItemClassName}
                onClick={() => navigate(routes.investorMyConnections())}
              >
                <SubDisplayLabel label={connectionCount.toString()} />
                <SubTextLabel label="Connections" />
              </button>
              <div id="StartupFollowerStats" className={StatItemClassName}>
                <SubDisplayLabel label={followersCount.toString()} />
                <SubTextLabel label="Followers" />
              </div>
              <div id="StartupFollowingStats" className={StatItemClassName}>
                <SubDisplayLabel label={followingsCount.toString()} />
                <SubTextLabel label="Following" />
              </div>
              <div id="StartupPostsStats" className={StatItemClassName}>
                <SubDisplayLabel label={postsCount.toString()} />
                <SubTextLabel label="Posts" />
              </div>
              <div id="StartupCommentsStats" className={StatItemClassName}>
                <SubDisplayLabel label={commentsCount.toString()} />
                <SubTextLabel label="Comments" />
              </div>
            </div>
            <div
              id="ProfileContent"
              className="my-2 flex h-full w-full flex-col gap-2 lg:my-3 lg:gap-3"
            >
              {tabs.map((tab, i) => {
                return (
                  <button
                    key={i}
                    id="Startup"
                    className="flex w-full flex-col items-center justify-start gap-2 rounded border border-white-d3 p-2 dark:border-black-l3 lg:gap-3 lg:p-3"
                    onClick={() => {
                      if (selectedTab != i) {
                        setSelectedTab(i)
                      } else {
                        setSelectedTab(-1)
                      }
                    }}
                  >
                    <div className="flex w-full items-center justify-between">
                      <PrimaryTextLabel label={tab.title} />
                      {selectedTab == i ? (
                        <UpIcon className={LargeIconClassName} />
                      ) : (
                        <DownIcon className={LargeIconClassName} />
                      )}
                    </div>
                    {selectedTab == i && (
                      <tab.comp id={investorViewStartupProfile.id} />
                    )}
                  </button>
                )
              })}
            </div>
          </>
        ) : (
          //Handle profile not visible
          <div className={EmptyDivClassName}>
            <EmptyIcon className={EmptyIconClassName} />
            <GreySubTitleLabel label="You don't have permission to view the startup's profile!" />
          </div>
        )}
      </div>
    </div>
  )
}
