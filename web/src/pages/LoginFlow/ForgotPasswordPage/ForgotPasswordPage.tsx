import { useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  PrimaryFilledButton,
  SmallHoverPrimaryTextButton,
} from 'src/components/Button/Button'
import { TextInput } from 'src/components/Input/Input'
import {
  ErrorSubTextLabel,
  SuccessSubTextLabel,
  TextLabel,
} from 'src/components/Label/Label'

import forgotImg from './forgot.jpg'

type ForgotPasswordPageProps = {
  email?: string
}
const ForgotPasswordPage = (props: ForgotPasswordPageProps) => {
  const [emailMsg, setEmailMsg] = useState('')
  const [enteredEmail, setEnteredEmail] = useState(props.email ?? '')
  const [success, setSuccess] = useState(false)

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
          {success ? (
            <SuccessSubTextLabel label={emailMsg} />
          ) : (
            <ErrorSubTextLabel label={emailMsg} />
          )}
          <PrimaryFilledButton
            action={async () => {
              if (enteredEmail.length == 0) {
                setEmailMsg(`Don't leave it blank`)
              } else {
                //Send forgot pwd link to user*/
                const user = await forgotPassword(enteredEmail)
                if (user.error) {
                  setEmailMsg('Email does not exist in our records!')
                } else {
                  setSuccess(true)
                  setEmailMsg('Reset link sent to your email!')
                }
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
