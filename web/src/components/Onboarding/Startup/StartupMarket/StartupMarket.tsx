import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import StartupMultipleChoiceOption from 'src/components/Onboarding/Startup/comps/StartupMultipleChoiceOption/StartupMultipleChoiceOption'
import StartupSingleChoiceOption from 'src/components/Onboarding/Startup/comps/StartupSingleChoiceOption/StartupSingleChoiceOption'
import StartupSingleTextArea from 'src/components/Onboarding/Startup/comps/StartupSingleTextArea/StartupSingleTextArea'
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

const GET_ENUM_QUERY = gql`
  query enumQueryMarket {
    revenue: __type(name: "RevenueStreams") {
      name
      enumValues {
        name
      }
    }
    cost: __type(name: "CostHeads") {
      name
      enumValues {
        name
      }
    }
    plan: __type(name: "ShortTermPlan") {
      name
      enumValues {
        name
      }
    }
    size: __type(name: "MarketSize") {
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
  }
`

const STARTUP_MARKET_MUTATION = gql`
  mutation createStartupMarket($input: CreateStartupMarketInput!) {
    createStartupMarket(input: $input) {
      id
    }
  }
`

const StartupMarket = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const [skipData, setSkipData] = useState<boolean[]>([])

  const [revenueOptions, setRevenueOptions] = useState<string[]>([])
  const [costOptions, setCostOptions] = useState<string[]>([])
  const [planOptions, setPlanOptions] = useState<string[]>([])
  const [sizeOptions, setSizeOptions] = useState<string[]>([])
  const [growthOptions, setGrowthOptions] = useState<string[]>([])

  const { currentUser } = useAuth()
  const [getEnumData] = useLazyQuery(GET_ENUM_QUERY)
  const [createStartupMarket] = useMutation(STARTUP_MARKET_MUTATION)

  useEffect(() => {
    const getData = async () => {
      await getEnumData().then((d) => {
        setRevenueOptions(getEnumValues(d.data.revenue.enumValues))
        setCostOptions(getEnumValues(d.data.cost.enumValues))
        setPlanOptions(getEnumValues(d.data.plan.enumValues))
        setSizeOptions(getEnumValues(d.data.size.enumValues))
        setGrowthOptions(getEnumValues(d.data.growth.enumValues))
      })
    }
    getData()
  }, [getEnumData])

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

  //Match skip data and save in DB
  const saveData = async (skippedLast: boolean) => {
    await createStartupMarket({
      variables: {
        input: {
          id: currentUser?.id,
          revenueStreams: skipData[0] ? [] : revenueStreams,
          costHeads: skipData[1] ? [] : costHeads,
          shortTermPlan: shortTermPlan,
          marketSizeInCr: marketSizeInCr,
          marketGrowthRate: marketGrowthRate,
          trends: skipData[5] ? [] : [trends1, trends2, trends3],
          opporunities: skipData[6]
            ? []
            : [opportunities1, opportunities2, opportunities3],
          threats: skipData[7] ? [] : [threats1, threats2, threats3],
          competitors: skipData[8]
            ? []
            : [competitors1, competitors2, competitors3],
          xFactor: skippedLast ? null : xFactor,
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
          <StartupMultipleChoiceOption
            input={revenueStreams}
            setInput={setRevenueStreams}
            options={revenueOptions}
            error={error1}
            setError={setError1}
          />
        )}
        {step == 2 && (
          <StartupMultipleChoiceOption
            input={costHeads}
            setInput={setCostHeads}
            options={costOptions}
            error={error2}
            setError={setError2}
          />
        )}
        {step == 3 && (
          <StartupSingleChoiceOption
            input={shortTermPlan}
            setInput={setShortTermPlan}
            options={planOptions}
            error={error3}
            setError={setError3}
          />
        )}
        {step == 4 && (
          <StartupSingleChoiceOption
            input={marketSizeInCr}
            setInput={setMarketSizeInCr}
            options={sizeOptions}
            error={error4}
            setError={setError4}
          />
        )}
        {step == 5 && (
          <StartupSingleChoiceOption
            input={marketGrowthRate}
            setInput={setMarketGrowthRate}
            options={growthOptions}
            error={error5}
            setError={setError5}
          />
        )}
        {step == 6 && (
          <StartupTripleTextArea
            input1={trends1}
            setInput1={setTrends1}
            placeholder1="Trend 1"
            input2={trends2}
            setInput2={setTrends2}
            placeholder2="Trend 2"
            input3={trends3}
            setInput3={setTrends3}
            placeholder3="Trend 3"
            error={error6}
            setError={setError6}
          />
        )}
        {step == 7 && (
          <StartupTripleTextArea
            input1={opportunities1}
            setInput1={setOpportunities1}
            placeholder1="Opportunities 1"
            input2={opportunities2}
            setInput2={setOpportunities2}
            placeholder2="Opportunities 2"
            input3={opportunities3}
            setInput3={setOpportunities3}
            placeholder3="Opportunities 3"
            error={error7}
            setError={setError7}
          />
        )}
        {step == 8 && (
          <StartupTripleTextArea
            input1={threats1}
            setInput1={setThreats1}
            placeholder1="Threats 1"
            input2={threats2}
            setInput2={setThreats2}
            placeholder2="Threats 2"
            input3={threats3}
            setInput3={setThreats3}
            placeholder3="Threats 3"
            error={error8}
            setError={setError8}
          />
        )}
        {step == 9 && (
          <StartupTripleTextArea
            input1={competitors1}
            setInput1={setCompetitors1}
            placeholder1="Competitor 1"
            input2={competitors2}
            setInput2={setCompetitors2}
            placeholder2="Competitor 2"
            input3={competitors3}
            setInput3={setCompetitors3}
            placeholder3="Competitor 3"
            error={error9}
            setError={setError9}
          />
        )}
        {step == 10 && (
          <StartupSingleTextArea
            input={xFactor}
            setInput={setXFactor}
            placeholder="Tell us about your X Factor"
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
export default StartupMarket
