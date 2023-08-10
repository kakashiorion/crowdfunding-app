import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import SvgAdd from 'src/components/Icon/Add'
import SvgClose from 'src/components/Icon/Close'
import SvgSearch from 'src/components/Icon/Search'
import { ErrorSubTextLabel, TextLabel } from 'src/components/Label/Label'
import InvestorMultipleChoiceOption from 'src/components/Onboarding/Investor/comps/InvestorMultipleChoiceOption/InvestorMultipleChoiceOption'
import InvestorSingleChoiceOption from 'src/components/Onboarding/Investor/comps/InvestorSingleChoiceOption/InvestorSingleChoiceOption'
import { InvestorStepFooter } from 'src/components/Onboarding/StepFooter'
import { InvestorStepHeader } from 'src/components/Onboarding/StepHeader'
import {
  OnboardingMainProps,
  back,
  Location,
  getEnumValues,
  next,
  skip,
  onboardingFrameClassName,
  onboardingSubFrameClassName,
} from 'src/lib/onboardingConsts'
import { InvestorStepsInfoList } from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingData'

/*Info to be created and saved in InvestorObjective table:
1  preferredAmountToInvest     AmountRange?
2  preferredFundingStages      FundingStage[]
3  preferredStartupTeamSizes   StartupSize[]
4  preferredTimelines          TimelineRange[]
5  riskApetite                 RiskApetite?
6  preferredSectors            Sector[]
7  preferredLocations          Int[] //from Location table
8  platformGoal                InvestorPlatformGoal[]
9  referSource                 ReferSource[]
*/

const GET_ENUM_QUERY = gql`
  query enumQueryInvestorObjective {
    amount: __type(name: "AmountRange") {
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
    team: __type(name: "StartupTeamSize") {
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
    risk: __type(name: "RiskApetite") {
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
    goal: __type(name: "InvestorPlatformGoal") {
      name
      enumValues {
        name
      }
    }
    source: __type(name: "ReferSource") {
      name
      enumValues {
        name
      }
    }
  }
`

const INVESTOR_OBJECTIVE_MUTATION = gql`
  mutation createInvestorObjective($input: CreateInvestorObjectiveInput!) {
    createInvestorObjective(input: $input) {
      id
    }
  }
`

const GET_LOCATION_QUERY = gql`
  query getLocationData {
    locations {
      id
      state
      city
    }
  }
`
const InvestorObjective = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = InvestorStepsInfoList[props.currentSection - 1].steps

  const [skipData, setSkipData] = useState<boolean[]>([])

  const [amountOptions, setAmountOptions] = useState<string[]>([])
  const [stageOptions, setStageOptions] = useState<string[]>([])
  const [teamOptions, setTeamOptions] = useState<string[]>([])
  const [timelineOptions, setTimelineOptions] = useState<string[]>([])
  const [riskOptions, setRiskOptions] = useState<string[]>([])
  const [sectorOptions, setSectorOptions] = useState<string[]>([])
  const [goalOptions, setGoalOptions] = useState<string[]>([])
  const [sourceOptions, setSourceOptions] = useState<string[]>([])
  const [locations, setLocations] = useState<Location[]>([])

  const { currentUser } = useAuth()
  const [getEnumData] = useLazyQuery(GET_ENUM_QUERY)
  const [getLocationData] = useLazyQuery(GET_LOCATION_QUERY)
  const [createInvestorObjective] = useMutation(INVESTOR_OBJECTIVE_MUTATION)

  useEffect(() => {
    const getData = async () => {
      await getEnumData().then((d) => {
        setAmountOptions(getEnumValues(d.data.amount.enumValues))
        setStageOptions(getEnumValues(d.data.stage.enumValues))
        setTeamOptions(getEnumValues(d.data.team.enumValues))
        setTimelineOptions(getEnumValues(d.data.timeline.enumValues))
        setRiskOptions(getEnumValues(d.data.risk.enumValues))
        setSectorOptions(getEnumValues(d.data.sector.enumValues))
        setGoalOptions(getEnumValues(d.data.goal.enumValues))
        setSourceOptions(getEnumValues(d.data.source.enumValues))
      })
      await getLocationData().then((d) => {
        setLocations(d.data.locations)
      })
    }
    getData()
  }, [getEnumData, getLocationData])

  //States for step 1
  const [preferredAmountToInvest, setPreferredAmountToInvest] =
    useState<string>('')
  const [error1, setError1] = useState<string>('')

  //States for step 2
  const [preferredFundingStages, setPreferredFundingStages] = useState<
    string[]
  >([])
  const [error2, setError2] = useState<string>('')

  //States for step 3
  const [preferredStartupTeamSizes, setPreferredStartupTeamSizes] = useState<
    string[]
  >([])
  const [error3, setError3] = useState<string>('')

  //States for step 4
  const [preferredTimelines, setPreferredTimelines] = useState<string[]>([])
  const [error4, setError4] = useState<string>('')

  //States for step 5
  const [riskApetite, setRiskApetite] = useState<string>('')
  const [error5, setError5] = useState<string>('')

  //States for step 6
  const [preferredSectors, setPreferredSectors] = useState<string[]>([])
  const [error6, setError6] = useState<string>('')

  //States for step 7
  const [preferredLocations, setPreferredLocations] = useState<number[]>([])
  const [error7, setError7] = useState<string>('')

  //States for step 8
  const [platformGoal, setPlatformGoal] = useState<string[]>([])
  const [error8, setError8] = useState<string>('')

  //States for step 9
  const [referSource, setReferSource] = useState<string[]>([])
  const [error9, setError9] = useState<string>('')

  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (preferredAmountToInvest == '') {
        setError1('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (preferredFundingStages.length == 0) {
        setError2('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (preferredStartupTeamSizes.length == 0) {
        setError3('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (preferredTimelines.length == 0) {
        setError4('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (riskApetite == '') {
        setError5('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 6
    else if (step == 6) {
      if (preferredSectors.length == 0) {
        setError6('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (preferredLocations.length == 0) {
        setError7('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 8
    else if (step == 8) {
      if (platformGoal.length == 0) {
        setError8('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 9
    else if (step == 9) {
      if (referSource.length == 0) {
        setError9('Please select atleast an option to save')
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
    await createInvestorObjective({
      variables: {
        input: {
          id: currentUser?.id,
          preferredAmountToInvest: preferredAmountToInvest,
          preferredFundingStages: skipData[1] ? [] : preferredFundingStages,
          preferredStartupTeamSizes: skipData[2]
            ? []
            : preferredStartupTeamSizes,
          preferredTimelines: skipData[3] ? [] : preferredTimelines,
          riskApetite: riskApetite,
          preferredSectors: skipData[5] ? [] : preferredSectors,
          preferredLocations: skipData[6] ? [] : preferredLocations,
          platformGoal: skipData[7] ? [] : platformGoal,
          referSource: skippedLast ? [] : referSource,
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
            input={preferredAmountToInvest}
            setInput={setPreferredAmountToInvest}
            options={amountOptions}
            error={error1}
            setError={setError1}
          />
        )}
        {step == 2 && (
          <InvestorMultipleChoiceOption
            input={preferredFundingStages}
            setInput={setPreferredFundingStages}
            options={stageOptions}
            error={error2}
            setError={setError2}
          />
        )}
        {step == 3 && (
          <InvestorMultipleChoiceOption
            input={preferredStartupTeamSizes}
            setInput={setPreferredStartupTeamSizes}
            options={teamOptions}
            error={error3}
            setError={setError3}
          />
        )}
        {step == 4 && (
          <InvestorMultipleChoiceOption
            input={preferredTimelines}
            setInput={setPreferredTimelines}
            options={timelineOptions}
            error={error4}
            setError={setError4}
          />
        )}
        {step == 5 && (
          <InvestorSingleChoiceOption
            input={riskApetite}
            setInput={setRiskApetite}
            options={riskOptions}
            error={error5}
            setError={setError5}
          />
        )}
        {step == 6 && (
          <InvestorMultipleChoiceOption
            input={preferredSectors}
            setInput={setPreferredSectors}
            options={sectorOptions}
            error={error6}
            setError={setError6}
          />
        )}
        {step == 7 && (
          <ObjectiveLocations
            input={preferredLocations}
            setInput={setPreferredLocations}
            locationList={locations}
            error={error7}
            setError={setError7}
          />
        )}
        {step == 8 && (
          <InvestorMultipleChoiceOption
            input={platformGoal}
            setInput={setPlatformGoal}
            options={goalOptions}
            error={error8}
            setError={setError8}
          />
        )}
        {step == 9 && (
          <InvestorMultipleChoiceOption
            input={referSource}
            setInput={setReferSource}
            options={sourceOptions}
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
              currentStepInfo: currentStepInfo,
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
            currentStepInfo: currentStepInfo,
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
export default InvestorObjective

type ObjectiveLocationsProps = {
  input: number[]
  setInput: React.Dispatch<React.SetStateAction<number[]>>
  locationList: Location[]
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveLocations = (props: ObjectiveLocationsProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResult, setSearchResult] = useState<Location[]>([])
  const [selectedLoc, setSelectedLoc] = useState<Location>()

  const getLocName = (l?: Location) => {
    return `${l?.city} (${l?.state})`
  }

  return (
    <>
      <div className="flex w-full flex-col items-center justify-between gap-2 border-2 border-primary-d1 p-2 dark:border-primary-l1 lg:p-4 ">
        <div className="flex w-full items-center justify-between gap-2 ">
          <input
            className={
              'w-full rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-primary-d1 placeholder:text-black-l4 focus:border-primary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-primary-l1 dark:placeholder:text-white-d4 dark:focus:border-primary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
            }
            value={searchTerm}
            placeholder="Search location"
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            type={'text'}
          />
          <div className="rounded bg-primary-d1 p-2 shadow-md hover:bg-primary-d2 dark:bg-primary-l1 dark:hover:bg-primary-l2 lg:p-2.5">
            <SvgSearch
              className="flex h-5 w-5 fill-white dark:fill-black lg:h-6 lg:w-6"
              onClick={() => {
                setSearchResult(
                  props.locationList.filter(
                    (l) =>
                      l.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      l.state.toLowerCase().includes(searchTerm.toLowerCase())
                  )
                )
                setSelectedLoc(
                  props.locationList.filter(
                    (l) =>
                      l.city.toLowerCase().includes(searchTerm.toLowerCase()) ||
                      l.state.toLowerCase().includes(searchTerm.toLowerCase())
                  )[0]
                )
              }}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <select
            className={
              'w-full rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-primary-d1 placeholder:text-black-l4 focus:border-primary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-primary-l1 dark:placeholder:text-white-d4 dark:focus:border-primary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
            }
            value={selectedLoc?.id}
            placeholder="Select and Add"
            onChange={(e) => {
              setSelectedLoc(
                searchResult.find((l) => l.id == Number(e.target.value))
              )
            }}
          >
            {searchResult.map((s) => (
              <option value={s.id} key={s.id}>
                {getLocName(s)}
              </option>
            ))}
          </select>
          <div className="rounded bg-primary-d1 p-2 shadow-md hover:bg-primary-d2 dark:bg-primary-l1 dark:hover:bg-primary-l2 lg:p-2.5">
            <SvgAdd
              className="flex h-5 w-5 fill-white dark:fill-black lg:h-6 lg:w-6"
              onClick={() => {
                if (selectedLoc?.id && !props.input.includes(selectedLoc?.id)) {
                  props.setInput([...props.input, selectedLoc.id])
                  props.error != '' && props.setError('')
                }
              }}
            />
          </div>
        </div>
      </div>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-y-auto pt-2">
        {props.input.map((e) => (
          <div
            key={e}
            className={`flex max-h-min w-full items-center justify-between rounded bg-white p-3 text-black shadow-md dark:bg-black dark:text-white lg:p-4`}
          >
            <TextLabel
              label={getLocName(props.locationList.find((l) => l.id == e))}
            />
            <SvgClose
              className="flex h-4 w-4 fill-error-d1 dark:fill-error-l1 lg:h-5 lg:w-5"
              onClick={() => {
                props.setInput(props.input.filter((s) => s != e))
                props.error != '' && props.setError('')
              }}
            />
          </div>
        ))}
      </div>
      <ErrorSubTextLabel label={props.error} />
    </>
  )
}
