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
    <div className="flex flex-col items-center gap-2 rounded bg-white-d1 p-3 dark:bg-black-l1 lg:gap-3 lg:p-4">
      <WarnSubTextLabel label="Did you like the onboarding process? Please share your feedback" />
      <div className="flex gap-3">
        <UpIcon
          className={`flex h-5 w-5  ${
            props.up
              ? ' scale-125 fill-success-d1 transition dark:fill-success-l1 '
              : ' origin-bottom-left fill-black-l3 duration-200 hover:-rotate-12 hover:fill-success-d1 dark:fill-white-d3 dark:hover:fill-success-l1 '
          } lg:h-6 lg:w-6`}
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
          className={`flex h-5 w-5 ${
            props.down
              ? ' scale-125 fill-error-d1 transition dark:fill-error-l1'
              : ' origin-top-right fill-black-l3 duration-200 hover:-rotate-12  hover:fill-error-d1 dark:fill-white-d3 dark:hover:fill-error-l1 '
          } lg:h-6 lg:w-6`}
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
