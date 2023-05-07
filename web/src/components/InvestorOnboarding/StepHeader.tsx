import { StepsInfoType } from 'src/pages/Investor/InvestorOnboardingPage/stepsConsts'

import { SubTextLabel, SubTitleLabel } from '../Label/Label'
import ProgressIndicator from '../ProgressIndicator/ProgressIndicator'

type StepHeaderProps = {
  currentStepInfo: StepsInfoType[]
  currentStepNumber: number
}
const StepHeader = (props: StepHeaderProps) => {
  return (
    <div className="flex shrink-0 flex-col-reverse items-start justify-between gap-1 overflow-hidden lg:flex-row lg:items-center ">
      <SubTitleLabel
        label={props.currentStepInfo[props.currentStepNumber - 1].title}
      />
      <div className="flex flex-col items-start gap-1 lg:items-end">
        <ProgressIndicator
          current={props.currentStepNumber}
          total={props.currentStepInfo.length}
        />
        <div className="flex items-center justify-end gap-1">
          <SubTextLabel
            label={`${props.currentStepNumber} of ${props.currentStepInfo.length}`}
          />
          <div className="h-[2px] w-[2px] rounded-full bg-black dark:bg-white lg:h-1 lg:w-1"></div>
          <SubTextLabel
            label={props.currentStepInfo[props.currentStepNumber - 1].display}
          />
        </div>
      </div>
    </div>
  )
}

export default StepHeader
