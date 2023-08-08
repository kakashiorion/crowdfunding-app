import { useContext, useEffect } from 'react'

import { MetaTags } from '@redwoodjs/web'

import StartupConnectionsCell from 'src/components/Startup/Connection/StartupConnectionsCell'
import { StartupPageContext } from 'src/layouts/StartupHomeLayout/StartupHomeLayout'

const StartupMyConnectionsPage = () => {
  const { setPageSelected } = useContext(StartupPageContext)

  useEffect(() => {
    setPageSelected('Connections')
  }, [setPageSelected])
  return (
    <>
      <MetaTags
        title="My Connections"
        description="Startup connections page for Dealbari platform"
      />
      <StartupConnectionsMain />
      <StartupConnectionsSide />
    </>
  )
}

export default StartupMyConnectionsPage

const StartupConnectionsMain = () => {
  return (
    <div className="h-full w-full rounded lg:w-2/3">
      <StartupConnectionsCell />
    </div>
  )
}

//TODO: Sidebar - Popular investors suggestions
const StartupConnectionsSide = () => {
  return <div className="hidden lg:flex lg:h-full lg:w-1/3"></div>
}
