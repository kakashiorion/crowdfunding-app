import { useState } from 'react'

import CheckIcon from 'public/icons/checkCircle.svg'

import { navigate, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { TertiaryFilledButton } from 'src/components/Button/Button'
import { TitleLabel, TertiarySubTitleLabel } from 'src/components/Label/Label'
import OnboardingFeedbackForm from 'src/components/Onboarding/OnboardingFeedbackForm/OnboardingFeedbackForm'

const STARTUP_PREFERENCES_MUTATION = gql`
  mutation updateUser($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`

const StartupCompleted = () => {
  const [up, setUp] = useState<boolean>(false)
  const [down, setDown] = useState<boolean>(false)
  const { currentUser, reauthenticate } = useAuth()
  const [updateUser] = useMutation(STARTUP_PREFERENCES_MUTATION)

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-6 rounded px-6 py-5 text-center  lg:px-8 lg:py-6">
      <CheckIcon className="flex h-9 w-9 fill-success-d1 dark:fill-success-l1 lg:h-10 lg:w-10" />
      <TitleLabel label="Awesome.. we have collected everything we needed!" />
      <TertiarySubTitleLabel label="You may go to your account, start exploring the platform and making deals." />
      <TertiaryFilledButton
        label={`LET"S GO`}
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
            }).then(() => navigate(routes.startupHome(), { replace: true }))
          } else {
            navigate(routes.startupHome(), { replace: true })
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

export default StartupCompleted
