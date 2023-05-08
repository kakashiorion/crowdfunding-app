import { useState } from 'react'

import CloseIcon from 'public/icons/close.svg'
import MenuIcon from 'public/icons/menu.svg'
import LogoBlack from 'public/logo/LogoBlack.svg'
import LogoWhite from 'public/logo/LogoWhite.svg'

import { MetaTags } from '@redwoodjs/web'

import StartupOnboardingMain from 'src/components/Onboarding/Startup/StartupOnboardingMain/StartupOnboardingMain'
import StartupOnboardingTimeline from 'src/components/Onboarding/Startup/StartupOnboardingTimeline/StartupOnboardingTimeline'

const StartupOnboardingPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)
  //TODO: Fetch onboarding progress from DB and resume from there
  // const startFrom = fetchOnboardingProgressData()??0
  const [currentSection, setCurrentSection] = useState(2)

  return (
    <>
      <MetaTags
        title="StartupOnboarding"
        description="Startup Onboarding page for Dealbari platform"
      />
      <div className="relative flex items-center justify-between py-2 lg:py-3">
        <LogoBlack className="flex h-6 w-10 dark:hidden lg:h-8 lg:w-12" />
        <LogoWhite className="hidden h-6 w-10 dark:flex lg:h-8 lg:w-12" />
        {isMenuOpen ? (
          <CloseIcon
            className="flex h-6 w-6 fill-black dark:fill-white lg:hidden"
            onClick={() => setMenuOpen(false)}
          />
        ) : (
          <MenuIcon
            className="flex h-6 w-6 fill-black dark:fill-white lg:hidden"
            onClick={() => setMenuOpen(true)}
          />
        )}
      </div>
      <div className=" relative mb-4 mt-2 flex h-full overflow-hidden lg:mb-5 lg:mt-3 lg:gap-4 ">
        <StartupOnboardingMain
          currentSection={currentSection}
          setCurrentSection={setCurrentSection}
        />
        <StartupOnboardingTimeline
          isMenuOpen={isMenuOpen}
          currentSection={currentSection}
        />
      </div>{' '}
    </>
  )
}
export default StartupOnboardingPage
