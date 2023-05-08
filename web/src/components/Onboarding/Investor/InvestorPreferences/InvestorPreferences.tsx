import { useState } from 'react'

import { ErrorSubTextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/const'
import { InvestorStepsInfoList } from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingConsts'

import StepFooter from '../../StepFooter'
import StepHeader from '../../StepHeader'

/*Info to be created and saved in User table:
  messageVisibility           VisibilityLevel   @default(PUBLIC)
  activityVisbility           VisibilityLevel   @default(PUBLIC)
  profileVisbility            VisibilityLevel   @default(CONNECTIONS)
  notificationLevel           NotificationLevel @default(HIGH)
  prefersTheme                UITheme           @default(SYSTEM)
*/

const InvestorPreferences = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = InvestorStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

  //States for step 1
  const [messageVisibility, setMessageVisibility] = useState<string>('')
  const [error1, setError1] = useState<string>('')
  //States for step 2
  const [activityVisbility, setActivityVisbility] = useState<string>('')
  const [error2, setError2] = useState<string>('')

  //States for step 3
  const [profileVisbility, setProfileVisbility] = useState<string>('')
  const [error3, setError3] = useState<string>('')

  //States for step 4
  const [notificationLevel, setNotificationLevel] = useState<string>('')
  const [error4, setError4] = useState<string>('')

  //States for step 5
  const [prefersTheme, setPrefersTheme] = useState<string>('')
  const [error5, setError5] = useState<string>('')

  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (messageVisibility == '') {
        setError1('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (activityVisbility == '') {
        setError2('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (profileVisbility == '') {
        setError3('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (notificationLevel == '') {
        setError4('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (prefersTheme == '') {
        setError5('Please select an option to save')
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  }

  //Clear errors of previous screen when skipping
  const clearError = () => {
    if (step == 1) {
      setError1('')
    } else if (step == 2) {
      setError2('')
    } else if (step == 3) {
      setError3('')
    } else if (step == 4) {
      setError4('')
    } else if (step == 5) {
      setError5('')
    }
  }

  //TODO: Type check, match skip data and save in DB
  const saveData = () => {}

  //Function to move ahead with save
  const next = () => {
    skipData.push(false)
    if (step == InvestorStepsInfoList[props.currentSection - 1].steps.length) {
      props.setCurrentSection(props.currentSection + 1)
      saveData()
    } else {
      setStep(step + 1)
    }
  }

  //Function to skip ahead
  const skip = () => {
    skipData.push(true)
    clearError()
    if (step == InvestorStepsInfoList[props.currentSection - 1].steps.length) {
      props.setCurrentSection(props.currentSection + 1)
      saveData()
    } else {
      setStep(step + 1)
    }
  }

  //Function to go back
  const back = () => {
    skipData.pop()
    setStep(step - 1)
  }

  return (
    <div className="flex w-full flex-grow flex-col gap-1 overflow-hidden lg:gap-2">
      <StepHeader currentStepInfo={currentStepInfo} currentStepNumber={step} />
      <div className="shrink-3 flex w-full flex-grow flex-col items-center justify-center overflow-scroll rounded-sm  bg-white-d2/20 p-2  dark:bg-black-l2/20">
        {step == 1 && (
          <PreferencesMessage
            messageVisibility={messageVisibility}
            setMessageVisibility={setMessageVisibility}
            error1={error1}
            setError1={setError1}
          />
        )}
        {step == 2 && (
          <PreferencesActivity
            activityVisbility={activityVisbility}
            setActivityVisbility={setActivityVisbility}
            error2={error2}
            setError2={setError2}
          />
        )}
        {step == 3 && (
          <PreferencesProfile
            profileVisbility={profileVisbility}
            setProfileVisbility={setProfileVisbility}
            error3={error3}
            setError3={setError3}
          />
        )}
        {step == 4 && (
          <PreferencesNotifications
            notificationLevel={notificationLevel}
            setNotificationLevel={setNotificationLevel}
            error4={error4}
            setError4={setError4}
          />
        )}
        {step == 5 && (
          <PreferencesTheme
            prefersTheme={prefersTheme}
            setPrefersTheme={setPrefersTheme}
            error5={error5}
            setError5={setError5}
          />
        )}
      </div>
      <StepFooter
        currentStepInfo={currentStepInfo}
        setStep={setStep}
        step={step}
        continueAction={() => {
          if (checkUIData()) {
            next()
          }
        }}
        skipAction={() => {
          skip()
        }}
        backAction={() => {
          back()
        }}
      />
    </div>
  )
}

export default InvestorPreferences

const Divider = () => {
  return <div className="h-2"></div>
}

//TODO: Update visbility options as per DB enum
const VisibilityOptions = ['PRIVATE', 'CONNECTIONS', 'FOLLOWERS', 'PUBLIC']
type PreferencesMessageProps = {
  messageVisibility: string
  setMessageVisibility: React.Dispatch<React.SetStateAction<string>>
  error1: string
  setError1: React.Dispatch<React.SetStateAction<string>>
}
const PreferencesMessage = (props: PreferencesMessageProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {VisibilityOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.messageVisibility
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setMessageVisibility(e)
              props.error1 != '' && props.setError1('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error1} />
    </>
  )
}

type PreferencesActivityProps = {
  activityVisbility: string
  setActivityVisbility: React.Dispatch<React.SetStateAction<string>>
  error2: string
  setError2: React.Dispatch<React.SetStateAction<string>>
}
const PreferencesActivity = (props: PreferencesActivityProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {VisibilityOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.activityVisbility
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setActivityVisbility(e)
              props.error2 != '' && props.setError2('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error2} />
    </>
  )
}

type PreferencesProfileProps = {
  profileVisbility: string
  setProfileVisbility: React.Dispatch<React.SetStateAction<string>>
  error3: string
  setError3: React.Dispatch<React.SetStateAction<string>>
}
const PreferencesProfile = (props: PreferencesProfileProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {VisibilityOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.profileVisbility
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setProfileVisbility(e)
              props.error3 != '' && props.setError3('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error3} />
    </>
  )
}

//TODO: Update notification options as per DB enum
const NotificationOptions = ['NONE', 'LOW', 'MEDIUM', 'HIGH']
type PreferencesNotificationsProps = {
  notificationLevel: string
  setNotificationLevel: React.Dispatch<React.SetStateAction<string>>
  error4: string
  setError4: React.Dispatch<React.SetStateAction<string>>
}
const PreferencesNotifications = (props: PreferencesNotificationsProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {NotificationOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.notificationLevel
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setNotificationLevel(e)
              props.error4 != '' && props.setError4('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error4} />
    </>
  )
}

//TODO: Update theme options as per DB enum
const ThemeOptions = ['SYSTEM', 'LIGHT', 'DARK']
type PreferencesThemeProps = {
  prefersTheme: string
  setPrefersTheme: React.Dispatch<React.SetStateAction<string>>
  error5: string
  setError5: React.Dispatch<React.SetStateAction<string>>
}
const PreferencesTheme = (props: PreferencesThemeProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {ThemeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.prefersTheme
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setPrefersTheme(e)
              props.error5 != '' && props.setError5('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error5} />
    </>
  )
}
