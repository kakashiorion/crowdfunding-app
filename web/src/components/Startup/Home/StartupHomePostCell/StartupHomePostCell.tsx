import { useState, useEffect } from 'react'

import moment from 'moment'
import type {
  FindStartupHomePostQuery,
  FindStartupHomePostQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { HoverTertiaryTextButton } from 'src/components/Button/Button'
import SvgBookmark from 'src/components/Icon/Bookmark'
import SvgComment from 'src/components/Icon/Comment'
import SvgMore from 'src/components/Icon/More'
import SvgShare from 'src/components/Icon/Share'
import SvgThumbUp from 'src/components/Icon/ThumbUp'
import {
  TextLabel,
  SmallLabel,
  SubTextLabel,
  TertiaryMediumLabel,
  TertiaryTextLabel,
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
  HideShowClassName,
  PosterHeaderClassName,
  PosterInfoClassName,
  PosterNameClassName,
  ProfilePicClassName,
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
            className={ProfilePicClassName}
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
            <TertiaryTextLabel
              label={startupHomePost.poster.investor?.name ?? ''}
            />
            <SmallLabel label={moment(startupHomePost.createdAt).fromNow()} />
          </div>
        </div>
        <div className={PostActionClassName}>
          <SvgBookmark
            className={`h-6 w-6 ${
              saved
                ? 'scale-125 fill-tertiary-d1 transition dark:fill-tertiary-l1'
                : 'fill-black duration-200 hover:origin-bottom-left hover:-rotate-12 hover:fill-tertiary-d1 dark:fill-white hover:dark:fill-tertiary-l1'
            }`}
            onClick={() => {
              handleSave()
            }}
          />
          <SvgMore
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
          <SvgThumbUp
            className={`h-6 w-6 ${
              liked
                ? 'fill-tertiary-d1 dark:fill-tertiary-l1'
                : 'fill-black group-hover:origin-bottom-left group-hover:-rotate-12 group-hover:fill-tertiary-d1 dark:fill-white group-hover:dark:fill-tertiary-l1'
            }`}
          />
          <div className={HideShowClassName}>
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
            navigate(routes.startupViewPost({ id: startupHomePost.id }))
          }}
        >
          <SvgComment className={IconClassName} />
          <div className={HideShowClassName}>
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
          <SvgShare className={IconClassName} />
          <div className={HideShowClassName}>
            <SubTextLabel label={'Share'} />
          </div>
        </button>
      </div>
    </div>
  )
}
