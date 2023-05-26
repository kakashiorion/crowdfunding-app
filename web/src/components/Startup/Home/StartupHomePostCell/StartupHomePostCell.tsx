import { useState, useEffect } from 'react'

import moment from 'moment'
import CommentIcon from 'public/icons/comment.svg'
// import SaveIcon from 'public/icons/favorite.svg'
import MoreIcon from 'public/icons/more.svg'
// import SendIcon from 'public/icons/send.svg'
import ShareIcon from 'public/icons/share.svg'
import LikeIcon from 'public/icons/thumbUp.svg'
import type {
  FindStartupHomePostQuery,
  FindStartupHomePostQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, CellFailureProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { HoverTertiaryTextButton } from 'src/components/Button/Button'
import {
  TextLabel,
  SmallLabel,
  SubTitleLabel,
  SubTextLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query FindStartupHomePostQuery($id: Int!) {
    startupHomePost: post(id: $id) {
      id
      title
      writeup
      attachmentURL
      createdAt
      posterID
      poster {
        type
        investor {
          name
        }
      }
      likedByUsers {
        id
      }
      comments {
        id
      }
    }
  }
`

const ADD_USER_LIKE_MUTATION = gql`
  mutation addUserLike($id: Int!) {
    addUserLike(id: $id) {
      id
      likedByUsers {
        id
      }
    }
  }
`
const REMOVE_USER_LIKE_MUTATION = gql`
  mutation removeUserLike($id: Int!) {
    removeUserLike(id: $id) {
      id
      likedByUsers {
        id
      }
    }
  }
`

// const ADD_COMMENT_MUTATION = gql`
//   mutation createComment($input: CreateCommentInput!) {
//     createComment(input: $input) {
//       id
//       commenterID
//       content
//       createdAt
//     }
//   }
// `

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({
  error,
}: CellFailureProps<FindStartupHomePostQueryVariables>) => (
  <div style={{ color: 'red' }}>Error: {error?.message}</div>
)

export const Success = ({
  startupHomePost,
}: CellSuccessProps<
  FindStartupHomePostQuery,
  FindStartupHomePostQueryVariables
>) => {
  // const [userComment, setUserComment] = useState('')
  const [liked, setLiked] = useState(false)
  const { currentUser } = useAuth()
  const [addLike] = useMutation(ADD_USER_LIKE_MUTATION)
  const [removeLike] = useMutation(REMOVE_USER_LIKE_MUTATION)
  // const [addComment] = useMutation(ADD_COMMENT_MUTATION)

  const handleLike = async () => {
    if (liked) {
      //Remove like from Post
      await removeLike({
        variables: {
          id: startupHomePost.id,
        },
      })
    } else {
      //Add like to Post
      await addLike({
        variables: {
          id: startupHomePost.id,
        },
      })
    }
  }

  //TODO: Startup cannot comment on Investor's post - phase 2
  // const postComment = async () => {
  //   await addComment({
  //     variables: {
  //       input: {
  //         commenterID: currentUser?.id,
  //         postID: startupHomePost.id,
  //         content: userComment,
  //       },
  //     },
  //   }).then(() => {
  //     setUserComment('')
  //   })
  // }

  useEffect(() => {
    setLiked(startupHomePost.likedByUsers.some((d) => d?.id == currentUser?.id))
  }, [currentUser?.id, startupHomePost.likedByUsers])

  return (
    <div className="flex w-full flex-col items-start gap-2 rounded border border-white-d3 bg-white-d1/50 p-3 dark:border-black-l3 dark:bg-black-l1/50 lg:p-4">
      <div className="flex w-full items-center justify-between gap-3 ">
        <div className="flex items-center gap-3 lg:gap-4">
          <button
            className="flex h-6 w-6 items-center justify-center rounded-full bg-black text-b2 text-white hover:bg-tertiary-d1 dark:bg-white dark:text-black dark:hover:bg-tertiary-l1 lg:h-7 lg:w-7 lg:text-b1"
            onClick={() => {
              //Go to investor's profile
              navigate(
                routes.startupInvestorProfile({ id: startupHomePost.posterID })
              )
            }}
          >
            {
              //TODO: Add Profile pic as BG
              startupHomePost.poster.investor?.name[0].toUpperCase()
            }
          </button>
          <div className="flex flex-col items-start justify-center">
            <TextLabel label={startupHomePost.poster.investor?.name ?? ''} />
            <SmallLabel label={moment(startupHomePost.createdAt).fromNow()} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          {/* //TODO: Save Post feature - phase 2
          <SaveIcon
            className="h-6 w-6 fill-black hover:fill-tertiary-l3 dark:fill-white dark:hover:fill-tertiary-d3 lg:h-7 lg:w-7"
            onClick={() => {
              //TODO: Save Post in DB
            }}
          /> */}
          <MoreIcon
            className="h-6 w-6 fill-black hover:fill-tertiary-l3 dark:fill-white dark:hover:fill-tertiary-d3 lg:h-7 lg:w-7"
            onClick={() => {
              //TODO: Open more info modal
            }}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start">
        <SubTitleLabel label={startupHomePost.title} />
        {startupHomePost.writeup && (
          <TextLabel label={startupHomePost.writeup} />
        )}
        {startupHomePost.attachmentURL && (
          <HoverTertiaryTextButton
            label={startupHomePost.attachmentURL}
            action={() => {
              startupHomePost.attachmentURL &&
                window.open(startupHomePost.attachmentURL)?.focus()
            }}
          />
        )}
      </div>
      {/* //TODO: Add attachment image
      {startupHomePost.imageURL && <div className=""><img src={startupHomePost.imageURL} alt="Post image"/></div>} */}
      <div className="flex w-full flex-wrap items-center justify-between gap-2 lg:gap-3">
        <button
          className="flex items-center justify-between gap-2 rounded px-2 py-1 hover:bg-white-d2 dark:hover:bg-black-l2"
          onClick={() => handleLike()}
        >
          <LikeIcon
            className={`h-6 w-6 ${
              liked
                ? 'fill-tertiary-d1 dark:fill-tertiary-l1'
                : 'fill-black dark:fill-white'
            }`}
          />
          <div className="hidden lg:block">
            <SubTextLabel label={'Likes'} />
          </div>
          {startupHomePost.comments && (
            <div className="flex rounded bg-black-l4 px-2 py-0.5 text-b4 text-white dark:bg-white-d4 dark:text-black lg:text-b3">
              {startupHomePost.likedByUsers.length.toString()}
            </div>
          )}
        </button>
        <button
          className="flex items-center justify-between gap-2 rounded px-2 py-1 hover:bg-white-d2 dark:hover:bg-black-l2"
          onClick={() => {
            //Go to post details page
            navigate(routes.startupPost({ id: startupHomePost.id }))
          }}
        >
          <CommentIcon className="h-6 w-6 fill-black dark:fill-white" />
          <div className="hidden lg:block">
            <SubTextLabel label={'Comments'} />
          </div>
          {startupHomePost.comments && (
            <div className="flex rounded bg-black-l4 px-2 py-0.5 text-b4 text-white dark:bg-white-d4 dark:text-black lg:text-b3">
              {startupHomePost.comments.length.toString()}{' '}
            </div>
          )}
        </button>
        <button
          className="flex items-center justify-between gap-2 rounded px-2 py-1 hover:bg-white-d2 dark:hover:bg-black-l2"
          onClick={() => {
            //TODO: Open post share modal
          }}
        >
          <ShareIcon className="h-6 w-6 fill-black dark:fill-white" />
          <div className="hidden lg:block">
            <SubTextLabel label={'Share'} />
          </div>
        </button>
      </div>
      {/* <div className="flex w-full items-center justify-center gap-1 rounded border-2 border-white-d2 bg-white-d2 px-2 py-1 text-left text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:bg-white focus:outline-none dark:border-black-l2 dark:bg-black-l2 dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 dark:focus:bg-black lg:gap-2 lg:px-3 lg:py-1.5 lg:text-b1">
        <input
          value={userComment}
          placeholder="What do you think?"
          type="text"
          onChange={(e) => {
            setUserComment(e.target.value)
          }}
          className={`w-full bg-transparent text-left text-b2 text-black placeholder:text-black-l4 focus:outline-none  dark:text-white dark:placeholder:text-white-d4 lg:text-b1`}
        ></input>
        <SendIcon
          className="h-7 w-7 fill-black hover:fill-tertiary-d1 dark:fill-white dark:hover:fill-tertiary-l1 lg:h-8 lg:w-8"
          onClick={() => {
            //Add comment in DB
            if (userComment != '') {
              postComment()
            }
            //TODO: Edit comment feature - phase 2
          }}
        />
      </div> */}
    </div>
  )
}
