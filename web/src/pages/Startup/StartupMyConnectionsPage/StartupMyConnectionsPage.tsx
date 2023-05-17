import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupMyConnectionsPage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Connections')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="StartupMyConnections"
        description="StartupMyConnections page"
      />
    </>
  )
}

export default StartupMyConnectionsPage
