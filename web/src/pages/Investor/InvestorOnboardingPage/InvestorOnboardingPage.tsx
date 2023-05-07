import { useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { PrimaryFilledButton } from 'src/components/Button/Button'
import {
  DisabledSubTextLabel,
  DisabledSubTitleLabel,
  PrimarySubTextLabel,
  PrimarySubTitleLabel,
  PrimaryTextLabel,
  PrimaryTitleLabel,
  TitleLabel,
  WarnSubTextLabel,
} from 'src/components/Label/Label'

import CheckIcon from '../../../../public/icons/checkCircle.svg'
import CloseIcon from '../../../../public/icons/close.svg'
import MenuIcon from '../../../../public/icons/menu.svg'
import LogoBlack from '../../../../public/logo/LogoBlack.svg'
import LogoWhite from '../../../../public/logo/LogoWhite.svg'

import { onboardingSteps, stepsInfoList } from './stepsConsts'

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
  //TODO: Fetch onboarding progress from DB and resume from there
  // const startFrom = fetchOnboardingProgressData()??0
  const [currentSection, setCurrentSection] = useState(3)
  return (
    <div className=" relative mb-4 mt-2 flex h-full overflow-hidden lg:mb-5 lg:mt-3 lg:gap-4 ">
      <OnboardingMain
        currentSection={currentSection}
        setCurrentSection={setCurrentSection}
      />
      <OnboardingTimeline
        isMenuOpen={props.isMenuOpen}
        currentStep={currentSection}
      />
    </div>
  )
}

type OnboardingTimelineProps = {
  isMenuOpen: boolean
  currentStep: number
}
const OnboardingTimeline = (props: OnboardingTimelineProps) => {
  return (
    <div
      className={`absolute ${
        props.isMenuOpen ? 'flex' : 'hidden'
      } right-0 top-0 min-w-[200px] flex-col gap-2 overflow-hidden rounded-sm bg-white-d1 px-2 py-2 shadow-md dark:bg-black-l2/95 lg:static lg:flex lg:h-full lg:w-1/3 lg:gap-3 lg:border-l-2  lg:border-l-white-d2 lg:bg-transparent lg:px-3 lg:py-4 lg:shadow-none dark:lg:border-l-black-l2`}
    >
      <PrimaryTextLabel label="ONBOARDING SECTIONS" />
      {onboardingSteps.map((step) => (
        <TimelineSteps
          key={step.index}
          currentNumber={props.currentStep}
          stepNumber={step.index}
          subTitle={step.subTitle}
          title={step.title}
          icon={step.icon}
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
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}
const TimelineSteps = (props: TimelineStepsProps) => {
  const divClassName = `grid rounded-sm grid-cols-[1fr,6fr] w-full items-start justify-center text-center gap-1 overflow-hidden p-2 lg:gap-2 ${
    props.stepNumber == props.currentNumber ? 'bg-white dark:bg-black-l1' : ''
  }`
  const subClassName = 'flex flex-[5] flex-col gap-1 items-start text-start'

  if (props.stepNumber < props.currentNumber) {
    return (
      <div className={divClassName}>
        <props.icon className="flex h-6 w-6 fill-primary dark:fill-primary-l1" />
        <div className={subClassName}>
          <PrimarySubTitleLabel label={props.title} />
          <PrimarySubTextLabel label={props.subTitle} />
        </div>
      </div>
    )
  } else if (props.stepNumber > props.currentNumber) {
    return (
      <div className={divClassName}>
        <props.icon className="flex h-6 w-6 fill-black-l4 dark:fill-white-d4" />
        <div className={subClassName}>
          <DisabledSubTitleLabel label={props.title} />
          <DisabledSubTextLabel label={props.subTitle} />
        </div>
      </div>
    )
  } else {
    return (
      <div
        className={
          divClassName + ' border-l-4 border-l-primary dark:border-l-primary-l1'
        }
      >
        <props.icon className="flex h-6 w-6 fill-primary dark:fill-primary-l1" />
        <div className={subClassName}>
          <PrimarySubTitleLabel label={props.title} />
          <PrimarySubTextLabel label={props.subTitle} />
        </div>
      </div>
    )
  }
}
export type OnboardingMainProps = {
  currentSection: number
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>
}
const OnboardingMain = (props: OnboardingMainProps) => {
  if (props.currentSection == 0) {
    return <IntroSection setCurrentSection={props.setCurrentSection} />
  } else if (props.currentSection == onboardingSteps.length + 1) {
    return <CompletedSection />
  } else {
    const componentsList = stepsInfoList[props.currentSection - 1]
    return (
      <div className="flex h-full w-full flex-col gap-3 overflow-hidden lg:gap-4">
        <PrimaryTitleLabel
          label={`Section ${props.currentSection}: ${
            onboardingSteps[props.currentSection - 1].title
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

type IntroSectionProps = {
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>
}
const IntroSection = (props: IntroSectionProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-sm px-6 py-5 text-center  lg:px-8 lg:py-6">
      <CheckIcon className="flex h-9 w-9 fill-success-d1 dark:fill-success-l1 lg:h-10 lg:w-10" />
      <TitleLabel label="Congrats.. you have successfully signed up!" />
      <PrimarySubTitleLabel label="Now, let's get you onboard our platform." />
      <PrimaryFilledButton
        label="GET STARTED"
        action={() => props.setCurrentSection(1)}
      />
      <div className="rounded-sm bg-warn-l1/30 p-3 dark:bg-warn-d2/30 lg:p-4">
        <WarnSubTextLabel label="(Don't worry! Some of the steps can be skipped. Although, we highly recommend that you provide all the details for a superior experience.)" />
      </div>
    </div>
  )
}
const CompletedSection = () => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-sm px-6 py-5 text-center  lg:px-8 lg:py-6">
      <CheckIcon className="flex h-9 w-9 fill-success-d1 dark:fill-success-l1 lg:h-10 lg:w-10" />
      <TitleLabel label="Awesome.. That's all we needed!" />
      <PrimarySubTitleLabel label="You may go to your account and start exploring the platform." />
      <PrimaryFilledButton
        label="GO TO DASHBOARD"
        action={() => navigate(routes.investorHome())}
      />
    </div>
  )
}
