import { useEffect, useState } from 'react'

import moment from 'moment'
import SaveIcon from 'public/icons/bookmark.svg'
import CommentIcon from 'public/icons/comment.svg'
import EmptyIcon from 'public/icons/dnd.svg'
import MoreIcon from 'public/icons/more.svg'
import SendIcon from 'public/icons/send.svg'
import ShareIcon from 'public/icons/share.svg'
import LikeIcon from 'public/icons/thumbUp.svg'
import type {
  FindInvestorViewPostQuery,
  FindInvestorViewPostQueryVariables,
} from 'types/graphql'

import { back, navigate, routes } from '@redwoodjs/router'
import { useMutation, type CellSuccessProps } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  PrimaryFilledButton,
  HoverPrimaryTextButton,
  PrimaryIconButton,
} from 'src/components/Button/Button'
import InvestorViewCommentCell from 'src/components/Investor/Post/InvestorViewCommentCell'
import {
  GreySubTitleLabel,
  PrimaryTextLabel,
  SmallLabel,
  PrimaryMediumLabel,
  TextLabel,
  SubTextLabel,
} from 'src/components/Label/Label'

import {
  CommentListClassName,
  CountClassName,
  DividerClassName,
  EmptyDivClassName,
  EmptyIconClassName,
  HideShowClassName,
  HoverIconClassName,
  IconClassName,
  InputDivClassName,
  LightIconClassName,
  PostActionClassName,
  PostContentClassName,
  PostFooterClassName,
  PostImageClassName,
  PostImageDivClassName,
  PostInteractionClassName,
  PosterHeaderClassName,
  PosterInfoClassName,
  PosterNameClassName,
  ProfilePicClassName,
  TextInputClassName,
  ViewPostDivClassName,
} from '../../InvestorConsts'

export const QUERY = gql`
  query FindInvestorViewPostQuery($id: Int!) {
    investorViewPost: investorViewPost(id: $id) {
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

const ADD_COMMENT_MUTATION = gql`
  mutation createComment($input: CreateCommentInput!) {
    createComment(input: $input) {
      id
      content
      createdAt
    }
  }
`

export const beforeQuery = ({ id }: { id: number }) => {
  return {
    variables: { id: id },
    fetchPolicy: 'cache-first',
    pollInterval: 30000,
  }
}

export const Empty = () => (
  <div className={EmptyDivClassName}>
    <EmptyIcon className={EmptyIconClassName} />
    <GreySubTitleLabel label="No such post exists or you may not have the access!" />
    <PrimaryFilledButton label="GO BACK" action={() => back()} />
  </div>
)

export const Success = ({
  investorViewPost,
}: CellSuccessProps<
  FindInvestorViewPostQuery,
  FindInvestorViewPostQueryVariables
>) => {
  const { currentUser } = useAuth()
  const [userComment, setUserComment] = useState('')
  const [liked, setLiked] = useState(false)
  const [saved, setSaved] = useState(false)
  const [commentsCount, setCommentsCount] = useState(0)
  const [addPostLike] = useMutation(ADD_POST_LIKE_MUTATION)
  const [removePostLike] = useMutation(REMOVE_POST_LIKE_MUTATION)
  const [savePost] = useMutation(SAVE_POST_MUTATION)
  const [unsavePost] = useMutation(UNSAVE_POST_MUTATION)
  const [addComment] = useMutation(ADD_COMMENT_MUTATION, {
    refetchQueries: [{ query: QUERY, variables: { id: investorViewPost.id } }],
  })

  const handleLikePost = async () => {
    if (liked) {
      await removePostLike({
        variables: {
          id: investorViewPost.id,
        },
      })
    } else {
      await addPostLike({
        variables: {
          id: investorViewPost.id,
        },
      })
    }
  }

  const handleSave = async () => {
    if (saved) {
      await unsavePost({
        variables: {
          id: investorViewPost.id,
        },
      })
    } else {
      await savePost({
        variables: {
          id: investorViewPost.id,
        },
      })
    }
  }

  //Investor can comment on self post
  const handleAddComment = async () => {
    await addComment({
      variables: {
        input: {
          commenterID: currentUser?.id,
          postID: investorViewPost.id,
          content: userComment,
        },
      },
    }).then(() => {
      setUserComment('')
    })
  }

  useEffect(() => {
    setLiked(
      investorViewPost.likedByUsers.some((d) => d?.id == currentUser?.id)
    )
    setSaved(
      investorViewPost.savedByUsers.some((d) => d?.id == currentUser?.id)
    )
    setCommentsCount(investorViewPost.comments.length)
  }, [
    currentUser?.id,
    investorViewPost.likedByUsers,
    investorViewPost.savedByUsers,
    investorViewPost.comments.length,
  ])

  return (
    <div className={ViewPostDivClassName}>
      <div className={PosterHeaderClassName}>
        <div className={PosterInfoClassName}>
          <button
            className={ProfilePicClassName}
            onClick={() => {
              //Go to poster's profile
              if (investorViewPost.poster.type == 'INVESTOR') {
                navigate(
                  routes.investorOtherProfile({
                    id: investorViewPost.posterID,
                  })
                )
              } else {
                navigate(routes.investorStartupProfile())
              }
            }}
          >
            {
              //TODO: Add Profile pic as BG - phase 2
              investorViewPost.poster.type == 'INVESTOR'
                ? investorViewPost.poster.investor?.name[0].toUpperCase()
                : investorViewPost.poster.startup?.name[0].toUpperCase()
            }
          </button>
          <div className={PosterNameClassName}>
            <PrimaryTextLabel
              label={
                (investorViewPost.poster.type == 'INVESTOR'
                  ? investorViewPost.poster.investor?.name
                  : investorViewPost.poster.startup?.name) ?? ''
              }
            />
            <SmallLabel label={moment(investorViewPost.createdAt).fromNow()} />
          </div>
        </div>
        <div className={PostActionClassName}>
          {investorViewPost.poster.type == 'INVESTOR' && (
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
          )}
          <MoreIcon
            className={HoverIconClassName}
            onClick={() => {
              //TODO: Open more info modal - phase 2
            }}
          />
        </div>
      </div>
      <div className={PostContentClassName}>
        <PrimaryMediumLabel label={investorViewPost.title} />
        {investorViewPost.writeup && (
          <TextLabel label={investorViewPost.writeup} />
        )}
        {investorViewPost.attachmentURL && (
          <HoverPrimaryTextButton
            label={investorViewPost.attachmentURL}
            action={() => {
              investorViewPost.attachmentURL &&
                window.open(investorViewPost.attachmentURL)?.focus()
            }}
          />
        )}
      </div>
      {investorViewPost.imageURL && (
        <div className={PostImageDivClassName}>
          <img
            className={PostImageClassName}
            src={investorViewPost.imageURL}
            alt="Post attachment"
          />
        </div>
      )}
      <div className={PostFooterClassName}>
        <button
          className={PostInteractionClassName}
          onClick={() => handleLikePost()}
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
          {investorViewPost.comments && (
            <div className={CountClassName}>
              {investorViewPost.likedByUsers.length.toString()}
            </div>
          )}
        </button>
        <button
          className={PostInteractionClassName}
          onClick={() => {
            //Navigate to post details page (same as this)
            navigate(routes.investorViewPost({ id: investorViewPost.id }))
          }}
        >
          <CommentIcon className={IconClassName} />
          <div className={HideShowClassName}>
            <SubTextLabel label={'Comments'} />
          </div>
          {investorViewPost.comments && (
            <div className={CountClassName}>{commentsCount.toString()}</div>
          )}
        </button>
        <button
          className={PostInteractionClassName}
          onClick={() => {
            //TODO: Open post share modal - phase 2
          }}
        >
          <ShareIcon className={IconClassName} />
          <div className={HideShowClassName}>
            <SubTextLabel label={'Share'} />
          </div>
        </button>
      </div>
      <div className={InputDivClassName}>
        <input
          value={userComment}
          placeholder="Add comment..."
          type="text"
          onChange={(e) => {
            setUserComment(e.target.value)
          }}
          className={TextInputClassName}
        />
        <PrimaryIconButton
          icon={<SendIcon className={LightIconClassName} />}
          action={() => {
            if (userComment != '') {
              handleAddComment()
            }
          }}
        />
      </div>
      <div className={DividerClassName} />
      <div id="CommentList" className={CommentListClassName}>
        {investorViewPost.comments &&
          investorViewPost.comments.map((comment) => (
            <InvestorViewCommentCell key={comment?.id} id={comment?.id ?? 0} />
          ))}
      </div>
    </div>
  )
}
