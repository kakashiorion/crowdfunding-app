import { useState } from 'react'

import CheckIcon from 'public/icons/checkCircle.svg'
import InfoIcon from 'public/icons/info.svg'

import {
  SmallHoverTertiaryTextButton,
  TertiaryFilledButton,
} from 'src/components/Button/Button'
import {
  TitleLabel,
  TertiarySubTitleLabel,
  WarnSubTextLabel,
} from 'src/components/Label/Label'
import { OnboardingIntroSectionProps } from 'src/lib/onboardingConsts'

const StartupIntro = (props: OnboardingIntroSectionProps) => {
  const [infoShown, setInfoShown] = useState(false)
  return (
    <div className="relative flex h-full w-full flex-col items-center justify-center gap-6 rounded px-6 py-5 text-center  lg:px-8 lg:py-6">
      <CheckIcon className="flex h-9 w-9 fill-success-d1 dark:fill-success-l1 lg:h-10 lg:w-10" />
      <TitleLabel label="Congrats! You have successfully signed up." />
      <TertiarySubTitleLabel label="Now, let's get you onboard with our platform." />
      <TertiaryFilledButton
        label="GET STARTED"
        action={() => props.setCurrentSection(1)}
      />
      <InfoIcon
        className="flex h-4 w-4 shrink-0 fill-warn-d1 dark:fill-warn-l1 lg:h-5 lg:w-5"
        onClick={() => setInfoShown(true)}
      />
      {infoShown && (
        <div className="absolute bottom-0 flex w-full flex-col items-center justify-start gap-2 rounded bg-warn-l2 p-2 text-center dark:bg-warn-d2 lg:p-4 xl:w-2/3 ">
          <WarnSubTextLabel label="1. Don't worry.. it will only take a few minutes." />
          <WarnSubTextLabel label="2. You can always come back and resume from where you left off." />
          <WarnSubTextLabel label="3. Most of the steps can be skipped. Although, we highly recommend that you provide all the details." />
          <SmallHoverTertiaryTextButton
            label="Close"
            action={() => setInfoShown(false)}
          />
        </div>
      )}
    </div>
  )
}

export default StartupIntro
