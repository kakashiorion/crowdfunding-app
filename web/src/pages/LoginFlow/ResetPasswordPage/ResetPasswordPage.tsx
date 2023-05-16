import { useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { PrimaryFilledButton } from 'src/components/Button/Button'
import { TextInput } from 'src/components/Input/Input'
import {
  ErrorSubTextLabel,
  SubTextLabel,
  TextLabel,
  TitleLabel,
} from 'src/components/Label/Label'

import CheckIcon from '../../../../public/icons/checkCircle.svg'

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
      <div className="my-4 flex h-full overflow-hidden rounded bg-white-d1/50 dark:bg-black-l2/50 lg:my-5 xl:aspect-video xl:h-auto">
        <div className="hidden lg:flex lg:flex-1">
          <img src={resetImg} alt="Reset Password" />
        </div>
        <div className="flex h-full w-full flex-1 flex-col items-center justify-center gap-5 overflow-y-scroll px-4 py-5 text-center lg:flex-[2] lg:px-6">
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
