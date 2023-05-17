import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupMyProfilePage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Profile')
  }, [setPageSelected])
  return (
    <>
      <MetaTags title="StartupMyProfile" description="StartupMyProfile page" />
    </>
  )
}

export default StartupMyProfilePage
