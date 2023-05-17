import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import InvestorMultipleChoiceOption from 'src/components/Onboarding/Investor/comps/InvestorMultipleChoiceOption/InvestorMultipleChoiceOption'
import InvestorSingleChoiceOption from 'src/components/Onboarding/Investor/comps/InvestorSingleChoiceOption/InvestorSingleChoiceOption'
import { InvestorStepFooter } from 'src/components/Onboarding/StepFooter'
import { InvestorStepHeader } from 'src/components/Onboarding/StepHeader'
import {
  OnboardingMainProps,
  back,
  getEnumValues,
  next,
  onboardingFrameClassName,
  onboardingSubFrameClassName,
  skip,
} from 'src/lib/onboardingConsts'
import { InvestorStepsInfoList } from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingData'

/*Info to be created and saved in InvestorExperience table:
1  workedInStartups   SizeRange
2  foundedStartups    SizeRange
3  investedStartups   SizeRange
4  investedStages     FundingStage?
5  investedAmountLacs AmountRange?
6  successfulExits    SizeRange?
7  returnsReceived    ReturnsRange?
8  investedSectors    Sector[]
9  investorLevel      InvestorLevel
*/

const GET_ENUM_QUERY = gql`
  query enumQueryExperience {
    size: __type(name: "SizeRange") {
      name
      enumValues {
        name
      }
    }
    stage: __type(name: "FundingStage") {
      name
      enumValues {
        name
      }
    }
    amount: __type(name: "AmountRange") {
      name
      enumValues {
        name
      }
    }
    returns: __type(name: "ReturnsRange") {
      name
      enumValues {
        name
      }
    }
    sector: __type(name: "Sector") {
      name
      enumValues {
        name
      }
    }
    level: __type(name: "InvestorLevel") {
      name
      enumValues {
        name
      }
    }
  }
`

const INVESTOR_EXPERIENCE_MUTATION = gql`
  mutation createInvestorExperience($input: CreateInvestorExperienceInput!) {
    createInvestorExperience(input: $input) {
      id
    }
  }
`

const InvestorExperience = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = InvestorStepsInfoList[props.currentSection - 1].steps

  const [skipData, setSkipData] = useState<boolean[]>([])

  const [sizeOptions, setSizeOptions] = useState<string[]>([])
  const [stageOptions, setStageOptions] = useState<string[]>([])
  const [amountOptions, setAmountOptions] = useState<string[]>([])
  const [returnsOptions, setReturnsOptions] = useState<string[]>([])
  const [sectorOptions, setSectorOptions] = useState<string[]>([])
  const [levelOptions, setLevelOptions] = useState<string[]>([])

  const { currentUser } = useAuth()
  const [getEnumData] = useLazyQuery(GET_ENUM_QUERY)
  const [createInvestorExperience] = useMutation(INVESTOR_EXPERIENCE_MUTATION)

  useEffect(() => {
    const getData = async () => {
      await getEnumData().then((d) => {
        setSizeOptions(getEnumValues(d.data.size.enumValues))
        setStageOptions(getEnumValues(d.data.stage.enumValues))
        setAmountOptions(getEnumValues(d.data.amount.enumValues))
        setReturnsOptions(getEnumValues(d.data.returns.enumValues))
        setSectorOptions(getEnumValues(d.data.sector.enumValues))
        setLevelOptions(getEnumValues(d.data.level.enumValues))
      })
    }
    getData()
  }, [getEnumData])

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

  //Match skip data and save in DB
  const saveData = async (skippedLast: boolean) => {
    await createInvestorExperience({
      variables: {
        input: {
          id: currentUser?.id,
          workedInStartups: workedInStartup,
          foundedStartups: foundedStartup,
          investedStartups: investedStartups,
          investedStages: skipData[3] ? [] : investedStages,
          investedAmountLacs: investedAmountLacs,
          successfulExits: successfulExits,
          returnsReceived: skipData[6] ? [] : returnsReceived,
          investedSectors: skipData[7] ? [] : investedSectors,
          investorLevel: skippedLast ? null : investorLevel,
        },
      },
    })
  }

  return (
    <div className={onboardingFrameClassName}>
      <InvestorStepHeader
        currentStepInfo={currentStepInfo}
        currentStepNumber={step}
      />
      <div className={onboardingSubFrameClassName}>
        {step == 1 && (
          <InvestorSingleChoiceOption
            input={workedInStartup}
            setInput={setWorkedInStartup}
            options={sizeOptions}
            error={error1}
            setError={setError1}
          />
        )}
        {step == 2 && (
          <InvestorSingleChoiceOption
            input={foundedStartup}
            setInput={setFoundedStartup}
            options={sizeOptions}
            error={error2}
            setError={setError2}
          />
        )}
        {step == 3 && (
          <InvestorSingleChoiceOption
            input={investedStartups}
            setInput={setInvestedStartups}
            options={sizeOptions}
            error={error3}
            setError={setError3}
          />
        )}
        {step == 4 && (
          <InvestorMultipleChoiceOption
            input={investedStages}
            setInput={setInvestedStages}
            options={stageOptions}
            error={error4}
            setError={setError4}
          />
        )}
        {step == 5 && (
          <InvestorSingleChoiceOption
            input={investedAmountLacs}
            setInput={setInvestedAmountLacs}
            options={amountOptions}
            error={error5}
            setError={setError5}
          />
        )}
        {step == 6 && (
          <InvestorSingleChoiceOption
            input={successfulExits}
            setInput={setSuccessfulExits}
            options={sizeOptions}
            error={error6}
            setError={setError6}
          />
        )}
        {step == 7 && (
          <InvestorMultipleChoiceOption
            input={returnsReceived}
            setInput={setReturnsReceived}
            options={returnsOptions}
            error={error7}
            setError={setError7}
          />
        )}
        {step == 8 && (
          <InvestorMultipleChoiceOption
            input={investedSectors}
            setInput={setInvestedSectors}
            options={sectorOptions}
            error={error8}
            setError={setError8}
          />
        )}
        {step == 9 && (
          <InvestorSingleChoiceOption
            input={investorLevel}
            options={levelOptions}
            setInput={setInvestorLevel}
            error={error9}
            setError={setError9}
          />
        )}
      </div>
      <InvestorStepFooter
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
export default InvestorExperience
