import CheckIcon from 'public/icons/checkCircle.svg'

import { LargePrimaryFilledButton } from 'src/components/Button/Button'
import { TitleLabel, PrimarySubTitleLabel } from 'src/components/Label/Label'
import { OnboardingIntroSectionProps } from 'src/lib/onboardingConsts'

const InvestorIntro = (props: OnboardingIntroSectionProps) => {
  // const [infoShown, setInfoShown] = useState(false)
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 rounded px-6 py-5 text-center  lg:px-8 lg:py-6">
      <CheckIcon className="flex h-10 w-10 fill-success-d1 dark:fill-success-l1 lg:h-11 lg:w-11" />
      <TitleLabel label="Congrats! You have successfully signed up." />
      <PrimarySubTitleLabel label="Now, let's get you onboard with our platform." />
      <LargePrimaryFilledButton
        label="LET'S GET STARTED"
        action={() => props.setCurrentSection(1)}
      />
      {/* <InfoIcon
        className="flex h-4 w-4 shrink-0 fill-warn-d1 dark:fill-warn-l1 lg:h-5 lg:w-5"
        onClick={() => setInfoShown(true)}
      /> */}
      {/* {infoShown && (
        <div className="absolute bottom-0 flex w-full flex-col items-center justify-start gap-2 rounded bg-warn-l2 p-2 text-center dark:bg-warn-d2 lg:p-4 xl:w-2/3 ">
          <WarnSubTextLabel label="1. Don't worry.. it will only take a few minutes." />
          <WarnSubTextLabel label="2. You can always come back and resume from where you left off." />
          <WarnSubTextLabel label="3. Most of the steps can be skipped. Although, we highly recommend that you provide all the details." />
          <SmallHoverPrimaryTextButton
            label="Close"
            action={() => setInfoShown(false)}
          />
        </div>
      )} */}
    </div>
  )
}

export default InvestorIntro
