import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import StartupSingleChoiceOption from 'src/components/Onboarding/Startup/comps/StartupSingleChoiceOption/StartupSingleChoiceOption'
import StartupTripleTextArea from 'src/components/Onboarding/Startup/comps/StartupTripleTextArea/StartupTripleTextArea'
import { StartupStepFooter } from 'src/components/Onboarding/StepFooter'
import { StartupStepHeader } from 'src/components/Onboarding/StepHeader'
import {
  OnboardingMainProps,
  back,
  getEnumValues,
  next,
  onboardingFrameClassName,
  onboardingSubFrameClassName,
  skip,
} from 'src/lib/onboardingConsts'
import { StartupStepsInfoList } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingData'

/*Info to be created and saved in StartupBusiness table:
  numberUsers         UserRange?
  numberCities        SizeRange?
  distributionType    DistributionType?
  partners            String[]
  customers           String[]
  workedWell          String[]
  challenges          String[]
  couldImprove        String[]
  currentActivities   String[]
  hasOnlineBusiness   OnlineBusiness?
*/

const GET_ENUM_QUERY = gql`
  query enumQueryBusiness {
    size: __type(name: "SizeRange") {
      name
      enumValues {
        name
      }
    }
    user: __type(name: "UserRange") {
      name
      enumValues {
        name
      }
    }
    online: __type(name: "OnlineBusiness") {
      name
      enumValues {
        name
      }
    }
    distribution: __type(name: "DistributionType") {
      name
      enumValues {
        name
      }
    }
  }
`

const STARTUP_BUSINESS_MUTATION = gql`
  mutation createStartupBusiness($input: CreateStartupBusinessInput!) {
    createStartupBusiness(input: $input) {
      id
    }
  }
`

const StartupBusiness = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const [skipData, setSkipData] = useState<boolean[]>([])

  const [sizeOptions, setSizeOptions] = useState<string[]>([])
  const [userOptions, setUserOptions] = useState<string[]>([])
  const [onlineOptions, setOnlineOptions] = useState<string[]>([])
  const [distributionOptions, setDistributionOptions] = useState<string[]>([])

  const { currentUser } = useAuth()
  const [getEnumData] = useLazyQuery(GET_ENUM_QUERY)
  const [createStartupBusiness] = useMutation(STARTUP_BUSINESS_MUTATION)

  useEffect(() => {
    const getData = async () => {
      await getEnumData().then((d) => {
        setSizeOptions(getEnumValues(d.data.size.enumValues))
        setUserOptions(getEnumValues(d.data.user.enumValues))
        setOnlineOptions(getEnumValues(d.data.online.enumValues))
        setDistributionOptions(getEnumValues(d.data.distribution.enumValues))
      })
    }
    getData()
  }, [getEnumData])

  //States for step 1
  const [numberUsers, setNumberUsers] = useState<string>('')
  const [error1, setError1] = useState<string>(' ')

  //States for step 2
  const [numberCities, setNumberCities] = useState<string>('')
  const [error2, setError2] = useState<string>(' ')

  //States for step 3
  const [distributionType, setDistributionType] = useState<string>('')
  const [error3, setError3] = useState<string>(' ')

  //States for step 4
  const [partners1, setPartners1] = useState<string>('')
  const [partners2, setPartners2] = useState<string>('')
  const [partners3, setPartners3] = useState<string>('')
  const [error4, setError4] = useState<string>(' ')

  //States for step 5
  const [customers1, setCustomers1] = useState<string>('')
  const [customers2, setCustomers2] = useState<string>('')
  const [customers3, setCustomers3] = useState<string>('')
  const [error5, setError5] = useState<string>(' ')

  //States for step 6
  const [workedWell1, setWorkedWell1] = useState<string>('')
  const [workedWell2, setWorkedWell2] = useState<string>('')
  const [workedWell3, setWorkedWell3] = useState<string>('')
  const [error6, setError6] = useState<string>(' ')

  //States for step 7
  const [challenges1, setChallenges1] = useState<string>('')
  const [challenges2, setChallenges2] = useState<string>('')
  const [challenges3, setChallenges3] = useState<string>('')
  const [error7, setError7] = useState<string>(' ')

  //States for step 8
  const [couldImprove1, setCouldImprove1] = useState<string>('')
  const [couldImprove2, setCouldImprove2] = useState<string>('')
  const [couldImprove3, setCouldImprove3] = useState<string>('')
  const [error8, setError8] = useState<string>(' ')

  //States for step 9
  const [currentActivities1, setCurrentActivities1] = useState<string>('')
  const [currentActivities2, setCurrentActivities2] = useState<string>('')
  const [currentActivities3, setCurrentActivities3] = useState<string>('')
  const [error9, setError9] = useState<string>(' ')

  //States for step 10
  const [hasOnlineBusiness, setHasOnlineBusiness] = useState<string>('')
  const [error10, setError10] = useState<string>(' ')

  //Always check UI data before proceeding to next step
  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (numberUsers == '') {
        setError1('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (numberCities == '') {
        setError2('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (distributionType == '') {
        setError3('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (
        partners1.length < 5 &&
        partners2.length < 5 &&
        partners3.length < 5
      ) {
        setError4('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (
        customers1.length < 5 &&
        customers2.length < 5 &&
        customers3.length < 5
      ) {
        setError5('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 6
    else if (step == 6) {
      if (
        workedWell1.length < 5 &&
        workedWell2.length < 5 &&
        workedWell3.length < 5
      ) {
        setError6('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (
        challenges1.length < 5 &&
        challenges2.length < 5 &&
        challenges3.length < 5
      ) {
        setError7('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 8
    else if (step == 8) {
      if (
        couldImprove1.length < 5 &&
        couldImprove2.length < 5 &&
        couldImprove3.length < 5
      ) {
        setError8('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 9
    else if (step == 9) {
      if (
        currentActivities1.length < 5 &&
        currentActivities2.length < 5 &&
        currentActivities3.length < 5
      ) {
        setError9('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 10
    else if (step == 10) {
      if (hasOnlineBusiness == '') {
        setError10('Please select an option to save')
        return false
      } else {
        return true
      }
    } else {
      return false
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
    } else if (step == 6) {
      setError6('')
    } else if (step == 7) {
      setError7('')
    } else if (step == 8) {
      setError8('')
    } else if (step == 9) {
      setError9('')
    } else if (step == 10) {
      setError10('')
    }
  }

  //Match skip data and save in DB
  const saveData = async (skippedLast: boolean) => {
    await createStartupBusiness({
      variables: {
        input: {
          id: currentUser?.id,
          numberUsers: numberUsers,
          numberCities: numberCities,
          distributionType: distributionType,
          partners: skipData[3] ? [] : [partners1, partners2, partners3],
          customers: skipData[4] ? [] : [customers1, customers2, customers3],
          workedWell: skipData[5]
            ? []
            : [workedWell1, workedWell2, workedWell3],
          challenges: skipData[6]
            ? []
            : [challenges1, challenges2, challenges3],
          couldImprove: skipData[7]
            ? []
            : [couldImprove1, couldImprove2, couldImprove3],
          currentActivities: skipData[9]
            ? []
            : [currentActivities1, currentActivities2, currentActivities3],
          hasOnlineBusiness: skippedLast ? null : hasOnlineBusiness,
        },
      },
    })
  }

  return (
    <div className={onboardingFrameClassName}>
      <StartupStepHeader
        currentStepInfo={currentStepInfo}
        currentStepNumber={step}
      />
      <div className={onboardingSubFrameClassName}>
        {step == 1 && (
          <StartupSingleChoiceOption
            input={numberUsers}
            setInput={setNumberUsers}
            options={userOptions}
            error={error1}
            setError={setError1}
          />
        )}
        {step == 2 && (
          <StartupSingleChoiceOption
            input={numberCities}
            setInput={setNumberCities}
            options={sizeOptions}
            error={error2}
            setError={setError2}
          />
        )}
        {step == 3 && (
          <StartupSingleChoiceOption
            input={distributionType}
            setInput={setDistributionType}
            options={distributionOptions}
            error={error3}
            setError={setError3}
          />
        )}
        {step == 4 && (
          <StartupTripleTextArea
            input1={partners1}
            setInput1={setPartners1}
            placeholder1="Partner 1"
            input2={partners2}
            setInput2={setPartners2}
            placeholder2="Partner 2"
            input3={partners3}
            setInput3={setPartners3}
            placeholder3="Partner 3"
            error={error4}
            setError={setError4}
          />
        )}
        {step == 5 && (
          <StartupTripleTextArea
            input1={customers1}
            setInput1={setCustomers1}
            placeholder1="Customer 1"
            input2={customers2}
            setInput2={setCustomers2}
            placeholder2="Customer 2"
            input3={customers3}
            setInput3={setCustomers3}
            placeholder3="Customer 3"
            error={error5}
            setError={setError5}
          />
        )}
        {step == 6 && (
          <StartupTripleTextArea
            input1={workedWell1}
            setInput1={setWorkedWell1}
            placeholder1="Success 1"
            input2={workedWell2}
            setInput2={setWorkedWell2}
            placeholder2="Success 2"
            input3={workedWell3}
            setInput3={setWorkedWell3}
            placeholder3="Success 3"
            error={error6}
            setError={setError6}
          />
        )}
        {step == 7 && (
          <StartupTripleTextArea
            input1={challenges1}
            setInput1={setChallenges1}
            placeholder1="Challenge 1"
            input2={challenges2}
            setInput2={setChallenges2}
            placeholder2="Challenge 2"
            input3={challenges3}
            setInput3={setChallenges3}
            placeholder3="Challenge 3"
            error={error7}
            setError={setError7}
          />
        )}
        {step == 8 && (
          <StartupTripleTextArea
            input1={couldImprove1}
            setInput1={setCouldImprove1}
            placeholder1="Improvements 1"
            input2={couldImprove2}
            setInput2={setCouldImprove2}
            placeholder2="Improvements 2"
            input3={couldImprove3}
            setInput3={setCouldImprove3}
            placeholder3="Improvements 3"
            error={error8}
            setError={setError8}
          />
        )}
        {step == 9 && (
          <StartupTripleTextArea
            input1={currentActivities1}
            setInput1={setCurrentActivities1}
            placeholder1="Activity 1"
            input2={currentActivities2}
            setInput2={setCurrentActivities2}
            placeholder2="Activity 2"
            input3={currentActivities3}
            setInput3={setCurrentActivities3}
            placeholder3="Activity 3"
            error={error9}
            setError={setError9}
          />
        )}
        {step == 10 && (
          <StartupSingleChoiceOption
            input={hasOnlineBusiness}
            setInput={setHasOnlineBusiness}
            options={onlineOptions}
            error={error10}
            setError={setError10}
          />
        )}
      </div>
      <StartupStepFooter
        currentStepInfo={currentStepInfo}
        setStep={setStep}
        step={step}
        continueAction={() => {
          if (checkUIData()) {
            next({
              saveData: saveData,
              currentSection: props.currentSection,
              setCurrentSection: props.setCurrentSection,
              step: step,
              setStep: setStep,
              skipData: skipData,
              setSkipData: setSkipData,
            })
          }
        }}
        skipAction={() => {
          skip({
            clearError: clearError,
            saveData: saveData,
            currentSection: props.currentSection,
            setCurrentSection: props.setCurrentSection,
            step: step,
            setStep: setStep,
            skipData: skipData,
            setSkipData: setSkipData,
          })
        }}
        backAction={() => {
          back({
            step: step,
            setStep: setStep,
            skipData: skipData,
            setSkipData: setSkipData,
          })
        }}
      />
    </div>
  )
}
export default StartupBusiness
