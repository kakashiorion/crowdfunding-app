import { Dispatch, SetStateAction, useState } from 'react'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags } from '@redwoodjs/web'

import {
  DisabledFilledButton,
  SmallHoverPrimaryTextButton,
  PrimaryFilledButton,
} from 'src/components/Button/Button'

type LoginMethodType = 'password' | 'phone' | 'token'

const LoginPage = () => {
  const [loginMethod, setLoginMethod] = useState<LoginMethodType>('password')
  return (
    <>
      <MetaTags title="Login" description="Login page for Dealbari platform" />
      <div className="flex h-full gap-2 lg:gap-4">
        <img src="" alt="Login" className="hidden flex-1 lg:block" />
        <div className="flex h-full flex-1 flex-col items-start justify-start gap-3 py-5 lg:gap-4  lg:py-5">
          <p className="w-full text-h5 text-black dark:text-white lg:text-h4">
            Login to your account
          </p>
          <p className="w-full text-b3 text-black-l2 dark:text-white-d2 lg:text-b2">
            Welcome back! Please choose your method of login and enter details
          </p>
          <div className="flex w-full gap-1 rounded-sm bg-white-d2 p-1 dark:bg-black-l4">
            <LoginMethodSelectorButton
              action={setLoginMethod}
              loginMethod={loginMethod}
              preferredMethod="password"
              title="Email"
              subTitle="Using Email & Password"
            />
            <LoginMethodSelectorButton
              action={setLoginMethod}
              loginMethod={loginMethod}
              preferredMethod="phone"
              title="Phone"
              subTitle="Using OTP on phone"
            />
            <LoginMethodSelectorButton
              action={setLoginMethod}
              loginMethod={loginMethod}
              preferredMethod="token"
              title="Passwordless"
              subTitle="Using Token in Email"
            />
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
    'rounded-sm flex flex-col justify-start items-center flex-1 py-2 lg:py-3 bg-primary px-1'
  const inactiveButtonClass =
    'rounded-sm flex flex-col justify-start items-center flex-1 py-2 lg:py-3 hover:bg-primary-l1 px-1'

  const activeTitleClass = 'text-b3 lg:text-b2 text-white '
  const inactiveTitleClass = 'text-b3 lg:text-b2 text-black '
  const activeSubTitleClass =
    'text-b4 lg:text-b3 text-white-d1 dark:text-white-d1'
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

const labelClassName = 'text-b3 text-black-l1 dark:text-white-d1 lg:text-b2'
const inputClassName =
  ' border-2 border-black-l2 bg-white-d1 px-2 py-2  text-b2 text-black  focus:border-primary focus:outline-none dark:border-white-d2 dark:bg-black-l2 dark:text-white-d1 dark:focus:border-primary-l1  lg:px-4 lg:py-2 lg:text-b1'
const errorClassName = ''

const PasswordLoginForm = () => {
  return (
    <div className="flex w-full flex-col  justify-start gap-2 lg:gap-3">
      <p id="email-label" className={labelClassName}>
        {'Email'}
      </p>
      <input id="email-input" className={inputClassName}></input>
      <p id="email-error" className={errorClassName}></p>
      <p id="pwd-label" className={labelClassName}>
        {'Password'}
      </p>
      <input id="pwd-input" className={inputClassName}></input>
      <p id="pwd-error" className={errorClassName}></p>
      <PrimaryFilledButton action={() => {}} label="LOGIN" />
      <SmallHoverPrimaryTextButton
        action={() => navigate(routes.forgotPassword())}
        label={'Forgot Password?'}
      />
    </div>
  )
}

const PhoneLoginForm = () => {
  const [otpSent, setOTPSent] = useState(false)

  return (
    <div className="flex w-full flex-col  justify-start gap-2 lg:gap-3">
      <p id="phone-label" className={labelClassName}>
        {'Phone number'}
      </p>
      <input id="phone-input" className={inputClassName}></input>
      <p id="phone-error" className={errorClassName}></p>
      <PrimaryFilledButton
        action={() => {
          setOTPSent(true)
        }}
        label={otpSent ? 'RESEND OTP' : 'SEND OTP'}
      />
      <p id="otp-label" className={labelClassName}>
        {'Enter OTP'}
      </p>
      <input id="otp-input" className={inputClassName}></input>
      <p id="otp-error" className={errorClassName}></p>
      {otpSent ? (
        <PrimaryFilledButton action={() => {}} label="LOGIN" />
      ) : (
        <DisabledFilledButton action={() => {}} label="LOGIN" />
      )}
    </div>
  )
}

const TokenLoginForm = () => {
  const [tokenSent, setTokenSent] = useState(false)

  return (
    <div className="flex w-full flex-col  justify-start gap-2 lg:gap-3">
      <p id="email-label" className={labelClassName}>
        {'Email'}
      </p>
      <input id="email-input" className={inputClassName}></input>
      <p id="email-error" className={errorClassName}></p>
      <PrimaryFilledButton
        action={() => {
          setTokenSent(true)
        }}
        label={tokenSent ? 'RESEND TOKEN' : 'SEND TOKEN'}
      />
      <p id="token-label" className={labelClassName}>
        {'Token (received on email)'}
      </p>
      <input id="token-input" className={inputClassName}></input>
      <p id="token-error" className={errorClassName}></p>
      {tokenSent ? (
        <PrimaryFilledButton action={() => {}} label="LOGIN" />
      ) : (
        <DisabledFilledButton action={() => {}} label="LOGIN" />
      )}
    </div>
  )
}
