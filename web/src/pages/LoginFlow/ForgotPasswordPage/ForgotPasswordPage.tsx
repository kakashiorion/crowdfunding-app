import { useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  PrimaryFilledButton,
  SmallHoverPrimaryTextButton,
} from 'src/components/Button/Button'
import { TextInput } from 'src/components/Input/Input'
import { ErrorSubTextLabel, TextLabel } from 'src/components/Label/Label'

import forgotImg from './forgot.jpg'

const EMAIL_USER_MUTATION = gql`
  mutation resetPwdUser($email: String!) {
    resetPwdUser(email: $email) {
      id
      email
      type
      resetToken
      resetTokenExpiresAt
    }
  }
`

type ForgotPasswordPageProps = {
  email?: string
}
const ForgotPasswordPage = (props: ForgotPasswordPageProps) => {
  const [emailMsg, setEmailMsg] = useState('')
  const [enteredEmail, setEnteredEmail] = useState(props.email ?? '')
  const [emailUser] = useMutation(EMAIL_USER_MUTATION)

  const { forgotPassword } = useAuth()

  return (
    <>
      <MetaTags
        title="Forgot Password"
        description="Forgot Password page for Dealbari platform"
      />
      <div className="my-4 flex h-full overflow-hidden rounded-sm bg-white-d1/50 dark:bg-black-l2/50 lg:my-5">
        <div className="hidden lg:flex lg:flex-1">
          <img src={forgotImg} alt="Forgot Password" />
        </div>
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-4 overflow-y-scroll px-4 py-5 text-center lg:flex-[2] lg:px-6">
          <p className="mt-2 w-full text-h5 text-black dark:text-white lg:mt-4 lg:text-h4">
            {'Forgot password?'}
          </p>
          <p className="w-full text-b3 text-black-l2 dark:text-white-d2 lg:text-b2">
            {
              "Don't worry! We will send you an email to help you reset your password."
            }
          </p>
          <TextLabel label={'Confirm your Email'} />
          <TextInput
            value={enteredEmail}
            type="text"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEnteredEmail(e.target.value)
              emailMsg != '' && setEmailMsg('')
            }}
          />
          <ErrorSubTextLabel label={emailMsg} />
          <PrimaryFilledButton
            action={async () => {
              if (enteredEmail.length == 0) {
                setEmailMsg(`Don't leave it blank`)
              } else {
                //Check if email exists in DB*/
                await forgotPassword(enteredEmail).then(async (d) => {
                  if (d.error) {
                    setEmailMsg('Email does not exist in our records!')
                  } else {
                    await emailUser({
                      variables: { email: enteredEmail },
                    })
                    navigate(
                      routes.resetPassword({
                        email: d.email,
                        id: d.id,
                      })
                    )
                  }
                })
              }
            }}
            label={'RESET PASSWORD'}
          />
          <SmallHoverPrimaryTextButton
            action={() => {
              navigate(routes.login())
            }}
            label={'Oh.. I remember my password!'}
          />
        </div>
      </div>
    </>
  )
}

export default ForgotPasswordPage
