import { useState } from 'react'

import CheckIcon from 'public/icons/checkCircle.svg'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { LargePrimaryFilledButton } from 'src/components/Button/Button'
import { TitleLabel, PrimarySubTitleLabel } from 'src/components/Label/Label'
import OnboardingFeedbackForm from 'src/components/Onboarding/OnboardingFeedbackForm/OnboardingFeedbackForm'

const INVESTOR_PREFERENCES_MUTATION = gql`
  mutation updateUser($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`
const InvestorCompleted = () => {
  const [up, setUp] = useState<boolean>(false)
  const [down, setDown] = useState<boolean>(false)
  const { currentUser, reauthenticate } = useAuth()
  const [updateUser] = useMutation(INVESTOR_PREFERENCES_MUTATION)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-7 rounded px-7 py-6 text-center lg:px-9 lg:py-7">
      <CheckIcon className="flex h-10 w-10 fill-success-d1 dark:fill-success-l1 lg:h-11 lg:w-11" />
      <TitleLabel label="Awesome.. we have collected everything we needed!" />
      <PrimarySubTitleLabel label="You may go to your account, start exploring the platform and making deals with startups." />
      <LargePrimaryFilledButton
        label={`LET'S GO`}
        action={async () => {
          await reauthenticate()
          if (up || down) {
            await updateUser({
              variables: {
                id: currentUser?.id,
                input: {
                  likedOnboarding: up ? true : down ? false : null,
                },
              },
            }).then(() => navigate(routes.investorHome()))
          } else {
            navigate(routes.investorHome())
          }
        }}
      />
      <OnboardingFeedbackForm
        up={up}
        down={down}
        setUp={setUp}
        setDown={setDown}
      />
    </div>
  )
}

export default InvestorCompleted
