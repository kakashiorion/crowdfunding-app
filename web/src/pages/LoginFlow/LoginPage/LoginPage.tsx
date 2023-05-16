import { Dispatch, SetStateAction, useEffect, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  DisabledFilledButton,
  SmallHoverPrimaryTextButton,
  PrimaryFilledButton,
} from 'src/components/Button/Button'
import { TextInput } from 'src/components/Input/Input'
import {
  ErrorSubTextLabel,
  SuccessSubTextLabel,
  TextLabel,
} from 'src/components/Label/Label'

import loginImg from './login.jpg'

type LoginMethodType = 'password' | 'phone' | 'token'

//Master switch to enable various login methods
const enabledLoginMethods: LoginMethodType[] = ['password', 'phone', 'token']

const EMAIL_USER_MUTATION = gql`
  mutation loginPwdLessUser($email: String!) {
    loginPwdLessUser(email: $email) {
      id
      email
      type
      resetToken
      resetTokenExpiresAt
    }
  }
`

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState<LoginMethodType>('password')
  return (
    <>
      <MetaTags title="Login" description="Login page for Dealbari platform" />
      <div className="my-4 flex h-full overflow-hidden rounded-sm bg-white-d1/50 dark:bg-black-l2/50 lg:my-5 xl:aspect-video xl:h-auto">
        <div className="hidden lg:flex lg:flex-1">
          <img src={loginImg} alt="Login" />
        </div>
        <div className="flex h-full flex-1 flex-col items-center justify-center gap-5 overflow-y-scroll px-4 py-5 text-center lg:flex-[2] lg:gap-2 lg:px-6 ">
          <p className="mt-2 w-full text-h5 text-black dark:text-white lg:mt-4 lg:text-h4">
            {'Log in your account'}
          </p>
          <p className="w-full text-b3 text-black-l2 dark:text-white-d2 lg:text-b2">
            {
              'Welcome back! Please choose your method of login and enter details.'
            }
          </p>
          <div className="flex w-full gap-1 rounded-sm bg-white-d2 p-1 dark:bg-black-l4">
            {enabledLoginMethods.indexOf('password') >= 0 && (
              <LoginMethodSelectorButton
                action={setLoginMethod}
                loginMethod={loginMethod}
                preferredMethod="password"
                title="Email"
                subTitle="(Using Password)"
              />
            )}
            {enabledLoginMethods.indexOf('phone') >= 0 && (
              <LoginMethodSelectorButton
                action={setLoginMethod}
                loginMethod={loginMethod}
                preferredMethod="phone"
                title="Phone"
                subTitle="(Using OTP)"
              />
            )}
            {enabledLoginMethods.indexOf('token') >= 0 && (
              <LoginMethodSelectorButton
                action={setLoginMethod}
                loginMethod={loginMethod}
                preferredMethod="token"
                title="Passwordless"
                subTitle="(Using Token)"
              />
            )}
          </div>
          {loginMethod == 'password' && <PasswordLoginForm />}
          {loginMethod == 'phone' && <PhoneLoginForm />}
          {loginMethod == 'token' && <TokenLoginForm />}
        </div>
      </div>
    </>
  )
}
export default LoginPage

type LoginMethodSelectorButtonProps = {
  preferredMethod: LoginMethodType
  loginMethod: LoginMethodType
  title: string
  subTitle: string
  action: Dispatch<SetStateAction<LoginMethodType>>
}
const LoginMethodSelectorButton = (props: LoginMethodSelectorButtonProps) => {
  const activeButtonClass =
    'rounded-sm flex flex-col justify-start items-center flex-1 py-2 lg:py-3 bg-white px-1'
  const inactiveButtonClass =
    'rounded-sm flex flex-col justify-start items-center flex-1 py-2 lg:py-3 hover:bg-primary-l2 px-1'

  const activeTitleClass = 'text-b3 lg:text-b2 text-primary'
  const inactiveTitleClass = 'text-b3 lg:text-b2 text-black '
  const activeSubTitleClass = 'text-b4 lg:text-b3 text-primary-l1'
  const inactiveSubTitleClass = 'text-b4 lg:text-b3 text-black-l1 '
  return (
    <button
      className={
        props.loginMethod == props.preferredMethod
          ? activeButtonClass
          : inactiveButtonClass
      }
      onClick={() => props.action(props.preferredMethod)}
    >
      <p
        className={
          props.loginMethod == props.preferredMethod
            ? activeTitleClass
            : inactiveTitleClass
        }
      >
        {props.title}
      </p>
      <p
        className={
          props.loginMethod == props.preferredMethod
            ? activeSubTitleClass
            : inactiveSubTitleClass
        }
      >
        {props.subTitle}
      </p>
    </button>
  )
}

const Divider = () => {
  return <div className="h-4" />
}

export const loginFormClassName =
  'flex w-full flex-grow flex-col items-center justify-center gap-1 lg:gap-2'

const resetTimeLimit = 30

const PasswordLoginForm = () => {
  const [pwdError, setPwdError] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPwd, setEnteredPwd] = useState('')
  const { logIn, getCurrentUser } = useAuth()

  return (
    <div className={loginFormClassName}>
      <TextLabel label="Email" />
      <TextInput
        value={enteredEmail}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEnteredEmail(e.target.value)
          pwdError != '' && setPwdError('')
        }}
      />
      <Divider />
      <TextLabel label="Password" />
      <TextInput
        value={enteredPwd}
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEnteredPwd(e.target.value)
          pwdError != '' && setPwdError('')
        }}
      />
      <ErrorSubTextLabel label={pwdError} />
      <Divider />
      <PrimaryFilledButton
        action={async () => {
          if (enteredEmail.length == 0) {
            setPwdError(`Don't leave email blank`)
          } else if (enteredPwd.length < 8) {
            setPwdError('Password must be atleast 8 characters long')
          } else {
            //Try login with email and password
            const response = await logIn({
              username: enteredEmail,
              password: enteredPwd,
            })
            if (response.error) {
              setPwdError(response.error)
            } else {
              const loggedInUser = await getCurrentUser()
              if (loggedInUser?.type === 'INVESTOR') {
                navigate(routes.investorHome())
              } else if (loggedInUser?.type === 'STARTUP') {
                navigate(routes.startupHome())
              }
            }
          }
        }}
        label="LOGIN"
      />
      <Divider />
      <SmallHoverPrimaryTextButton
        action={() => {
          navigate(routes.forgotPassword({ email: enteredEmail }))
        }}
        label={'Forgot Password?'}
      />
    </div>
  )
}

const PhoneLoginForm = () => {
  const [otpSent, setOTPSent] = useState(false)
  const [phoneMsg, setPhoneMsg] = useState('')
  const [phoneExists, setPhoneExists] = useState(false)
  const [otpMsg, setOtpMsg] = useState('')
  const [enteredPhone, setEnteredPhone] = useState('')
  const [enteredOTP, setEnteredOTP] = useState('')
  const [resendCounter, setResendCounter] = useState(0)

  useEffect(() => {
    if (resendCounter > 0) {
      setTimeout(() => {
        setResendCounter(resendCounter - 1)
      }, 1000)
    } else if (resendCounter == 0) {
      setPhoneMsg('')
    }
  }, [resendCounter])

  return (
    <div className={loginFormClassName}>
      <TextLabel label="Phone Number" />
      <TextInput
        value={enteredPhone}
        type="tel"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEnteredPhone(e.target.value)
          phoneMsg != '' && setPhoneMsg('')
        }}
      />
      {phoneExists ? (
        <SuccessSubTextLabel label={phoneMsg} />
      ) : (
        <ErrorSubTextLabel label={phoneMsg} />
      )}
      {resendCounter > 0 ? (
        <DisabledFilledButton
          action={() => {}}
          label={`WAIT ${resendCounter}s TO RESEND`}
        />
      ) : (
        <PrimaryFilledButton
          action={() => {
            if (enteredPhone.length == 0) {
              setPhoneMsg(`Don't leave it blank`)
            } else if (enteredPhone.length > 0 && enteredPhone.length < 10) {
              setPhoneMsg('Phone number should be at least 10 digits')
            } else {
              //TODO: Check if phone number exists in DB and send OTP
              if (enteredPhone == '9999999999') {
                //sendOTP()
                setOTPSent(true)
                setPhoneExists(true)
                setPhoneMsg('OTP sent!')
                setResendCounter(resetTimeLimit)
              } else {
                setPhoneExists(false)
                setPhoneMsg('Phone number does not exist in our records!')
              }
            }
          }}
          label={otpSent ? 'RESEND OTP' : 'SEND OTP'}
        />
      )}
      <Divider />
      <TextLabel label="Enter OTP" />
      <TextInput
        value={enteredOTP}
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEnteredOTP(e.target.value)
          otpMsg != '' && setOtpMsg('')
        }}
      />
      <ErrorSubTextLabel label={otpMsg} />
      {otpSent ? (
        <PrimaryFilledButton
          action={() => {
            if (enteredOTP.length != 6) {
              setOtpMsg(`OTP must be 6 digits`)
            } else {
              //TODO: Try login with OTP in DB
              if (enteredOTP == '123456') {
                //TODO: If success, navigate to home based on user type
                // navigate(routes.investorHome())
              } else {
                setOtpMsg('OTP does not match.. Please try again!')
              }
            }
          }}
          label="LOGIN"
        />
      ) : (
        <DisabledFilledButton action={() => {}} label="LOGIN" />
      )}
    </div>
  )
}

const TokenLoginForm = () => {
  const [tokenSent, setTokenSent] = useState(false)
  const [emailExists, setEmailExists] = useState(false)
  const [emailMsg, setEmailMsg] = useState('')
  const [tokenMsg, setTokenMsg] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredToken, setEnteredToken] = useState('')
  const [resendCounter, setResendCounter] = useState(0)
  const [receivedToken, setReceivedToken] = useState('')
  const [receivedExpiredTime, setReceivedExpiredTime] = useState(new Date())
  const [receivedType, setReceivedType] = useState('')

  const [emailUser] = useMutation(EMAIL_USER_MUTATION)
  const { logIn } = useAuth()

  useEffect(() => {
    if (resendCounter > 0) {
      setTimeout(() => {
        setResendCounter(resendCounter - 1)
      }, 1000)
    } else if (resendCounter == 0) {
      setEmailMsg('')
    }
  }, [resendCounter])
  return (
    <div className={loginFormClassName}>
      <TextLabel label="Email" />
      <TextInput
        value={enteredEmail}
        type="text"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEnteredEmail(e.target.value)
          emailMsg != '' && setEmailMsg('')
        }}
      />
      {emailExists ? (
        <SuccessSubTextLabel label={emailMsg} />
      ) : (
        <ErrorSubTextLabel label={emailMsg} />
      )}
      {resendCounter > 0 ? (
        <DisabledFilledButton
          action={() => {}}
          label={`WAIT ${resendCounter}s TO RESEND`}
        />
      ) : (
        <PrimaryFilledButton
          action={async () => {
            if (enteredEmail.length == 0) {
              setEmailMsg(`Don't leave it blank`)
            } else {
              //Check if email exists in DB
              await emailUser({ variables: { email: enteredEmail } }).then(
                (d) => {
                  if (!d) {
                    setEmailExists(false)
                    setEmailMsg('Email does not exist in our records!')
                  } else {
                    setReceivedToken(d.data.loginPwdLessUser.resetToken)
                    setReceivedExpiredTime(
                      d.data.loginPwdLessUser.resetTokenExpiresAt
                    )
                    setReceivedType(d.data.loginPwdLessUser.type)
                    setTokenSent(true)
                    setEmailExists(true)
                    setEmailMsg('Token sent!')
                    setResendCounter(resetTimeLimit)
                  }
                }
              )
            }
          }}
          label={tokenSent ? 'RESEND TOKEN' : 'SEND TOKEN'}
        />
      )}
      <Divider />
      <TextLabel label="Enter Token received in email" />
      <TextInput
        value={enteredToken}
        type="password"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setEnteredToken(e.target.value)
          tokenMsg != '' && setTokenMsg('')
        }}
      />
      <ErrorSubTextLabel label={tokenMsg} />
      {tokenSent ? (
        <PrimaryFilledButton
          action={async () => {
            if (enteredToken.length != 6) {
              setTokenMsg(`Token must be 6 digits`)
            } else {
              //Try matching with Token in DB
              if (new Date() > receivedExpiredTime) {
                setTokenMsg('Token has expired.. Please try again!')
              } else if (enteredToken == receivedToken) {
                //If success, navigate to home based on user type
                await logIn({ username: enteredEmail, password: enteredToken })
                if (receivedType == 'INVESTOR') {
                  navigate(routes.investorHome())
                } else if (receivedType == 'STARTUP') {
                  navigate(routes.startupHome())
                }
              } else {
                setTokenMsg('Token does not match.. Please try again!')
              }
            }
          }}
          label="LOGIN"
        />
      ) : (
        <DisabledFilledButton action={() => {}} label="LOGIN" />
      )}
    </div>
  )
}
