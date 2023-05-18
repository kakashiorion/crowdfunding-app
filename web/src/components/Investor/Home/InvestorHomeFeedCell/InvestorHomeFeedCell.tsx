import type {
  FindInvestorHomeFeedQuery,
  FindInvestorHomeFeedQueryVariables,
} from 'types/graphql'

import type { CellSuccessProps, CellFailureProps } from '@redwoodjs/web'

/*
Feed consists of:
  Posts by connections/followings/public
  Comments by connections/followings
  Connection updates from connections/followings
*/

export const QUERY = gql`
  query FindInvestorHomeFeedQuery {
    feedPosts: posts {
      id
      posterID
      poster {
        profilePicURL
        type
        investor {
          name
        }
        startup {
          name
        }
      }
      visibility
      title
      writeup
      attachmentURL
      createdAt
      likedByUsers {
        id
      }
      comments {
        commenterID
        content
        attachmentURL
        createdAt
        likedByUsers {
          id
        }
        commenter {
          profilePicURL
          type
          investor {
            name
          }
          startup {
            name
          }
        }
      }
    }
    feedConnections: connections {
      id
      accepterID
      acceptingUser {
        profilePicURL
        type
        investor {
          name
        }
        startup {
          name
        }
      }
      requesterID
      requestingUser {
        profilePicURL
        type
        investor {
          name
        }
        startup {
          name
        }
      }
      status
      createdAt
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindInvestorHomeFeedQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  investorHomeFeed,
}: CellSuccessProps<
  FindInvestorHomeFeedQuery,
  FindInvestorHomeFeedQueryVariables
>) => {
  return <div>{JSON.stringify(investorHomeFeed)}</div>
}
