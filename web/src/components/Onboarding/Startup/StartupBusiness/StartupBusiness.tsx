import { useState } from 'react'

import { ErrorSubTextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/onboardingConsts'
import { StartupStepsInfoList } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingData'

import { StartupStepFooter } from '../../StepFooter'
import { StartupStepHeader } from '../../StepHeader'

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

const StartupBusiness = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

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

  //TODO: Type check, match skip data and save in DB
  const saveData = () => {}

  //Function to move ahead with save
  const next = () => {
    skipData.push(false)
    if (step == StartupStepsInfoList[props.currentSection - 1].steps.length) {
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
    if (step == StartupStepsInfoList[props.currentSection - 1].steps.length) {
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
      <StartupStepHeader
        currentStepInfo={currentStepInfo}
        currentStepNumber={step}
      />
      <div className="shrink-3 flex w-full flex-grow flex-col items-center justify-center overflow-scroll rounded-sm  bg-white-d2/20 p-2  dark:bg-black-l2/20">
        {step == 1 && (
          <BusinessUsers
            numberUsers={numberUsers}
            setNumberUsers={setNumberUsers}
            error1={error1}
            setError1={setError1}
          />
        )}
        {step == 2 && (
          <BusinessCities
            numberCities={numberCities}
            setNumberCities={setNumberCities}
            error2={error2}
            setError2={setError2}
          />
        )}
        {step == 3 && (
          <BusinessDistribution
            distributionType={distributionType}
            setDistributionType={setDistributionType}
            error3={error3}
            setError3={setError3}
          />
        )}
        {step == 4 && (
          <BusinessPartners
            partners1={partners1}
            setPartners1={setPartners1}
            partners2={partners2}
            setPartners2={setPartners2}
            partners3={partners3}
            setPartners3={setPartners3}
            error4={error4}
            setError4={setError4}
          />
        )}
        {step == 5 && (
          <BusinessCustomers
            customers1={customers1}
            setCustomers1={setCustomers1}
            customers2={customers2}
            setCustomers2={setCustomers2}
            customers3={customers3}
            setCustomers3={setCustomers3}
            error5={error5}
            setError5={setError5}
          />
        )}
        {step == 6 && (
          <BusinessSuccess
            workedWell1={workedWell1}
            setWorkedWell1={setWorkedWell1}
            workedWell2={workedWell2}
            setWorkedWell2={setWorkedWell2}
            workedWell3={workedWell3}
            setWorkedWell3={setWorkedWell3}
            error6={error6}
            setError6={setError6}
          />
        )}
        {step == 7 && (
          <BusinessChallenges
            challenges1={challenges1}
            setChallenges1={setChallenges1}
            challenges2={challenges2}
            setChallenges2={setChallenges2}
            challenges3={challenges3}
            setChallenges3={setChallenges3}
            error7={error7}
            setError7={setError7}
          />
        )}
        {step == 8 && (
          <BusinessImprovements
            couldImprove1={couldImprove1}
            setCouldImprove1={setCouldImprove1}
            couldImprove2={couldImprove2}
            setCouldImprove2={setCouldImprove2}
            couldImprove3={couldImprove3}
            setCouldImprove3={setCouldImprove3}
            error8={error8}
            setError8={setError8}
          />
        )}
        {step == 9 && (
          <BusinessActivities
            currentActivities1={currentActivities1}
            setCurrentActivities1={setCurrentActivities1}
            currentActivities2={currentActivities2}
            setCurrentActivities2={setCurrentActivities2}
            currentActivities3={currentActivities3}
            setCurrentActivities3={setCurrentActivities3}
            error9={error9}
            setError9={setError9}
          />
        )}
        {step == 10 && (
          <BusinessOnline
            hasOnlineBusiness={hasOnlineBusiness}
            setHasOnlineBusiness={setHasOnlineBusiness}
            error10={error10}
            setError10={setError10}
          />
        )}
      </div>
      <StartupStepFooter
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
export default StartupBusiness

const Divider = () => {
  return <div className="h-2"></div>
}

//TODO: Update users options as per DB enum
const usersOptions = [
  'LESS_THAN_100',
  'BETWEEN_100_AND_1000',
  'BETWEEN_1000_AND_10000',
  'BETWEEN_10000_AND_1_LAC',
  'BETWEEN_1_LAC_AND_10_LACS',
  'BETWEEEN_10_LACS_AND_1_CRORE',
  'MORE_THAN_1_CRORE',
]
type BusinessUsersProps = {
  numberUsers: string
  setNumberUsers: React.Dispatch<React.SetStateAction<string>>
  error1: string
  setError1: React.Dispatch<React.SetStateAction<string>>
}
const BusinessUsers = (props: BusinessUsersProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {usersOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.numberUsers
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setNumberUsers(e)
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

//TODO: Update size options as per DB enum
const sizeOptions = [
  'NONE',
  'ONE_TO_THREE',
  'THREE_TO_TEN',
  'TEN_TO_TWENTY',
  'MORE_THAN_TWENTY',
]
type BusinessCitiesProps = {
  numberCities: string
  setNumberCities: React.Dispatch<React.SetStateAction<string>>
  error2: string
  setError2: React.Dispatch<React.SetStateAction<string>>
}
const BusinessCities = (props: BusinessCitiesProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {sizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.numberCities
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setNumberCities(e)
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

//TODO: Update distribution options as per DB enum
const distributionOptions = ['B2B', 'B2C', 'BOTH', 'OTHER']
type BusinessDistributionProps = {
  distributionType: string
  setDistributionType: React.Dispatch<React.SetStateAction<string>>
  error3: string
  setError3: React.Dispatch<React.SetStateAction<string>>
}
const BusinessDistribution = (props: BusinessDistributionProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {distributionOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.distributionType
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setDistributionType(e)
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

type BusinessPartnersProps = {
  partners1: string
  setPartners1: React.Dispatch<React.SetStateAction<string>>
  partners2: string
  setPartners2: React.Dispatch<React.SetStateAction<string>>
  partners3: string
  setPartners3: React.Dispatch<React.SetStateAction<string>>
  error4: string
  setError4: React.Dispatch<React.SetStateAction<string>>
}
const BusinessPartners = (props: BusinessPartnersProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.partners1}
        rows={2}
        placeholder="Partner 1"
        onChange={(e) => {
          props.setPartners1(e.target.value)
          props.error4 != ' ' && props.setError4(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.partners2}
        rows={2}
        placeholder="Partner 2"
        onChange={(e) => {
          props.setPartners2(e.target.value)
          props.error4 != ' ' && props.setError4(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.partners3}
        rows={2}
        placeholder="Partner 3"
        onChange={(e) => {
          props.setPartners3(e.target.value)
          props.error4 != ' ' && props.setError4(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error4} />
    </>
  )
}

type BusinessCustomersProps = {
  customers1: string
  setCustomers1: React.Dispatch<React.SetStateAction<string>>
  customers2: string
  setCustomers2: React.Dispatch<React.SetStateAction<string>>
  customers3: string
  setCustomers3: React.Dispatch<React.SetStateAction<string>>
  error5: string
  setError5: React.Dispatch<React.SetStateAction<string>>
}
const BusinessCustomers = (props: BusinessCustomersProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.customers1}
        rows={2}
        placeholder="Customer 1"
        onChange={(e) => {
          props.setCustomers1(e.target.value)
          props.error5 != ' ' && props.setError5(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.customers2}
        rows={2}
        placeholder="Customer 2"
        onChange={(e) => {
          props.setCustomers2(e.target.value)
          props.error5 != ' ' && props.setError5(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.customers3}
        rows={2}
        placeholder="Customer 3"
        onChange={(e) => {
          props.setCustomers3(e.target.value)
          props.error5 != ' ' && props.setError5(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error5} />
    </>
  )
}

type BusinessSuccessProps = {
  workedWell1: string
  setWorkedWell1: React.Dispatch<React.SetStateAction<string>>
  workedWell2: string
  setWorkedWell2: React.Dispatch<React.SetStateAction<string>>
  workedWell3: string
  setWorkedWell3: React.Dispatch<React.SetStateAction<string>>
  error6: string
  setError6: React.Dispatch<React.SetStateAction<string>>
}
const BusinessSuccess = (props: BusinessSuccessProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.workedWell1}
        rows={2}
        placeholder="Success 1"
        onChange={(e) => {
          props.setWorkedWell1(e.target.value)
          props.error6 != ' ' && props.setError6(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.workedWell2}
        rows={2}
        placeholder="Success 2"
        onChange={(e) => {
          props.setWorkedWell2(e.target.value)
          props.error6 != ' ' && props.setError6(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.workedWell3}
        rows={2}
        placeholder="Success 3"
        onChange={(e) => {
          props.setWorkedWell3(e.target.value)
          props.error6 != ' ' && props.setError6(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error6} />
    </>
  )
}

type BusinessChallengesProps = {
  challenges1: string
  setChallenges1: React.Dispatch<React.SetStateAction<string>>
  challenges2: string
  setChallenges2: React.Dispatch<React.SetStateAction<string>>
  challenges3: string
  setChallenges3: React.Dispatch<React.SetStateAction<string>>
  error7: string
  setError7: React.Dispatch<React.SetStateAction<string>>
}
const BusinessChallenges = (props: BusinessChallengesProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.challenges1}
        rows={2}
        placeholder="Challenge 1"
        onChange={(e) => {
          props.setChallenges1(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.challenges2}
        rows={2}
        placeholder="Challenge 2"
        onChange={(e) => {
          props.setChallenges2(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.challenges3}
        rows={2}
        placeholder="Challenge 3"
        onChange={(e) => {
          props.setChallenges3(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error7} />
    </>
  )
}

type BusinessImprovementsProps = {
  couldImprove1: string
  setCouldImprove1: React.Dispatch<React.SetStateAction<string>>
  couldImprove2: string
  setCouldImprove2: React.Dispatch<React.SetStateAction<string>>
  couldImprove3: string
  setCouldImprove3: React.Dispatch<React.SetStateAction<string>>
  error8: string
  setError8: React.Dispatch<React.SetStateAction<string>>
}
const BusinessImprovements = (props: BusinessImprovementsProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.couldImprove1}
        rows={2}
        placeholder="Improvement 1"
        onChange={(e) => {
          props.setCouldImprove1(e.target.value)
          props.error8 != ' ' && props.setError8(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.couldImprove2}
        rows={2}
        placeholder="Improvement 2"
        onChange={(e) => {
          props.setCouldImprove2(e.target.value)
          props.error8 != ' ' && props.setError8(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.couldImprove3}
        rows={2}
        placeholder="Improvement 3"
        onChange={(e) => {
          props.setCouldImprove3(e.target.value)
          props.error8 != ' ' && props.setError8(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error8} />
    </>
  )
}

type BusinessActivitiesProps = {
  currentActivities1: string
  setCurrentActivities1: React.Dispatch<React.SetStateAction<string>>
  currentActivities2: string
  setCurrentActivities2: React.Dispatch<React.SetStateAction<string>>
  currentActivities3: string
  setCurrentActivities3: React.Dispatch<React.SetStateAction<string>>
  error9: string
  setError9: React.Dispatch<React.SetStateAction<string>>
}
const BusinessActivities = (props: BusinessActivitiesProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.currentActivities1}
        rows={2}
        placeholder="Activity 1"
        onChange={(e) => {
          props.setCurrentActivities1(e.target.value)
          props.error9 != ' ' && props.setError9(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.currentActivities2}
        rows={2}
        placeholder="Activity 2"
        onChange={(e) => {
          props.setCurrentActivities2(e.target.value)
          props.error9 != ' ' && props.setError9(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.currentActivities3}
        rows={2}
        placeholder="Activity 3"
        onChange={(e) => {
          props.setCurrentActivities3(e.target.value)
          props.error9 != ' ' && props.setError9(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error9} />
    </>
  )
}

//TODO: Update online business options as per DB enum
const onlineOptions = ['YES', 'SETTING_UP', 'PLANNED', 'NO']
type BusinessOnlineProps = {
  hasOnlineBusiness: string
  setHasOnlineBusiness: React.Dispatch<React.SetStateAction<string>>
  error10: string
  setError10: React.Dispatch<React.SetStateAction<string>>
}
const BusinessOnline = (props: BusinessOnlineProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {onlineOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.hasOnlineBusiness
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setHasOnlineBusiness(e)
              props.error10 != '' && props.setError10('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error10} />
    </>
  )
}
