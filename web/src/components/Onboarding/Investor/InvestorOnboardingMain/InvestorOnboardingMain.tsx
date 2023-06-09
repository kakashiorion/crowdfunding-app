import { PrimarySubTitleLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/onboardingConsts'
import {
  InvestorOnboardingSections,
  InvestorStepsInfoList,
} from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingData'

import InvestorCompleted from '../InvestorCompleted/InvestorCompleted'
import InvestorIntro from '../InvestorIntro/InvestorIntro'

const InvestorOnboardingMain = (props: OnboardingMainProps) => {
  if (props.currentSection == 0) {
    return <InvestorIntro setCurrentSection={props.setCurrentSection} />
  } else if (props.currentSection > InvestorOnboardingSections.length) {
    return <InvestorCompleted />
  } else {
    const componentsList = InvestorStepsInfoList[props.currentSection - 1]
    return (
      <div className="flex h-full w-full flex-col gap-3 overflow-hidden lg:gap-4">
        <PrimarySubTitleLabel
          label={`SECTION ${
            props.currentSection
          } : ${InvestorOnboardingSections[
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

export default InvestorOnboardingMain
