import { useState } from 'react'

import CheckIcon from 'public/icons/checkCircle.svg'
import DownIcon from 'public/icons/thumbDown.svg'
import UpIcon from 'public/icons/thumbUp.svg'

import { navigate, routes } from '@redwoodjs/router'

import { PrimaryFilledButton } from 'src/components/Button/Button'
import {
  TitleLabel,
  PrimarySubTitleLabel,
  WarnSubTextLabel,
} from 'src/components/Label/Label'

const InvestorCompleted = () => {
  const [up, setUp] = useState<boolean>(false)
  const [down, setDown] = useState<boolean>(false)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded-sm px-6 py-5 text-center  lg:px-8 lg:py-6">
      <CheckIcon className="flex h-9 w-9 fill-success-d1 dark:fill-success-l1 lg:h-10 lg:w-10" />
      <TitleLabel label="Awesome.. we have collected everything we needed!" />
      <PrimarySubTitleLabel label="You may go to your account and start exploring the platform." />
      <PrimaryFilledButton
        label={`LET"S GO`}
        action={() => navigate(routes.investorHome())}
      />
      <div className="flex flex-col items-center gap-1 rounded-sm bg-warn-l1/30 p-3 dark:bg-warn-d2/30 lg:gap-2 lg:p-4">
        <WarnSubTextLabel label="Did you like the onboarding process? Share your feedback" />
        <div className="flex gap-2">
          <UpIcon
            className={`flex h-4 w-4 ${
              up
                ? 'fill-success'
                : 'fill-black-l3 hover:fill-success-l1 dark:fill-white-d3'
            } lg:h-5 lg:w-5`}
            onClick={() => {
              setDown(false)
              if (up) {
                setUp(false)
              } else {
                setUp(true)
              }
            }}
          />
          <DownIcon
            className={`flex h-4 w-4 ${
              down
                ? 'fill-error'
                : 'fill-black-l3 hover:fill-error-l1 dark:fill-white-d3'
            } lg:h-5 lg:w-5`}
            onClick={() => {
              setUp(false)
              if (down) {
                setDown(false)
              } else {
                setDown(true)
              }
            }}
          />
        </div>
      </div>
    </div>
  )
}

export default InvestorCompleted
