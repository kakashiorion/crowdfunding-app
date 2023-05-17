import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupHomePage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Home')
  }, [setPageSelected])

  return (
    <>
      <MetaTags
        title="Startup Home"
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
    <div className="h-full w-full rounded bg-white-d1 dark:bg-black-l2 lg:w-2/3"></div>
  )
}

const StartupHomeSide = () => {
  return (
    <div className="hidden lg:flex lg:h-full lg:w-1/3 lg:rounded lg:bg-white-d1 dark:lg:bg-black-l2 "></div>
  )
}
