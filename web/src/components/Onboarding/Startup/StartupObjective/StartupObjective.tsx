import { useState } from 'react'

import CloseIcon from 'public/icons/close.svg'
import SearchIcon from 'public/icons/search.svg'

import { SmallTertiaryFilledButton } from 'src/components/Button/Button'
import { ErrorSubTextLabel, TextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/onboardingConsts'
import { StartupStepsInfoList } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingData'

import { StartupStepFooter } from '../../StepFooter'
import { StartupStepHeader } from '../../StepHeader'

const locationData = require('../../locationData.json')

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

const StartupObjective = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

  //States for step 1
  const [preferredInvestorLevels, setPreferredInvestorLevels] = useState<
    string[]
  >([])
  const [error1, setError1] = useState<string>(' ')

  //States for step 2
  const [preferredLocations, setPreferredLocations] = useState<string[]>([])
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
          <ObjectiveInvestors
            preferredInvestorLevels={preferredInvestorLevels}
            setPreferredInvestorLevels={setPreferredInvestorLevels}
            error1={error1}
            setError1={setError1}
          />
        )}
        {step == 2 && (
          <ObjectiveLocations
            preferredLocations={preferredLocations}
            setPreferredLocations={setPreferredLocations}
            error2={error2}
            setError2={setError2}
          />
        )}
        {step == 3 && (
          <ObjectiveTimelines
            expectedTimeline={expectedTimeline}
            setExpectedTimeline={setExpectedTimeline}
            error3={error3}
            setError3={setError3}
          />
        )}
        {step == 4 && (
          <ObjectiveReturns
            promisingReturns={promisingReturns}
            setPromisingReturns={setPromisingReturns}
            error4={error4}
            setError4={setError4}
          />
        )}
        {step == 5 && (
          <ObjectiveGoals
            platformGoal={platformGoal}
            setPlatformGoal={setPlatformGoal}
            error5={error5}
            setError5={setError5}
          />
        )}
        {step == 6 && (
          <ObjectiveSources
            referSource={referSource}
            setReferSource={setReferSource}
            error6={error6}
            setError6={setError6}
          />
        )}
        {step == 7 && (
          <ObjectivePitch
            pitchDeckURL={pitchDeckURL}
            setPitchDeckURL={setPitchDeckURL}
            error7={error7}
            setError7={setError7}
          />
        )}
        {step == 8 && (
          <ObjectiveDemo
            demoURL1={demoURL1}
            setDemoURL1={setDemoURL1}
            demoURL2={demoURL2}
            setDemoURL2={setDemoURL2}
            demoURL3={demoURL3}
            setDemoURL3={setDemoURL3}
            error8={error8}
            setError8={setError8}
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
export default StartupObjective

const Divider = () => {
  return <div className="h-2"></div>
}

//TODO: Update investor level options as per DB enum
const levelOptions = [
  'NOVICE',
  'INTERMEDIATE',
  'EXPERIENCED',
  'PROFESSIONAL',
  'SEASONED',
]
type ObjectiveInvestorsProps = {
  preferredInvestorLevels: string[]
  setPreferredInvestorLevels: React.Dispatch<React.SetStateAction<string[]>>
  error1: string
  setError1: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveInvestors = (props: ObjectiveInvestorsProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {levelOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.preferredInvestorLevels.includes(e)
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              if (props.preferredInvestorLevels.includes(e)) {
                props.setPreferredInvestorLevels(
                  props.preferredInvestorLevels.filter((s) => s != e)
                )
              } else {
                props.setPreferredInvestorLevels([
                  ...props.preferredInvestorLevels,
                  e,
                ])
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

//Get all Locations
type CityDataType = { city: string; lat: number; long: number }
const locationList: string[] = Object.keys(locationData)
Object.keys(locationData).forEach((state: string) => {
  locationData[state].forEach((element: CityDataType) => {
    // if (!locationList.includes(element.city)) {
    locationList.push(`${element.city} (${state})`)
    // }
  })
})

type ObjectiveLocationsProps = {
  preferredLocations: string[]
  setPreferredLocations: React.Dispatch<React.SetStateAction<string[]>>
  error2: string
  setError2: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveLocations = (props: ObjectiveLocationsProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResult, setSearchResult] = useState<string[]>([])
  const [selectedLoc, setSelectedLoc] = useState<string>('')

  return (
    <>
      <div className="flex w-full flex-col items-center justify-between gap-2 border-2 border-tertiary p-2 lg:p-4 ">
        <div className="flex w-full items-center justify-between gap-2 ">
          <input
            className={
              ' w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none  disabled:border-none disabled:bg-black-l4 dark:border-white-d2  dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2   lg:px-4 lg:py-2 lg:text-b1'
            }
            value={searchTerm}
            placeholder="Search location"
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            type={'text'}
          />
          <div className="rounded-full bg-tertiary p-2 shadow-md hover:bg-tertiary-d1">
            <SearchIcon
              className="flex h-5 w-5 fill-white lg:h-6 lg:w-6"
              onClick={() => {
                setSearchResult(
                  locationList.filter((l) => l.includes(searchTerm))
                )
                setSelectedLoc(
                  locationList.filter((l) => l.includes(searchTerm))[0]
                )
              }}
            />
          </div>
        </div>
        <div className="flex w-full items-center justify-between gap-2">
          <select
            className={
              ' w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none  disabled:border-none disabled:bg-black-l4 dark:border-white-d2  dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2    lg:px-4 lg:py-2 lg:text-b1'
            }
            value={selectedLoc}
            placeholder="Select and Add"
            onChange={(e) => {
              setSelectedLoc(e.target.value)
            }}
          >
            {searchResult.map((s) => (
              <option value={s} key={s}>
                {s}
              </option>
            ))}
          </select>
          <SmallTertiaryFilledButton
            label="ADD"
            action={() => {
              if (
                !props.preferredLocations.includes(selectedLoc) &&
                selectedLoc != ''
              ) {
                props.setPreferredLocations([
                  ...props.preferredLocations,
                  selectedLoc,
                ])
                props.error2 != '' && props.setError2('')
              }
            }}
          />
        </div>
      </div>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll pt-2">
        {props.preferredLocations.map((e) => (
          <div
            key={e}
            className={`flex max-h-min w-full items-center justify-between rounded-sm bg-white px-5 py-3 text-black shadow-md dark:bg-black-l1 dark:text-white lg:px-6 lg:py-4`}
          >
            <TextLabel label={e} />
            <CloseIcon
              className="flex h-4 w-4 fill-error dark:fill-error-l1 lg:h-5 lg:w-5"
              onClick={() => {
                props.setPreferredLocations(
                  props.preferredLocations.filter((s) => s != e)
                )
                props.error2 != '' && props.setError2('')
              }}
            ></CloseIcon>
          </div>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error2} />
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
type ObjectiveTimelinesProps = {
  expectedTimeline: string
  setExpectedTimeline: React.Dispatch<React.SetStateAction<string>>
  error3: string
  setError3: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveTimelines = (props: ObjectiveTimelinesProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {timelineOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.expectedTimeline
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setExpectedTimeline(e)
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
type ObjectiveReturnsProps = {
  promisingReturns: string
  setPromisingReturns: React.Dispatch<React.SetStateAction<string>>
  error4: string
  setError4: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveReturns = (props: ObjectiveReturnsProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {returnsOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.promisingReturns
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              props.setPromisingReturns(e)
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

//TODO: Update goals options as per DB enum
const goalsOptions = [
  'RAISING_FUNDS',
  'EXPLORING',
  'CONNECTING',
  'GETTING_ADVICE',
]
type ObjectiveGoalsProps = {
  platformGoal: string[]
  setPlatformGoal: React.Dispatch<React.SetStateAction<string[]>>
  error5: string
  setError5: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveGoals = (props: ObjectiveGoalsProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {goalsOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.platformGoal.includes(e)
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              if (props.platformGoal.includes(e)) {
                props.setPlatformGoal(props.platformGoal.filter((s) => s != e))
              } else {
                props.setPlatformGoal([...props.platformGoal, e])
              }
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

//TODO: Update sources options as per DB enum
const sourcesOptions = [
  'WORD_OF_MOUTH',
  'SOCIAL_MEDIA',
  'BROWSING',
  'REFERRAL',
  'ADVERTISEMENT',
  'OTHER',
]
type ObjectiveSourcesProps = {
  referSource: string[]
  setReferSource: React.Dispatch<React.SetStateAction<string[]>>
  error6: string
  setError6: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveSources = (props: ObjectiveSourcesProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {sourcesOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.referSource.includes(e)
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1 dark:hover:bg-tertiary-l1'
            }`}
            onClick={() => {
              if (props.referSource.includes(e)) {
                props.setReferSource(props.referSource.filter((s) => s != e))
              } else {
                props.setReferSource([...props.referSource, e])
              }
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

type ObjectivePitchProps = {
  pitchDeckURL: string
  setPitchDeckURL: React.Dispatch<React.SetStateAction<string>>
  error7: string
  setError7: React.Dispatch<React.SetStateAction<string>>
}
const ObjectivePitch = (props: ObjectivePitchProps) => {
  return (
    <>
      <input
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.pitchDeckURL}
        placeholder="Pitch Deck URL"
        onChange={(e) => {
          props.setPitchDeckURL(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
        type={'url'}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error7} />
    </>
  )
}

type ObjectiveDemoProps = {
  demoURL1: string
  setDemoURL1: React.Dispatch<React.SetStateAction<string>>
  demoURL2: string
  setDemoURL2: React.Dispatch<React.SetStateAction<string>>
  demoURL3: string
  setDemoURL3: React.Dispatch<React.SetStateAction<string>>
  error8: string
  setError8: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveDemo = (props: ObjectiveDemoProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.demoURL1}
        rows={2}
        placeholder="URL 1"
        onChange={(e) => {
          props.setDemoURL1(e.target.value)
          props.error8 != ' ' && props.setError8(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.demoURL2}
        rows={2}
        placeholder="URL 2"
        onChange={(e) => {
          props.setDemoURL2(e.target.value)
          props.error8 != ' ' && props.setError8(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.demoURL3}
        rows={2}
        placeholder="URL 3"
        onChange={(e) => {
          props.setDemoURL3(e.target.value)
          props.error8 != ' ' && props.setError8(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error8} />
    </>
  )
}
