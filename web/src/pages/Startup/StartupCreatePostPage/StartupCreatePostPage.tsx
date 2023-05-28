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
      <div className="flex h-full w-full flex-col items-start justify-start gap-1 overflow-scroll rounded">
        <TextLabel label="Title" />
        <input
          id="Title (required)"
          className="w-full rounded border-2 border-black-l2 bg-white-d1 px-3 py-2 text-left text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black-l1 dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-4 lg:py-2 lg:text-b1"
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
          className="w-full rounded border-2 border-black-l2 bg-white-d1 px-3 py-2 text-left text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black-l1 dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-4 lg:py-2 lg:text-b1"
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
          className="w-full rounded border-2 border-black-l2 bg-white-d1 px-3 py-2 text-left text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black-l1 dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-4 lg:py-2 lg:text-b1"
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
          className="w-full rounded border-2 border-black-l2 bg-white-d1 px-3 py-2 text-left text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black-l1 dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-4 lg:py-2 lg:text-b1"
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
          className="w-full rounded border-2 border-black-l2 bg-white-d1 px-4 py-2 text-center text-b2 text-tertiary-d1 focus:border-tertiary-d1 dark:border-white-d2 dark:bg-black-l1 dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-5 lg:py-2.5 lg:text-b1"
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
        <div className="flex w-full items-center justify-start gap-2 lg:gap-3">
          <TertiaryFilledButton label="PUBLISH" action={() => submit()} />
          <HoverErrorTextButton label="CANCEL" action={() => back()} />
        </div>
      </div>
    </div>
  )
}

const Divider = () => {
  return <div className="h-2 lg:h-3"></div>
}

const StartupCreatePostSide = () => {
  return (
    <div className="hidden lg:relative lg:flex lg:h-full lg:w-1/3 lg:overflow-hidden lg:rounded lg:bg-tertiary-d1/50 lg:dark:bg-tertiary-l1/50">
      <div className="absolute bottom-[54px] right-[-138px] h-13 w-19 rounded-full bg-tertiary-d2/50 dark:bg-tertiary-l2/50"></div>
      <div className="absolute bottom-[-138px] right-[54px] h-19 w-13 rounded-full bg-tertiary-d3/50 dark:bg-tertiary-l3/50"></div>
    </div>
  )
}
