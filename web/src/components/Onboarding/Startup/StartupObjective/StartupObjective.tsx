import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import SvgAdd from 'src/components/Icon/Add'
import SvgClose from 'src/components/Icon/Close'
import SvgSearch from 'src/components/Icon/Search'
import { ErrorSubTextLabel, TextLabel } from 'src/components/Label/Label'
import StartupMultipleChoiceOption from 'src/components/Onboarding/Startup/comps/StartupMultipleChoiceOption/StartupMultipleChoiceOption'
import StartupSingleChoiceOption from 'src/components/Onboarding/Startup/comps/StartupSingleChoiceOption/StartupSingleChoiceOption'
import StartupSingleTextInput from 'src/components/Onboarding/Startup/comps/StartupSingleTextInput/StartupSingleTextInput'
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
  Location,
} from 'src/lib/onboardingConsts'
import { StartupStepsInfoList } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingData'

import StartupTripleTextArea from '../comps/StartupTripleTextArea/StartupTripleTextArea'

/*Info to be created and saved in StartupObjective table:
  preferredInvestorLevels    InvestorLevel[]
  preferredLocations         Int[] //from Location table
  expectedTimeline           TimelineRange?
  promisingReturns           ReturnsRange?
  platformGoal               StartupPlatformGoal[]
  referSource                ReferSource[]
  pitchDeckURL               String?
  demoURL                    String[]
*/

const GET_ENUM_QUERY = gql`
  query enumQueryObjective {
    level: __type(name: "InvestorLevel") {
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
    returns: __type(name: "ReturnsRange") {
      name
      enumValues {
        name
      }
    }
    goal: __type(name: "StartupPlatformGoal") {
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

const GET_LOCATION_QUERY = gql`
  query getLocations {
    locations {
      id
      state
      city
    }
  }
`

const STARTUP_OBJECTIVE_MUTATION = gql`
  mutation createStartupObjective($input: CreateStartupObjectiveInput!) {
    createStartupObjective(input: $input) {
      id
    }
  }
`

const StartupObjective = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const [skipData, setSkipData] = useState<boolean[]>([])

  const [levelOptions, setLevelOptions] = useState<string[]>([])
  const [timelineOptions, setTimelineOptions] = useState<string[]>([])
  const [returnsOptions, setReturnsOptions] = useState<string[]>([])
  const [goalOptions, setGoalOptions] = useState<string[]>([])
  const [sourceOptions, setSourceOptions] = useState<string[]>([])
  const [locations, setLocations] = useState([])

  const { currentUser } = useAuth()
  const [getEnumData] = useLazyQuery(GET_ENUM_QUERY)
  const [getLocationData] = useLazyQuery(GET_LOCATION_QUERY)
  const [createStartupObjective] = useMutation(STARTUP_OBJECTIVE_MUTATION)

  useEffect(() => {
    const getData = async () => {
      await getEnumData().then((d) => {
        setLevelOptions(getEnumValues(d.data.level.enumValues))
        setTimelineOptions(getEnumValues(d.data.timeline.enumValues))
        setReturnsOptions(getEnumValues(d.data.returns.enumValues))
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
  const [preferredInvestorLevels, setPreferredInvestorLevels] = useState<
    string[]
  >([])
  const [error1, setError1] = useState<string>(' ')

  //States for step 2
  const [preferredLocations, setPreferredLocations] = useState<number[]>([])
  const [error2, setError2] = useState<string>(' ')

  //States for step 3
  const [expectedTimeline, setExpectedTimeline] = useState<string>('')
  const [error3, setError3] = useState<string>(' ')

  //States for step 4
  const [promisingReturns, setPromisingReturns] = useState<string>('')
  const [error4, setError4] = useState<string>(' ')

  //States for step 5
  const [platformGoal, setPlatformGoal] = useState<string[]>([])
  const [error5, setError5] = useState<string>(' ')

  //States for step 6
  const [referSource, setReferSource] = useState<string[]>([])
  const [error6, setError6] = useState<string>(' ')

  //States for step 7
  const [pitchDeckURL, setPitchDeckURL] = useState<string>('')
  const [error7, setError7] = useState<string>(' ')

  //States for step 8
  const [demoURL1, setDemoURL1] = useState<string>('')
  const [demoURL2, setDemoURL2] = useState<string>('')
  const [demoURL3, setDemoURL3] = useState<string>('')
  const [error8, setError8] = useState<string>(' ')

  //Always check UI data before proceeding to next step
  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (preferredInvestorLevels.length == 0) {
        setError1('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (preferredLocations.length == 0) {
        setError2('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (expectedTimeline == '') {
        setError3('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (promisingReturns == '') {
        setError4('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (platformGoal.length == 0) {
        setError5('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 6
    else if (step == 6) {
      if (referSource.length == 0) {
        setError6('Please select atleast an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (pitchDeckURL == '') {
        setError7('Please provide an URL to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 8
    else if (step == 8) {
      if (demoURL1.length < 5 && demoURL2.length < 5 && demoURL3.length < 5) {
        setError8('Please provide atleast 1 proper URL to save')
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
    }
  }

  //Match skip data and save in DB
  const saveData = async (skippedLast: boolean) => {
    await createStartupObjective({
      variables: {
        input: {
          id: currentUser?.id,
          preferredInvestorLevels: skipData[0] ? [] : preferredInvestorLevels,
          preferredLocations: skipData[1] ? [] : preferredLocations,
          expectedTimeline: expectedTimeline,
          promisingReturns: promisingReturns,
          platformGoal: skipData[4] ? [] : platformGoal,
          referSource: skipData[5] ? [] : referSource,
          pitchDeckURL: skipData[6] ? null : pitchDeckURL,
          demoURL: skippedLast ? [] : [demoURL1, demoURL2, demoURL3],
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
            input={preferredInvestorLevels}
            setInput={setPreferredInvestorLevels}
            options={levelOptions}
            error={error1}
            setError={setError1}
          />
        )}
        {step == 2 && (
          <ObjectiveLocations
            input={preferredLocations}
            setInput={setPreferredLocations}
            locationList={locations}
            error={error2}
            setError={setError2}
          />
        )}
        {step == 3 && (
          <StartupSingleChoiceOption
            input={expectedTimeline}
            setInput={setExpectedTimeline}
            options={timelineOptions}
            error={error3}
            setError={setError3}
          />
        )}
        {step == 4 && (
          <StartupSingleChoiceOption
            input={promisingReturns}
            setInput={setPromisingReturns}
            options={returnsOptions}
            error={error4}
            setError={setError4}
          />
        )}
        {step == 5 && (
          <StartupMultipleChoiceOption
            input={platformGoal}
            setInput={setPlatformGoal}
            options={goalOptions}
            error={error5}
            setError={setError5}
          />
        )}
        {step == 6 && (
          <StartupMultipleChoiceOption
            input={referSource}
            setInput={setReferSource}
            options={sourceOptions}
            error={error6}
            setError={setError6}
          />
        )}
        {step == 7 && (
          <StartupSingleTextInput
            input={pitchDeckURL}
            setInput={setPitchDeckURL}
            placeholder="Pitch Deck URL"
            error={error7}
            setError={setError7}
          />
        )}
        {step == 8 && (
          <StartupTripleTextArea
            input1={demoURL1}
            setInput1={setDemoURL1}
            placeholder1="Resource URL 1"
            input2={demoURL2}
            setInput2={setDemoURL2}
            placeholder2="Resource URL 2"
            input3={demoURL3}
            setInput3={setDemoURL3}
            placeholder3="Resource URL 3"
            error={error8}
            setError={setError8}
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
export default StartupObjective

type ObjectiveLocationsProps = {
  input: number[]
  setInput: React.Dispatch<React.SetStateAction<number[]>>
  error: string
  locationList: Location[]
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
      <div className="flex w-full flex-col items-center justify-between gap-2 border-2 border-tertiary-d1 p-2 dark:border-tertiary-l1 lg:p-4 ">
        <div className="flex w-full items-center justify-between gap-2 ">
          <input
            className={
              'w-full rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
            }
            value={searchTerm}
            placeholder="Search location"
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            type={'text'}
          />
          <div className="rounded bg-tertiary-d1 p-2 shadow-md hover:bg-tertiary-d2 dark:bg-tertiary-l1 dark:hover:bg-tertiary-l2 lg:p-2.5">
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
              'w-full rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
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
          <div className="rounded bg-tertiary-d1 p-2 shadow-md hover:bg-tertiary-d2 dark:bg-tertiary-l1 dark:hover:bg-tertiary-l2 lg:p-2.5">
            <SvgAdd
              className="flex h-5 w-5 fill-white dark:fill-black lg:h-6 lg:w-6"
              onClick={() => {
                if (selectedLoc?.id) {
                  if (!props.input.includes(selectedLoc?.id)) {
                    props.setInput([...props.input, selectedLoc.id])
                    props.error != '' && props.setError('')
                  } else {
                    props.setError('Duplicate entry')
                  }
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
