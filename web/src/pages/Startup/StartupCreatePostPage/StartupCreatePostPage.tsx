import { useState } from 'react'

import { back, navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  HoverErrorTextButton,
  TertiaryFilledButton,
} from 'src/components/Button/Button'
import {
  ErrorSubTextLabel,
  TertiaryTextLabel,
  TextLabel,
} from 'src/components/Label/Label'
import {
  CreatePostActionClassName,
  CreatePostDivClassName,
  SelectInputClassName,
  TextInputClassName,
} from 'src/components/Startup/StartupConsts'

const StartupCreatePostPage = () => {
  return (
    <>
      <MetaTags
        title="Create Post"
        description="Startup Create Post page for Dealbari platform"
      />
      <StartupCreatePostMain />
      <StartupCreatePostSide />
    </>
  )
}

export default StartupCreatePostPage

const CREATE_POST_MUTATION = gql`
  mutation createPost($input: CreatePostInput!) {
    createPost(input: $input) {
      id
    }
  }
`

const VisibilityLevels = ['CONNECTIONS', 'FOLLOWERS', 'PUBLIC']

const StartupCreatePostMain = () => {
  const [title, setTitle] = useState('')
  const [error1, setError1] = useState('')
  const [writeUp, setWriteUp] = useState('')
  const [error2, setError2] = useState('')
  const [attachmentURL, setAttachmentURL] = useState('')
  const [error3, setError3] = useState('')
  const [imageURL, setImageURL] = useState('')
  const [error4, setError4] = useState('')
  const [visibility, setVisibility] = useState('PUBLIC')

  const { currentUser } = useAuth()
  const [createPost] = useMutation(CREATE_POST_MUTATION)

  const submit = async () => {
    if (title.length < 2) {
      setError1('Provide a title to your post')
    } else if (
      attachmentURL &&
      (attachmentURL.length < 10 || !attachmentURL.includes('http'))
    ) {
      setError3('Provide a proper resource link')
    } else if (
      imageURL &&
      (imageURL.length < 10 || !imageURL.includes('http'))
    ) {
      setError4('Provide a proper image URL')
    } else {
      await createPost({
        variables: {
          input: {
            posterID: currentUser?.id,
            title: title,
            writeup: writeUp,
            attachmentURL: attachmentURL,
            imageURL: imageURL,
            visibility: visibility,
          },
        },
      }).then((d) => {
        navigate(routes.startupPost({ id: d.data.createPost.id }))
      })
    }
  }

  return (
    <div className="flex h-full w-full flex-col gap-3 lg:w-2/3 lg:gap-4">
      <TertiaryTextLabel label="CREATE POST" />
      <div className={CreatePostDivClassName}>
        <TextLabel label="Title (required)" />
        <input
          id="Title"
          className={TextInputClassName}
          value={title}
          placeholder={'What are you thinking?'}
          onChange={(e) => {
            setTitle(e.target.value)
            error1 != '' && setError1('')
          }}
        />
        <ErrorSubTextLabel label={error1} />
        <Divider />
        <TextLabel label="Description" />
        <textarea
          id="Writeup"
          className={TextInputClassName}
          value={writeUp}
          placeholder="Tell us in detail..."
          rows={3}
          onChange={(e) => {
            setWriteUp(e.target.value)
            error2 != '' && setError2('')
          }}
        />
        <ErrorSubTextLabel label={error2} />
        <Divider />
        <TextLabel label="Resource link" />
        <input
          id="ResourceLink"
          className={TextInputClassName}
          value={attachmentURL}
          placeholder="Share any resource link"
          onChange={(e) => {
            setAttachmentURL(e.target.value)
            error3 != '' && setError3('')
          }}
        />
        <ErrorSubTextLabel label={error3} />
        <Divider />
        <TextLabel label="Image URL" />
        <input
          id="ImageURL"
          className={TextInputClassName}
          value={imageURL}
          placeholder="Share an image"
          onChange={(e) => {
            setImageURL(e.target.value)
            error4 != '' && setError4('')
          }}
        />
        <ErrorSubTextLabel label={error4} />
        <Divider />
        <TextLabel label="Select visibility level" />
        <select
          className={SelectInputClassName}
          value={visibility}
          onChange={(e) => {
            setVisibility(e.target.value)
          }}
        >
          {VisibilityLevels.map((v: string) => (
            <option value={v} key={v}>
              {v}
            </option>
          ))}
        </select>
        <Divider />
        <div className={CreatePostActionClassName}>
          <TertiaryFilledButton label="PUBLISH" action={() => submit()} />
          <HoverErrorTextButton label="CANCEL" action={() => back()} />
        </div>
      </div>
    </div>
  )
}

const Divider = () => {
  return <div className="h-1"></div>
}

const StartupCreatePostSide = () => {
  return (
    <div
      aria-hidden
      className="hidden lg:relative lg:flex lg:h-full lg:w-1/3 lg:overflow-hidden lg:rounded lg:bg-tertiary-d1/50 lg:dark:bg-tertiary-l1/50"
    >
      <div className="absolute bottom-[54px] right-[-42px] h-12 w-17 rounded bg-tertiary-d2/50 dark:bg-tertiary-l2/50"></div>
      <div className="absolute bottom-[-42px] right-[54px] h-17 w-12 rounded bg-tertiary-d3/50 dark:bg-tertiary-l3/50"></div>
    </div>
  )
}
