import { useState } from 'react'

import CloseIcon from 'public/icons/close.svg'
import SearchIcon from 'public/icons/search.svg'

import { SmallPrimaryFilledButton } from 'src/components/Button/Button'
import { ErrorSubTextLabel, TextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/onboardingConsts'
import { InvestorStepsInfoList } from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingData'

import { InvestorStepFooter } from '../../StepFooter'
import { InvestorStepHeader } from '../../StepHeader'

const locationData = require('../../locationData.json')

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

const InvestorObjective = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = InvestorStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

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
  const [preferredLocations, setPreferredLocations] = useState<string[]>([])
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
      <InvestorStepHeader
        currentStepInfo={currentStepInfo}
        currentStepNumber={step}
      />
      <div className="shrink-3 flex w-full flex-grow flex-col items-center justify-center overflow-scroll rounded-sm  bg-white-d2/20 p-2  dark:bg-black-l2/20">
        {step == 1 && (
          <ObjectiveCapital
            preferredAmountToInvest={preferredAmountToInvest}
            setPreferredAmountToInvest={setPreferredAmountToInvest}
            error1={error1}
            setError1={setError1}
          />
        )}
        {step == 2 && (
          <ObjectiveStages
            preferredFundingStages={preferredFundingStages}
            setPreferredFundingStages={setPreferredFundingStages}
            error2={error2}
            setError2={setError2}
          />
        )}
        {step == 3 && (
          <ObjectiveSizes
            preferredStartupTeamSizes={preferredStartupTeamSizes}
            setPreferredStartupTeamSizes={setPreferredStartupTeamSizes}
            error3={error3}
            setError3={setError3}
          />
        )}
        {step == 4 && (
          <ObjectiveTimelines
            preferredTimelines={preferredTimelines}
            setPreferredTimelines={setPreferredTimelines}
            error4={error4}
            setError4={setError4}
          />
        )}
        {step == 5 && (
          <ObjectiveApetite
            riskApetite={riskApetite}
            setRiskApetite={setRiskApetite}
            error5={error5}
            setError5={setError5}
          />
        )}
        {step == 6 && (
          <ObjectiveSectors
            preferredSectors={preferredSectors}
            setPreferredSectors={setPreferredSectors}
            error6={error6}
            setError6={setError6}
          />
        )}
        {step == 7 && (
          <ObjectiveLocations
            preferredLocations={preferredLocations}
            setPreferredLocations={setPreferredLocations}
            error7={error7}
            setError7={setError7}
          />
        )}
        {step == 8 && (
          <ObjectiveGoals
            platformGoal={platformGoal}
            setPlatformGoal={setPlatformGoal}
            error8={error8}
            setError8={setError8}
          />
        )}
        {step == 9 && (
          <ObjectiveSources
            referSource={referSource}
            setReferSource={setReferSource}
            error9={error9}
            setError9={setError9}
          />
        )}
      </div>
      <InvestorStepFooter
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
export default InvestorObjective

const Divider = () => {
  return <div className="h-2"></div>
}

//TODO: Update amount options as per DB enum
const amountOptions = [
  'LESS_THAN_ONE_LAC',
  'ONE_TO_FIVE_LACS',
  'FIVE_TO_TWENTY_LACS',
  'TWENTY_LACS_TO_ONE_CRORE',
  'MORE_THAN_1_CRORE',
]
type ObjectiveCapitalProps = {
  preferredAmountToInvest: string
  setPreferredAmountToInvest: React.Dispatch<React.SetStateAction<string>>
  error1: string
  setError1: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveCapital = (props: ObjectiveCapitalProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {amountOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.preferredAmountToInvest
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1 dark:hover:bg-primary-l1'
            }`}
            onClick={() => {
              props.setPreferredAmountToInvest(e)
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
type ObjectiveStagesProps = {
  preferredFundingStages: string[]
  setPreferredFundingStages: React.Dispatch<React.SetStateAction<string[]>>
  error2: string
  setError2: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveStages = (props: ObjectiveStagesProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {stageOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.preferredFundingStages.includes(e)
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1 dark:hover:bg-primary-l1'
            }`}
            onClick={() => {
              if (props.preferredFundingStages.includes(e)) {
                props.setPreferredFundingStages(
                  props.preferredFundingStages.filter((s) => s != e)
                )
              } else {
                props.setPreferredFundingStages([
                  ...props.preferredFundingStages,
                  e,
                ])
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

//TODO: Update teamsize options as per DB enum
const teamSizeOptions = [
  'ONE',
  'BETWEEN_1_AND_10',
  'BETWEEN_10_AND_50',
  'BETWEEN_50_AND_200',
  'BETWEEN_200_AND_1000',
  'OVER_1000',
]
type ObjectiveSizesProps = {
  preferredStartupTeamSizes: string[]
  setPreferredStartupTeamSizes: React.Dispatch<React.SetStateAction<string[]>>
  error3: string
  setError3: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveSizes = (props: ObjectiveSizesProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {teamSizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.preferredStartupTeamSizes.includes(e)
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1 dark:hover:bg-primary-l1'
            }`}
            onClick={() => {
              if (props.preferredStartupTeamSizes.includes(e)) {
                props.setPreferredStartupTeamSizes(
                  props.preferredStartupTeamSizes.filter((s) => s != e)
                )
              } else {
                props.setPreferredStartupTeamSizes([
                  ...props.preferredStartupTeamSizes,
                  e,
                ])
              }
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
  preferredTimelines: string[]
  setPreferredTimelines: React.Dispatch<React.SetStateAction<string[]>>
  error4: string
  setError4: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveTimelines = (props: ObjectiveTimelinesProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {timelineOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.preferredTimelines.includes(e)
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1 dark:hover:bg-primary-l1'
            }`}
            onClick={() => {
              if (props.preferredTimelines.includes(e)) {
                props.setPreferredTimelines(
                  props.preferredTimelines.filter((s) => s != e)
                )
              } else {
                props.setPreferredTimelines([...props.preferredTimelines, e])
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

//TODO: Update apetite options as per DB enum
const apetiteOptions = ['LOW', 'MEDIUM', 'HIGH']
type ObjectiveApetiteProps = {
  riskApetite: string
  setRiskApetite: React.Dispatch<React.SetStateAction<string>>
  error5: string
  setError5: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveApetite = (props: ObjectiveApetiteProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {apetiteOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.riskApetite
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1 dark:hover:bg-primary-l1'
            }`}
            onClick={() => {
              props.setRiskApetite(e)
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
type ObjectiveSectorsProps = {
  preferredSectors: string[]
  setPreferredSectors: React.Dispatch<React.SetStateAction<string[]>>
  error6: string
  setError6: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveSectors = (props: ObjectiveSectorsProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {sectorOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.preferredSectors.includes(e)
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1 dark:hover:bg-primary-l1'
            }`}
            onClick={() => {
              if (props.preferredSectors.includes(e)) {
                props.setPreferredSectors(
                  props.preferredSectors.filter((s) => s != e)
                )
              } else {
                props.setPreferredSectors([...props.preferredSectors, e])
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
  error7: string
  setError7: React.Dispatch<React.SetStateAction<string>>
}
const ObjectiveLocations = (props: ObjectiveLocationsProps) => {
  const [searchTerm, setSearchTerm] = useState<string>('')
  const [searchResult, setSearchResult] = useState<string[]>([])
  const [selectedLoc, setSelectedLoc] = useState<string>('')

  return (
    <>
      <div className="flex w-full flex-col items-center justify-between gap-2 border-2 border-primary p-2 lg:p-4 ">
        <div className="flex w-full items-center justify-between gap-2 ">
          <input
            className={
              ' w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary focus:outline-none  disabled:border-none disabled:bg-black-l4 dark:border-white-d2  dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3 dark:focus:border-primary-l2   lg:px-4 lg:py-2 lg:text-b1'
            }
            value={searchTerm}
            placeholder="Search location"
            onChange={(e) => {
              setSearchTerm(e.target.value)
            }}
            type={'text'}
          />
          <div className="rounded-full bg-primary p-2 shadow-md hover:bg-primary-d1">
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
              ' w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary focus:outline-none  disabled:border-none disabled:bg-black-l4 dark:border-white-d2  dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3 dark:focus:border-primary-l2    lg:px-4 lg:py-2 lg:text-b1'
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
          <SmallPrimaryFilledButton
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
                props.error7 != '' && props.setError7('')
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
                props.error7 != '' && props.setError7('')
              }}
            ></CloseIcon>
          </div>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error7} />
    </>
  )
}

//TODO: Update goals options as per DB enum
const goalsOptions = [
  'INVESTING',
  'CONNECTING',
  'LEARNING',
  'EXPLORING',
  'CONSULTING',
  'RESEARCHING',
]
type ObjectiveGoalsProps = {
  platformGoal: string[]
  setPlatformGoal: React.Dispatch<React.SetStateAction<string[]>>
  error8: string
  setError8: React.Dispatch<React.SetStateAction<string>>
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
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1 dark:hover:bg-primary-l1'
            }`}
            onClick={() => {
              if (props.platformGoal.includes(e)) {
                props.setPlatformGoal(props.platformGoal.filter((s) => s != e))
              } else {
                props.setPlatformGoal([...props.platformGoal, e])
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
  error9: string
  setError9: React.Dispatch<React.SetStateAction<string>>
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
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1 dark:hover:bg-primary-l1'
            }`}
            onClick={() => {
              if (props.referSource.includes(e)) {
                props.setReferSource(props.referSource.filter((s) => s != e))
              } else {
                props.setReferSource([...props.referSource, e])
              }
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
