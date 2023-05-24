import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { PrimaryFilledButton } from 'src/components/Button/Button'
import {} from 'src/components/Input/Input'
import {
  ErrorSubTextLabel,
  SubTextLabel,
  TextLabel,
  TitleLabel,
} from 'src/components/Label/Label'

import CheckIcon from '../../../../public/icons/checkCircle.svg'
import {
  FormWrapperClassName,
  ImageWrapperClassName,
  LoginFormClassName,
  PageWrapperClassName,
  TextInputClassName,
  SuccessFormClassName,
} from '../loginConsts'

import resetImg from './reset.jpg'

type StepType = 'code' | 'password' | 'success'

type ResetPasswordPageProps = {
  resetToken: string
}
const ResetPasswordPage = (props: ResetPasswordPageProps) => {
  const [step, setStep] = useState<StepType>('password')
  const [pwdError, setPwdError] = useState('')
  const [enteredPwd, setEnteredPwd] = useState('')
  const [enteredConfirmPwd, setEnteredConfirmPwd] = useState('')

  const { resetPassword, validateResetToken } = useAuth()

  useEffect(() => {
    const validateToken = async () => {
      const response = await validateResetToken(props.resetToken)
      if (response.error) {
        navigate(routes.forgotPassword())
      }
    }
    validateToken()
  }, [props.resetToken, validateResetToken])

  return (
    <>
      <MetaTags
        title="Reset Password"
        description="Reset Password page for Dealbari platform"
      />
      <div id="resetPageWrapper" className={PageWrapperClassName}>
        <div id="imageWrapper" className={ImageWrapperClassName}>
          <img src={resetImg} alt="Reset Password" />
        </div>
        <div id="formWrapper" className={FormWrapperClassName}>
          {step == 'password' && (
            <div id="resetPasswordForm" className={LoginFormClassName}>
              <TitleLabel label="Set a new password" />
              <SubTextLabel label={'Must be at least 8 characters long.'} />
              <Divider />
              <TextLabel label={'Password'} />
              <input
                value={enteredPwd}
                className={TextInputClassName}
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEnteredPwd(e.target.value)
                  pwdError != '' && setPwdError('')
                }}
              />
              <Divider />
              <TextLabel label={'Confirm password'} />
              <input
                value={enteredConfirmPwd}
                className={TextInputClassName}
                type="password"
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                  setEnteredConfirmPwd(e.target.value)
                  pwdError != '' && setPwdError('')
                }}
              />
              <ErrorSubTextLabel label={pwdError} />
              <Divider />
              <PrimaryFilledButton
                action={async () => {
                  if (enteredPwd.length < 8 || enteredConfirmPwd.length < 8) {
                    setPwdError('Atleast 8 characters required')
                  } else if (enteredPwd != enteredConfirmPwd) {
                    setPwdError('Passwords do not match')
                  } else {
                    //Passwords matched -> reset password in DB and continue)
                    const response = await resetPassword({
                      password: enteredPwd,
                      resetToken: props.resetToken,
                    })
                    if (response.error) {
                      setPwdError(response.error)
                    } else {
                      setStep('success')
                    }
                  }
                }}
                label="DONE"
              />
              <div className="h-4 lg:h-6"></div>
            </div>
          )}
          {step == 'success' && (
            <div id="successForm" className={SuccessFormClassName}>
              <CheckIcon className="flex h-10 w-10 fill-success-d1 dark:fill-success-l1 lg:h-11 lg:w-11" />
              <TitleLabel label="Great!" />
              <SubTextLabel
                label={'Your password has been reset.. Use it to login now.'}
              />
              <Divider />
              <PrimaryFilledButton
                label="GO TO LOGIN"
                action={() => navigate(routes.login())}
              />
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ResetPasswordPage

const Divider = () => {
  return <div className="h-2"></div>
}
