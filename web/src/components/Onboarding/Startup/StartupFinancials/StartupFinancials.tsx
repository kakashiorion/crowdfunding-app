import { useState } from 'react'

import CloseIcon from 'public/icons/close.svg'

import { ErrorSubTextLabel, TextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/onboardingConsts'
import { StartupStepsInfoList } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingData'

import { StartupStepFooter } from '../../StepFooter'
import { StartupStepHeader } from '../../StepHeader'

/*Info to be created and saved in StartupFinancials table:
  latestFundingStage   FundingStage?
  latestValuationInCr  Float?
  latestCapTable       CapTable[]
  fundraisingRounds    FundraisingRound[]
  currentRatio         DecimalRange?
  DebtEquityRatio      DecimalRange?
  revenueLastFYLacs    RevenueRange?
  revenueGrowthRate    GrowthRate?
  margin               Margin?
  cashRunway           TimelineRange?
  plansForUsingCash    String[]
*/

const StartupFinancials = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

  //States for step 1
  const [latestFundingStage, setLatestFundingStage] = useState<string>('')
  const [error1, setError1] = useState<string>(' ')

  //States for step 2
  const [latestValuationInCr, setLatestValuationInCr] = useState<string>('')
  const [error2, setError2] = useState<string>(' ')

  //States for step 3
  const [latestCapTable, setLatestCapTable] = useState<CapTable[]>([])
  const [error3, setError3] = useState<string>(' ')

  //States for step 4
  const [fundraisingRounds, setFundraisingRounds] = useState<
    FundraisingRound[]
  >([])
  const [error4, setError4] = useState<string>(' ')

  //States for step 5
  const [currentRatio, setCurrentRatio] = useState<string>('')
  const [error5, setError5] = useState<string>(' ')

  //States for step 6
  const [debtEquityRatio, setDebtEquityRatio] = useState<string>('')
  const [error6, setError6] = useState<string>(' ')

  //States for step 7
  const [revenueLastFY, setRevenueLastFY] = useState<string>('')
  const [error7, setError7] = useState<string>(' ')

  //States for step 8
  const [revenueGrowthRate, setRevenueGrowthRate] = useState<string>('')
  const [error8, setError8] = useState<string>(' ')

  //States for step 9
  const [margin, setMargin] = useState<string>('')
  const [error9, setError9] = useState<string>(' ')

  //States for step 10
  const [cashRunway, setCashRunway] = useState<string>('')
  const [error10, setError10] = useState<string>(' ')

  //States for step 11
  const [plansForUsingCash1, setPlansForUsingCash1] = useState<string>('')
  const [plansForUsingCash2, setPlansForUsingCash2] = useState<string>('')
  const [plansForUsingCash3, setPlansForUsingCash3] = useState<string>('')
  const [error11, setError11] = useState<string>(' ')

  //Always check UI data before proceeding to next step
  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (latestFundingStage == '') {
        setError1('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (latestValuationInCr == '') {
        setError2('Please provide a value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (latestCapTable.length == 0) {
        setError3('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (fundraisingRounds.length == 0) {
        setError4('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (currentRatio == '') {
        setError5('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 6
    else if (step == 6) {
      if (debtEquityRatio == '') {
        setError6('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (revenueLastFY == '') {
        setError7('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 8
    else if (step == 8) {
      if (revenueGrowthRate == '') {
        setError8('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 9
    else if (step == 9) {
      if (margin == '') {
        setError9('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 10
    else if (step == 10) {
      if (cashRunway == '') {
        setError10('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 11
    else if (step == 11) {
      if (
        plansForUsingCash1.length < 5 &&
        plansForUsingCash2.length < 5 &&
        plansForUsingCash3.length < 5
      ) {
        setError11('Please provide atleast 1 proper value to save')
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
    } else if (step == 11) {
      setError11('')
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
          <FinancialsStage
            latestFundingStage={latestFundingStage}
            setLatestFundingStage={setLatestFundingStage}
            error1={error1}
            setError1={setError1}
          />
        )}
        {step == 2 && (
          <FinancialsValuation
            latestValuationInCr={latestValuationInCr}
            setLatestValuationInCr={setLatestValuationInCr}
            error2={error2}
            setError2={setError2}
          />
        )}
        {step == 3 && (
          <FinancialsCapTable
            latestCapTable={latestCapTable}
            setLatestCapTable={setLatestCapTable}
            error3={error3}
            setError3={setError3}
          />
        )}
        {step == 4 && (
          <FinancialsRounds
            fundraisingRounds={fundraisingRounds}
            setFundraisingRounds={setFundraisingRounds}
            error4={error4}
            setError4={setError4}
          />
        )}
        {step == 5 && (
          <FinancialsCurrentRatio
            currentRatio={currentRatio}
            setCurrentRatio={setCurrentRatio}
            error5={error5}
            setError5={setError5}
          />
        )}
        {step == 6 && (
          <FinancialsDERatio
            debtEquityRatio={debtEquityRatio}
            setDebtEquityRatio={setDebtEquityRatio}
            error6={error6}
            setError6={setError6}
          />
        )}
        {step == 7 && (
          <FinancialsRevenue
            revenueLastFY={revenueLastFY}
            setRevenueLastFY={setRevenueLastFY}
            error7={error7}
            setError7={setError7}
          />
        )}
        {step == 8 && (
          <FinancialsGrowth
            revenueGrowth={revenueGrowthRate}
            setRevenueGrowth={setRevenueGrowthRate}
            error8={error8}
            setError8={setError8}
          />
        )}
        {step == 9 && (
          <FinancialsMargin
            margin={margin}
            setMargin={setMargin}
            error9={error9}
            setError9={setError9}
          />
        )}
        {step == 10 && (
          <FinancialsRunway
            cashRunway={cashRunway}
            setCashRunway={setCashRunway}
            error10={error10}
            setError10={setError10}
          />
        )}
        {step == 11 && (
          <FinancialsPlans
            plansForUsingCash1={plansForUsingCash1}
            setPlansForUsingCash1={setPlansForUsingCash1}
            plansForUsingCash2={plansForUsingCash2}
            setPlansForUsingCash2={setPlansForUsingCash2}
            plansForUsingCash3={plansForUsingCash3}
            setPlansForUsingCash3={setPlansForUsingCash3}
            error11={error11}
            setError11={setError11}
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
export default StartupFinancials

const Divider = () => {
  return <div className="h-2"></div>
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
type FinancialsStageProps = {
  latestFundingStage: string
  setLatestFundingStage: React.Dispatch<React.SetStateAction<string>>
  error1: string
  setError1: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsStage = (props: FinancialsStageProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {stageOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.latestFundingStage
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setLatestFundingStage(e)
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

type FinancialsValuationProps = {
  latestValuationInCr: string
  setLatestValuationInCr: React.Dispatch<React.SetStateAction<string>>
  error2: string
  setError2: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsValuation = (props: FinancialsValuationProps) => {
  return (
    <>
      <input
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.latestValuationInCr}
        placeholder="Valuation (in Cr)"
        onChange={(e) => {
          props.setLatestValuationInCr(e.target.value)
          props.error2 != ' ' && props.setError2(' ')
        }}
        type={'text'}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error2} />
    </>
  )
}

type CapTable = {
  shareholderName: string
  equityShare: string
}
type FinancialsCapTableProps = {
  latestCapTable: CapTable[]
  setLatestCapTable: React.Dispatch<React.SetStateAction<CapTable[]>>
  error3: string
  setError3: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsCapTable = (props: FinancialsCapTableProps) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredEquity, setEnteredEquity] = useState('')
  const [totalEquity, setTotalEquity] = useState(0)

  return (
    <>
      <div className="grid w-full grid-flow-row-dense grid-cols-2 items-center justify-start gap-1 border-2 border-tertiary p-2">
        <input
          className={
            'col-span-2 w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none  disabled:bg-black-l4 dark:border-white-d2 dark:bg-black-l2  dark:text-tertiary-l2 dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:px-4 lg:py-2 lg:text-b1 '
          }
          value={enteredName}
          placeholder="Name of shareholder"
          onChange={(e) => {
            setEnteredName(e.target.value)
          }}
          type={'text'}
        />
        <input
          className={
            'col-span-2 w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2  dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:col-span-1 lg:px-4 lg:py-2 lg:text-b1'
          }
          value={enteredEquity}
          placeholder="Equity share"
          onChange={(e) => {
            setEnteredEquity(e.target.value)
          }}
          type={'text'}
        />
        <button
          className="col-span-2 w-full rounded-sm border-2 border-tertiary bg-tertiary px-2 py-1 text-b3 text-white shadow-md hover:border-tertiary-d1 hover:bg-tertiary-d1 lg:col-span-1 lg:px-4 lg:py-2 lg:text-b2"
          onClick={() => {
            if (
              props.latestCapTable.some((s) => s.shareholderName == enteredName)
            ) {
              props.setError3('Duplicate entry')
            } else if (enteredEquity == '') {
              props.setError3('Must provide equity value')
            } else if (enteredName == '') {
              props.setError3('Must provide name')
            } else if (Number(enteredEquity) + totalEquity > 100.0) {
              props.setError3('Total equity cannot be more than 100%')
            } else {
              props.setLatestCapTable([
                ...props.latestCapTable,
                {
                  shareholderName: enteredName,
                  equityShare: enteredEquity,
                },
              ])
              setTotalEquity(totalEquity + Number(enteredEquity))
              props.error3 != '' && props.setError3('')
            }
          }}
        >
          {'ADD SHAREHOLDER'}
        </button>
      </div>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll pt-2">
        {props.latestCapTable.map((e) => (
          <div
            key={`${e.shareholderName}, ${e.equityShare}`}
            className={`flex max-h-min w-full items-center justify-between rounded-sm bg-white px-5 py-3 text-black shadow-md dark:bg-black-l1 dark:text-white lg:px-6 lg:py-4`}
          >
            <TextLabel label={`${e.shareholderName}, ${e.equityShare}%`} />
            <CloseIcon
              className="flex h-4 w-4 fill-error dark:fill-error-l1 lg:h-5 lg:w-5"
              onClick={() => {
                props.setLatestCapTable(
                  props.latestCapTable.filter((s) => s != e)
                )
                setTotalEquity(totalEquity - Number(e.equityShare))
                props.error3 != '' && props.setError3('')
              }}
            ></CloseIcon>
          </div>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error3} />
    </>
  )
}

type FundraisingRound = {
  fundingStage: string
  capitalRaisedInCr: string
  valuationInCr: string
  keyInvestors?: string
}
type FinancialsRoundsProps = {
  fundraisingRounds: FundraisingRound[]
  setFundraisingRounds: React.Dispatch<React.SetStateAction<FundraisingRound[]>>
  error4: string
  setError4: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsRounds = (props: FinancialsRoundsProps) => {
  const [enteredStage, setEnteredStage] = useState('')
  const [enteredCapital, setEnteredCapital] = useState('')
  const [enteredValuation, setEnteredValuation] = useState('')
  const [enteredKeyInvestors, setEnteredKeyInvestors] = useState('')

  return (
    <>
      <div className="grid w-full grid-flow-row-dense grid-cols-1 items-center justify-start gap-1 border-2 border-tertiary p-2 lg:grid-cols-3">
        <select
          name="stage"
          id="stage"
          className={
            ' col-span-1 w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={enteredStage}
          placeholder="Select funding stage"
          onChange={(e) => {
            setEnteredStage(e.target.value)
            props.error4 != ' ' && props.setError4(' ')
          }}
        >
          {stageOptions.map((s) => (
            <option value={s} key={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          className={
            'col-span-1 w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none  disabled:bg-black-l4 dark:border-white-d2 dark:bg-black-l2  dark:text-tertiary-l2 dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:px-4 lg:py-2 lg:text-b1 '
          }
          value={enteredCapital}
          placeholder="Raised (in Cr)"
          onChange={(e) => {
            setEnteredCapital(e.target.value)
          }}
          type={'text'}
        />
        <input
          className={
            'col-span-1 w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none  disabled:bg-black-l4 dark:border-white-d2 dark:bg-black-l2  dark:text-tertiary-l2 dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:px-4 lg:py-2 lg:text-b1'
          }
          value={enteredValuation}
          placeholder="Valuation (in Cr)"
          onChange={(e) => {
            setEnteredValuation(e.target.value)
          }}
          type={'text'}
        />
        <textarea
          className={
            'col-span-1 w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2  dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:col-span-2 lg:px-4 lg:py-2 lg:text-b1'
          }
          value={enteredKeyInvestors}
          placeholder="Key investors (optional)"
          onChange={(e) => {
            setEnteredKeyInvestors(e.target.value)
          }}
          rows={2}
        />
        <button
          className="col-span-1 w-full rounded-sm border-2 border-tertiary bg-tertiary px-2 py-1 text-b3 text-white shadow-md hover:border-tertiary-d1 hover:bg-tertiary-d1 lg:px-4 lg:py-2 lg:text-b2"
          onClick={() => {
            if (
              props.fundraisingRounds.some(
                (s) => s.fundingStage == enteredStage
              )
            ) {
              props.setError4('Duplicate entry')
            } else if (
              enteredStage == '' ||
              enteredStage == 'Select funding stage'
            ) {
              props.setError4('Must provide funding stage')
            } else if (enteredCapital == '') {
              props.setError4('Must provide capital raised')
            } else if (enteredValuation == '') {
              props.setError4('Must provide valuation')
            } else {
              props.setFundraisingRounds([
                ...props.fundraisingRounds,
                {
                  fundingStage: enteredStage,
                  valuationInCr: enteredValuation,
                  capitalRaisedInCr: enteredCapital,
                  keyInvestors: enteredKeyInvestors,
                },
              ])
              props.error4 != '' && props.setError4('')
            }
          }}
        >
          {'ADD ROUND'}
        </button>
      </div>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll pt-2">
        {props.fundraisingRounds.sort().map((e) => (
          <div
            key={`${e.fundingStage}`}
            className={`flex max-h-min w-full items-center justify-between rounded-sm bg-white px-5 py-3 text-black shadow-md dark:bg-black-l1 dark:text-white lg:px-6 lg:py-4`}
          >
            <TextLabel
              label={`${e.fundingStage}: Raised ${e.capitalRaisedInCr} Cr`}
            />
            <CloseIcon
              className="flex h-4 w-4 fill-error dark:fill-error-l1 lg:h-5 lg:w-5"
              onClick={() => {
                props.setFundraisingRounds(
                  props.fundraisingRounds.filter((s) => s != e)
                )
                props.error4 != '' && props.setError4('')
              }}
            ></CloseIcon>
          </div>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error4} />
    </>
  )
}

//TODO: Update decimal range options as per DB enum
const decimalOptions = [
  'LESS_THAN_HALF',
  'BETWEEN_HALF_AND_ONE',
  'BETWEEN_ONE_AND_TWO',
  'MORE_THAN_TWO',
]
type FinancialsCurrentRatioProps = {
  currentRatio: string
  setCurrentRatio: React.Dispatch<React.SetStateAction<string>>
  error5: string
  setError5: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsCurrentRatio = (props: FinancialsCurrentRatioProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {decimalOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.currentRatio
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setCurrentRatio(e)
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

type FinancialsDERatioProps = {
  debtEquityRatio: string
  setDebtEquityRatio: React.Dispatch<React.SetStateAction<string>>
  error6: string
  setError6: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsDERatio = (props: FinancialsDERatioProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {decimalOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.debtEquityRatio
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setDebtEquityRatio(e)
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

//TODO: Update revenue options as per DB enum
const revenueOptions = [
  'LESS_THAN_10_LACS',
  'BETWEEN_10_TO_20_LACS',
  'BETWEEN_20_TO_50_LACS',
  'BETWEEN_50_TO_100_LACS',
  'BETWEEN_1_TO_10_CR',
  'BETWEEN_10_TO_50_CR',
  'BETWEEN_50_TO_100_CR',
  'MORE_THAN_100_CRORE',
]
type FinancialsRevenueProps = {
  revenueLastFY: string
  setRevenueLastFY: React.Dispatch<React.SetStateAction<string>>
  error7: string
  setError7: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsRevenue = (props: FinancialsRevenueProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {revenueOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.revenueLastFY
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setRevenueLastFY(e)
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

//TODO: Update growth options as per DB enum
const growthOptions = [
  'LESS_THAN_5',
  'BETWEEN_5_TO_10',
  'BETWEEN_10_TO_20',
  'BETWEEN_20_TO_50',
  'BETWEEN_50_TO_100',
  'MORE_THAN_100',
]
type FinancialsGrowthProps = {
  revenueGrowth: string
  setRevenueGrowth: React.Dispatch<React.SetStateAction<string>>
  error8: string
  setError8: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsGrowth = (props: FinancialsGrowthProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {growthOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.revenueGrowth
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setRevenueGrowth(e)
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

//TODO: Update margin options as per DB enum
const marginOptions = [
  'LOSS_OVER_50',
  'LOSS_BETWEEN_20_AND_50',
  'LOSS_LESS_THAN_20',
  'PROFIT_LESS_THAN_20',
  'PROFIT_BETWEEN_20_AND_50',
  'PROFIT_OVER_50',
]
type FinancialsMarginProps = {
  margin: string
  setMargin: React.Dispatch<React.SetStateAction<string>>
  error9: string
  setError9: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsMargin = (props: FinancialsMarginProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {marginOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.margin
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setMargin(e)
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

//TODO: Update timeline options as per DB enum
const timelineOptions = [
  'LESS_THAN_SIX_MONTHS',
  'SIX_TO_TWELVE_MONTHS',
  'ONE_TO_TWO_YEARS',
  'TWO_TO_FIVE_YEARS',
  'FIVE_TO_TEN_YEARS',
  'MORE_THAN_TEN_YEARS',
]
type FinancialsRunwayProps = {
  cashRunway: string
  setCashRunway: React.Dispatch<React.SetStateAction<string>>
  error10: string
  setError10: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsRunway = (props: FinancialsRunwayProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {timelineOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.cashRunway
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setCashRunway(e)
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

type FinancialsPlansProps = {
  plansForUsingCash1: string
  setPlansForUsingCash1: React.Dispatch<React.SetStateAction<string>>
  plansForUsingCash2: string
  setPlansForUsingCash2: React.Dispatch<React.SetStateAction<string>>
  plansForUsingCash3: string
  setPlansForUsingCash3: React.Dispatch<React.SetStateAction<string>>
  error11: string
  setError11: React.Dispatch<React.SetStateAction<string>>
}
const FinancialsPlans = (props: FinancialsPlansProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.plansForUsingCash1}
        rows={2}
        placeholder="Plan 1"
        onChange={(e) => {
          props.setPlansForUsingCash1(e.target.value)
          props.error11 != ' ' && props.setError11(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.plansForUsingCash2}
        rows={2}
        placeholder="Plan 2"
        onChange={(e) => {
          props.setPlansForUsingCash2(e.target.value)
          props.error11 != ' ' && props.setError11(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.plansForUsingCash3}
        rows={2}
        placeholder="Plan 3"
        onChange={(e) => {
          props.setPlansForUsingCash3(e.target.value)
          props.error11 != ' ' && props.setError11(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error11} />
    </>
  )
}
