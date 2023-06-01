import { SubTitleLabel, SubTextLabel } from 'src/components/Label/Label'
import { OnboardingStepsInfoType } from 'src/lib/onboardingConsts'

import {
  PrimaryProgressIndicator,
  TertiaryProgressIndicator,
} from './ProgressIndicator/ProgressIndicator'

type StepHeaderProps = {
  currentStepInfo: OnboardingStepsInfoType[]
  currentStepNumber: number
}
export const InvestorStepHeader = (props: StepHeaderProps) => {
  return (
    <div className="flex shrink-0 flex-col-reverse items-start justify-between gap-2 overflow-hidden lg:flex-row lg:items-center lg:gap-4 ">
      <SubTitleLabel
        label={props.currentStepInfo[props.currentStepNumber - 1].title}
      />
      <div className="flex flex-col items-start gap-1 lg:items-end">
        <PrimaryProgressIndicator
          current={props.currentStepNumber}
          total={props.currentStepInfo.length}
        />
        <div className="flex items-center justify-end gap-1 whitespace-nowrap">
          <SubTextLabel
            label={`Step ${props.currentStepNumber} of ${props.currentStepInfo.length}`}
          />
          <div className="h-0.5 w-0.5 rounded bg-black dark:bg-white lg:h-1 lg:w-1"></div>
          <SubTextLabel
            label={props.currentStepInfo[props.currentStepNumber - 1].display}
          />
        </div>
      </div>
    </div>
  )
}

export const StartupStepHeader = (props: StepHeaderProps) => {
  return (
    <div className="flex shrink-0 flex-col-reverse items-start justify-between gap-2 overflow-hidden lg:flex-row lg:items-center lg:gap-4 ">
      <SubTitleLabel
        label={props.currentStepInfo[props.currentStepNumber - 1].title}
      />
      <div className="flex flex-col items-start gap-1 lg:items-end">
        <TertiaryProgressIndicator
          current={props.currentStepNumber}
          total={props.currentStepInfo.length}
        />
        <div className="flex items-center justify-end gap-1 whitespace-nowrap">
          <SubTextLabel
            label={`Step ${props.currentStepNumber} of ${props.currentStepInfo.length}`}
          />
          <div className="h-0.5 w-0.5 rounded bg-black dark:bg-white lg:h-1 lg:w-1"></div>
          <SubTextLabel
            label={props.currentStepInfo[props.currentStepNumber - 1].display}
          />
        </div>
      </div>
    </div>
  )
}
