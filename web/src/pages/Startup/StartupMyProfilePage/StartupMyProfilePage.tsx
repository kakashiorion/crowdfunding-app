import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { TertiaryTitleLabel } from 'src/components/Label/Label'
import StartupMyProfileCell from 'src/components/Startup/MyProfile/StartupMyProfileCell'
import StartupMyProfilePostsCell from 'src/components/Startup/MyProfile/StartupMyProfilePostsCell'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupMyProfilePage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Profile')
  }, [setPageSelected])

  return (
    <>
      <MetaTags
        title="My Profile"
        description="Startup My Profile page for Dealbari platform"
      />
      <div className="flex h-full w-full flex-col gap-4 rounded lg:w-2/3 lg:gap-6">
        <TertiaryTitleLabel label="My Profile" />
        <StartupMyProfileCell />
      </div>
      <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:flex-col lg:gap-6 lg:rounded">
        <TertiaryTitleLabel label="My Posts" />
        <StartupMyProfilePostsCell />
      </div>
    </>
  )
}

export default StartupMyProfilePage
