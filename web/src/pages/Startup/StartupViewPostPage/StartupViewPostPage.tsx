import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { TertiaryTitleLabel } from 'src/components/Label/Label'
import StartupRecentPostsCell from 'src/components/Startup/Post/StartupRecentPostsCell'
import StartupViewPostCell from 'src/components/Startup/Post/StartupViewPostCell'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupViewPostPage = ({ id }: { id: number }) => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Post')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="View Post"
        description="Startup Post page for Dealbari platform"
      />
      <StartupViewPostMain id={id} />
      <StartupViewPostSide id={id} />
    </>
  )
}

export default StartupViewPostPage

const StartupViewPostMain = ({ id }: { id: number }) => {
  return (
    <div className="flex h-full w-full flex-col gap-3 lg:w-2/3 lg:gap-4">
      <TertiaryTitleLabel label="View Post" />
      <StartupViewPostCell id={id} />
    </div>
  )
}

const StartupViewPostSide = ({ id }: { id: number }) => {
  return (
    <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:flex-col lg:gap-6 lg:rounded">
      <TertiaryTitleLabel label="Related Posts" />
      <StartupRecentPostsCell id={id} />
    </div>
  )
}
