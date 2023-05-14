import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { OnboardingMainProps, getEnumValues } from 'src/lib/onboardingConsts'
import { InvestorStepsInfoList } from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingData'

import { InvestorStepFooter } from '../../StepFooter'
import { InvestorStepHeader } from '../../StepHeader'
import InvestorSingleChoiceOption from '../comps/InvestorSingleChoiceOption/InvestorSingleChoiceOption'

/*Info to be created and saved in User table:
  messageVisibility           VisibilityLevel   @default(PUBLIC)
  activityVisbility           VisibilityLevel   @default(PUBLIC)
  profileVisbility            VisibilityLevel   @default(CONNECTIONS)
  notificationLevel           NotificationLevel @default(HIGH)
  prefersTheme                UITheme           @default(SYSTEM)
*/

const GET_ENUM_QUERY = gql`
  query enumQueryPreferences {
    visibility: __type(name: "VisibilityLevel") {
      name
      enumValues {
        name
      }
    }
    notification: __type(name: "NotificationLevel") {
      name
      enumValues {
        name
      }
    }
    ui: __type(name: "UITheme") {
      name
      enumValues {
        name
      }
    }
  }
`

const INVESTOR_PREFERENCES_MUTATION = gql`
  mutation updateUser($id: Int!, $input: UpdateUserInput!) {
    updateUser(id: $id, input: $input) {
      id
    }
  }
`

const InvestorPreferences = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = InvestorStepsInfoList[props.currentSection - 1].steps

  const [skipData, setSkipData] = useState<boolean[]>([])

  const [visbilityOptions, setVisibilityOptions] = useState<string[]>([])
  const [notificationOptions, setNotificationOptions] = useState<string[]>([])
  const [uiOptions, setUIOptions] = useState<string[]>([])

  const { currentUser } = useAuth()
  const [getEnumData] = useLazyQuery(GET_ENUM_QUERY)
  const [updateUser] = useMutation(INVESTOR_PREFERENCES_MUTATION)

  useEffect(() => {
    const getData = async () => {
      await getEnumData().then((d) => {
        console.log(d)
        setVisibilityOptions(getEnumValues(d.data.visibility.enumValues))
        setNotificationOptions(getEnumValues(d.data.notification.enumValues))
        setUIOptions(getEnumValues(d.data.ui.enumValues))
      })
    }
    getData()
  }, [getEnumData])

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

  //Match skip data and save in DB
  const saveData = async (skippedLast: boolean) => {
    await updateUser({
      variables: {
        id: currentUser?.id,
        input: {
          messageVisibility: messageVisibility,
          activityVisbility: activityVisbility,
          profileVisbility: profileVisbility,
          notificationLevel: notificationLevel,
          prefersTheme: skippedLast ? null : prefersTheme,
          isOnboarded: true,
        },
      },
    })
  }

  //Function to move ahead with save
  const next = () => {
    setSkipData([...skipData, false])
    if (step == InvestorStepsInfoList[props.currentSection - 1].steps.length) {
      props.setCurrentSection(props.currentSection + 1)
      saveData(false)
    } else {
      setStep(step + 1)
    }
  }

  //Function to skip ahead
  const skip = () => {
    setSkipData([...skipData, true])
    clearError()
    if (step == InvestorStepsInfoList[props.currentSection - 1].steps.length) {
      props.setCurrentSection(props.currentSection + 1)
      saveData(true)
    } else {
      setStep(step + 1)
    }
  }

  //Function to go back
  const back = () => {
    setSkipData(skipData.slice(-1))
    setStep(step - 1)
  }

  return (
    <div className="flex w-full flex-grow flex-col gap-1 overflow-hidden lg:gap-2">
      <InvestorStepHeader
        currentStepInfo={currentStepInfo}
        currentStepNumber={step}
      />
      <div className="shrink-3 flex w-full flex-grow flex-col items-center justify-center overflow-scroll rounded-sm  bg-white-d2/20 p-2  dark:bg-black-l2/20">
        {step == 1 && (
          <InvestorSingleChoiceOption
            input={messageVisibility}
            setInput={setMessageVisibility}
            options={visbilityOptions}
            error={error1}
            setError={setError1}
          />
        )}
        {step == 2 && (
          <InvestorSingleChoiceOption
            input={activityVisbility}
            setInput={setActivityVisbility}
            options={visbilityOptions}
            error={error2}
            setError={setError2}
          />
        )}
        {step == 3 && (
          <InvestorSingleChoiceOption
            input={profileVisbility}
            setInput={setProfileVisbility}
            options={visbilityOptions}
            error={error3}
            setError={setError3}
          />
        )}
        {step == 4 && (
          <InvestorSingleChoiceOption
            input={notificationLevel}
            setInput={setNotificationLevel}
            options={notificationOptions}
            error={error4}
            setError={setError4}
          />
        )}
        {step == 5 && (
          <InvestorSingleChoiceOption
            input={prefersTheme}
            setInput={setPrefersTheme}
            options={uiOptions}
            error={error5}
            setError={setError5}
          />
        )}
      </div>
      <InvestorStepFooter
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
