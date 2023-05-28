import { useEffect, useState } from 'react'

import moment from 'moment'
import CommentIcon from 'public/icons/comment.svg'
import SaveIcon from 'public/icons/favorite.svg'
import MoreIcon from 'public/icons/more.svg'
import SendIcon from 'public/icons/send.svg'
import ShareIcon from 'public/icons/share.svg'
import LikeIcon from 'public/icons/thumbUp.svg'
import type {
  FindStartupViewPostQuery,
  FindStartupViewPostQueryVariables,
} from 'types/graphql'

import { back, navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  HoverTertiaryTextButton,
  TertiaryFilledButton,
} from 'src/components/Button/Button'
import {
  GreySubTitleLabel,
  SmallLabel,
  SubTextLabel,
  TertiaryMediumLabel,
  TextLabel,
} from 'src/components/Label/Label'
import {
  PosterProfilePicClassName,
  HoverIconClassName,
  PostInteractionClassName,
  CountClassName,
  IconClassName,
  PostDivClassName,
} from 'src/components/Startup/startupHomeConsts'

/*
Checks to be made before startup user views a post:
  If the poster is a startup, it must be the current user
  If the poster is an investor:
  - if visibility is connection, the investor must be user's connection
  - if visibility is follower, the investor must be followedBy the user
*/

export const QUERY = gql`
  query FindStartupViewPostQuery($id: Int!) {
    startupViewPost: post(id: $id) {
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
        type
        profilePicURL
        followedBy {
          id
        }
        connections {
          users {
            id
          }
        }
        investor {
          name
        }
        startup {
          name
        }
      }
      comments {
        id
        content
        createdAt
        likedByUsers {
          id
        }
        commenterID
        commenter {
          profilePicURL
          investor {
            name
          }
          startup {
            name
          }
        }
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

export const isEmpty = (data: any, { isDataEmpty }: { isDataEmpty: any }) => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { currentUser } = useAuth()
  let showEmpty = false
  if (data.startupViewPost.poster.type == 'STARTUP') {
    //Check if Startup is the poster
    if (data.startupViewPost.posterID != currentUser?.id) {
      showEmpty = true
    }
  } else if (data.startupViewPost.poster.type == 'INVESTOR') {
    if (data.startupViewPost.visibility == 'CONNECTIONS') {
      //Check if Startup is a connection of poster
      showEmpty = !data.startupViewPost.poster.connections.some((d: any) =>
        d.users.includes(currentUser?.id)
      )
    } else if (data.startupViewPost.visibility == 'FOLLOWERS') {
      //Check if Startup is a follower of poster
      showEmpty = !data.startupViewPost.poster.followedBy.some((d: any) =>
        d.includes(currentUser?.id)
      )
    }
  }
  return isDataEmpty(data) || showEmpty
}

export const Empty = () => (
  <div className="flex h-full w-full flex-col items-center justify-center gap-3 lg:gap-4">
    {/* TODO: Add illustration - phase 2 */}
    <GreySubTitleLabel label="No such post exists or you may not have the access!" />
    <TertiaryFilledButton label="GO BACK" action={() => back()} />
  </div>
)

export const Success = ({
  startupViewPost,
}: CellSuccessProps<
  FindStartupViewPostQuery,
  FindStartupViewPostQueryVariables
>) => {
  const [userComment, setUserComment] = useState('')
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
          id: startupViewPost.id,
        },
      })
    } else {
      //Add like to Post
      await addPostLike({
        variables: {
          id: startupViewPost.id,
        },
      })
    }
  }

  const handleSave = async () => {
    if (saved) {
      //Unsave Post
      await unsavePost({
        variables: {
          id: startupViewPost.id,
        },
      })
    } else {
      //Save Post
      await savePost({
        variables: {
          id: startupViewPost.id,
        },
      })
    }
  }

  //Startup can comment on self post
  const postComment = async () => {
    await addComment({
      variables: {
        input: {
          commenterID: currentUser?.id,
          postID: startupViewPost.id,
          content: userComment,
        },
      },
    }).then(() => {
      setUserComment('')
    })
  }

  useEffect(() => {
    setLiked(startupViewPost.likedByUsers.some((d) => d?.id == currentUser?.id))
    setSaved(startupViewPost.savedByUsers.some((d) => d?.id == currentUser?.id))
  }, [
    currentUser?.id,
    startupViewPost.likedByUsers,
    startupViewPost.savedByUsers,
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
                routes.startupInvestorProfile({ id: startupViewPost.posterID })
              )
            }}
          >
            {
              //TODO: Add Profile pic as BG - phase 2
              startupViewPost.poster.investor?.name[0].toUpperCase()
            }
          </button>
          <div className="flex flex-col items-start justify-center">
            <HoverTertiaryTextButton
              label={startupViewPost.poster.investor?.name ?? ''}
              action={() => {
                //Go to investor's profile
                navigate(
                  routes.startupInvestorProfile({
                    id: startupViewPost.posterID,
                  })
                )
              }}
            />
            <SmallLabel label={moment(startupViewPost.createdAt).fromNow()} />
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
        <TertiaryMediumLabel label={startupViewPost.title} />
        {startupViewPost.writeup && (
          <TextLabel label={startupViewPost.writeup} />
        )}
        {startupViewPost.attachmentURL && (
          <HoverTertiaryTextButton
            label={startupViewPost.attachmentURL}
            action={() => {
              startupViewPost.attachmentURL &&
                window.open(startupViewPost.attachmentURL)?.focus()
            }}
          />
        )}
      </div>
      {startupViewPost.imageURL && (
        <div className="flex w-full justify-center bg-white dark:bg-black">
          <img
            className="object-fill"
            src={startupViewPost.imageURL}
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
          {startupViewPost.comments && (
            <div className={CountClassName}>
              {startupViewPost.likedByUsers.length.toString()}
            </div>
          )}
        </button>
        <button
          className={PostInteractionClassName}
          onClick={() => {
            //Go to post details page
            navigate(routes.startupPost({ id: startupViewPost.id }))
          }}
        >
          <CommentIcon className={IconClassName} />
          <div className="hidden lg:block">
            <SubTextLabel label={'Comments'} />
          </div>
          {startupViewPost.comments && (
            <div className={CountClassName}>
              {startupViewPost.comments.length.toString()}{' '}
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
