import {
  DisabledSubTextLabel,
  DisabledSubTitleLabel,
  TertiarySubTextLabel,
  TertiarySubTitleLabel,
  TertiaryTextLabel,
} from 'src/components/Label/Label'
import {
  OnboardingSectionInfoType,
  OnboardingTimelineProps,
  OnboardingTimelineStepsProps,
} from 'src/lib/onboardingConsts'
import { StartupOnboardingSections } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingData'

const StartupOnboardingTimeline = (props: OnboardingTimelineProps) => {
  return (
    <div
      className={`absolute ${
        props.isMenuOpen ? 'flex' : 'hidden'
      } right-0 top-0 flex-col gap-2 rounded bg-white-d1 p-3 shadow-md dark:bg-black-l1 lg:static lg:flex lg:h-full lg:w-1/3 lg:gap-3 lg:rounded-none lg:border-l-2 lg:border-l-white-d2 lg:bg-transparent lg:py-1 lg:pl-3 lg:pr-0 lg:shadow-none dark:lg:border-l-black-l2 lg:dark:bg-transparent`}
    >
      <TertiaryTextLabel
        label={`ONBOARDING SECTIONS (${
          props.currentSection < StartupOnboardingSections.length
            ? props.currentSection
            : StartupOnboardingSections.length
        }/${StartupOnboardingSections.length})`}
      />
      <div className="flex flex-col gap-2 overflow-y-auto lg:gap-0">
        {StartupOnboardingSections.map((section: OnboardingSectionInfoType) => (
          <StartupTimelineSteps
            key={section.index}
            currentNumber={props.currentSection}
            sectionNumber={section.index}
            subTitle={section.subTitle}
            title={section.title}
            icon={section.icon}
          />
        ))}
      </div>
    </div>
  )
}
export default StartupOnboardingTimeline

const StartupTimelineSteps = (props: OnboardingTimelineStepsProps) => {
  const divClassName = `grid rounded grid-cols-[1fr,6fr] w-full items-start justify-center text-center gap-1 p-2 ${
    props.sectionNumber == props.currentNumber
      ? 'bg-white dark:bg-black lg:dark:bg-black-l1 lg:bg-white-d1'
      : ''
  }`
  const subClassName = 'flex flex-[6] flex-col gap-1 items-start text-start'

  if (props.sectionNumber < props.currentNumber) {
    return (
      <div className={divClassName}>
        <props.icon className="flex h-7 w-7 fill-tertiary-d1 dark:fill-tertiary-l1" />
        <div className={subClassName}>
          <TertiarySubTitleLabel label={props.title} />
          <TertiarySubTextLabel label={props.subTitle} />
        </div>
      </div>
    )
  } else if (props.sectionNumber > props.currentNumber) {
    return (
      <div className={divClassName}>
        <props.icon className="flex h-7 w-7 fill-black-l4 dark:fill-white-d4" />
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
          divClassName +
          ' border-l-0 border-l-tertiary-d1 dark:border-l-tertiary-l1 lg:border-l-4'
        }
      >
        <props.icon className="flex h-7 w-7 fill-tertiary-d1 dark:fill-tertiary-l1" />
        <div className={subClassName}>
          <TertiarySubTitleLabel label={props.title} />
          <TertiarySubTextLabel label={props.subTitle} />
        </div>
      </div>
    )
  }
}
