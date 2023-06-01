import { useEffect, useState } from 'react'

import moment from 'moment'
import CommentIcon from 'public/icons/comment.svg'
import EmptyIcon from 'public/icons/dnd.svg'
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
  TertiaryIconButton,
} from 'src/components/Button/Button'
import {
  GreySubTitleLabel,
  SmallLabel,
  SubTextLabel,
  TertiaryMediumLabel,
  TextLabel,
} from 'src/components/Label/Label'
import StartupViewCommentCell from 'src/components/Startup/Post/StartupViewCommentCell'
import {
  PosterProfilePicClassName,
  HoverIconClassName,
  PostInteractionClassName,
  CountClassName,
  IconClassName,
  ViewPostDivClassName,
  PosterInfoClassName,
  PosterHeaderClassName,
  PosterNameClassName,
  PostActionClassName,
  PostContentClassName,
  PostFooterClassName,
  PostImageDivClassName,
  PostInteractionTextClassName,
  PostImageClassName,
  CommentListClassName,
  PostDividerClassName,
  TextInputClassName,
  InputDivClassName,
  LightIconClassName,
  EmptyDivClassName,
  EmptyIconClassName,
} from 'src/components/Startup/startupConsts'

/*
Checks to be made before startup user views a post:
  If the poster is a startup, it must be the current user
  If the poster is an investor:
  - if visibility is connection, the investor must be user's connection
  - if visibility is follower, the investor must be followedBy the user
*/

export const QUERY = gql`
  query FindStartupViewPostQuery($id: Int!) {
    startupViewPost: startupViewPost(id: $id) {
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
    <TertiaryFilledButton label="GO BACK" action={() => back()} />
  </div>
)

export const Success = ({
  startupViewPost,
}: CellSuccessProps<
  FindStartupViewPostQuery,
  FindStartupViewPostQueryVariables
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
    refetchQueries: [{ query: QUERY, variables: { id: startupViewPost.id } }],
  })

  const handleLikePost = async () => {
    if (liked) {
      await removePostLike({
        variables: {
          id: startupViewPost.id,
        },
      })
    } else {
      await addPostLike({
        variables: {
          id: startupViewPost.id,
        },
      })
    }
  }

  const handleSave = async () => {
    if (saved) {
      await unsavePost({
        variables: {
          id: startupViewPost.id,
        },
      })
    } else {
      await savePost({
        variables: {
          id: startupViewPost.id,
        },
      })
    }
  }

  //Startup can comment on self post
  const handleAddComment = async () => {
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
    setCommentsCount(startupViewPost.comments.length)
  }, [
    currentUser?.id,
    startupViewPost.likedByUsers,
    startupViewPost.savedByUsers,
    startupViewPost.comments.length,
  ])
  return (
    <div className={ViewPostDivClassName}>
      <div className={PosterHeaderClassName}>
        <div className={PosterInfoClassName}>
          <button
            className={PosterProfilePicClassName}
            onClick={() => {
              //Go to poster's profile
              if (startupViewPost.poster.type == 'INVESTOR') {
                navigate(
                  routes.startupInvestorProfile({
                    id: startupViewPost.posterID,
                  })
                )
              } else {
                navigate(routes.startupMyProfile())
              }
            }}
          >
            {
              //TODO: Add Profile pic as BG - phase 2
              startupViewPost.poster.type == 'INVESTOR'
                ? startupViewPost.poster.investor?.name[0].toUpperCase()
                : startupViewPost.poster.startup?.name[0].toUpperCase()
            }
          </button>
          <div className={PosterNameClassName}>
            <HoverTertiaryTextButton
              label={
                (startupViewPost.poster.type == 'INVESTOR'
                  ? startupViewPost.poster.investor?.name
                  : startupViewPost.poster.startup?.name) ?? ''
              }
              action={() => {
                //Go to poster's profile
                if (startupViewPost.poster.type == 'INVESTOR') {
                  navigate(
                    routes.startupInvestorProfile({
                      id: startupViewPost.posterID,
                    })
                  )
                } else {
                  navigate(routes.startupMyProfile())
                }
              }}
            />
            <SmallLabel label={moment(startupViewPost.createdAt).fromNow()} />
          </div>
        </div>
        <div className={PostActionClassName}>
          {startupViewPost.poster.type == 'INVESTOR' && (
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
        <div className={PostImageDivClassName}>
          <img
            className={PostImageClassName}
            src={startupViewPost.imageURL}
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
                ? 'fill-tertiary-d1 dark:fill-tertiary-l1'
                : 'fill-black group-hover:origin-bottom-left group-hover:-rotate-12 group-hover:fill-tertiary-d1 dark:fill-white group-hover:dark:fill-tertiary-l1'
            }`}
          />
          <div className={PostInteractionTextClassName}>
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
            //Navigate to post details page (same as this)
            navigate(routes.startupPost({ id: startupViewPost.id }))
          }}
        >
          <CommentIcon className={IconClassName} />
          <div className={PostInteractionTextClassName}>
            <SubTextLabel label={'Comments'} />
          </div>
          {startupViewPost.comments && (
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
          <div className={PostInteractionTextClassName}>
            <SubTextLabel label={'Share'} />
          </div>
        </button>
      </div>
      {startupViewPost.poster.type == 'STARTUP' && (
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
          <TertiaryIconButton
            icon={<SendIcon className={LightIconClassName} />}
            action={() => {
              if (userComment != '') {
                handleAddComment()
              }
            }}
          />
        </div>
      )}
      <div className={PostDividerClassName} />
      <div id="CommentList" className={CommentListClassName}>
        {startupViewPost.comments &&
          startupViewPost.comments.map((comment) => (
            <StartupViewCommentCell key={comment?.id} id={comment?.id ?? 0} />
          ))}
      </div>
    </div>
  )
}
