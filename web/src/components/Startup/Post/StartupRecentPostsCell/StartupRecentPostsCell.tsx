import type { StartupRecentPostsQuery } from 'types/graphql'

import type { CellSuccessProps } from '@redwoodjs/web'

export const QUERY = gql`
  query StartupRecentPostsQuery($id: Int!) {
    myRecentPosts: myRecentPosts {
      id
      title
      writeup
      attachmentURL
      imageURL
      createdAt
      visibility
      likedByUsers {
        id
      }
      savedByUsers {
        id
      }
      posterID
      poster {
        id
        type
        profilePicURL
        followedBy {
          id
        }
        connections {
          id
          users {
            id
          }
        }
        investor {
          id
          name
        }
        startup {
          id
          name
        }
      }
      comments {
        id
      }
    }
    recentInvestorPosts: recentPostsByPostId(id: $id) {
      id
      title
      writeup
      attachmentURL
      imageURL
      createdAt
      visibility
      likedByUsers {
        id
      }
      savedByUsers {
        id
      }
      posterID
      poster {
        id
        type
        profilePicURL
        followedBy {
          id
        }
        connections {
          id
          users {
            id
          }
        }
        investor {
          id
          name
        }
        startup {
          id
          name
        }
      }
      comments {
        id
      }
    }
  }
`

export const Empty = () => <div></div>

// export const afterQuery = (data: any) => {
//   console.log(data)
//   if (data.recentInvestorPosts) {
//     return data.recentInvestorPosts
//   } else {
//     return data.myRecentPosts
//   }
// }

export const Success = ({
  recentInvestorPosts,
  myRecentPosts,
}: CellSuccessProps<StartupRecentPostsQuery>) => {
  console.log({ recentInvestorPosts }, { myRecentPosts })
  //Show current user's (startup) recent posts
  let recentPosts = myRecentPosts
  //Show investor's recent posts
  if (recentInvestorPosts.length > 0) {
    recentPosts = recentInvestorPosts
  }
  return (
    <ul>
      {recentPosts.map((item) => {
        return <li key={item.id}>{JSON.stringify(item)}</li>
      })}
    </ul>
  )
}
