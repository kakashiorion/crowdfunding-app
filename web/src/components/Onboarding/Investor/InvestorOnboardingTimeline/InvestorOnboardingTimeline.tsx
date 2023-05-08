import {
  DisabledSubTextLabel,
  DisabledSubTitleLabel,
  PrimarySubTextLabel,
  PrimarySubTitleLabel,
  PrimaryTextLabel,
} from 'src/components/Label/Label'
import {
  OnboardingSectionInfoType,
  OnboardingTimelineProps,
  OnboardingTimelineStepsProps,
} from 'src/lib/onboardingConsts'
import { InvestorOnboardingSections } from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingConsts'

const InvestorOnboardingTimeline = (props: OnboardingTimelineProps) => {
  return (
    <div
      className={`absolute ${
        props.isMenuOpen ? 'flex' : 'hidden'
      } right-0 top-0 min-w-[200px] flex-col gap-2 overflow-scroll rounded-sm bg-white-d1 p-2 shadow-md dark:bg-black-l2/95 lg:static lg:flex lg:h-full lg:w-1/3 lg:gap-3 lg:border-l-2  lg:border-l-white-d2 lg:bg-transparent lg:py-0 lg:pl-3 lg:shadow-none dark:lg:border-l-black-l2`}
    >
      <PrimaryTextLabel label="ONBOARDING SECTIONS" />
      {InvestorOnboardingSections.map((section: OnboardingSectionInfoType) => (
        <InvestorTimelineSteps
          key={section.index}
          currentNumber={props.currentSection}
          sectionNumber={section.index}
          subTitle={section.subTitle}
          title={section.title}
          icon={section.icon}
        />
      ))}
    </div>
  )
}
export default InvestorOnboardingTimeline

const InvestorTimelineSteps = (props: OnboardingTimelineStepsProps) => {
  const divClassName = `grid rounded-sm grid-cols-[1fr,6fr] w-full items-start justify-center text-center gap-1 p-2 lg:gap-2 ${
    props.sectionNumber == props.currentNumber
      ? 'bg-white dark:bg-black-l1 lg:bg-white-d1 lg:dark:bg-black-l2'
      : ''
  }`
  const subClassName = 'flex flex-[5] flex-col gap-1 items-start text-start'

  if (props.sectionNumber < props.currentNumber) {
    return (
      <div className={divClassName}>
        <props.icon className="flex h-6 w-6 fill-primary dark:fill-primary-l1" />
        <div className={subClassName}>
          <PrimarySubTitleLabel label={props.title} />
          <PrimarySubTextLabel label={props.subTitle} />
        </div>
      </div>
    )
  } else if (props.sectionNumber > props.currentNumber) {
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
