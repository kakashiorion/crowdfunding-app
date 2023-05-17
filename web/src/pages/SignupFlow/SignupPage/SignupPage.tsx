import { useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  PrimaryFilledButton,
  SmallHoverPrimaryTextButton,
} from 'src/components/Button/Button'
import { TextInput } from 'src/components/Input/Input'
import {
  ErrorSubTextLabel,
  SubTextLabel,
  TextLabel,
  WarnSubTextLabel,
} from 'src/components/Label/Label'
import { sendSignupEmailJS } from 'src/lib/sendEmail'

const SIGNUP_QUERY = gql`
  query CheckUser($email: String!, $mobile: String!) {
    user1: userByEmail(email: $email) {
      id
      email
      mobile
    }
    user2: userByMobile(mobile: $mobile) {
      id
      email
      mobile
    }
  }
`

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
      <div className="my-4 flex h-full flex-col gap-2 overflow-hidden rounded bg-white-d1/50 p-2 dark:bg-black-l2/50 lg:my-5 lg:flex-row lg:gap-3 lg:p-3">
        <UserSignupCard
          pref={'INVESTOR'}
          selectedType={selectedType}
          action={() => {
            selectedType != 'INVESTOR' && setSelectedType('INVESTOR')
          }}
        />
        <UserSignupCard
          pref={'STARTUP'}
          selectedType={selectedType}
          action={() => {
            selectedType != 'STARTUP' && setSelectedType('STARTUP')
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
  const participle = props.pref == 'INVESTOR' ? 'an' : 'a'

  const activeClassName =
    'p-4 bg-white-d2 flex-grow shadow-md rounded dark:bg-black/50 flex h-full w-full flex-col items-center justify-center gap-2  '

  const inactiveClassName = `p-4 bg-white-d1 ${
    props.selectedType != '' ? 'opacity-40' : ' flex-grow'
  } shadow-md hover:shadow-lg rounded hover:bg-primary-l2 dark:hover:bg-primary-d2 dark:bg-black-l3/70 flex w-full flex-col items-center justify-center gap-2`

  const subText =
    props.pref == 'INVESTOR'
      ? 'I want to explore and invest in startups of India'
      : 'I want to raise funds and connect with investors of India'
  return (
    <div
      className={
        props.selectedType != props.pref ? inactiveClassName : activeClassName
      }
      onClick={props.action}
      role="button"
      tabIndex={0}
      aria-hidden="true"
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
    </div>
  )
}

const LEAD_MUTATION = gql`
  mutation leadMutation($input: CreateLeadInput!) {
    createLead(input: $input) {
      id
    }
  }
`

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

  const { signUp } = useAuth()
  const [checkDB] = useLazyQuery(SIGNUP_QUERY)
  const [createLead] = useMutation(LEAD_MUTATION)

  return (
    <div className="my-2 flex w-full flex-col items-center justify-center gap-2 lg:my-4 ">
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
              if (enteredEmail.length < 5) {
                setEmailError(`Email is required for signup!`)
              } else if (
                !enteredEmail.includes('@') ||
                !enteredEmail.includes('.')
              ) {
                //Check email pattern
                setEmailError('Invalid email')
              } else if (enteredPhone.length < 10) {
                setPhoneError('Phone number should be at least 10 digits')
              } else {
                //Check if email or phone already exists in DB
                checkDB({
                  variables: { email: enteredEmail, mobile: enteredPhone },
                }).then(async (d) => {
                  if (d.data.user1) {
                    setEmailError('Email is already registered!')
                  } else if (d.data.user2) {
                    setPhoneError('Phone is already registered!')
                  } else {
                    const gToken = Math.floor(100000 + Math.random() * 900000)
                    //Send token in Email for user to confirnm
                    sendSignupEmailJS(enteredEmail, gToken.toString())
                    setGeneratedToken(gToken.toString())
                    await createLead({
                      variables: {
                        input: {
                          phone: enteredPhone,
                          email: enteredEmail,
                          gToken: gToken.toString(),
                          type: props.userType,
                        },
                      },
                    })
                    setStage('confirm')
                  }
                })
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
          <div className="h-4 lg:h-6"></div>
          <WarnSubTextLabel label={`Not ${enteredEmail}?`} />
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
            label={`Great.. Let's create a password for your account to complete signup.`}
          />
          <div className="h-4 lg:h-6"></div>
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
            action={async () => {
              if (enteredPwd.length < 8 || enteredConfirmPwd.length < 8) {
                setPwdError('Atleast 8 characters required')
              } else if (enteredPwd != enteredConfirmPwd) {
                setPwdError('Passwords do not match')
              } else {
                //Passwords matched -> signup based on user type and go to onboarding page )
                await signUp({
                  username: enteredEmail,
                  password: enteredPwd,
                  mobile: enteredPhone,
                  type: props.userType,
                }).then((d) => {
                  if (d.error) {
                    setPwdError(d.error)
                  } else {
                    if (props.userType == 'INVESTOR') {
                      navigate(routes.investorOnboarding())
                    } else {
                      navigate(routes.startupOnboarding())
                    }
                  }
                })
              }
            }}
            label="SIGNUP"
          />
        </>
      )}
    </div>
  )
}
