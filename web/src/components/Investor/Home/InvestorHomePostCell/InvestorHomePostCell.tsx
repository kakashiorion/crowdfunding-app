import { useEffect, useState } from 'react'

import moment from 'moment'
import SaveIcon from 'public/icons/bookmark.svg'
import CommentIcon from 'public/icons/comment.svg'
import MoreIcon from 'public/icons/more.svg'
import ShareIcon from 'public/icons/share.svg'
import LikeIcon from 'public/icons/thumbUp.svg'
import type {
  FindInvestorHomePostQuery,
  FindInvestorHomePostQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation, type CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { HoverPrimaryTextButton } from 'src/components/Button/Button'
import {
  CountClassName,
  HideShowClassName,
  HoverIconClassName,
  IconClassName,
  PostActionClassName,
  PostContentClassName,
  PostDivClassName,
  PostFooterClassName,
  PostImageClassName,
  PostImageDivClassName,
  PostInteractionClassName,
  PosterHeaderClassName,
  PosterInfoClassName,
  PosterNameClassName,
  ProfilePicClassName,
} from 'src/components/Investor/InvestorConsts'
import {
  PrimaryTextLabel,
  SmallLabel,
  PrimaryMediumLabel,
  TextLabel,
  SubTextLabel,
} from 'src/components/Label/Label'

export const QUERY = gql`
  query FindInvestorHomePostQuery($id: Int!) {
    investorHomePost: post(id: $id) {
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
        startup {
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
  investorHomePost,
}: CellSuccessProps<
  FindInvestorHomePostQuery,
  FindInvestorHomePostQueryVariables
>) => {
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const { currentUser } = useAuth()
  const [addPostLike] = useMutation(ADD_POST_LIKE_MUTATION)
  const [removePostLike] = useMutation(REMOVE_POST_LIKE_MUTATION)
  const [savePost] = useMutation(SAVE_POST_MUTATION)
  const [unsavePost] = useMutation(UNSAVE_POST_MUTATION)
  const isPosterInvestor = investorHomePost.poster.type == 'INVESTOR'

  const handleLike = async () => {
    if (liked) {
      //Remove like from Post
      await removePostLike({
        variables: {
          id: investorHomePost.id,
        },
      })
    } else {
      //Add like to Post
      await addPostLike({
        variables: {
          id: investorHomePost.id,
        },
      })
    }
  }

  const handleSave = async () => {
    if (saved) {
      //Unsave Post
      await unsavePost({
        variables: {
          id: investorHomePost.id,
        },
      })
    } else {
      //Save Post
      await savePost({
        variables: {
          id: investorHomePost.id,
        },
      })
    }
  }

  useEffect(() => {
    setLiked(
      investorHomePost.likedByUsers.some((d) => d?.id == currentUser?.id)
    )
    setSaved(
      investorHomePost.savedByUsers.some((d) => d?.id == currentUser?.id)
    )
  }, [
    currentUser?.id,
    investorHomePost.likedByUsers,
    investorHomePost.savedByUsers,
  ])

  return (
    <div className={PostDivClassName}>
      <div className={PosterHeaderClassName}>
        <div className={PosterInfoClassName}>
          <button
            className={ProfilePicClassName}
            onClick={() => {
              if (isPosterInvestor) {
                //Go to other investor's profile
                navigate(
                  routes.investorOtherProfile({ id: investorHomePost.posterID })
                )
              } else {
                //Go to startup's profile
                navigate(
                  routes.investorStartupProfile({
                    id: investorHomePost.posterID,
                  })
                )
              }
            }}
          >
            {
              //TODO: Add Profile pic as BG - phase 2
              isPosterInvestor
                ? investorHomePost.poster.investor?.name[0].toUpperCase()
                : investorHomePost.poster.startup?.name[0].toUpperCase()
            }
          </button>
          <div className={PosterNameClassName}>
            <PrimaryTextLabel
              label={
                isPosterInvestor
                  ? investorHomePost.poster.investor?.name
                  : investorHomePost.poster.startup?.name
              }
            />
            <SmallLabel label={moment(investorHomePost.createdAt).fromNow()} />
          </div>
        </div>
        <div className={PostActionClassName}>
          <SaveIcon
            className={`h-6 w-6 ${
              saved
                ? 'scale-125 fill-primary-d1 transition dark:fill-primary-l1'
                : 'fill-black duration-200 hover:origin-bottom-left hover:-rotate-12 hover:fill-primary-d1 dark:fill-white hover:dark:fill-primary-l1'
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
        <PrimaryMediumLabel label={investorHomePost.title} />
        {investorHomePost.writeup && (
          <TextLabel label={investorHomePost.writeup} />
        )}
        {investorHomePost.attachmentURL && (
          <HoverPrimaryTextButton
            label={investorHomePost.attachmentURL}
            action={() => {
              investorHomePost.attachmentURL &&
                window.open(investorHomePost.attachmentURL)?.focus()
            }}
          />
        )}
      </div>
      {investorHomePost.imageURL && (
        <div className={PostImageDivClassName}>
          <img
            className={PostImageClassName}
            src={investorHomePost.imageURL}
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
                ? 'fill-primary-d1 dark:fill-primary-l1'
                : 'fill-black group-hover:origin-bottom-left group-hover:-rotate-12 group-hover:fill-primary-d1 dark:fill-white group-hover:dark:fill-primary-l1'
            }`}
          />
          <div className={HideShowClassName}>
            <SubTextLabel label={'Likes'} />
          </div>
          {investorHomePost.comments && (
            <div className={CountClassName}>
              {investorHomePost.likedByUsers.length.toString()}
            </div>
          )}
        </button>
        <button
          className={PostInteractionClassName}
          onClick={() => {
            //Go to post details page
            navigate(routes.investorViewPost({ id: investorHomePost.id }))
          }}
        >
          <CommentIcon className={IconClassName} />
          <div className={HideShowClassName}>
            <SubTextLabel label={'Comments'} />
          </div>
          {investorHomePost.comments && (
            <div className={CountClassName}>
              {investorHomePost.comments.length.toString()}{' '}
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
          <div className={HideShowClassName}>
            <SubTextLabel label={'Share'} />
          </div>
        </button>
      </div>
    </div>
  )
}
