import InfoIcon from 'public/icons/info.svg'

import { OnboardingStepsInfoType } from 'src/lib/onboardingConsts'

import {
  BlackOutlineButton,
  SecondaryOutlineButton,
  PrimaryFilledButton,
  TertiaryFilledButton,
} from '../Button/Button'
import { WarnSubTextLabel } from '../Label/Label'

type StepFooterProps = {
  step: number
  setStep: React.Dispatch<React.SetStateAction<number>>
  continueAction: () => void
  skipAction: () => void
  backAction: () => void
  currentStepInfo: OnboardingStepsInfoType[]
}

export const InvestorStepFooter = (props: StepFooterProps) => {
  return (
    <div className="flex w-full shrink-0 flex-col gap-1 lg:gap-2">
      {props.currentStepInfo[props.step - 1].help && (
        <div className="flex w-full items-center justify-start gap-2 rounded bg-warn-l3 p-1 dark:bg-warn-d3 lg:p-2 ">
          <InfoIcon className="flex h-4 w-4 shrink-0 fill-warn-d1 dark:fill-warn-l1 lg:h-5 lg:w-5" />
          <WarnSubTextLabel
            label={props.currentStepInfo[props.step - 1].help ?? ''}
          />
        </div>
      )}
      <div className="flex w-full justify-between gap-2 lg:gap-4">
        {props.step > 1 && (
          <BlackOutlineButton label="BACK" action={props.backAction} />
        )}
        <div className="flex w-full justify-end gap-2 lg:gap-4">
          {props.currentStepInfo[props.step - 1].skippable && (
            <SecondaryOutlineButton
              label={
                // props.step == props.currentStepInfo.length
                // ? 'SKIP AND CONTINUE'
                // :
                'SKIP'
              }
              action={props.skipAction}
            />
          )}
          <PrimaryFilledButton
            label={
              props.step == props.currentStepInfo.length
                ? 'SAVE AND CONTINUE'
                : 'SAVE'
            }
            action={props.continueAction}
          />
        </div>
      </div>
    </div>
  )
}

export const StartupStepFooter = (props: StepFooterProps) => {
  return (
    <div className="flex w-full shrink-0 flex-col gap-1 lg:gap-2">
      {props.currentStepInfo[props.step - 1].help && (
        <div className="flex w-full items-center justify-start gap-2 rounded bg-warn-l3 p-1 dark:bg-warn-d3 lg:p-2 ">
          <InfoIcon className="flex h-4 w-4 shrink-0 fill-warn-d1 dark:fill-warn-l1 lg:h-5 lg:w-5" />
          <WarnSubTextLabel
            label={props.currentStepInfo[props.step - 1].help ?? ''}
          />
        </div>
      )}
      <div className="flex w-full justify-between gap-2 lg:gap-4">
        {props.step > 1 && (
          <BlackOutlineButton label="BACK" action={props.backAction} />
        )}
        <div className="flex w-full justify-end gap-2 lg:gap-4">
          {props.currentStepInfo[props.step - 1].skippable && (
            <SecondaryOutlineButton
              label={
                // props.step == props.currentStepInfo.length
                //   ? 'SKIP AND CONTINUE'
                //   :
                'SKIP'
              }
              action={props.skipAction}
            />
          )}
          <TertiaryFilledButton
            label={
              props.step == props.currentStepInfo.length
                ? 'SAVE AND CONTINUE'
                : 'SAVE'
            }
            action={props.continueAction}
          />
        </div>
      </div>
    </div>
  )
}
