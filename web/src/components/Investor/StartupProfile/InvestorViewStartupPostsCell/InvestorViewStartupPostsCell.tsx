import moment from 'moment'
import type { InvestorViewStartupPostsQuery } from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import type { CellSuccessProps } from '@redwoodjs/web'

import { ProfilePageClassName } from 'src/components/Investor/InvestorConsts'
import {
  GreySubTextLabel,
  PrimaryTextLabel,
  SubTextLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query InvestorViewStartupPostsQuery {
    investorViewStartupPosts: myPosts {
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
    <GreySubTextLabel label="No posts by the startup!" />
  </div>
)

export const Success = ({
  investorViewStartupPosts,
}: CellSuccessProps<InvestorViewStartupPostsQuery>) => {
  return (
    <div id="PostsTab" className={ProfilePageClassName}>
      {investorViewStartupPosts.map((post) => {
        return (
          <button
            key={post.id}
            onClick={() => {
              navigate(routes.investorViewPost({ id: post.id }))
            }}
            className="grid w-full grid-cols-3 justify-items-start gap-2 rounded bg-primary-d1/5 p-3 text-left hover:bg-primary-d1/20 dark:bg-primary-l1/5 hover:dark:bg-primary-l1/20 lg:gap-3 lg:p-4"
          >
            <div className={`${post.imageURL ? 'col-span-2' : 'col-span-3'}`}>
              <PrimaryTextLabel label={post.title} />
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
