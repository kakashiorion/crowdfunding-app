import { useState } from 'react'

import moment from 'moment'
import type {
  FindInvestorMyProfileQuery,
  FindInvestorMyProfileQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import SvgLocation from 'src/components/Icon/Location'
import SvgWorld from 'src/components/Icon/World'
import {
  ActionGroupClassName,
  DividerClassName,
  DoubleSpanItemClassName,
  InvestorProfilePicClassName,
  ProfileHeaderClassName,
  ProfileMetaClassName,
  ProfilePageClassName,
  ProfileStatsClassName,
  ProfileTabsClassName,
  SingleSpanItemClassName,
  SmallIconClassName,
  StatItemClassName,
} from 'src/components/Investor/InvestorConsts'
import InvestorMyExperienceCell from 'src/components/Investor/MyProfile/InvestorMyExperienceCell'
import InvestorMyObjectiveCell from 'src/components/Investor/MyProfile/InvestorMyObjectiveCell'
import InvestorMyPreferencesCell from 'src/components/Investor/MyProfile/InvestorMyPreferencesCell'
import {
  MediumLabel,
  PrimaryTextLabel,
  SmallLabel,
  SubDisplayLabel,
  GreySubTextLabel,
  TextLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorMyProfileQuery($id: Int!) {
    investorMyProfile: investor(id: $id) {
      id
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

export const beforeQuery = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentUser } = useAuth()

  return {
    variables: { id: currentUser?.id },
  }
}

const tabs = ['Details', 'Experience', 'Objective', 'Preferences']

export const Success = ({
  investorMyProfile,
}: CellSuccessProps<
  FindInvestorMyProfileQuery,
  FindInvestorMyProfileQueryVariables
>) => {
  const [selectedTab, setSelectedTab] = useState(tabs[0])
  const followersCount = investorMyProfile.user.followedBy.length
  const followingsCount = investorMyProfile.user.following.length
  const postsCount = investorMyProfile.user.posts.length
  const commentsCount = investorMyProfile.user.comments.length
  const connectionCount = investorMyProfile.user.connections.filter(
    (c) => c?.status == 'ACCEPTED'
  ).length

  return (
    <div id="InvestorProfilePage" className={ProfilePageClassName}>
      <div id="ProfileHeader" className={ProfileHeaderClassName}>
        <div id="ProfilePic" className={InvestorProfilePicClassName}>
          {investorMyProfile.name[0].toUpperCase()}
        </div>
        <SubDisplayLabel label={investorMyProfile.name} />
      </div>
      <div id="ProfileMeta" className={ProfileMetaClassName}>
        <div className={ActionGroupClassName}>
          <SvgLocation className={SmallIconClassName} />
          <GreySubTextLabel
            label={`${investorMyProfile.location.city}, ${investorMyProfile.location.state}`}
          />
        </div>
        <div className={ActionGroupClassName}>
          <SvgWorld className={SmallIconClassName} />
          <SmallLabel
            label={`Joined ${moment(investorMyProfile.createdAt).fromNow()}`}
          />
        </div>
      </div>
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
            <InvestorMyDetails investorMyProfile={investorMyProfile} />
          )}
          {selectedTab == tabs[1] && (
            <InvestorMyExperienceCell id={investorMyProfile.id} />
          )}
          {selectedTab == tabs[2] && (
            <InvestorMyObjectiveCell id={investorMyProfile.id} />
          )}
          {selectedTab == tabs[3] && (
            <InvestorMyPreferencesCell id={investorMyProfile.id} />
          )}
        </div>
      </div>
    </div>
  )
}

const InvestorMyDetails = ({
  investorMyProfile,
}: CellSuccessProps<
  FindInvestorMyProfileQuery,
  FindInvestorMyProfileQueryVariables
>) => {
  return (
    <div
      id="DetailsTab"
      className="grid w-full grid-cols-1 gap-3 lg:grid-cols-2 lg:gap-4"
    >
      <div id="LinkedIn" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorMyProfile.linkedInURL ?? 'N/A'} />
        <GreySubTextLabel label="LinkedIn" />
      </div>
      <div id="Website" className={DoubleSpanItemClassName}>
        <MediumLabel label={investorMyProfile.websiteURL ?? 'N/A'} />
        <GreySubTextLabel label="Website" />
      </div>
      <div id="Education" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyProfile.eduBG.toString().replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Education" />
      </div>
      <div id="WorkEx" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyProfile.yearsOfWorkEx
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Work Experience (yrs)" />
      </div>
      <div id="Companies" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyProfile.numberOfCompanies
            .toString()
            .replaceAll('_', ' ')}
        />
        <GreySubTextLabel label="Worked in Companies" />
      </div>
      <div id="PartOffers" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyProfile.participatingInOffers.length.toString()}
        />
        <GreySubTextLabel label="Participating in Offers" />
      </div>
      <div id="NegoOffers" className={SingleSpanItemClassName}>
        <MediumLabel
          label={investorMyProfile.negotiatingOffers.length.toString()}
        />
        <GreySubTextLabel label="Negotiating Offers" />
      </div>
      <div id="Deals" className={SingleSpanItemClassName}>
        <MediumLabel label={investorMyProfile.dealsJoined.length.toString()} />
        <GreySubTextLabel label="Deals Joined" />
      </div>
      <div id="Sectors" className={DoubleSpanItemClassName}>
        <MediumLabel
          label={
            investorMyProfile.workedInSectors.length > 0
              ? investorMyProfile.workedInSectors
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
