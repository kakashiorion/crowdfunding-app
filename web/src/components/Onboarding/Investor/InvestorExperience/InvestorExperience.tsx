import { useState } from 'react'

import { ErrorSubTextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/const'
import { InvestorStepsInfoList } from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingConsts'

import StepFooter from '../../StepFooter'
import StepHeader from '../../StepHeader'

/*Info to be created and saved in InvestorExperience table:
1  workedInStartups   SizeRange
2  foundedStartups    SizeRange
3  investedStartups   SizeRange
4  investedStages     FundingStage?
5  investedAmountLacs AmountRange?
6  successfulExits    SizeRange?
7  returnsReceived    ReturnsRange?
8  investedSectors    Sector[]
9  investorLevel      (NOVICE,INTERMEDIATE,EXPERIENCED,PROFESSIONAL,SEASONED)
*/

const InvestorExperience = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = InvestorStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

  //States for step 1
  const [workedInStartup, setWorkedInStartup] = useState<string>('')
  const [error1, setError1] = useState<string>('')

  //States for step 2
  const [foundedStartup, setFoundedStartup] = useState<string>('')
  const [error2, setError2] = useState<string>('')

  //States for step 3
  const [investedStartups, setInvestedStartups] = useState<string>('')
  const [error3, setError3] = useState<string>('')

  //States for step 4
  const [investedStages, setInvestedStages] = useState<string[]>([])
  const [error4, setError4] = useState<string>('')

  //States for step 5
  const [investedAmountLacs, setInvestedAmountLacs] = useState<string>('')
  const [error5, setError5] = useState<string>('')

  //States for step 6
  const [successfulExits, setSuccessfulExits] = useState<string>('')
  const [error6, setError6] = useState<string>('')

  //States for step 7
  const [returnsReceived, setReturnsReceived] = useState<string[]>([])
  const [error7, setError7] = useState<string>('')

  //States for step 8
  const [investedSectors, setInvestedSectors] = useState<string[]>([])
  const [error8, setError8] = useState<string>('')

  //States for step 9
  const [investorLevel, setInvestorLevel] = useState<string>('')
  const [error9, setError9] = useState<string>('')

  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (workedInStartup == '') {
        setError1('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (foundedStartup == '') {
        setError2('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (investedStartups == '') {
        setError3('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (investedStages.length == 0) {
        setError4('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (investedAmountLacs == '') {
        setError5('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 6
    else if (step == 6) {
      if (successfulExits == '') {
        setError6('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (returnsReceived.length == 0) {
        setError7('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 8
    else if (step == 8) {
      if (investedSectors.length == 0) {
        setError8('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 9
    else if (step == 9) {
      if (investorLevel == '') {
        setError9('Please select an option to save')
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
    } else if (step == 6) {
      setError6('')
    } else if (step == 7) {
      setError7('')
    } else if (step == 8) {
      setError8('')
    } else if (step == 9) {
      setError9('')
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
          <ExperienceExposure
            workedInStartup={workedInStartup}
            setWorkedInStartup={setWorkedInStartup}
            error1={error1}
            setError1={setError1}
          />
        )}
        {step == 2 && (
          <ExperienceFounder
            foundedStartup={foundedStartup}
            setFoundedStartup={setFoundedStartup}
            error2={error2}
            setError2={setError2}
          />
        )}
        {step == 3 && (
          <ExperienceInvestments
            investedStartups={investedStartups}
            setInvestedStartups={setInvestedStartups}
            error3={error3}
            setError3={setError3}
          />
        )}
        {step == 4 && (
          <ExperienceStage
            stages={investedStages}
            setStages={setInvestedStages}
            error4={error4}
            setError4={setError4}
          />
        )}
        {step == 5 && (
          <ExperienceAmount
            amount={investedAmountLacs}
            setAmount={setInvestedAmountLacs}
            error5={error5}
            setError5={setError5}
          />
        )}
        {step == 6 && (
          <ExperienceExits
            exits={successfulExits}
            setExits={setSuccessfulExits}
            error6={error6}
            setError6={setError6}
          />
        )}
        {step == 7 && (
          <ExperienceReturns
            returns={returnsReceived}
            setReturns={setReturnsReceived}
            error7={error7}
            setError7={setError7}
          />
        )}
        {step == 8 && (
          <ExperienceSectors
            sectors={investedSectors}
            setSectors={setInvestedSectors}
            error8={error8}
            setError8={setError8}
          />
        )}
        {step == 9 && (
          <ExperienceLevel
            level={investorLevel}
            setLevel={setInvestorLevel}
            error9={error9}
            setError9={setError9}
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
export default InvestorExperience

const Divider = () => {
  return <div className="h-2"></div>
}

//TODO: Update size options as per DB enum
const sizeOptions = [
  'NONE',
  'ONE_TO_THREE',
  'THREE_TO_TEN',
  'TEN_TO_TWENTY',
  'MORE_THAN_TWENTY',
]
type ExperienceExposureProps = {
  workedInStartup: string
  setWorkedInStartup: React.Dispatch<React.SetStateAction<string>>
  error1: string
  setError1: React.Dispatch<React.SetStateAction<string>>
}
const ExperienceExposure = (props: ExperienceExposureProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {sizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.workedInStartup
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setWorkedInStartup(e)
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

type ExperienceFounderProps = {
  foundedStartup: string
  setFoundedStartup: React.Dispatch<React.SetStateAction<string>>
  error2: string
  setError2: React.Dispatch<React.SetStateAction<string>>
}
const ExperienceFounder = (props: ExperienceFounderProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {sizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.foundedStartup
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setFoundedStartup(e)
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

type ExperienceInvestmentsProps = {
  investedStartups: string
  setInvestedStartups: React.Dispatch<React.SetStateAction<string>>
  error3: string
  setError3: React.Dispatch<React.SetStateAction<string>>
}
const ExperienceInvestments = (props: ExperienceInvestmentsProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {sizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.investedStartups
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setInvestedStartups(e)
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

//TODO: Update stage options as per DB enum
const stageOptions = [
  'SEED',
  'SERIES_A',
  'SERIES_B',
  'SERIES_C',
  'SERIES_D',
  'SERIES_E',
  'SERIES_F',
  'LATER',
]
type ExperienceStageProps = {
  stages: string[]
  setStages: React.Dispatch<React.SetStateAction<string[]>>
  error4: string
  setError4: React.Dispatch<React.SetStateAction<string>>
}
const ExperienceStage = (props: ExperienceStageProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {stageOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.stages.includes(e)
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              if (props.stages.includes(e)) {
                props.setStages(props.stages.filter((s) => s != e))
              } else {
                props.setStages([...props.stages, e])
              }
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

//TODO: Update amount options as per DB enum
const amountOptions = [
  'LESS_THAN_ONE_LAC',
  'ONE_TO_FIVE_LACS',
  'FIVE_TO_TWENTY_LACS',
  'TWENTY_LACS_TO_ONE_CRORE',
  'MORE_THAN_1_CRORE',
]
type ExperienceAmountProps = {
  amount: string
  setAmount: React.Dispatch<React.SetStateAction<string>>
  error5: string
  setError5: React.Dispatch<React.SetStateAction<string>>
}
const ExperienceAmount = (props: ExperienceAmountProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {amountOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.amount
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setAmount(e)
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

type ExperienceExitsProps = {
  exits: string
  setExits: React.Dispatch<React.SetStateAction<string>>
  error6: string
  setError6: React.Dispatch<React.SetStateAction<string>>
}
const ExperienceExits = (props: ExperienceExitsProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {sizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.exits
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setExits(e)
              props.error6 != '' && props.setError6('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error6} />
    </>
  )
}

//TODO: Update returns options as per DB enum
const returnsOptions = [
  'BREAKEVEN',
  'TWO',
  'THREE',
  'FIVE',
  'TEN',
  'TWENTY',
  'FIFTY',
  'HUNDRED',
]
type ExperienceReturnsProps = {
  returns: string[]
  setReturns: React.Dispatch<React.SetStateAction<string[]>>
  error7: string
  setError7: React.Dispatch<React.SetStateAction<string>>
}
const ExperienceReturns = (props: ExperienceReturnsProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {returnsOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.returns.includes(e)
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              if (props.returns.includes(e)) {
                props.setReturns(props.returns.filter((s) => s != e))
              } else {
                props.setReturns([...props.returns, e])
              }
              props.error7 != '' && props.setError7('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error7} />
    </>
  )
}

//TODO: Update sector options as per DB enum
const sectorOptions = [
  'EDUCATION',
  'HEALTHCARE',
  'BANKING_AND_FINANCE',
  'ENERGY',
  'CONSUMER_GOODS',
  'RETAIL_ECOMMERCE',
  'REAL_ESTATE',
  'FOOD_AND_BEVERAGE',
  'IT',
  'AGRICULTURE',
  'MANUFACTURING',
  'ENTERTAINMENT',
  'TELECOM',
  'TRANSPORTATION',
]
type ExperienceSectorsProps = {
  sectors: string[]
  setSectors: React.Dispatch<React.SetStateAction<string[]>>
  error8: string
  setError8: React.Dispatch<React.SetStateAction<string>>
}
const ExperienceSectors = (props: ExperienceSectorsProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {sectorOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.sectors.includes(e)
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              if (props.sectors.includes(e)) {
                props.setSectors(props.sectors.filter((s) => s != e))
              } else {
                props.setSectors([...props.sectors, e])
              }
              props.error8 != '' && props.setError8('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error8} />
    </>
  )
}

//TODO: Update level options as per DB enum
const levelOptions = [
  'NOVICE',
  'INTERMEDIATE',
  'EXPERIENCED',
  'PROFESSIONAL',
  'SEASONED',
]
type ExperienceLevelProps = {
  level: string
  setLevel: React.Dispatch<React.SetStateAction<string>>
  error9: string
  setError9: React.Dispatch<React.SetStateAction<string>>
}
const ExperienceLevel = (props: ExperienceLevelProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {levelOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.level
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setLevel(e)
              props.error9 != '' && props.setError9('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error9} />
    </>
  )
}
