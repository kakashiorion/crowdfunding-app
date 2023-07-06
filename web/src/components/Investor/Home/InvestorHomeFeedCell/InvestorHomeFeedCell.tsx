import AddIcon from 'public/icons/add.svg'
import type {
  FindInvestorHomeFeedQuery,
  FindInvestorHomeFeedQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { LeadingIconBlackFilledButton } from 'src/components/Button/Button'
import InvestorHomeConnectionCell from 'src/components/Investor/Home/InvestorHomeConnectionCell'
import InvestorHomePostCell from 'src/components/Investor/Home/InvestorHomePostCell'
import { PrimaryTitleLabel } from 'src/components/Label/Label'

/*
1. Recent posts from investors or Investors :
    - if post visibility is Connections && user is a Connection
    - if post visibility is Followers && user is a Follower
    - if post visibility is Public
2. Recent connection events from investors or Investors:
    - if connection's activity visibility is Connections && user is a Connection
    - if connection's activity visibility is Followers && user is a Follower

*/

export const QUERY = gql`
  query FindInvestorHomeFeedQuery {
    feedPosts: recentStartupInvestorPosts {
      id
    }
    feedConnections: recentStartupInvestorConnections {
      id
    }
  }
`

export const Success = ({
  feedPosts,
  feedConnections,
}: CellSuccessProps<
  FindInvestorHomeFeedQuery,
  FindInvestorHomeFeedQueryVariables
>) => {
  return (
    <div className="flex h-full flex-col gap-2 lg:gap-3">
      <div className="flex items-start justify-between">
        <PrimaryTitleLabel label="Home Feed" />
        <LeadingIconBlackFilledButton
          label="CREATE POST"
          icon={<AddIcon className="h-5 w-5 lg:h-6 lg:w-6" />}
          action={() => {
            navigate(routes.investorCreatePost())
          }}
        />
      </div>
      {/* //TODO: Different tabs for various activities */}
      <div className="flex flex-col gap-2 overflow-y-scroll lg:gap-3">
        {feedPosts.map((p: { id: number }) => (
          <InvestorHomePostCell id={p.id} key={'post' + p.id.toString()} />
        ))}
        {feedConnections.map((c: { id: number }) => (
          <InvestorHomeConnectionCell
            id={c.id}
            key={'conn' + c.id.toString()}
          />
        ))}
      </div>
    </div>
  )
}
