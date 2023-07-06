import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import StartupHomeFeedCell from 'src/components/Startup/Home/StartupHomeFeedCell'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupHomePage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Home')
  }, [setPageSelected])

  return (
    <>
      <MetaTags
        title="Home"
        description="Startup Home page for Dealbari platform"
      />
      <StartupHomeMain />
      <StartupHomeSide />
    </>
  )
}

export default StartupHomePage

const StartupHomeMain = () => {
  return (
    <div className="h-full w-full lg:w-2/3">
      <StartupHomeFeedCell />
    </div>
  )
}

const StartupHomeSide = () => {
  return <div className="hidden lg:flex lg:h-full lg:w-1/3"></div>
}
