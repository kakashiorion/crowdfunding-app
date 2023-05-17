import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupHelpPage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Help')
  }, [setPageSelected])
  return (
    <>
      <MetaTags title="StartupHelp" description="StartupHelp page" />
    </>
  )
}

export default StartupHelpPage
