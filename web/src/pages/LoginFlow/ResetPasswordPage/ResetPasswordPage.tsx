import { useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import {
  PrimaryFilledButton,
  SmallHoverPrimaryTextButton,
} from 'src/components/Button/Button'
import { TextInput } from 'src/components/Input/Input'
import {
  ErrorSubTextLabel,
  SubTextLabel,
  TextLabel,
  TitleLabel,
  WarnSubTextLabel,
} from 'src/components/Label/Label'

import CheckIcon from '../../../../public/icons/checkCircle.svg'

import resetImg from './reset.jpg'

type StepType = 'code' | 'password' | 'success'

type ResetPasswordPageProps = {
  email: string
  id: number
}
const ResetPasswordPage = (props: ResetPasswordPageProps) => {
  const [step, setStep] = useState<StepType>('code')
  const [pwdError, setPwdError] = useState('')
  const [codeError, setCodeError] = useState('')
  const [enteredCode, setEnteredCode] = useState('')
  const [enteredPwd, setEnteredPwd] = useState('')
  const [enteredConfirmPwd, setEnteredConfirmPwd] = useState('')

  return (
    <>
      <MetaTags
        title="Reset Password"
        description="Reset Password page for Dealbari platform"
      />
      <div className="my-4 flex h-full overflow-hidden rounded-sm bg-white-d1/50 dark:bg-black-l2/50 lg:my-5">
        <div className="hidden lg:flex lg:flex-1">
          <img src={resetImg} alt="Reset Password" />
        </div>
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-5 overflow-y-scroll px-4 py-5 text-center lg:flex-[2] lg:px-6">
          {step == 'code' && (
            <>
              <TitleLabel label="Resetting password" />{' '}
              <SubTextLabel
                label={'Check your email.. We have sent you a reset code'}
              />
              <TextLabel label={'Enter code'} />
              <TextInput
                value={enteredCode}
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEnteredCode(e.target.value)
                  codeError != '' && setCodeError('')
                }}
              />
              <ErrorSubTextLabel label={codeError} />
              <PrimaryFilledButton
                action={() => {
                  //TODO: Match code for the prop email in DB
                  if (enteredCode.length != 6) {
                    setCodeError('Code must be 6 digits')
                  } else if (enteredCode == '123456') {
                    setStep('password')
                  } else {
                    setCodeError(
                      'Oops.. Code does not match. Please try again!'
                    )
                  }
                }}
                label="CONTINUE"
              />
              <SmallHoverPrimaryTextButton
                action={() => {
                  navigate(routes.forgotPassword())
                }}
                label={`Don't have a code? Send it again!`}
              />
            </>
          )}
          {step == 'password' && (
            <>
              <TitleLabel label="Set a new password" />
              <SubTextLabel label={'Must be at least 8 characters long.'} />
              <TextLabel label={'Password'} />
              <TextInput
                value={enteredPwd}
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEnteredPwd(e.target.value)
                  pwdError != '' && setPwdError('')
                }}
              />
              <TextLabel label={'Confirm password'} />
              <TextInput
                value={enteredConfirmPwd}
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEnteredConfirmPwd(e.target.value)
                  pwdError != '' && setPwdError('')
                }}
              />
              <ErrorSubTextLabel label={pwdError} />
              <PrimaryFilledButton
                action={() => {
                  if (enteredPwd.length < 8 || enteredConfirmPwd.length < 8) {
                    setPwdError('Atleast 8 characters required')
                  } else if (enteredPwd != enteredConfirmPwd) {
                    setPwdError('Passwords do not match')
                  } else {
                    //TODO: Passwords matched -> reset password in DB and continue)
                    //resetPassword()
                    setStep('success')
                  }
                }}
                label="DONE"
              />
              <div className="h-4 lg:h-6"></div>
              <WarnSubTextLabel label={`Not ${props.email}?`} />
              <SmallHoverPrimaryTextButton
                action={() => {
                  navigate(routes.forgotPassword())
                }}
                label={`Go back`}
              />
            </>
          )}
          {step == 'success' && (
            <>
              <CheckIcon className="flex h-9 w-9 fill-success-d1 dark:fill-success-l1 lg:h-10 lg:w-10" />
              <TitleLabel label="Great!" />
              <SubTextLabel
                label={'Your password has been reset.. Use it to login now.'}
              />
              <PrimaryFilledButton
                label="GO TO LOGIN"
                action={() => navigate(routes.login())}
              />
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default ResetPasswordPage
