import { useState, useEffect } from 'react'

import moment from 'moment'
import type {
  FindStartupViewCommentQuery,
  FindStartupViewCommentQueryVariables,
} from 'types/graphql'

import { navigate, routes } from '@redwoodjs/router'
import { CellSuccessProps, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { TertiaryIconButton } from 'src/components/Button/Button'
import SvgClose from 'src/components/Icon/Close'
import SvgDelete from 'src/components/Icon/Delete'
import SvgEdit from 'src/components/Icon/Edit'
import SvgSend from 'src/components/Icon/Send'
import SvgThumbUp from 'src/components/Icon/ThumbUp'
import {
  SmallLabel,
  TertiaryTextLabel,
  ErrorSubTextLabel,
  SubTextLabel,
} from 'src/components/Label/Label'
import {
  PosterInfoClassName,
  ProfilePicClassName,
  PostFooterClassName,
  PostInteractionClassName,
  CountClassName,
  IconClassName,
  HideShowClassName,
  DeleteIconClassName,
  PosterNameClassName,
  CommentDivClassName,
  InputDivClassName,
  LightIconClassName,
  TextInputClassName,
} from 'src/components/Startup/StartupConsts'

export const QUERY = gql`
  query FindStartupViewCommentQuery($id: Int!) {
    comment: comment(id: $id) {
      id
      content
      createdAt
      likedByUsers {
        id
      }
      commenterID
      commenter {
        id
        type
        profilePicURL
        investor {
          id
          name
        }
        startup {
          id
          name
        }
      }
    }
  }
`

const LIKE_COMMENT_MUTATION = gql`
  mutation likeComment($id: Int!) {
    likeComment(id: $id) {
      id
      likedByUsers {
        id
      }
    }
  }
`

const UNLIKE_COMMENT_MUTATION = gql`
  mutation unlikeComment($id: Int!) {
    unlikeComment(id: $id) {
      id
      likedByUsers {
        id
      }
    }
  }
`

const UPDATE_COMMENT_MUTATION = gql`
  mutation updateComment($id: Int!, $input: UpdateCommentInput!) {
    updateComment(id: $id, input: $input) {
      id
      content
    }
  }
`

const DELETE_COMMENT_MUTATION = gql`
  mutation deleteComment($id: Int!) {
    deleteComment(id: $id) {
      id
    }
  }
`

//Empty div to handle delete comment refresh
export const Empty = () => {
  return <></>
}

export const Success = ({
  comment,
}: CellSuccessProps<
  FindStartupViewCommentQuery,
  FindStartupViewCommentQueryVariables
>) => {
  const [liked, setLiked] = useState(false)
  const [editing, setEditing] = useState(false)
  const [editedComment, setEditedComment] = useState(comment?.content)
  const [error, setError] = useState('')
  const { currentUser } = useAuth()
  const [likeComment] = useMutation(LIKE_COMMENT_MUTATION)
  const [unlikeComment] = useMutation(UNLIKE_COMMENT_MUTATION)
  const [updateComment] = useMutation(UPDATE_COMMENT_MUTATION)
  const [deleteComment] = useMutation(DELETE_COMMENT_MUTATION, {
    refetchQueries: [
      {
        query: QUERY,
        variables: { id: comment.id },
      },
    ],
  })

  const handleLikeComment = async () => {
    if (liked) {
      await unlikeComment({
        variables: {
          id: comment?.id,
        },
      })
    } else {
      await likeComment({
        variables: {
          id: comment?.id,
        },
      })
    }
  }

  const handleEditComment = async () => {
    if (editedComment?.length == 0) {
      setError('Cannot leave it empty')
    } else {
      setEditing(false)
      await updateComment({
        variables: {
          id: comment?.id,
          input: {
            content: editedComment,
          },
        },
      })
    }
  }

  const handleDeleteComment = async () => {
    await deleteComment({
      variables: {
        id: comment?.id,
      },
    })
  }

  useEffect(() => {
    setLiked(
      comment?.likedByUsers.some((d) => d?.id == currentUser?.id) ?? false
    )
  }, [currentUser?.id, comment?.likedByUsers])

  return (
    <div key={comment?.id} className={CommentDivClassName}>
      <div className={PosterInfoClassName}>
        <button
          className={ProfilePicClassName}
          onClick={() => {
            //Go to commenter's profile
            if (comment?.commenter?.type == 'INVESTOR') {
              navigate(
                routes.startupInvestorProfile({
                  id: comment?.commenterID,
                })
              )
            } else {
              navigate(routes.startupMyProfile())
            }
          }}
        >
          {
            //TODO: Add Profile pic as BG - phase 2
            comment?.commenter?.type == 'INVESTOR'
              ? comment?.commenter?.investor?.name[0].toUpperCase()
              : comment?.commenter?.startup?.name[0].toUpperCase()
          }
        </button>
        <div className={PosterNameClassName}>
          <TertiaryTextLabel
            label={
              (comment?.commenter?.type == 'INVESTOR'
                ? comment?.commenter?.investor?.name
                : comment?.commenter?.startup?.name) ?? ''
            }
          />
          <SmallLabel label={moment(comment?.createdAt).fromNow()} />
        </div>
      </div>
      {editing ? (
        <>
          <div className={InputDivClassName}>
            <input
              value={editedComment}
              placeholder="Edit comment..."
              type="text"
              onChange={(e) => {
                setEditedComment(e.target.value)
              }}
              className={TextInputClassName}
            />
            <TertiaryIconButton
              icon={<SvgSend className={LightIconClassName} />}
              action={() => {
                handleEditComment()
              }}
            />
          </div>
          <ErrorSubTextLabel label={error} />
        </>
      ) : (
        <TertiaryTextLabel label={comment?.content ?? ''} />
      )}
      <div className={PostFooterClassName}>
        <button
          className={PostInteractionClassName}
          onClick={() => handleLikeComment()}
        >
          <SvgThumbUp
            className={`h-6 w-6 ${
              liked
                ? 'fill-tertiary-d1 dark:fill-tertiary-l1'
                : 'fill-black group-hover:origin-bottom-left group-hover:-rotate-12 group-hover:fill-tertiary-d1 dark:fill-white group-hover:dark:fill-tertiary-l1'
            }`}
          />
          <div className="hidden lg:flex">
            <SubTextLabel label={'Likes'} />
          </div>
          <div className={CountClassName}>
            {comment?.likedByUsers.length.toString()}
          </div>
        </button>
        {comment.commenterID == currentUser?.id && (
          <>
            <button
              className={PostInteractionClassName}
              onClick={() => {
                setEditing(!editing)
              }}
            >
              {editing ? (
                <SvgClose className={IconClassName} />
              ) : (
                <SvgEdit className={IconClassName} />
              )}
              <div className={HideShowClassName}>
                <SubTextLabel label={editing ? 'Cancel' : 'Edit'} />
              </div>
            </button>
            <button
              className={PostInteractionClassName}
              onClick={() => {
                handleDeleteComment()
              }}
            >
              <SvgDelete className={DeleteIconClassName} />
              <div className={HideShowClassName}>
                <SubTextLabel label={'Delete'} />
              </div>
            </button>
          </>
        )}
      </div>
    </div>
  )
}
