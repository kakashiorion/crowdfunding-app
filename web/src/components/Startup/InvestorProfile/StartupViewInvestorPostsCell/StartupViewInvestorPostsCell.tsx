import moment from 'moment'
import type { StartupViewInvestorPostsQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { GreySubTextLabel, TertiaryTextLabel } from 'src/components/Label/Label'
import { ProfilePageClassName } from 'src/components/Startup/StartupConsts'

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

//Handle no posts by poster
export const Empty = () => (
  <div>
    <GreySubTextLabel label="No posts by the investor!" />
  </div>
)

export const Success = ({
  startupViewInvestorPosts,
}: CellSuccessProps<StartupViewInvestorPostsQuery>) => {
  return (
    <div id="PostsTab" className={ProfilePageClassName}>
      {startupViewInvestorPosts.map((post) => {
        return (
          <button
            key={post.id}
            onClick={() => {
              navigate(routes.startupViewPost({ id: post.id }))
            }}
            className="grid w-full grid-cols-3 justify-items-start gap-2 rounded bg-tertiary-d1/5 p-3 hover:bg-tertiary-d1/20 dark:bg-tertiary-l1/5 hover:dark:bg-tertiary-l1/20 lg:gap-3 lg:p-4"
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
              <GreySubTextLabel label={`${post.likedByUsers.length} likes`} />
            </div>
            <div className="col-span-1">
              <GreySubTextLabel label={`${post.comments.length} comments`} />
            </div>
            <div className="col-span-1">
              <GreySubTextLabel label={moment(post.createdAt).fromNow()} />
            </div>
          </button>
        )
      })}
    </div>
  )
}
