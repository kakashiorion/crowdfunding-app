import { useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { navigate, routes } from '@redwoodjs/router'
import { MetaTags, useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import {
  PrimaryFilledButton,
  SmallHoverPrimaryTextButton,
} from 'src/components/Button/Button'
import {
  ErrorSubTextLabel,
  PrimarySubHeadingLabel,
  SubTextLabel,
  SubTitleLabel,
  TextLabel,
  WarnSubTextLabel,
} from 'src/components/Label/Label'
import { sendSignupEmailJS } from 'src/lib/sendEmail'
import {
  CodeInputClassName,
  TextInputClassName,
} from 'src/pages/LoginFlow/loginConsts'

const SIGNUP_QUERY = gql`
  query CheckUser($email: String!) {
    user: userByEmail(email: $email) {
      id
      email
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
      <div className="my-4 flex h-full flex-col gap-3 overflow-hidden rounded bg-white-d1/50 p-3 dark:bg-black-l1/50 lg:my-6 lg:flex-row lg:gap-5 lg:p-5">
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
    'p-4 bg-white-d2 flex-grow shadow-md rounded dark:bg-black-l2 flex h-full w-full flex-col items-center justify-center gap-2'

  const inactiveClassName = `p-4 bg-white-d1 ${
    props.selectedType != '' ? 'opacity-50' : ' flex-grow'
  } shadow-md hover:shadow-lg rounded hover:bg-primary-l3 dark:hover:bg-primary-d3 dark:bg-black-l1 flex w-full flex-col items-center justify-center gap-2`

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
      <SubTitleLabel
        label={
          props.pref == props.selectedType
            ? `Signing up as ${participle}`
            : `I am ${participle}`
        }
      />
      <PrimarySubHeadingLabel label={props.pref} />
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

const Divider = () => {
  return <div className="h-2" />
}

type SignupFormProps = {
  userType: string
}
const SignupForm = (props: SignupFormProps) => {
  const [stage, setStage] = useState('email')
  const [enteredEmail, setEnteredEmail] = useState('')
  const [emailError, setEmailError] = useState('')
  const [enteredCode, setEnteredCode] = useState('')
  const [codeError, setCodeError] = useState('')
  const [generatedToken, setGeneratedToken] = useState('')
  const [enteredPwd, setEnteredPwd] = useState('')
  const [enteredConfirmPwd, setEnteredConfirmPwd] = useState('')
  const [pwdError, setPwdError] = useState('')

  const { signUp } = useAuth()
  const [checkDB] = useLazyQuery(SIGNUP_QUERY)
  const [createLead] = useMutation(LEAD_MUTATION)

  return (
    <div className="my-2 flex w-full flex-col items-center justify-center gap-2 text-center lg:my-4">
      {stage == 'email' && (
        //Step 1: Provide Email
        <>
          <SubTextLabel label={'Please provide your email ID for signup.'} />
          <Divider />
          <TextLabel label={'Email'} />
          <input
            className={TextInputClassName}
            value={enteredEmail}
            type="email"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEnteredEmail(e.target.value)
              emailError != '' && setEmailError('')
            }}
          />
          <ErrorSubTextLabel label={emailError} />
          <Divider />
          <PrimaryFilledButton
            action={() => {
              //Check email pattern on UI
              if (
                enteredEmail.length < 5 ||
                !enteredEmail.includes('@') ||
                !enteredEmail.includes('.')
              ) {
                setEmailError(`Proper email ID is required for signup`)
              } else {
                //Check if email already exists in DB
                checkDB({
                  variables: { email: enteredEmail },
                }).then(async (d) => {
                  if (d.data.user) {
                    setEmailError('Email is already registered!')
                  } else {
                    const gToken = Math.floor(100000 + Math.random() * 900000)
                    //Send token in Email for user to confirnm
                    sendSignupEmailJS(enteredEmail, gToken.toString())
                    setGeneratedToken(gToken.toString())
                    await createLead({
                      variables: {
                        input: {
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
          <Divider />
          <TextLabel label="Enter Code" />
          <input
            className={CodeInputClassName}
            value={enteredCode}
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEnteredCode(e.target.value)
              codeError != '' && setCodeError('')
            }}
          />
          <ErrorSubTextLabel label={codeError} />
          <Divider />
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
          <Divider />
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
          <Divider />
          <TextLabel label="Choose a password" />
          <input
            className={TextInputClassName}
            value={enteredPwd}
            type="password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
              setEnteredPwd(e.target.value)
              pwdError != '' && setPwdError('')
            }}
          />
          <Divider />
          <TextLabel label="Confirm password" />
          <input
            className={TextInputClassName}
            value={enteredConfirmPwd}
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
                //Passwords matched -> signup based on user type and go to onboarding page )
                await signUp({
                  username: enteredEmail,
                  password: enteredPwd,
                  type: props.userType,
                }).then((d) => {
                  if (d.error) {
                    setPwdError(d.error)
                  } else {
                    if (props.userType == 'INVESTOR') {
                      navigate(routes.investorOnboarding(), { replace: true })
                    } else if (props.userType == 'STARTUP') {
                      navigate(routes.startupOnboarding(), { replace: true })
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
