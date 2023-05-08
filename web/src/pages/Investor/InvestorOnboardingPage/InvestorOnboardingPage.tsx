import { useState } from 'react'

import CloseIcon from 'public/icons/close.svg'
import MenuIcon from 'public/icons/menu.svg'
import LogoBlack from 'public/logo/LogoBlack.svg'
import LogoWhite from 'public/logo/LogoWhite.svg'

import { MetaTags } from '@redwoodjs/web'

import { PrimaryTitleLabel } from 'src/components/Label/Label'
import InvestorCompleted from 'src/components/Onboarding/Investor/InvestorCompleted/InvestorCompleted'
import InvestorIntro from 'src/components/Onboarding/Investor/InvestorIntro/InvestorIntro'
import InvestorOnboardingTimeline from 'src/components/Onboarding/Investor/InvestorOnboardingTimeline/InvestorOnboardingTimeline'
import { OnboardingMainProps } from 'src/lib/const'

import {
  InvestorOnboardingSections,
  InvestorStepsInfoList,
} from './InvestorOnboardingConsts'

const InvestorOnboardingPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <MetaTags
        title="Investor Onboarding"
        description="Investor Onboarding page for Dealbari platform"
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
      <OnboardingContent isMenuOpen={isMenuOpen} />
    </>
  )
}

export default InvestorOnboardingPage

type OnboardingContentProps = {
  isMenuOpen: boolean
}
const OnboardingContent = (props: OnboardingContentProps) => {
  //TODO: Fetch onboarding progress from DB and resume from there
  // const startFrom = fetchOnboardingProgressData()??0
  const [currentSection, setCurrentSection] = useState(0)
  return (
    <div className=" relative mb-4 mt-2 flex h-full overflow-hidden lg:mb-5 lg:mt-3 lg:gap-4 ">
      <InvestorOnboardingMain
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <InvestorOnboardingTimeline
        isMenuOpen={props.isMenuOpen}
        currentSection={currentSection}
      />
    </div>
  )
}

const InvestorOnboardingMain = (props: OnboardingMainProps) => {
  if (props.currentSection == 0) {
    return <InvestorIntro setCurrentSection={props.setCurrentSection} />
  } else if (props.currentSection > InvestorOnboardingSections.length) {
    return <InvestorCompleted />
  } else {
    const componentsList = InvestorStepsInfoList[props.currentSection - 1]
    return (
      <div className="flex h-full w-full flex-col gap-3 overflow-hidden lg:gap-4">
        <PrimaryTitleLabel
          label={`Section ${props.currentSection}: ${
            InvestorOnboardingSections[props.currentSection - 1].title
          }`}
        />
        {
          <componentsList.component
            currentSection={props.currentSection}
            setCurrentSection={props.setCurrentSection}
          />
        }
      </div>
    )
  }
}
