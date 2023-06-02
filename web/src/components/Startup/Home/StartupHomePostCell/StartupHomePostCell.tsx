import { useState, useEffect } from 'react'

import moment from 'moment'
import CommentIcon from 'public/icons/comment.svg'
import SaveIcon from 'public/icons/favorite.svg'
import MoreIcon from 'public/icons/more.svg'
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
  PostActionClassName,
  PostContentClassName,
  PostDivClassName,
  PostFooterClassName,
  PostImageClassName,
  PostImageDivClassName,
  PostInteractionClassName,
  PostInteractionTextClassName,
  PosterHeaderClassName,
  PosterInfoClassName,
  PosterNameClassName,
  PosterProfilePicClassName,
} from 'src/components/Startup/StartupConsts'

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
        id
        type
        investor {
          id
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

export const Empty = () => {
  //TODO: Empty post handling - phase 2
  return <></>
}

export const Success = ({
  startupHomePost,
}: CellSuccessProps<
  FindStartupHomePostQuery,
  FindStartupHomePostQueryVariables
>) => {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const { currentUser } = useAuth()
  const [addPostLike] = useMutation(ADD_POST_LIKE_MUTATION)
  const [removePostLike] = useMutation(REMOVE_POST_LIKE_MUTATION)
  const [savePost] = useMutation(SAVE_POST_MUTATION)
  const [unsavePost] = useMutation(UNSAVE_POST_MUTATION)

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
      <div className={PosterHeaderClassName}>
        <div className={PosterInfoClassName}>
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
          <div className={PosterNameClassName}>
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
        <div className={PostActionClassName}>
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
              //TODO: Open more info modal
            }}
          />
        </div>
      </div>
      <div className={PostContentClassName}>
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
        <div className={PostImageDivClassName}>
          <img
            className={PostImageClassName}
            src={startupHomePost.imageURL}
            alt="Post attachment"
          />
        </div>
      )}
      <div className={PostFooterClassName}>
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
          <div className={PostInteractionTextClassName}>
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
          <div className={PostInteractionTextClassName}>
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
            //TODO: Open post share modal
          }}
        >
          <ShareIcon className={IconClassName} />
          <div className={PostInteractionTextClassName}>
            <SubTextLabel label={'Share'} />
          </div>
        </button>
      </div>
    </div>
  )
}
