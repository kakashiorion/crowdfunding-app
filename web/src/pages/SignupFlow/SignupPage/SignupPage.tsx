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
} from 'src/components/Label/Label'

// type UserType = 'Investor' | 'Startup' |''

type SignupPageProps = {
  type?: string
}
const SignupPage = (props: SignupPageProps) => {
  const [selectedType, setSelectedType] = useState(props.type ?? '')
  return (
    <>
      <MetaTags
        title="Signup"
        description="Signup page for Dealbari platform"
      />
      <div className="my-4 flex h-full flex-col gap-2 overflow-hidden rounded-sm bg-white-d1/50 p-2 dark:bg-black-l2/50 lg:my-5 lg:flex-row lg:gap-4 lg:p-4">
        <UserSignupCard
          pref={'Investor'}
          selectedType={selectedType}
          action={() => {
            selectedType != 'Investor' && setSelectedType('Investor')
          }}
        />
        <UserSignupCard
          pref={'Startup'}
          selectedType={selectedType}
          action={() => {
            selectedType != 'Startup' && setSelectedType('Startup')
          }}
        />
      </div>
    </>
  )
}

export default SignupPage

type UserSignupCardProps = {
  pref: string
  selectedType: string
  action: () => void
}
const UserSignupCard = (props: UserSignupCardProps) => {
  const participle = props.pref == 'Investor' ? 'an' : 'a'

  const activeClassName =
    'p-4 bg-white-d2 shadow-md dark:bg-black-l1 flex h-full w-full flex-col items-center justify-center gap-2  '

  const inactiveClassName = `p-4 bg-white-d1 ${
    props.selectedType != '' ? 'opacity-60' : ''
  } shadow-md hover:shadow-lg hover:bg-primary-l2 dark:hover:bg-primary-d2 dark:bg-black-l1 flex lg:h-full w-full flex-col items-center justify-center gap-2`

  const subText =
    props.pref == 'Investor'
      ? 'I want to explore and invest in startups of India'
      : 'I want to raise funds and connect with investors of India'
  return (
    <button
      className={
        props.selectedType != props.pref ? inactiveClassName : activeClassName
      }
      onClick={props.action}
    >
      <p className="text-h6 text-black dark:text-white lg:text-h5">
        {props.pref == props.selectedType
          ? `Signing up as ${participle}`
          : `I am ${participle}`}
      </p>
      <p className="text-h3  text-primary-d1 dark:text-primary-l1 lg:text-h2">
        {props.pref}
      </p>
      {props.pref != props.selectedType && <SubTextLabel label={subText} />}
      {props.pref == props.selectedType && <SignupForm userType={props.pref} />}
    </button>
  )
}

type SignupFormProps = {
  userType: string
}
const SignupForm = (props: SignupFormProps) => {
  const [stage, setStage] = useState('email')
  const [emailError, setEmailError] = useState('')
  const [phoneError, setPhoneError] = useState('')
  const [pwdError, setPwdError] = useState('')
  const [codeError, setCodeError] = useState('')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [enteredPhone, setEnteredPhone] = useState('')
  const [enteredPwd, setEnteredPwd] = useState('')
  const [enteredConfirmPwd, setEnteredConfirmPwd] = useState('')
  const [enteredCode, setEnteredCode] = useState('')
  const [generatedToken, setGeneratedToken] = useState('')

  return (
    <div className="flex  w-full flex-col items-center justify-center gap-2 ">
      {stage == 'email' && (
        //Step 1: Provide Email and Phone number
        <>
          <SubTextLabel
            label={'Please provide some details required for signup.'}
          />
          <TextLabel label={'Email'} />
          <TextInput
            value={enteredEmail}
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEnteredEmail(e.target.value)
              emailError != '' && setEmailError('')
            }}
          />
          <ErrorSubTextLabel label={emailError} />
          <TextLabel label="Phone Number" />
          <TextInput
            value={enteredPhone}
            type="tel"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEnteredPhone(e.target.value)
              phoneError != '' && setPhoneError('')
            }}
          />
          <ErrorSubTextLabel label={phoneError} />
          <PrimaryFilledButton
            action={() => {
              if (enteredEmail.length == 0) {
                setEmailError(`Email is required for signup!`)
              } else if (enteredEmail == 'abcd') {
                //TODO: Check email pattern
                setEmailError('Invalid email')
              } else if (enteredPhone.length < 10) {
                setPhoneError('Phone number should be at least 10 digits')
              } else {
                //TODO: Check if email or phone does not exist in DB
                //checkDB()
                if (enteredEmail == 'pqrs') {
                  setEmailError('Email already exists')
                } else if (enteredPhone == '1111111111') {
                  setPhoneError('Phone already exists')
                } else {
                  //TODO: If success, Generate a token
                  const gToken = '123456'
                  //TODO: send token in Email for user to confirnm
                  // sendEmail(gToken)
                  setGeneratedToken(gToken)
                  setStage('confirm')
                }
              }
            }}
            label="CONTINUE"
          />
        </>
      )}

      {stage == 'confirm' && (
        //STEP 2: Confirm email with code
        <>
          <SubTextLabel
            label={
              'Check your email.. We have sent you a code for signup confirmation.'
            }
          />
          <TextLabel label="Enter Code" />
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
              if (enteredCode.length != 6) {
                setCodeError('Code must be 6 digits')
              } else if (enteredCode == generatedToken) {
                setStage('password')
              } else {
                setCodeError('Code does not match.. Please try again!')
              }
            }}
            label="CONFIRM"
          />
          <div className="h-2 lg:h-4"></div>
          <SubTextLabel label={`Not ${enteredEmail}?`} />
          <SmallHoverPrimaryTextButton
            action={() => {
              setStage('email')
            }}
            label={`Go back`}
          />
        </>
      )}

      {stage == 'password' && (
        //Step 3: Choose password
        <>
          <SubTextLabel
            label={
              'Great.. Finally, create a password for your account to complete signup.'
            }
          />
          <TextLabel label="Choose a password" />
          <TextInput
            value={enteredPwd}
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEnteredPwd(e.target.value)
              pwdError != '' && setPwdError('')
            }}
          />
          <TextLabel label="Enter password again to confirm" />
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
                //TODO: Passwords matched -> signup based on user type and go to onboarding page )
                //signup()
                if (props.userType == 'Investor') {
                  navigate(routes.investorOnboarding())
                } else {
                  navigate(routes.startupOnboarding())
                }
              }
            }}
            label="SIGNUP"
          />
        </>
      )}
    </div>
  )
}
