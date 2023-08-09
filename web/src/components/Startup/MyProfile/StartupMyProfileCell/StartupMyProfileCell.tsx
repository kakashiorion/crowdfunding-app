import { useState } from 'react'

import moment from 'moment'
import type {
  FindStartupMyProfileQuery,
  FindStartupMyProfileQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import SvgBook from 'src/components/Icon/Book'
import SvgCalendar from 'src/components/Icon/Calendar'
import SvgCategory from 'src/components/Icon/Category'
import SvgConnect from 'src/components/Icon/Connect'
import SvgDown from 'src/components/Icon/Down'
import SvgLocation from 'src/components/Icon/Location'
import SvgUp from 'src/components/Icon/Up'
import SvgWorld from 'src/components/Icon/World'
import {
  SmallLabel,
  SubDisplayLabel,
  GreySubTextLabel,
  TertiaryTextLabel,
} from 'src/components/Label/Label'
import StartupMyProfileBackgroundCell from 'src/components/Startup/MyProfile/StartupMyProfileBackgroundCell'
import StartupMyProfileBusinessCell from 'src/components/Startup/MyProfile/StartupMyProfileBusinessCell'
import StartupMyProfileFinancialsCell from 'src/components/Startup/MyProfile/StartupMyProfileFinancialsCell'
import StartupMyProfileMarketCell from 'src/components/Startup/MyProfile/StartupMyProfileMarketCell'
import StartupMyProfileObjectiveCell from 'src/components/Startup/MyProfile/StartupMyProfileObjectiveCell'
import StartupMyProfilePreferencesCell from 'src/components/Startup/MyProfile/StartupMyProfilePreferencesCell'
import {
  ActionGroupClassName,
  InvestorProfilePicClassName,
  LargeIconClassName,
  ProfileHeaderClassName,
  ProfileMetaClassName,
  ProfilePageClassName,
  ProfileStatsClassName,
  SmallIconClassName,
  StatItemClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query FindStartupMyProfileQuery($id: Int!) {
    startupMyProfile: startup(id: $id) {
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
        following {
          id
        }
        followedBy {
          id
        }
        connections {
          id
          status
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

export const beforeQuery = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentUser } = useAuth()

  return {
    variables: { id: currentUser?.id },
  }
}

const tabs = [
  { title: 'Background', comp: StartupMyProfileBackgroundCell },
  { title: 'Business', comp: StartupMyProfileBusinessCell },
  { title: 'Market', comp: StartupMyProfileMarketCell },
  { title: 'Financials', comp: StartupMyProfileFinancialsCell },
  { title: 'Objective', comp: StartupMyProfileObjectiveCell },
  { title: 'Preferences', comp: StartupMyProfilePreferencesCell },
]

export const Success = ({
  startupMyProfile,
}: CellSuccessProps<
  FindStartupMyProfileQuery,
  FindStartupMyProfileQueryVariables
>) => {
  const [selectedTab, setSelectedTab] = useState(-1)

  return (
    <div id="MyProfilePageContainer" className={ProfilePageClassName}>
      <div id="MyProfileHeader" className={ProfileHeaderClassName}>
        <div id="MyProfilePic" className={InvestorProfilePicClassName}>
          {/* //TODO: Add Profile pic: Phase - 2 */}
          {startupMyProfile.name[0].toUpperCase()}
        </div>
        <SubDisplayLabel label={startupMyProfile.name} />
      </div>
      <div id="MyProfileInfo" className={ProfileMetaClassName}>
        <div id="MyWriteup" className={ActionGroupClassName}>
          <SvgBook className={SmallIconClassName} />
          <GreySubTextLabel label={startupMyProfile.writeUp} />
        </div>
        <div id="MyLocation" className={ActionGroupClassName}>
          <SvgLocation className={SmallIconClassName} />
          <GreySubTextLabel
            label={`${startupMyProfile.location.city}, ${startupMyProfile.location.state}`}
          />
        </div>
        <div id="MySector" className={ActionGroupClassName}>
          <SvgCategory className={SmallIconClassName} />
          <GreySubTextLabel
            label={`${startupMyProfile.sectorCategory.category} (${startupMyProfile.sectorCategory.sector})`}
          />
        </div>
        <div id="MyIncorpDate" className={ActionGroupClassName}>
          <SvgCalendar className={SmallIconClassName} />
          <SmallLabel
            label={`Estd. ${moment(startupMyProfile.dateIncorporated).format(
              'DD MMM YYYY'
            )}`}
          />
        </div>
        <div id="MyLI" className={ActionGroupClassName}>
          <SvgConnect className={SmallIconClassName} />
          <SmallLabel label={startupMyProfile.linkedInURL ?? '-'} />
        </div>
        <div id="MyWebsite" className={ActionGroupClassName}>
          <SvgWorld className={SmallIconClassName} />
          <SmallLabel label={startupMyProfile.websiteURL ?? '-'} />
        </div>
        <div id="ProfileStats" className={ProfileStatsClassName}>
          <button
            id="MyConnectionStats"
            className={StatItemClassName}
            onClick={() => navigate(routes.startupMyConnections())}
          >
            <SubDisplayLabel
              label={startupMyProfile.user.connections
                .filter((c) => c?.status == 'ACCEPTED')
                .length.toString()}
            />
            <GreySubTextLabel label="Connections" />
          </button>
          <div id="MyFollowerStats" className={StatItemClassName}>
            <SubDisplayLabel
              label={startupMyProfile.user.followedBy.length.toString()}
            />
            <GreySubTextLabel label="Followers" />
          </div>
          <div id="MyFollowingStats" className={StatItemClassName}>
            <SubDisplayLabel
              label={startupMyProfile.user.following.length.toString()}
            />
            <GreySubTextLabel label="Following" />
          </div>
          <div id="MyPostsStats" className={StatItemClassName}>
            <SubDisplayLabel
              label={startupMyProfile.user.posts.length.toString()}
            />
            <GreySubTextLabel label="Posts" />
          </div>
          <div id="MyCommentsStats" className={StatItemClassName}>
            <SubDisplayLabel
              label={startupMyProfile.user.comments.length.toString()}
            />
            <GreySubTextLabel label="Comments" />
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
                  <TertiaryTextLabel label={tab.title} />
                  {selectedTab == i ? (
                    <SvgUp className={LargeIconClassName} />
                  ) : (
                    <SvgDown className={LargeIconClassName} />
                  )}
                </div>
                {selectedTab == i && <tab.comp id={startupMyProfile.id} />}
              </button>
            )
          })}
        </div>
      </div>
    </div>
  )
}

/*
Basic:
  - Profile pic -> edit
  - Name -> edit
  - Writeup -> edit
  - Location -> edit
  - SectorCategory -> edit
  - Incorp date -> edit
  - WebsiteURL -> edit
  - LinkedInUrl -> edit

Stats:
  - Followers -> show list of followers
  - Followings -> show list of followings
  - Connections -> redirect to connections page

Sections:
  - Background
  - Business
  - Market
  - Financials
  - Objective
  - Settings & Preferences (blocked users)
  - Posts
  - Comments
*/
