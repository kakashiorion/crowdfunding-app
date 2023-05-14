import DownIcon from 'public/icons/thumbDown.svg'
import UpIcon from 'public/icons/thumbUp.svg'

import { WarnSubTextLabel } from 'src/components/Label/Label'

type OnboardingFeedbackFormProps = {
  up: boolean
  setUp: React.Dispatch<React.SetStateAction<boolean>>
  down: boolean
  setDown: React.Dispatch<React.SetStateAction<boolean>>
}

const OnboardingFeedbackForm = (props: OnboardingFeedbackFormProps) => {
  return (
    <div className="flex flex-col items-center gap-1 rounded-sm bg-warn-l1/30 p-3 dark:bg-warn-d2/30 lg:gap-2 lg:p-4">
      <WarnSubTextLabel label="Did you like the onboarding process? Share your feedback" />
      <div className="flex gap-2">
        <UpIcon
          className={`flex h-4 w-4 ${
            props.up
              ? 'fill-success'
              : 'fill-black-l3 hover:fill-success-l1 dark:fill-white-d3'
          } lg:h-5 lg:w-5`}
          onClick={() => {
            if (props.up) {
              props.setUp(false)
            } else {
              props.setUp(true)
              props.setDown(false)
            }
          }}
        />
        <DownIcon
          className={`flex h-4 w-4 ${
            props.down
              ? 'fill-error'
              : 'fill-black-l3 hover:fill-error-l1 dark:fill-white-d3'
          } lg:h-5 lg:w-5`}
          onClick={() => {
            if (props.down) {
              props.setDown(false)
            } else {
              props.setDown(true)
              props.setUp(false)
            }
          }}
        />
      </div>
    </div>
  )
}

export default OnboardingFeedbackForm
