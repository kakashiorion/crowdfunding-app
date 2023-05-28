import { useState, useEffect } from 'react'

import moment from 'moment'
import CommentIcon from 'public/icons/comment.svg'
import SaveIcon from 'public/icons/favorite.svg'
import MoreIcon from 'public/icons/more.svg'
// import SendIcon from 'public/icons/send.svg'
import ShareIcon from 'public/icons/share.svg'
import LikeIcon from 'public/icons/thumbUp.svg'
import type {
  FindStartupHomePostQuery,
  FindStartupHomePostQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { HoverTertiaryTextButton } from 'src/components/Button/Button'
import {
  TextLabel,
  SmallLabel,
  SubTextLabel,
  TertiaryMediumLabel,
} from 'src/components/Label/Label'
import {
  CountClassName,
  HoverIconClassName,
  IconClassName,
  PostDivClassName,
  PostInteractionClassName,
  PosterProfilePicClassName,
} from 'src/components/Startup/startupHomeConsts'

export const QUERY = gql`
  query FindStartupHomePostQuery($id: Int!) {
    startupHomePost: post(id: $id) {
      id
      title
      writeup
      attachmentURL
      imageURL
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
      savedByUsers {
        id
      }
      comments {
        id
      }
    }
  }
`

const ADD_POST_LIKE_MUTATION = gql`
  mutation addPostLike($id: Int!) {
    addPostLike(id: $id) {
      id
      likedByUsers {
        id
      }
    }
  }
`
const REMOVE_POST_LIKE_MUTATION = gql`
  mutation removePostLike($id: Int!) {
    removePostLike(id: $id) {
      id
      likedByUsers {
        id
      }
    }
  }
`

const SAVE_POST_MUTATION = gql`
  mutation savePost($id: Int!) {
    savePost(id: $id) {
      id
      savedByUsers {
        id
      }
    }
  }
`

const UNSAVE_POST_MUTATION = gql`
  mutation unsavePost($id: Int!) {
    unsavePost(id: $id) {
      id
      savedByUsers {
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

export const Success = ({
  startupHomePost,
}: CellSuccessProps<
  FindStartupHomePostQuery,
  FindStartupHomePostQueryVariables
>) => {
  // const [userComment, setUserComment] = useState('')
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const { currentUser } = useAuth()
  const [addPostLike] = useMutation(ADD_POST_LIKE_MUTATION)
  const [removePostLike] = useMutation(REMOVE_POST_LIKE_MUTATION)
  const [savePost] = useMutation(SAVE_POST_MUTATION)
  const [unsavePost] = useMutation(UNSAVE_POST_MUTATION)
  // const [addComment] = useMutation(ADD_COMMENT_MUTATION)

  const handleLike = async () => {
    if (liked) {
      //Remove like from Post
      await removePostLike({
        variables: {
          id: startupHomePost.id,
        },
      })
    } else {
      //Add like to Post
      await addPostLike({
        variables: {
          id: startupHomePost.id,
        },
      })
    }
  }

  const handleSave = async () => {
    if (saved) {
      //Unsave Post
      await unsavePost({
        variables: {
          id: startupHomePost.id,
        },
      })
    } else {
      //Save Post
      await savePost({
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
    setSaved(startupHomePost.savedByUsers.some((d) => d?.id == currentUser?.id))
  }, [
    currentUser?.id,
    startupHomePost.likedByUsers,
    startupHomePost.savedByUsers,
  ])

  return (
    <div className={PostDivClassName}>
      <div className="flex w-full items-center justify-between gap-3 ">
        <div className="flex items-center gap-3 lg:gap-4">
          <button
            className={PosterProfilePicClassName}
            onClick={() => {
              //Go to investor's profile
              navigate(
                routes.startupInvestorProfile({ id: startupHomePost.posterID })
              )
            }}
          >
            {
              //TODO: Add Profile pic as BG - phase 2
              startupHomePost.poster.investor?.name[0].toUpperCase()
            }
          </button>
          <div className="flex flex-col items-start justify-center">
            <HoverTertiaryTextButton
              label={startupHomePost.poster.investor?.name ?? ''}
              action={() => {
                //Go to investor's profile
                navigate(
                  routes.startupInvestorProfile({
                    id: startupHomePost.posterID,
                  })
                )
              }}
            />
            <SmallLabel label={moment(startupHomePost.createdAt).fromNow()} />
          </div>
        </div>
        <div className="flex items-center justify-end gap-2">
          <SaveIcon
            className={`h-6 w-6 ${
              saved
                ? 'scale-125 fill-tertiary-d1 transition dark:fill-tertiary-l1'
                : 'fill-black duration-200 hover:origin-bottom-left hover:-rotate-12 hover:fill-tertiary-d1 dark:fill-white hover:dark:fill-tertiary-l1'
            }`}
            onClick={() => {
              handleSave()
            }}
          />
          <MoreIcon
            className={HoverIconClassName}
            onClick={() => {
              //TODO: Open more info modal - phase 2
            }}
          />
        </div>
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-1 lg:gap-2">
        <TertiaryMediumLabel label={startupHomePost.title} />
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
      {startupHomePost.imageURL && (
        <div className="flex w-full justify-center bg-white dark:bg-black">
          <img
            className="object-fill"
            src={startupHomePost.imageURL}
            alt="Post attachment"
          />
        </div>
      )}
      <div className="flex w-full flex-wrap items-center justify-between gap-2 lg:gap-3">
        <button
          className={PostInteractionClassName}
          onClick={() => handleLike()}
        >
          <LikeIcon
            className={`h-6 w-6 ${
              liked
                ? 'fill-tertiary-d1 dark:fill-tertiary-l1'
                : 'fill-black group-hover:origin-bottom-left group-hover:-rotate-12 group-hover:fill-tertiary-d1 dark:fill-white group-hover:dark:fill-tertiary-l1'
            }`}
          />
          <div className="hidden lg:block">
            <SubTextLabel label={'Likes'} />
          </div>
          {startupHomePost.comments && (
            <div className={CountClassName}>
              {startupHomePost.likedByUsers.length.toString()}
            </div>
          )}
        </button>
        <button
          className={PostInteractionClassName}
          onClick={() => {
            //Go to post details page
            navigate(routes.startupPost({ id: startupHomePost.id }))
          }}
        >
          <CommentIcon className={IconClassName} />
          <div className="hidden lg:block">
            <SubTextLabel label={'Comments'} />
          </div>
          {startupHomePost.comments && (
            <div className={CountClassName}>
              {startupHomePost.comments.length.toString()}{' '}
            </div>
          )}
        </button>
        <button
          className={PostInteractionClassName}
          onClick={() => {
            //TODO: Open post share modal - phase 2
          }}
        >
          <ShareIcon className={IconClassName} />
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
