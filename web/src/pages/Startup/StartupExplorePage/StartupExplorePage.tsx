import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupExplorePage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Explore')
  }, [setPageSelected])
  return (
    <>
      <MetaTags title="StartupExplore" description="StartupExplore page" />
    </>
  )
}

export default StartupExplorePage
