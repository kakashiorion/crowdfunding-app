import { useState } from 'react'

import moment from 'moment'
import AddIcon from 'public/icons/add.svg'
import CalendarIcon from 'public/icons/calendar.svg'
import CloseIcon from 'public/icons/close.svg'
import ChatIcon from 'public/icons/comment.svg'
import DeleteIcon from 'public/icons/delete.svg'
import EmptyIcon from 'public/icons/dnd.svg'
import DoneIcon from 'public/icons/done.svg'
import InfoIcon from 'public/icons/info.svg'
import LocationIcon from 'public/icons/location.svg'
import type {
  FindStartupViewInvestorProfileQuery,
  FindStartupViewInvestorProfileQueryVariables,
} from 'types/graphql'

import { back, navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  DropDownButton,
  LeadingIconBlackFilledButton,
  TertiaryFilledButton,
} from 'src/components/Button/Button'
import {
  GreySubTitleLabel,
  MediumLabel,
  SmallLabel,
  SubDisplayLabel,
  SubTextLabel,
  TertiaryTextLabel,
  TextLabel,
} from 'src/components/Label/Label'
import StartupViewInvestorExperienceCell from 'src/components/Startup/InvestorProfile/StartupViewInvestorExperienceCell'
import StartupViewInvestorObjectiveCell from 'src/components/Startup/InvestorProfile/StartupViewInvestorObjectiveCell'
import {
  ButtonIconClassName,
  ErrorIconClassName,
  InfoIconClassName,
  ProfilePageClassName,
  InvestorProfilePicClassName,
  SuccessIconClassName,
  ProfileActionsClassName,
  ProfileHeaderClassName,
  ProfileStatsClassName,
  StatItemClassName,
  ProfileMetaClassName,
  DividerClassName,
  DoubleSpanItemClassName,
  SingleSpanItemClassName,
  ProfileTabsClassName,
  EmptyIconClassName,
  EmptyDivClassName,
  ActionGroupClassName,
  SmallIconClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query FindStartupViewInvestorProfileQuery($id: Int!) {
    startupViewInvestorProfile: investor(id: $id) {
      id
      name
      createdAt
      linkedInURL
      websiteURL
      eduBG
      yearsOfWorkEx
      numberOfCompanies
      workedInSectors
      participatingInOffers {
        id
      }
      negotiatingOffers {
        id
      }
      dealsJoined {
        id
      }
      location {
        id
        city
        state
      }
      user {
        id
        profilePicURL
        profileVisbility
        messageVisibility
        posts {
          id
        }
        comments {
          id
        }
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
    <TertiaryFilledButton label="GO BACK" action={() => back()} />
  </div>
)

const tabs = ['Details', 'Experience', 'Objective']

export const Success = ({
  startupViewInvestorProfile,
}: CellSuccessProps<
  FindStartupViewInvestorProfileQuery,
  FindStartupViewInvestorProfileQueryVariables
>) => {
  const { currentUser } = useAuth()
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const [mutualFollow] = useMutation(MUTUAL_FOLLOW_MUTATION)
  const [createConnection] = useMutation(CREATE_CONNECTION_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        variables: {
          id: startupViewInvestorProfile.id,
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
          id: startupViewInvestorProfile.id,
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
          id: startupViewInvestorProfile.id,
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
          id: startupViewInvestorProfile.id,
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
          id: startupViewInvestorProfile.id,
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
            id: startupViewInvestorProfile.id,
          },
          fetchPolicy: 'network-only',
        },
      ],
    }
  )

  const followersCount = startupViewInvestorProfile.user.followedBy.length
  const followingsCount = startupViewInvestorProfile.user.following.length
  const postsCount = startupViewInvestorProfile.user.posts.length
  const commentsCount = startupViewInvestorProfile.user.comments.length
  const connectionCount = startupViewInvestorProfile.user.connections.filter(
    (c) => c?.status == 'ACCEPTED'
  ).length

  const isBlocking = startupViewInvestorProfile.user.blocking.some(
    (u) => u?.id == currentUser?.id
  )

  const isFollowed = startupViewInvestorProfile.user.followedBy.some(
    (u) => u?.id == currentUser?.id
  )

  const isConnected = startupViewInvestorProfile.user.connections.find(
    (c) =>
      c?.users.some((u) => u?.id == currentUser?.id) && c.status == 'ACCEPTED'
  )

  const isRequestedByMe = startupViewInvestorProfile.user.connections.find(
    (c) => c?.requesterID == currentUser?.id && c?.status != 'ACCEPTED'
  )

  const isPendingOnMe = startupViewInvestorProfile.user.connections.find(
    (c) =>
      c?.users.some((u) => u?.id == currentUser?.id) &&
      c.status != 'ACCEPTED' &&
      c.requesterID != currentUser?.id
  )

  const isConversing = startupViewInvestorProfile.user.directConversations.find(
    (d) => d?.users.some((u) => u?.id == currentUser?.id)
  )

  const canMessage = (): boolean => {
    if (startupViewInvestorProfile.user.messageVisibility == 'PRIVATE') {
      return false
    } else if (
      startupViewInvestorProfile.user.messageVisibility == 'CONNECTIONS' &&
      !startupViewInvestorProfile.user.connections.some((c) =>
        c?.users.some((u) => u?.id == currentUser?.id)
      )
    ) {
      return false
    } else if (
      startupViewInvestorProfile.user.messageVisibility == 'FOLLOWERS' &&
      !startupViewInvestorProfile.user.followedBy.some(
        (u) => u?.id == currentUser?.id
      )
    ) {
      return false
    }
    return true
  }

  const isProfileVisible = (): boolean => {
    if (startupViewInvestorProfile.user.profileVisbility == 'PRIVATE') {
      return false
    } else if (
      startupViewInvestorProfile.user.profileVisbility == 'CONNECTIONS' &&
      !startupViewInvestorProfile.user.connections.some(
        (c) =>
          c?.users.some((u) => u?.id == currentUser?.id) &&
          c.status == 'ACCEPTED'
      )
    ) {
      return false
    } else if (
      startupViewInvestorProfile.user.profileVisbility == 'FOLLOWERS' &&
      !startupViewInvestorProfile.user.followedBy.some(
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
                  accepterID: startupViewInvestorProfile.user.id,
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
                routes.startupMyConversations({
                  id: isConversing.id,
                })
              )
            } else {
              await createConversation({
                variables: {
                  input: {
                    userID1: currentUser?.id,
                    userID2: startupViewInvestorProfile.user.id,
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
                userID: startupViewInvestorProfile.user.id,
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
                userID: startupViewInvestorProfile.user.id,
              },
            })
          }}
        />
      )
    }
  }

  return (
    <div id="InvestorProfilePage" className={ProfilePageClassName}>
      <div id="ProfileHeader" className={ProfileHeaderClassName}>
        <div id="ProfilePic" className={InvestorProfilePicClassName}>
          {startupViewInvestorProfile.name[0].toUpperCase()}
        </div>
        <SubDisplayLabel label={startupViewInvestorProfile.name} />
      </div>
      {!isBlocking && (
        //TODO: Add icons
        <>
          <div id="ProfileMeta" className={ProfileMetaClassName}>
            <div className={ActionGroupClassName}>
              <LocationIcon className={SmallIconClassName} />
              <SubTextLabel
                label={`${startupViewInvestorProfile.location.city}, ${startupViewInvestorProfile.location.state}`}
              />
            </div>
            <div className={ActionGroupClassName}>
              <CalendarIcon className={SmallIconClassName} />
              <SmallLabel
                label={`Joined ${moment(
                  startupViewInvestorProfile.createdAt
                ).fromNow()}`}
              />
            </div>
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
            <div className={StatItemClassName}>
              <SubDisplayLabel label={connectionCount.toString()} />
              <SubTextLabel label="Connections" />
            </div>
            <div className={StatItemClassName}>
              <SubDisplayLabel label={followersCount.toString()} />
              <SubTextLabel label="Followers" />
            </div>
            <div className={StatItemClassName}>
              <SubDisplayLabel label={followingsCount.toString()} />
              <SubTextLabel label="Following" />
            </div>
            <div className={StatItemClassName}>
              <SubDisplayLabel label={postsCount.toString()} />
              <SubTextLabel label="Posts" />
            </div>
            <div className={StatItemClassName}>
              <SubDisplayLabel label={commentsCount.toString()} />
              <SubTextLabel label="Comments" />
            </div>
          </div>
          <div
            id="ProfileContent"
            className="flex h-full w-full flex-col gap-2 lg:gap-3"
          >
            <div id="ContentHeader" className={ProfileTabsClassName}>
              {tabs.map((s) => {
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
            <div className={DividerClassName} />
            <div
              id="ContentDiv"
              className="flex w-full rounded border border-white-d4 p-3 dark:border-black-l4 lg:p-4"
            >
              {selectedTab == tabs[0] && (
                <StartupViewInvestorDetails
                  startupViewInvestorProfile={startupViewInvestorProfile}
                />
              )}
              {selectedTab == tabs[1] && (
                <StartupViewInvestorExperienceCell
                  id={startupViewInvestorProfile.id}
                />
              )}
              {selectedTab == tabs[2] && (
                <StartupViewInvestorObjectiveCell
                  id={startupViewInvestorProfile.id}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        //Handle profile not visible
        <div className={EmptyDivClassName}>
          <EmptyIcon className={EmptyIconClassName} />
          <GreySubTitleLabel label="You don't have permission to view the investor's profile!" />
        </div>
      )}
    </div>
  )
}

const StartupViewInvestorDetails = ({
  startupViewInvestorProfile,
}: CellSuccessProps<
  FindStartupViewInvestorProfileQuery,
  FindStartupViewInvestorProfileQueryVariables
>) => {
  return (
    <div
      id="DetailsTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="LinkedIn" className={DoubleSpanItemClassName}>
        <MediumLabel label={startupViewInvestorProfile.linkedInURL ?? 'N/A'} />
        <SubTextLabel label="LinkedIn" />
      </div>
      <div id="Website" className={DoubleSpanItemClassName}>
        <MediumLabel label={startupViewInvestorProfile.websiteURL ?? 'N/A'} />
        <SubTextLabel label="Website" />
      </div>
      <div id="Education" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorProfile.eduBG
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Education" />
      </div>
      <div id="WorkEx" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorProfile.yearsOfWorkEx
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Work Experience (yrs)" />
      </div>
      <div id="Companies" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorProfile.numberOfCompanies
            .toString()
            .replaceAll('_', ' ')}
        />
        <SubTextLabel label="Worked in Companies" />
      </div>
      <div id="PartOffers" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorProfile.participatingInOffers.length.toString()}
        />
        <SubTextLabel label="Participating in Offers" />
      </div>
      <div id="NegoOffers" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorProfile.negotiatingOffers.length.toString()}
        />
        <SubTextLabel label="Negotiating Offers" />
      </div>
      <div id="Deals" className={SingleSpanItemClassName}>
        <MediumLabel
          label={startupViewInvestorProfile.dealsJoined.length.toString()}
        />
        <SubTextLabel label="Deals Joined" />
      </div>
      <div id="Sectors" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            startupViewInvestorProfile.workedInSectors.length > 0
              ? startupViewInvestorProfile.workedInSectors
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <SubTextLabel label="Worked in Sectors" />
      </div>
    </div>
  )
}

/*
Connect button:
  - If blocked, don't show
  - If already accepted connection, show 'connected' -> Click to delete connection
  - If requested from current user, show 'requested' -> Click to delete connection
  - If pending/rejected connection from investor, show 'Connect' button -> Click to accept connection
  - Else, show Connect button -> Click to create a new connection request

Message button:
  - If blocked, don't show
  - If can message, show button -> Click to resume or create a convo
  - Else, don't show

Follow button:
  - If blocked, don't show
  - If already following, show 'Following' -> Click to unfollow
  - Else, show Follow button -> Click to follow

Profile:
  - If blocked, don't show
  - If profile visible, show profile details
  - Else, don't show
  Details: Followers, Followings, Posts, Comments, etc.
*/
