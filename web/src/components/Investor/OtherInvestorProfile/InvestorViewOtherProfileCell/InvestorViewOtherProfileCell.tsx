import { useState } from 'react'

import moment from 'moment'
import type {
  FindInvestorViewOtherProfileQuery,
  FindInvestorViewOtherProfileQueryVariables,
} from 'types/graphql'

import { back, navigate, routes } from '@redwoodjs/router'
import { type CellSuccessProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  PrimaryFilledButton,
  DropDownButton,
  LeadingIconBlackFilledButton,
} from 'src/components/Button/Button'
import SvgAdd from 'src/components/Icon/Add'
import SvgCalendar from 'src/components/Icon/Calendar'
import SvgClose from 'src/components/Icon/Close'
import SvgComment from 'src/components/Icon/Comment'
import SvgDelete from 'src/components/Icon/Delete'
import SvgDnd from 'src/components/Icon/Dnd'
import SvgDone from 'src/components/Icon/Done'
import SvgInfo from 'src/components/Icon/Info'
import SvgLocation from 'src/components/Icon/Location'
import {
  ActionGroupClassName,
  ButtonIconClassName,
  DividerClassName,
  DoubleSpanItemClassName,
  EmptyDivClassName,
  EmptyIconClassName,
  ErrorIconClassName,
  InfoIconClassName,
  InvestorProfilePicClassName,
  ProfileActionsClassName,
  ProfileHeaderClassName,
  ProfileMetaClassName,
  ProfilePageClassName,
  ProfileStatsClassName,
  ProfileTabsClassName,
  SingleSpanItemClassName,
  SmallIconClassName,
  StatItemClassName,
  SuccessIconClassName,
} from 'src/components/Investor/InvestorConsts'
import InvestorViewOtherExperienceCell from 'src/components/Investor/OtherInvestorProfile/InvestorViewOtherExperienceCell'
import InvestorViewOtherObjectiveCell from 'src/components/Investor/OtherInvestorProfile/InvestorViewOtherObjectiveCell'
import {
  GreySubTitleLabel,
  MediumLabel,
  PrimaryTextLabel,
  SmallLabel,
  SubDisplayLabel,
  GreySubTextLabel,
  TextLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorViewOtherProfileQuery($id: Int!) {
    investorViewOtherProfile: investor(id: $id) {
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
    <SvgDnd className={EmptyIconClassName} />
    <GreySubTitleLabel label="No such investor exists!" />
    <PrimaryFilledButton label="GO BACK" action={() => back()} />
  </div>
)

const tabs = ['Details', 'Experience', 'Objective']

export const Success = ({
  investorViewOtherProfile,
}: CellSuccessProps<
  FindInvestorViewOtherProfileQuery,
  FindInvestorViewOtherProfileQueryVariables
>) => {
  const { currentUser } = useAuth()
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const [mutualFollow] = useMutation(MUTUAL_FOLLOW_MUTATION)
  const [createConnection] = useMutation(CREATE_CONNECTION_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        variables: {
          id: investorViewOtherProfile.id,
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
          id: investorViewOtherProfile.id,
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
          id: investorViewOtherProfile.id,
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
          id: investorViewOtherProfile.id,
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
          id: investorViewOtherProfile.id,
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
            id: investorViewOtherProfile.id,
          },
          fetchPolicy: 'network-only',
        },
      ],
    }
  )

  const followersCount = investorViewOtherProfile.user.followedBy.length
  const followingsCount = investorViewOtherProfile.user.following.length
  const postsCount = investorViewOtherProfile.user.posts.length
  const commentsCount = investorViewOtherProfile.user.comments.length
  const connectionCount = investorViewOtherProfile.user.connections.filter(
    (c) => c?.status == 'ACCEPTED'
  ).length

  const isBlocking = investorViewOtherProfile.user.blocking.some(
    (u) => u?.id == currentUser?.id
  )

  const isFollowed = investorViewOtherProfile.user.followedBy.some(
    (u) => u?.id == currentUser?.id
  )

  const isConnected = investorViewOtherProfile.user.connections.find(
    (c) =>
      c?.users.some((u) => u?.id == currentUser?.id) && c.status == 'ACCEPTED'
  )

  const isRequestedByMe = investorViewOtherProfile.user.connections.find(
    (c) => c?.requesterID == currentUser?.id && c?.status != 'ACCEPTED'
  )

  const isPendingOnMe = investorViewOtherProfile.user.connections.find(
    (c) =>
      c?.users.some((u) => u?.id == currentUser?.id) &&
      c.status != 'ACCEPTED' &&
      c.requesterID != currentUser?.id
  )

  const isConversing = investorViewOtherProfile.user.directConversations.find(
    (d) => d?.users.some((u) => u?.id == currentUser?.id)
  )

  const canMessage = (): boolean => {
    if (investorViewOtherProfile.user.messageVisibility == 'PRIVATE') {
      return false
    } else if (
      investorViewOtherProfile.user.messageVisibility == 'CONNECTIONS' &&
      !investorViewOtherProfile.user.connections.some((c) =>
        c?.users.some((u) => u?.id == currentUser?.id)
      )
    ) {
      return false
    } else if (
      investorViewOtherProfile.user.messageVisibility == 'FOLLOWERS' &&
      !investorViewOtherProfile.user.followedBy.some(
        (u) => u?.id == currentUser?.id
      )
    ) {
      return false
    }
    return true
  }

  const isProfileVisible = (): boolean => {
    if (investorViewOtherProfile.user.profileVisbility == 'PRIVATE') {
      return false
    } else if (
      investorViewOtherProfile.user.profileVisbility == 'CONNECTIONS' &&
      !investorViewOtherProfile.user.connections.some(
        (c) =>
          c?.users.some((u) => u?.id == currentUser?.id) &&
          c.status == 'ACCEPTED'
      )
    ) {
      return false
    } else if (
      investorViewOtherProfile.user.profileVisbility == 'FOLLOWERS' &&
      !investorViewOtherProfile.user.followedBy.some(
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
          leadingIcon={<SvgDone className={SuccessIconClassName} />}
          label={'Connected'}
          dropIcon={<SvgDelete className={ErrorIconClassName} />}
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
          leadingIcon={<SvgInfo className={InfoIconClassName} />}
          label={'Sent request'}
          dropIcon={<SvgDelete className={ErrorIconClassName} />}
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
          leadingIcon={<SvgInfo className={InfoIconClassName} />}
          label={'Pending'}
          dropIcon={<SvgDone className={SuccessIconClassName} />}
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
          icon={<SvgAdd className={ButtonIconClassName} />}
          action={async () => {
            await createConnection({
              variables: {
                input: {
                  requesterID: currentUser?.id,
                  accepterID: investorViewOtherProfile.user.id,
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
          icon={<SvgComment className={ButtonIconClassName} />}
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
                    userID2: investorViewOtherProfile.user.id,
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
          leadingIcon={<SvgDone className={SuccessIconClassName} />}
          label={'Following'}
          dropIcon={<SvgClose className={ErrorIconClassName} />}
          dropLabel={'Unfollow'}
          dropAction={async () => {
            await unFollowUser({
              variables: {
                userID: investorViewOtherProfile.user.id,
              },
            })
          }}
        />
      )
    } else {
      return (
        <LeadingIconBlackFilledButton
          label="FOLLOW"
          icon={<SvgAdd className={ButtonIconClassName} />}
          action={async () => {
            await followUser({
              variables: {
                userID: investorViewOtherProfile.user.id,
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
          {investorViewOtherProfile.name[0].toUpperCase()}
        </div>
        <SubDisplayLabel label={investorViewOtherProfile.name} />
      </div>
      {!isBlocking && (
        <>
          <div id="ProfileMeta" className={ProfileMetaClassName}>
            <div className={ActionGroupClassName}>
              <SvgLocation className={SmallIconClassName} />
              <GreySubTextLabel
                label={`${investorViewOtherProfile.location.city}, ${investorViewOtherProfile.location.state}`}
              />
            </div>
            <div className={ActionGroupClassName}>
              <SvgCalendar className={SmallIconClassName} />
              <SmallLabel
                label={`Joined ${moment(
                  investorViewOtherProfile.createdAt
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
              <GreySubTextLabel label="Connections" />
            </div>
            <div className={StatItemClassName}>
              <SubDisplayLabel label={followersCount.toString()} />
              <GreySubTextLabel label="Followers" />
            </div>
            <div className={StatItemClassName}>
              <SubDisplayLabel label={followingsCount.toString()} />
              <GreySubTextLabel label="Following" />
            </div>
            <div className={StatItemClassName}>
              <SubDisplayLabel label={postsCount.toString()} />
              <GreySubTextLabel label="Posts" />
            </div>
            <div className={StatItemClassName}>
              <SubDisplayLabel label={commentsCount.toString()} />
              <GreySubTextLabel label="Comments" />
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
                        ? ' border-x-transparent border-b-primary-d1 border-t-transparent dark:border-b-primary-l1'
                        : ' border-transparent '
                    }`}
                    onClick={() => {
                      setSelectedTab(s) //Change the tab
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
            <div className={DividerClassName} />
            <div
              id="ContentDiv"
              className="flex w-full rounded border border-white-d4 p-3 dark:border-black-l4 lg:p-4"
            >
              {selectedTab == tabs[0] && (
                <InvestorViewOtherDetails
                  investorViewOtherProfile={investorViewOtherProfile}
                />
              )}
              {selectedTab == tabs[1] && (
                <InvestorViewOtherExperienceCell
                  id={investorViewOtherProfile.id}
                />
              )}
              {selectedTab == tabs[2] && (
                <InvestorViewOtherObjectiveCell
                  id={investorViewOtherProfile.id}
                />
              )}
            </div>
          </div>
        </>
      ) : (
        //Handle profile not visible
        <div className={EmptyDivClassName}>
          <SvgDnd className={EmptyIconClassName} />
          <GreySubTitleLabel label="You don't have permission to view the investor's profile!" />
        </div>
      )}
    </div>
  )
}

const InvestorViewOtherDetails = ({
  investorViewOtherProfile,
}: CellSuccessProps<
  FindInvestorViewOtherProfileQuery,
  FindInvestorViewOtherProfileQueryVariables
>) => {
  return (
    <div
      id="DetailsTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="LinkedIn" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorViewOtherProfile.linkedInURL ?? 'N/A'} />
        <GreySubTextLabel label="LinkedIn" />
      </div>
      <div id="Website" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorViewOtherProfile.websiteURL ?? 'N/A'} />
        <GreySubTextLabel label="Website" />
      </div>
      <div id="Education" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherProfile.eduBG.toString().replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Education" />
      </div>
      <div id="WorkEx" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherProfile.yearsOfWorkEx
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Work Experience (yrs)" />
      </div>
      <div id="Companies" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherProfile.numberOfCompanies
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Worked in Companies" />
      </div>
      <div id="PartOffers" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherProfile.participatingInOffers.length.toString()}
        />
        <GreySubTextLabel label="Participating in Offers" />
      </div>
      <div id="NegoOffers" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherProfile.negotiatingOffers.length.toString()}
        />
        <GreySubTextLabel label="Negotiating Offers" />
      </div>
      <div id="Deals" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorViewOtherProfile.dealsJoined.length.toString()}
        />
        <GreySubTextLabel label="Deals Joined" />
      </div>
      <div id="Sectors" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorViewOtherProfile.workedInSectors.length > 0
              ? investorViewOtherProfile.workedInSectors
                  .join(', ')
                  .replaceAll('_', ' ')
              : '-'
          }
        />
        <GreySubTextLabel label="Worked in Sectors" />
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
