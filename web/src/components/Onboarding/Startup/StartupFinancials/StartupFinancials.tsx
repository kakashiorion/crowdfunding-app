import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import CloseIcon from 'public/icons/close.svg'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { ErrorSubTextLabel, TextLabel } from 'src/components/Label/Label'
import StartupSingleChoiceOption from 'src/components/Onboarding/Startup/comps/StartupSingleChoiceOption/StartupSingleChoiceOption'
import StartupSingleTextInput from 'src/components/Onboarding/Startup/comps/StartupSingleTextInput/StartupSingleTextInput'
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

const GET_ENUM_QUERY = gql`
  query enumQueryFinancials {
    stage: __type(name: "FundingStage") {
      name
      enumValues {
        name
      }
    }
    decimal: __type(name: "DecimalRange") {
      name
      enumValues {
        name
      }
    }
    revenue: __type(name: "RevenueRange") {
      name
      enumValues {
        name
      }
    }
    growth: __type(name: "GrowthRate") {
      name
      enumValues {
        name
      }
    }
    margin: __type(name: "Margin") {
      name
      enumValues {
        name
      }
    }
    timeline: __type(name: "TimelineRange") {
      name
      enumValues {
        name
      }
    }
  }
`
const STARTUP_FINANCIALS_MUTATION = gql`
  mutation createStartupFinancials($input: CreateStartupFinancialsInput!) {
    createStartupFinancials(input: $input) {
      id
    }
  }
`
const FUNDRAISING_ROUND_MUTATION = gql`
  mutation createFundraisingRound($input: CreateFundraisingRoundInput!) {
    createFundraisingRound(input: $input) {
      id
    }
  }
`
const CAP_TABLE_MUTATION = gql`
  mutation createCapTable($input: CreateCapTableInput!) {
    createCapTable(input: $input) {
      id
    }
  }
`

const StartupFinancials = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const [skipData, setSkipData] = useState<boolean[]>([])

  const [stageOptions, setStageOptions] = useState<string[]>([])
  const [decimalOptions, setDecimalOptions] = useState<string[]>([])
  const [revenueOptions, setRevenueOptions] = useState<string[]>([])
  const [growthOptions, setGrowthOptions] = useState<string[]>([])
  const [marginOptions, setMarginOptions] = useState<string[]>([])
  const [timelineOptions, setTimelineOptions] = useState<string[]>([])

  const { currentUser } = useAuth()
  const [getEnumData] = useLazyQuery(GET_ENUM_QUERY)
  const [createStartupFinancials] = useMutation(STARTUP_FINANCIALS_MUTATION)
  const [createCapTable] = useMutation(CAP_TABLE_MUTATION)
  const [createFundraisingRound] = useMutation(FUNDRAISING_ROUND_MUTATION)

  useEffect(() => {
    const getData = async () => {
      await getEnumData().then((d) => {
        setStageOptions(getEnumValues(d.data.stage.enumValues))
        setDecimalOptions(getEnumValues(d.data.decimal.enumValues))
        setRevenueOptions(getEnumValues(d.data.revenue.enumValues))
        setGrowthOptions(getEnumValues(d.data.growth.enumValues))
        setMarginOptions(getEnumValues(d.data.margin.enumValues))
        setTimelineOptions(getEnumValues(d.data.timeline.enumValues))
      })
    }
    getData()
  }, [getEnumData])

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

  //Match skip data and save in DB
  const saveData = async (skippedLast: boolean) => {
    await createStartupFinancials({
      variables: {
        input: {
          id: currentUser?.id,
          latestFundingStage: latestFundingStage,
          latestValuationInCr: skipData[1] ? null : Number(latestValuationInCr),
          currentRatio: currentRatio,
          debtEquityRatio: debtEquityRatio,
          revenueLastFY: revenueLastFY,
          revenueGrowthRate: revenueGrowthRate,
          margin: margin,
          cashRunway: cashRunway,
          plansForUsingCash: skippedLast
            ? []
            : [plansForUsingCash1, plansForUsingCash2, plansForUsingCash3],
        },
      },
    }).then((d) => {
      !skipData[2] &&
        latestCapTable.forEach(async (item) => {
          await createCapTable({
            variables: {
              input: {
                startupFinancialsID: d.data.createStartupFinancials.id,
                shareholderName: item.shareholderName,
                equityShare: Number(item.equityShare),
              },
            },
          })
        })
      !skipData[3] &&
        fundraisingRounds.forEach(async (item) => {
          await createFundraisingRound({
            variables: {
              input: {
                startupFinancialsID: d.data.createStartupFinancials.id,
                fundingStage: item.fundingStage,
                capitalRaisedInCr: Number(item.capitalRaisedInCr),
                valuationInCr: Number(item.valuationInCr),
                keyInvestors: item.keyInvestors,
              },
            },
          })
        })
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
            input={latestFundingStage}
            setInput={setLatestFundingStage}
            options={stageOptions}
            error={error1}
            setError={setError1}
          />
        )}
        {step == 2 && (
          <StartupSingleTextInput
            input={latestValuationInCr}
            setInput={setLatestValuationInCr}
            placeholder="Valuation (in Cr)"
            error={error2}
            setError={setError2}
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
            options={stageOptions}
            error4={error4}
            setError4={setError4}
          />
        )}
        {step == 5 && (
          <StartupSingleChoiceOption
            input={currentRatio}
            setInput={setCurrentRatio}
            options={decimalOptions}
            error={error5}
            setError={setError5}
          />
        )}
        {step == 6 && (
          <StartupSingleChoiceOption
            input={debtEquityRatio}
            setInput={setDebtEquityRatio}
            options={decimalOptions}
            error={error6}
            setError={setError6}
          />
        )}
        {step == 7 && (
          <StartupSingleChoiceOption
            input={revenueLastFY}
            setInput={setRevenueLastFY}
            options={revenueOptions}
            error={error7}
            setError={setError7}
          />
        )}
        {step == 8 && (
          <StartupSingleChoiceOption
            input={revenueGrowthRate}
            setInput={setRevenueGrowthRate}
            options={growthOptions}
            error={error8}
            setError={setError8}
          />
        )}
        {step == 9 && (
          <StartupSingleChoiceOption
            input={margin}
            setInput={setMargin}
            options={marginOptions}
            error={error9}
            setError={setError9}
          />
        )}
        {step == 10 && (
          <StartupSingleChoiceOption
            input={cashRunway}
            setInput={setCashRunway}
            options={timelineOptions}
            error={error10}
            setError={setError10}
          />
        )}
        {step == 11 && (
          <StartupTripleTextArea
            input1={plansForUsingCash1}
            setInput1={setPlansForUsingCash1}
            placeholder1="Plan 1"
            input2={plansForUsingCash2}
            setInput2={setPlansForUsingCash2}
            placeholder2="Plan 2"
            input3={plansForUsingCash3}
            setInput3={setPlansForUsingCash3}
            placeholder3="Plan 3"
            error={error11}
            setError={setError11}
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
export default StartupFinancials

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
            'col-span-2 w-full rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none  disabled:bg-black-l4 dark:border-white-d2 dark:bg-black-l2  dark:text-tertiary-l2 dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:px-4 lg:py-2 lg:text-b1 '
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
            'col-span-2 w-full rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2  dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:col-span-1 lg:px-4 lg:py-2 lg:text-b1'
          }
          value={enteredEquity}
          placeholder="Equity share"
          onChange={(e) => {
            setEnteredEquity(e.target.value)
          }}
          type={'text'}
        />
        <button
          className="col-span-2 w-full rounded border-2 border-tertiary bg-tertiary px-2 py-1 text-b3 text-white shadow-md hover:border-tertiary-d1 hover:bg-tertiary-d1 lg:col-span-1 lg:px-4 lg:py-2 lg:text-b2"
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
      <div className="mb-2 flex w-full flex-grow flex-col gap-2 overflow-scroll pt-2">
        {props.latestCapTable.map((e) => (
          <div
            key={`${e.shareholderName}, ${e.equityShare}`}
            className={`flex max-h-min w-full items-center justify-between rounded bg-white px-5 py-3 text-black shadow-md dark:bg-black-l1 dark:text-white lg:px-6 lg:py-4`}
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
  options: string[]
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
            ' col-span-1 w-full rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={enteredStage}
          placeholder="Select funding stage"
          onChange={(e) => {
            setEnteredStage(e.target.value)
            props.error4 != ' ' && props.setError4(' ')
          }}
        >
          {props.options.map((s) => (
            <option value={s} key={s}>
              {s}
            </option>
          ))}
        </select>
        <input
          className={
            'col-span-1 w-full rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none  disabled:bg-black-l4 dark:border-white-d2 dark:bg-black-l2  dark:text-tertiary-l2 dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:px-4 lg:py-2 lg:text-b1 '
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
            'col-span-1 w-full rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none  disabled:bg-black-l4 dark:border-white-d2 dark:bg-black-l2  dark:text-tertiary-l2 dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:px-4 lg:py-2 lg:text-b1'
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
            'col-span-1 w-full rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2  dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:col-span-2 lg:px-4 lg:py-2 lg:text-b1'
          }
          value={enteredKeyInvestors}
          placeholder="Key investors (optional)"
          onChange={(e) => {
            setEnteredKeyInvestors(e.target.value)
          }}
          rows={2}
        />
        <button
          className="col-span-1 w-full rounded border-2 border-tertiary bg-tertiary px-2 py-1 text-b3 text-white shadow-md hover:border-tertiary-d1 hover:bg-tertiary-d1 lg:px-4 lg:py-2 lg:text-b2"
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
            } else if (Number(enteredValuation) < Number(enteredCapital)) {
              props.setError4('Valuation cannot be less than capital raised')
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
      <div className="mb-2 flex w-full flex-grow flex-col gap-2 overflow-scroll pt-2">
        {props.fundraisingRounds.sort().map((e) => (
          <div
            key={`${e.fundingStage}`}
            className={`flex max-h-min w-full items-center justify-between rounded bg-white px-5 py-3 text-black shadow-md dark:bg-black-l1 dark:text-white lg:px-6 lg:py-4`}
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
      <ErrorSubTextLabel label={props.error4} />
    </>
  )
}
