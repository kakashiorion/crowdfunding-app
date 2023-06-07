import moment from 'moment'
import type { StartupViewInvestorPostsQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { SubTextLabel, TertiaryTextLabel } from 'src/components/Label/Label'

export const QUERY = gql`
  query StartupViewInvestorPostsQuery($id: Int!) {
    startupViewInvestorPosts: postsByPosterID(id: $id) {
      id
      title
      createdAt
      imageURL
      likedByUsers {
        id
      }
      comments {
        id
      }
    }
  }
`

//TODO: Handle no posts by poster
export const Empty = () => <div>Empty</div>

export const Success = ({
  startupViewInvestorPosts,
}: CellSuccessProps<StartupViewInvestorPostsQuery>) => {
  return (
    <div id="PostsTab" className="grid w-full grid-cols-1 gap-3 lg:gap-4">
      {startupViewInvestorPosts.map((post) => {
        return (
          <button
            key={post.id}
            onClick={() => {
              navigate(routes.startupViewPost({ id: post.id }))
            }}
            className="grid w-full grid-cols-3 justify-items-start gap-2 rounded bg-tertiary-d1/5 p-2 dark:bg-tertiary-l1/5 lg:gap-3 lg:p-3"
          >
            <div className={`${post.imageURL ? 'col-span-2' : 'col-span-3'}`}>
              <TertiaryTextLabel label={post.title} />
            </div>
            {post.imageURL && (
              <div className="col-span-1">
                <img src={post.imageURL} alt="Post" />
              </div>
            )}
            <div className="col-span-1">
              <SubTextLabel label={`${post.likedByUsers.length} likes`} />
            </div>
            <div className="col-span-1">
              <SubTextLabel label={`${post.comments.length} comments`} />
            </div>
            <div className="col-span-1">
              <SubTextLabel label={moment(post.createdAt).fromNow()} />
            </div>
          </button>
        )
      })}
    </div>
  )
}
