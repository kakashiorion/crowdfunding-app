import { useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  PrimaryFilledButton,
  SmallHoverPrimaryTextButton,
} from 'src/components/Button/Button'
import {} from 'src/components/Input/Input'
import {
  ErrorSubTextLabel,
  SubTextLabel,
  SuccessSubTextLabel,
  TextLabel,
  TitleLabel,
} from 'src/components/Label/Label'

import {
  FormWrapperClassName,
  ImageWrapperClassName,
  LoginFormClassName,
  PageWrapperClassName,
  TextInputClassName,
} from '../loginConsts'

import forgotImg from './forgot.jpg'

const EMAIL_QUERY = gql`
  query CheckUser($email: String!) {
    user: userByEmail(email: $email) {
      id
      email
    }
  }
`

type ForgotPasswordPageProps = {
  email?: string
}
const ForgotPasswordPage = (props: ForgotPasswordPageProps) => {
  const [emailMsg, setEmailMsg] = useState('')
  const [enteredEmail, setEnteredEmail] = useState(props.email ?? '')
  const [success, setSuccess] = useState(false)

  const { forgotPassword } = useAuth()
  const [checkDB] = useLazyQuery(EMAIL_QUERY)

  return (
    <>
      <MetaTags
        title="Forgot Password"
        description="Forgot Password page for Dealbari platform"
      />
      <div id="forgotPwdPageWrapper" className={PageWrapperClassName}>
        <div id="imageWrapper" className={ImageWrapperClassName}>
          <img src={forgotImg} alt="Forgot Password" />
        </div>
        <div id="formWrapper" className={FormWrapperClassName}>
          <div id="forgotPasswordForm" className={LoginFormClassName}>
            <TitleLabel label="Forgot password?" />
            <SubTextLabel label="Don't worry! We will send you an email to help you reset your password." />
            <Divider />
            <TextLabel label={'Confirm your email ID'} />
            <input
              value={enteredEmail}
              type="text"
              className={TextInputClassName}
              onChange={(e) => {
                setEnteredEmail(e.target.value)
                emailMsg != '' && setEmailMsg('')
              }}
            />
            {success ? (
              <SuccessSubTextLabel label={emailMsg} />
            ) : (
              <ErrorSubTextLabel label={emailMsg} />
            )}
            <Divider />
            <PrimaryFilledButton
              action={async () => {
                if (
                  enteredEmail.length < 5 ||
                  !enteredEmail.includes('@') ||
                  !enteredEmail.includes('.')
                ) {
                  setEmailMsg(`Provide a proper email ID`)
                } else {
                  //Check if email exists
                  checkDB({
                    variables: { email: enteredEmail },
                  }).then(async (d) => {
                    if (!d.data.user) {
                      //Error if no user
                      setEmailMsg('Email does not exist in our records!')
                    } else {
                      //Send forgot pwd link to user*/
                      await forgotPassword(enteredEmail)
                      setSuccess(true)
                      setEmailMsg('Reset link sent to your email!')
                    }
                  })
                }
              }}
              label={'RESET PASSWORD'}
            />
            <Divider />
            <SmallHoverPrimaryTextButton
              action={() => {
                navigate(routes.login())
              }}
              label={'Oh.. I remember my password!'}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default ForgotPasswordPage

const Divider = () => {
  return <div className="h-2" />
}
