import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { ErrorSubTextLabel } from 'src/components/Label/Label'
import StartupSingleTextArea from 'src/components/Onboarding/Startup/comps/StartupSingleTextArea/StartupSingleTextArea'
import StartupSingleTextInput from 'src/components/Onboarding/Startup/comps/StartupSingleTextInput/StartupSingleTextInput'
import StartupTripleTextInput from 'src/components/Onboarding/Startup/comps/StartupTripleTextInput/StartupTripleTextInput'
import { StartupStepFooter } from 'src/components/Onboarding/StepFooter'
import { StartupStepHeader } from 'src/components/Onboarding/StepHeader'
import {
  OnboardingMainProps,
  Location,
  Sector,
  daysMapping,
  back,
  next,
  onboardingFrameClassName,
  onboardingSubFrameClassName,
  skip,
} from 'src/lib/onboardingConsts'
import { StartupStepsInfoList } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingData'

/*Info to be created and saved in Startup table:
  name              String
  writeUp           String
  dateIncorporated  DateTime
  linkedInURL       String?
  websiteURL        String?
  locationID        Int //from Location table
  sectorCategoryID  Int //from SectorCategory table
*/

const STARTUP_ABOUT_MUTATION = gql`
  mutation createStartup($input: CreateStartupInput!) {
    createStartup(input: $input) {
      id
    }
  }
`

const GET_LOCATION_SECTOR_ID_QUERY = gql`
  query getLocationSectorData {
    locations: locations {
      id
      state
      city
    }
    sectors: sectorCategories {
      id
      sector
      category
    }
  }
`

const StartupAbout = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const [skipData, setSkipData] = useState<boolean[]>([])

  const { currentUser } = useAuth()
  const [createStartup] = useMutation(STARTUP_ABOUT_MUTATION)
  const [getLocationSectorData] = useLazyQuery(GET_LOCATION_SECTOR_ID_QUERY)
  const [locations, setLocations] = useState<Location[]>([])
  const [sectors, setSectors] = useState<Sector[]>([])

  useEffect(() => {
    const getData = async () => {
      await getLocationSectorData().then((d) => {
        setLocations(d.data.locations)
        setSectors(d.data.sectors)
      })
    }
    getData()
  }, [getLocationSectorData])

  //States for step 1
  const [name, setName] = useState<string>('')
  const [error1, setError1] = useState<string>(' ')

  //States for step 2
  const [writeUp, setWriteUp] = useState<string>('')
  const [error2, setError2] = useState<string>(' ')

  //States for step 3
  const [day, setDay] = useState<string>('')
  const [month, setMonth] = useState<string>('')
  const [year, setYear] = useState<string>('')
  const [error3, setError3] = useState<string>(' ')

  //States for step 4
  const [linkedInURL, setLinkedInURL] = useState<string>('')
  const [error4, setError4] = useState<string>(' ')

  // States for step 5
  const [websiteURL, setWebsiteURL] = useState<string>('')
  const [error5, setError5] = useState<string>(' ')

  //States for step 6
  const [locationID, setLocationID] = useState<number>(0)
  const [error6, setError6] = useState<string>(' ')

  //States for step 7
  const [sectorID, setSectorID] = useState<number>(0)
  const [error7, setError7] = useState<string>(' ')

  //Always check UI data before proceeding to next step
  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (name.length < 3) {
        setError1('Please provide a proper name (atleast 3 characters)')
        return false
      } else if (name.length > 25) {
        setError1('Please use a shorter version (upto 25 characters)')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (writeUp.length < 30) {
        setError2('Please provide a longer writeup (atleast 30 characters)')
        return false
      } else if (writeUp.length > 300) {
        setError2('Please provide a shorter writeup (upto 300 characters)')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (Number(year) > new Date().getFullYear()) {
        setError3('Future date selected!')
        return false
      } else if (Number(year) < 1980) {
        setError3(`Invalid year`)
        return false
      } else if (Number(month) > 12 || Number(month) <= 0) {
        setError3('Invalid month')
        return false
      } else if (
        Number(day) > daysMapping[Number(month) - 1] ||
        Number(day) <= 0
      ) {
        setError3('Invalid day')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (linkedInURL == '') {
        setError4('Please provide a URL to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (websiteURL == '') {
        setError5('Please provide a URL to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 6
    else if (step == 6) {
      if (locationID == 0) {
        setError6('Location is required.. You can provide the nearest city')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (sectorID == 0) {
        setError7('Please select the business sector and category')
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
    }
  }

  //Match skip data and save in DB
  const saveData = async (skippedLast: boolean) => {
    await createStartup({
      variables: {
        input: {
          id: currentUser?.id,
          name: name,
          writeUp: writeUp,
          dateIncorporated: new Date(
            Number(year),
            Number(month) - 1,
            Number(day)
          ),
          linkedInURL: skipData[3] ? null : linkedInURL,
          websiteURL: skipData[4] ? null : websiteURL,
          locationID: locationID,
          sectorCategoryID: skippedLast ? 0 : sectorID,
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
          <StartupSingleTextInput
            input={name}
            setInput={setName}
            placeholder={'Name of startup'}
            error={error1}
            setError={setError1}
          />
        )}
        {step == 2 && (
          <StartupSingleTextArea
            input={writeUp}
            setInput={setWriteUp}
            placeholder="Tell us about your startup in brief.."
            error={error2}
            setError={setError2}
          />
        )}
        {step == 3 && (
          <StartupTripleTextInput
            input1={year}
            setInput1={setYear}
            placeholder1="YYYY"
            input2={month}
            setInput2={setMonth}
            placeholder2="MM"
            input3={day}
            setInput3={setDay}
            placeholder3="DD"
            error={error3}
            setError={setError3}
          />
        )}
        {step == 4 && (
          <StartupSingleTextInput
            input={linkedInURL}
            setInput={setLinkedInURL}
            placeholder="LinkedIn URL (optional)"
            error={error4}
            setError={setError4}
          />
        )}
        {step == 5 && (
          <StartupSingleTextInput
            input={websiteURL}
            placeholder="Website URL (optional)"
            setInput={setWebsiteURL}
            error={error5}
            setError={setError5}
          />
        )}
        {step == 6 && (
          <AboutLocation
            locationID={locationID}
            setLocationID={setLocationID}
            locationList={locations}
            error={error6}
            setError={setError6}
          />
        )}
        {step == 7 && (
          <AboutSectorCategory
            sectorID={sectorID}
            setSectorID={setSectorID}
            sectorList={sectors}
            error={error7}
            setError={setError7}
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
export default StartupAbout

type AboutLocationProps = {
  locationID: number
  setLocationID: React.Dispatch<React.SetStateAction<number>>
  locationList: Location[]
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const AboutLocation = (props: AboutLocationProps) => {
  let states: string[] = []
  props.locationList.forEach((l) => {
    if (!states.includes(l.state)) {
      states.push(l.state)
    }
  })
  states = states.sort()

  const getCityList = (state: string | undefined) => {
    return props.locationList.filter((l) => l.state == state)
  }

  const [selectedState, setSelectedState] = useState(
    props.locationID == 0
      ? states[0]
      : props.locationList.find((l) => l.id == props.locationID)?.state
  )
  const [cityList, setCityList] = useState(
    getCityList(
      props.locationID == 0
        ? states[0]
        : props.locationList.find((l) => l.id == props.locationID)?.state
    )
  )
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <select
        name="states"
        id="states"
        className={
          'm-2 w-2/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
        }
        value={selectedState}
        onChange={(e) => {
          setSelectedState(e.target.value)
          setCityList(getCityList(e.target.value))
          props.setLocationID(cityList[0].id)
          props.error != ' ' && props.setError(' ')
        }}
      >
        {states.map((s) => (
          <option value={s} key={s}>
            {s}
          </option>
        ))}
      </select>
      <select
        name="cities"
        id="cities"
        className={
          'm-2 w-2/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
        }
        value={props.locationID}
        onChange={(e) => {
          props.setLocationID(
            props.locationList.find((l) => l.id == Number(e.target.value))
              ?.id ?? 0
          )
          props.error != ' ' && props.setError(' ')
        }}
      >
        {cityList.map((c) => (
          <option value={c.id} key={c.id}>
            {c.city}
          </option>
        ))}
      </select>
      <ErrorSubTextLabel label={props.error} />
    </div>
  )
}

type AboutSectorCategoryProps = {
  sectorID: number
  setSectorID: React.Dispatch<React.SetStateAction<number>>
  sectorList: Sector[]
  error: string
  setError: React.Dispatch<React.SetStateAction<string>>
}
const AboutSectorCategory = (props: AboutSectorCategoryProps) => {
  let sectors: string[] = []
  props.sectorList.forEach((l) => {
    if (!sectors.includes(l.sector)) {
      sectors.push(l.sector)
    }
  })
  sectors = sectors.sort()

  const getCategoryList = (sector: string | undefined) => {
    return props.sectorList.filter((l) => l.sector == sector)
  }

  const [selectedSector, setSelectedSector] = useState(
    props.sectorID == 0
      ? sectors[0]
      : props.sectorList.find((l) => l.id == props.sectorID)?.sector
  )
  const [categoryList, setCatergoryList] = useState(
    getCategoryList(
      props.sectorID == 0
        ? sectors[0]
        : props.sectorList.find((l) => l.id == props.sectorID)?.sector
    )
  )
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <select
        name="sectors"
        id="sectors"
        className={
          'm-2 w-2/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
        }
        value={selectedSector}
        onChange={(e) => {
          setSelectedSector(e.target.value)
          setCatergoryList(getCategoryList(e.target.value))
          props.setSectorID(categoryList[0].id)
          props.error != ' ' && props.setError(' ')
        }}
      >
        {sectors.map((s) => (
          <option value={s} key={s}>
            {s}
          </option>
        ))}
      </select>
      <select
        name="categories"
        id="categories"
        className={
          'm-2 w-2/3 rounded border-2 border-black-l2 bg-white px-4 py-2 text-center text-b2 text-tertiary-d1 placeholder:text-black-l4 focus:border-tertiary-d1 focus:outline-none dark:border-white-d2 dark:bg-black dark:text-tertiary-l1 dark:placeholder:text-white-d4 dark:focus:border-tertiary-l1 lg:px-5 lg:py-2.5 lg:text-b1'
        }
        value={props.sectorID != 0 ? props.sectorID : categoryList[0].id}
        onChange={(e) => {
          props.setSectorID(
            props.sectorList.find((l) => l.id == Number(e.target.value))?.id ??
              0
          )
          props.error != ' ' && props.setError(' ')
        }}
      >
        {categoryList.map((c) => (
          <option value={c.id} key={c.id}>
            {c.category}
          </option>
        ))}
      </select>
      <ErrorSubTextLabel label={props.error} />
    </div>
  )
}
