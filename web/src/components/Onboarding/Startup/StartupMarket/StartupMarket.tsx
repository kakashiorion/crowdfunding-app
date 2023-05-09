import { useState } from 'react'

import { ErrorSubTextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/onboardingConsts'
import { StartupStepsInfoList } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingData'

import { StartupStepFooter } from '../../StepFooter'
import { StartupStepHeader } from '../../StepHeader'

/*Info to be created and saved in StartupMarket table:
  revenueStreams   RevenueStreams[]
  costHeads        CostHeads[]
  shortTermPlan    ShortTermPlan
  marketSizeInCr   Float?
  marketGrowthRate Float?
  trends           String[]
  opporunities     String[]
  threats          String[]
  competitors      String[]
  xFactor          String?
*/

const StartupMarket = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

  //States for step 1
  const [revenueStreams, setRevenueStreams] = useState<string[]>([])
  const [error1, setError1] = useState<string>(' ')

  //States for step 2
  const [costHeads, setCostHeads] = useState<string[]>([])
  const [error2, setError2] = useState<string>(' ')

  //States for step 3
  const [shortTermPlan, setShortTermPlan] = useState<string>('')
  const [error3, setError3] = useState<string>(' ')

  //States for step 4
  const [marketSizeInCr, setMarketSizeInCr] = useState<string>('')
  const [error4, setError4] = useState<string>(' ')

  //States for step 5
  const [marketGrowthRate, setMarketGrowthRate] = useState<string>('')
  const [error5, setError5] = useState<string>(' ')

  //States for step 6
  const [trends1, setTrends1] = useState<string>('')
  const [trends2, setTrends2] = useState<string>('')
  const [trends3, setTrends3] = useState<string>('')
  const [error6, setError6] = useState<string>(' ')

  //States for step 7
  const [opportunities1, setOpportunities1] = useState<string>('')
  const [opportunities2, setOpportunities2] = useState<string>('')
  const [opportunities3, setOpportunities3] = useState<string>('')
  const [error7, setError7] = useState<string>(' ')

  //States for step 8
  const [threats1, setThreats1] = useState<string>('')
  const [threats2, setThreats2] = useState<string>('')
  const [threats3, setThreats3] = useState<string>('')
  const [error8, setError8] = useState<string>(' ')

  //States for step 9
  const [competitors1, setCompetitors1] = useState<string>('')
  const [competitors2, setCompetitors2] = useState<string>('')
  const [competitors3, setCompetitors3] = useState<string>('')
  const [error9, setError9] = useState<string>(' ')

  //States for step 10
  const [xFactor, setXFactor] = useState<string>('')
  const [error10, setError10] = useState<string>(' ')

  //Always check UI data before proceeding to next step
  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (revenueStreams.length == 0) {
        setError1('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (costHeads.length == 0) {
        setError2('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (shortTermPlan == '') {
        setError3('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (marketSizeInCr == '') {
        setError4('Please provide an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (marketGrowthRate == '') {
        setError5('Please provide an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 6
    else if (step == 6) {
      if (trends1.length < 5 && trends2.length < 5 && trends3.length < 5) {
        setError6('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (
        opportunities1.length < 5 &&
        opportunities2.length < 5 &&
        opportunities3.length < 5
      ) {
        setError7('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 8
    else if (step == 8) {
      if (threats1.length < 5 && threats2.length < 5 && threats3.length < 5) {
        setError8('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 9
    else if (step == 9) {
      if (
        competitors1.length < 5 &&
        competitors2.length < 5 &&
        competitors3.length < 5
      ) {
        setError9('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 10
    else if (step == 10) {
      if (xFactor == '') {
        setError10('Please provide a value to save')
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
          <MarketRevenue
            revenueStreams={revenueStreams}
            setRevenueStreams={setRevenueStreams}
            error1={error1}
            setError1={setError1}
          />
        )}
        {step == 2 && (
          <MarketCost
            costHeads={costHeads}
            setCostHeads={setCostHeads}
            error2={error2}
            setError2={setError2}
          />
        )}
        {step == 3 && (
          <MarketPlan
            shortTermPlan={shortTermPlan}
            setShortTermPlan={setShortTermPlan}
            error3={error3}
            setError3={setError3}
          />
        )}
        {step == 4 && (
          <MarketSize
            marketSizeInCr={marketSizeInCr}
            setMarketSizeInCr={setMarketSizeInCr}
            error4={error4}
            setError4={setError4}
          />
        )}
        {step == 5 && (
          <MarketRate
            marketGrowthRate={marketGrowthRate}
            setMarketGrowthRate={setMarketGrowthRate}
            error5={error5}
            setError5={setError5}
          />
        )}
        {step == 6 && (
          <MarketTrends
            trends1={trends1}
            setTrends1={setTrends1}
            trends2={trends2}
            setTrends2={setTrends2}
            trends3={trends3}
            setTrends3={setTrends3}
            error6={error6}
            setError6={setError6}
          />
        )}
        {step == 7 && (
          <MarketOpportunities
            opportunities1={opportunities1}
            setOpportunities1={setOpportunities1}
            opportunities2={opportunities2}
            setOpportunities2={setOpportunities2}
            opportunities3={opportunities3}
            setOpportunities3={setOpportunities3}
            error7={error7}
            setError7={setError7}
          />
        )}
        {step == 8 && (
          <MarketThreats
            threats1={threats1}
            setThreats1={setThreats1}
            threats2={threats2}
            setThreats2={setThreats2}
            threats3={threats3}
            setThreats3={setThreats3}
            error8={error8}
            setError8={setError8}
          />
        )}
        {step == 9 && (
          <MarketCompetitors
            competitors1={competitors1}
            setCompetitors1={setCompetitors1}
            competitors2={competitors2}
            setCompetitors2={setCompetitors2}
            competitors3={competitors3}
            setCompetitors3={setCompetitors3}
            error9={error9}
            setError9={setError9}
          />
        )}
        {step == 10 && (
          <MarketXFactor
            xFactor={xFactor}
            setXFactor={setXFactor}
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
export default StartupMarket

const Divider = () => {
  return <div className="h-2"></div>
}

//TODO: Update revenue options as per DB enum
const revenueOptions = [
  'SELLING_GOODS',
  'RENTAL_OR_LEASING',
  'ADS_OR_SPONSORS',
  'COMMISSION_FEE',
  'SUBSCRIPTION_OR_LICENSING',
  'DONATIONS',
  'FREEMIUM',
  'OTHER',
]
type MarketRevenueProps = {
  revenueStreams: string[]
  setRevenueStreams: React.Dispatch<React.SetStateAction<string[]>>
  error1: string
  setError1: React.Dispatch<React.SetStateAction<string>>
}
const MarketRevenue = (props: MarketRevenueProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {revenueOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.revenueStreams.includes(e)
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              if (props.revenueStreams.includes(e)) {
                props.setRevenueStreams(
                  props.revenueStreams.filter((s) => s != e)
                )
              } else {
                props.setRevenueStreams([...props.revenueStreams, e])
              }
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

//TODO: Update cost options as per DB enum
const costOptions = [
  'MATERIAL',
  'WAGES',
  'RENT',
  'INTEREST',
  'EQUIPMENT',
  'MARKETING',
  'ADMIN',
  'OTHER',
]
type MarketCostProps = {
  costHeads: string[]
  setCostHeads: React.Dispatch<React.SetStateAction<string[]>>
  error2: string
  setError2: React.Dispatch<React.SetStateAction<string>>
}
const MarketCost = (props: MarketCostProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {costOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.costHeads.includes(e)
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              if (props.costHeads.includes(e)) {
                props.setCostHeads(props.costHeads.filter((s) => s != e))
              } else {
                props.setCostHeads([...props.costHeads, e])
              }
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

//TODO: Update plan options as per DB enum
const planOptions = [
  'EXPAND_GEOGRAPHICALLY',
  'GO_FOR_IPO',
  'HIRE_AND_EXPAND_TEAM',
  'IMPROVE_PRODUCT_OR_SERVICE',
  'BUILD_CUSTOMER_BASE',
  'OTHER',
]
type MarketPlanProps = {
  shortTermPlan: string
  setShortTermPlan: React.Dispatch<React.SetStateAction<string>>
  error3: string
  setError3: React.Dispatch<React.SetStateAction<string>>
}
const MarketPlan = (props: MarketPlanProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {planOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.shortTermPlan
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setShortTermPlan(e)
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

//TODO: Update market size options as per DB enum
const marketSizeOptions = [
  'LESS_THAN_10_CR',
  'BETWEEN_10_AND_100_CR',
  'BETWEEN_100_AND_1000_CR',
  'BETWEEN_1000_AND_10000_CR',
  'BETWEEN_10000_AND_1_LAC_CR',
  'MORE_THAN_1_LAC_CR',
]
type MarketSizeProps = {
  marketSizeInCr: string
  setMarketSizeInCr: React.Dispatch<React.SetStateAction<string>>
  error4: string
  setError4: React.Dispatch<React.SetStateAction<string>>
}
const MarketSize = (props: MarketSizeProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {marketSizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.marketSizeInCr
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setMarketSizeInCr(e)
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

//TODO: Update market growth options as per DB enum
const marketGrowthOptions = [
  'LESS_THAN_5',
  'BETWEEN_5_TO_10',
  'BETWEEN_10_TO_20',
  'BETWEEN_20_TO_50',
  'BETWEEN_50_TO_100',
  'MORE_THAN_100',
]
type marketRateProps = {
  marketGrowthRate: string
  setMarketGrowthRate: React.Dispatch<React.SetStateAction<string>>
  error5: string
  setError5: React.Dispatch<React.SetStateAction<string>>
}
const MarketRate = (props: marketRateProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {marketGrowthOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.marketGrowthRate
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setMarketGrowthRate(e)
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

type MarketTrendsProps = {
  trends1: string
  setTrends1: React.Dispatch<React.SetStateAction<string>>
  trends2: string
  setTrends2: React.Dispatch<React.SetStateAction<string>>
  trends3: string
  setTrends3: React.Dispatch<React.SetStateAction<string>>
  error6: string
  setError6: React.Dispatch<React.SetStateAction<string>>
}
const MarketTrends = (props: MarketTrendsProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.trends1}
        rows={2}
        placeholder="Trend 1"
        onChange={(e) => {
          props.setTrends1(e.target.value)
          props.error6 != ' ' && props.setError6(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.trends2}
        rows={2}
        placeholder="Trend 2"
        onChange={(e) => {
          props.setTrends2(e.target.value)
          props.error6 != ' ' && props.setError6(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.trends3}
        rows={2}
        placeholder="Trend 3"
        onChange={(e) => {
          props.setTrends3(e.target.value)
          props.error6 != ' ' && props.setError6(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error6} />
    </>
  )
}

type MarketOpportunitiesProps = {
  opportunities1: string
  setOpportunities1: React.Dispatch<React.SetStateAction<string>>
  opportunities2: string
  setOpportunities2: React.Dispatch<React.SetStateAction<string>>
  opportunities3: string
  setOpportunities3: React.Dispatch<React.SetStateAction<string>>
  error7: string
  setError7: React.Dispatch<React.SetStateAction<string>>
}
const MarketOpportunities = (props: MarketOpportunitiesProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.opportunities1}
        rows={2}
        placeholder="Opportunity 1"
        onChange={(e) => {
          props.setOpportunities1(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.opportunities2}
        rows={2}
        placeholder="Opportunity 2"
        onChange={(e) => {
          props.setOpportunities2(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.opportunities3}
        rows={2}
        placeholder="Opportunity 3"
        onChange={(e) => {
          props.setOpportunities3(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error7} />
    </>
  )
}

type MarketThreatsProps = {
  threats1: string
  setThreats1: React.Dispatch<React.SetStateAction<string>>
  threats2: string
  setThreats2: React.Dispatch<React.SetStateAction<string>>
  threats3: string
  setThreats3: React.Dispatch<React.SetStateAction<string>>
  error8: string
  setError8: React.Dispatch<React.SetStateAction<string>>
}
const MarketThreats = (props: MarketThreatsProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.threats1}
        rows={2}
        placeholder="Threat 1"
        onChange={(e) => {
          props.setThreats1(e.target.value)
          props.error8 != ' ' && props.setError8(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.threats2}
        rows={2}
        placeholder="Threat 2"
        onChange={(e) => {
          props.setThreats2(e.target.value)
          props.error8 != ' ' && props.setError8(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.threats3}
        rows={2}
        placeholder="Threat 3"
        onChange={(e) => {
          props.setThreats3(e.target.value)
          props.error8 != ' ' && props.setError8(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error8} />
    </>
  )
}

type MarketCompetitorsProps = {
  competitors1: string
  setCompetitors1: React.Dispatch<React.SetStateAction<string>>
  competitors2: string
  setCompetitors2: React.Dispatch<React.SetStateAction<string>>
  competitors3: string
  setCompetitors3: React.Dispatch<React.SetStateAction<string>>
  error9: string
  setError9: React.Dispatch<React.SetStateAction<string>>
}
const MarketCompetitors = (props: MarketCompetitorsProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.competitors1}
        rows={2}
        placeholder="Activity 1"
        onChange={(e) => {
          props.setCompetitors1(e.target.value)
          props.error9 != ' ' && props.setError9(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.competitors2}
        rows={2}
        placeholder="Activity 2"
        onChange={(e) => {
          props.setCompetitors2(e.target.value)
          props.error9 != ' ' && props.setError9(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.competitors3}
        rows={2}
        placeholder="Activity 3"
        onChange={(e) => {
          props.setCompetitors3(e.target.value)
          props.error9 != ' ' && props.setError9(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error9} />
    </>
  )
}

type MarketXFactorProps = {
  xFactor: string
  setXFactor: React.Dispatch<React.SetStateAction<string>>
  error10: string
  setError10: React.Dispatch<React.SetStateAction<string>>
}
const MarketXFactor = (props: MarketXFactorProps) => {
  return (
    <>
      <input
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.xFactor}
        placeholder="Website URL"
        onChange={(e) => {
          props.setXFactor(e.target.value)
          props.error10 != ' ' && props.setError10(' ')
        }}
        type={'text'}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error10} />
    </>
  )
}
