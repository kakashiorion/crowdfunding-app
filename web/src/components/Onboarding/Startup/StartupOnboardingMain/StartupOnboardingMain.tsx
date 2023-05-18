import { TertiarySubTitleLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/onboardingConsts'
import {
  StartupOnboardingSections,
  StartupStepsInfoList,
} from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingData'

import StartupCompleted from '../StartupCompleted/StartupCompleted'
import StartupIntro from '../StartupIntro/StartupIntro'

const StartupOnboardingMain = (props: OnboardingMainProps) => {
  if (props.currentSection == 0) {
    return <StartupIntro setCurrentSection={props.setCurrentSection} />
  } else if (props.currentSection > StartupOnboardingSections.length) {
    return <StartupCompleted />
  } else {
    const componentsList = StartupStepsInfoList[props.currentSection - 1]
    return (
      <div className="flex h-full w-full flex-col gap-3 overflow-hidden lg:gap-4">
        <TertiarySubTitleLabel
          label={`SECTION ${props.currentSection} : ${StartupOnboardingSections[
            props.currentSection - 1
          ].title.toUpperCase()}`}
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

export default StartupOnboardingMain
