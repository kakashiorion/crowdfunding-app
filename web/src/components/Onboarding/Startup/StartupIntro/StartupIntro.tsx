import CheckIcon from 'public/icons/checkCircle.svg'
import InfoIcon from 'public/icons/info.svg'

import { TertiaryFilledButton } from 'src/components/Button/Button'
import {
  TitleLabel,
  TertiarySubTitleLabel,
  WarnSubTextLabel,
} from 'src/components/Label/Label'
import { OnboardingIntroSectionProps } from 'src/lib/onboardingConsts'

const StartupIntro = (props: OnboardingIntroSectionProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-sm px-6 py-5 text-center  lg:px-8 lg:py-6">
      <CheckIcon className="flex h-9 w-9 fill-success-d1 dark:fill-success-l1 lg:h-10 lg:w-10" />
      <TitleLabel label="Congrats.. you have successfully signed up!" />
      <TertiarySubTitleLabel label="Now, let's get you onboard our platform." />
      <TertiaryFilledButton
        label="GET STARTED"
        action={() => props.setCurrentSection(1)}
      />
      <div className="flex w-full items-center justify-start gap-2 rounded-sm bg-warn-l1/30 p-1 text-left dark:bg-warn-d2/30 lg:p-2 ">
        <InfoIcon className="flex h-4 w-4 shrink-0 fill-warn-d1 dark:fill-warn-l1 lg:h-5 lg:w-5" />
        <WarnSubTextLabel label="Don't worry! Some of the steps can be skipped and updated later. Although, we highly recommend that you provide all the details for a superior experience." />
      </div>
    </div>
  )
}

export default StartupIntro
