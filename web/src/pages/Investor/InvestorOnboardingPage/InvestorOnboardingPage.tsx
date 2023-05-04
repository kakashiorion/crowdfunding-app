import { useState } from 'react'

import { MetaTags } from '@redwoodjs/web'

import {
  DisabledSubTextLabel,
  DisabledSubTitleLabel,
  DisabledTitleLabel,
  PrimarySubTextLabel,
  PrimarySubTitleLabel,
  PrimaryTitleLabel,
  SubTextLabel,
  SubTitleLabel,
  TitleLabel,
} from 'src/components/Label/Label'

import CloseIcon from '../../../../public/icons/close.svg'
import MenuIcon from '../../../../public/icons/menu.svg'
import Logo from '../../../../public/logo/DealbariLogo.svg'

const InvestorOnboardingPage = () => {
  const [isMenuOpen, setMenuOpen] = useState(false)

  return (
    <>
      <MetaTags
        title="Investor Onboarding"
        description="Investor Onboarding page for Dealbari platform"
      />
      <div className="relative flex items-center justify-between py-2 lg:py-3">
        <Logo className="h-6 w-10 lg:h-8 lg:w-12" />
        {isMenuOpen ? (
          <CloseIcon
            className="flex h-6 w-6 fill-black dark:fill-white lg:hidden"
            onClick={() => setMenuOpen(false)}
          ></CloseIcon>
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
  const [currentStep, setCurrentStep] = useState(0)
  return (
    <div className=" relative mb-4 mt-2 flex h-full overflow-hidden lg:mb-5 lg:mt-3 ">
      <OnboardingMain
        currentStep={currentStep}
        setCurrentStep={setCurrentStep}
      />
      <OnboardingTimeline
        isMenuOpen={props.isMenuOpen}
        currentStep={currentStep}
      />
    </div>
  )
}

const onboardingSteps = [
  {
    index: 1,
    title: 'About You',
    subTitle: 'Capturing basic details to create your profile',
  },
  {
    index: 2,
    title: 'Investor History',
    subTitle: 'Getting to know your investing experience',
  },
  {
    index: 3,
    title: 'Motive',
    subTitle: 'Understanding your objectives to get better matches',
  },
  {
    index: 4,
    title: 'Settings and Preferences',
    subTitle: 'Personalizing the platform for your needs',
  },
]

type OnboardingTimelineProps = {
  isMenuOpen: boolean
  currentStep: number
}
const OnboardingTimeline = (props: OnboardingTimelineProps) => {
  return (
    <div
      className={`absolute ${
        props.isMenuOpen ? 'flex' : 'hidden'
      } right-0 top-0 h-full flex-col gap-1 overflow-hidden rounded-sm bg-white-d1 px-1 py-4 dark:bg-black-l2  lg:static lg:flex lg:w-1/3 lg:gap-2 lg:px-2 lg:py-6`}
    >
      {onboardingSteps.map((step) => (
        <TimelineSteps
          key={step.index}
          currentNumber={props.currentStep}
          stepNumber={step.index}
          subTitle={step.subTitle}
          title={step.title}
        />
      ))}
    </div>
  )
}

type TimelineStepsProps = {
  title: string
  subTitle: string
  stepNumber: number
  currentNumber: number
}
const TimelineSteps = (props: TimelineStepsProps) => {
  const divClassName =
    'grid grid-cols-[1fr,6fr] w-full items-start justify-center text-center gap-1 overflow-hidden p-2 lg:gap-2'
  const subClassName = 'flex flex-[5] flex-col gap-1 items-start text-start'

  if (props.stepNumber < props.currentNumber) {
    return (
      <div className={divClassName}>
        <TitleLabel label={props.stepNumber.toString()} />
        <div className={subClassName}>
          <SubTitleLabel label={props.title} />
          <SubTextLabel label={props.subTitle} />
        </div>
      </div>
    )
  } else if (props.stepNumber > props.currentNumber) {
    return (
      <div className={divClassName}>
        <DisabledTitleLabel label={props.stepNumber.toString()} />
        <div className={subClassName}>
          <DisabledSubTitleLabel label={props.title} />
          <DisabledSubTextLabel label={props.subTitle} />
        </div>
      </div>
    )
  } else {
    return (
      <div className={divClassName}>
        <PrimaryTitleLabel label={props.stepNumber.toString()} />
        <div className={subClassName}>
          <PrimarySubTitleLabel label={props.title} />
          <PrimarySubTextLabel label={props.subTitle} />
        </div>
      </div>
    )
  }
}
type OnboardingMainProps = {
  currentStep: number
  setCurrentStep: React.Dispatch<React.SetStateAction<number>>
}
const OnboardingMain = (props: OnboardingMainProps) => {
  return (
    <div className="flex h-full w-full flex-col overflow-hidden">
      {props.currentStep == 0 && <IntroSection />}
      {props.currentStep == 1 && <AboutSection />}
      {props.currentStep == 2 && <ExperienceSection />}
      {props.currentStep == 3 && <MotiveSection />}
      {props.currentStep == 4 && <PreferenceSection />}
    </div>
  )
}

const IntroSection = () => {
  return <div></div>
}
const AboutSection = () => {
  return <div></div>
}
const ExperienceSection = () => {
  return <div></div>
}
const MotiveSection = () => {
  return <div></div>
}
const PreferenceSection = () => {
  return <div></div>
}
