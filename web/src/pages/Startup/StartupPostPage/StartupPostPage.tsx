import { MetaTags } from '@redwoodjs/web'

import { TertiaryTextLabel } from 'src/components/Label/Label'
import StartupViewPostCell from 'src/components/Startup/Content/StartupViewPostCell'

const StartupPostPage = ({ id }: { id: number }) => {
  return (
    <>
      <MetaTags
        title="View Post"
        description="Startup Post page for Dealbari platform"
      />
      <StartupViewPostMain id={id} />
      <StartupViewPostSide />
    </>
  )
}

export default StartupPostPage

const StartupViewPostMain = ({ id }: { id: number }) => {
  return (
    <div className="flex h-full w-full flex-col gap-3 lg:w-2/3 lg:gap-4">
      <TertiaryTextLabel label="VIEW POST" />
      <StartupViewPostCell id={id} />
    </div>
  )
}

const StartupViewPostSide = () => {
  return (
    <div className="hidden lg:relative lg:flex lg:h-full lg:w-1/3 lg:overflow-hidden lg:rounded lg:bg-tertiary-d1/50 lg:dark:bg-tertiary-l1/50"></div>
  )
}
