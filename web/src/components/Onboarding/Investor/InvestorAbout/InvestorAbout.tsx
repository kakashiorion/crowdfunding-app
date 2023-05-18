import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { ErrorSubTextLabel } from 'src/components/Label/Label'
import InvestorMultipleChoiceOption from 'src/components/Onboarding/Investor/comps/InvestorMultipleChoiceOption/InvestorMultipleChoiceOption'
import InvestorSingleChoiceOption from 'src/components/Onboarding/Investor/comps/InvestorSingleChoiceOption/InvestorSingleChoiceOption'
import InvestorSingleTextInput from 'src/components/Onboarding/Investor/comps/InvestorSingleTextInput/InvestorSingleTextInput'
import InvestorTripleTextInput from 'src/components/Onboarding/Investor/comps/InvestorTripleTextInput/InvestorTripleTextInput'
import { InvestorStepFooter } from 'src/components/Onboarding/StepFooter'
import { InvestorStepHeader } from 'src/components/Onboarding/StepHeader'
import {
  OnboardingMainProps,
  back,
  daysMapping,
  getEnumValues,
  Location,
  next,
  onboardingFrameClassName,
  onboardingSubFrameClassName,
  skip,
} from 'src/lib/onboardingConsts'
import { InvestorStepsInfoList } from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingData'

/*Info to be created and saved in Investor table:
1  Name
2  DOB?
3  Location
4 LinkedIn?
5  Website?
6 EducationBG?
7 yearsOfWorkEx?
8  numberOfCompanies?
9  workedInSectors[]?
*/

const GET_ENUM_QUERY = gql`
  query enumQueryAbout {
    education: __type(name: "EducationBG") {
      name
      enumValues {
        name
      }
    }
    size: __type(name: "SizeRange") {
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
  }
`

const INVESTOR_ABOUT_MUTATION = gql`
  mutation createInvestor($input: CreateInvestorInput!) {
    createInvestor(input: $input) {
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

const InvestorAbout = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = InvestorStepsInfoList[props.currentSection - 1].steps

  //Capture if the steps were skipped
  const [skipData, setSkipData] = useState<boolean[]>([])

  const [educationOptions, setEducationOptions] = useState<string[]>([])
  const [sizeOptions, setSizeOptions] = useState<string[]>([])
  const [sectorOptions, setSectorOptions] = useState<string[]>([])
  const [locations, setLocations] = useState<Location[]>([])

  const { currentUser } = useAuth()
  const [getEnumData] = useLazyQuery(GET_ENUM_QUERY)
  const [getLocationData] = useLazyQuery(GET_LOCATION_QUERY)
  const [createInvestor] = useMutation(INVESTOR_ABOUT_MUTATION)

  useEffect(() => {
    const getData = async () => {
      await getEnumData().then((d) => {
        setEducationOptions(getEnumValues(d.data.education.enumValues))
        setSizeOptions(getEnumValues(d.data.size.enumValues))
        setSectorOptions(getEnumValues(d.data.sector.enumValues))
      })
      await getLocationData().then((d) => {
        setLocations(d.data.locations)
      })
    }
    getData()
  }, [getEnumData, getLocationData])

  //States for step 1
  const [enteredName, setEnteredName] = useState('')
  const [error1, setError1] = useState(' ')

  //States for step 2
  const [day, setDay] = useState('')
  const [month, setMonth] = useState('')
  const [year, setYear] = useState('')
  const [error2, setError2] = useState(' ')

  //States for step 3
  const [locationID, setLocationID] = useState<number>(0)
  const [error3, setError3] = useState(' ')

  //States for step 4
  const [enteredLIUrl, setEnteredLIUrl] = useState('')
  const [error4, setError4] = useState(' ')

  // States for step 5
  const [enteredWebUrl, setEnteredWebUrl] = useState('')
  const [error5, setError5] = useState(' ')

  //States for step 6
  const [enteredEduBG, setEnteredEduBG] = useState('')
  const [error6, setError6] = useState(' ')

  //States for step 7
  const [enteredWorkEx, setEnteredWorkEx] = useState('')
  const [error7, setError7] = useState(' ')

  //States for step 8
  const [enteredNumCom, setEnteredNumCom] = useState('')
  const [error8, setError8] = useState(' ')

  //States for step 9
  const [enteredSectors, setEnteredSectors] = useState<string[]>([])
  const [error9, setError9] = useState(' ')

  //Always check UI data before proceeding to next step
  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (enteredName.length < 5) {
        setError1('Please provide a proper name (atleast 5 characters)')
        return false
      } else if (enteredName.length > 25) {
        setError1('Please use a shorter version (upto 25 characters)')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (Number(year) > 2006) {
        setError2('Must be atleast 18 years old!')
        return false
      } else if (Number(year) < 1930) {
        setError2(`Invalid year`)
        return false
      } else if (Number(month) > 12 || Number(month) <= 0) {
        setError2('Invalid month')
        return false
      } else if (
        Number(day) > daysMapping[Number(month) - 1] ||
        Number(day) <= 0
      ) {
        setError2('Invalid day')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (locationID == 0) {
        setError3('Location is required.. You can provide the nearest city')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (enteredLIUrl == '') {
        setError4('Please provide a URL to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (enteredWebUrl == '') {
        setError5('Please provide a URL to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 6
    else if (step == 6) {
      if (enteredEduBG == '') {
        setError6('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (enteredWorkEx == '') {
        setError7('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 8
    else if (step == 8) {
      if (enteredNumCom == '') {
        setError8('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 9
    else if (step == 9) {
      if (enteredSectors.length == 0) {
        setError9('Please select atleast an option to save')
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
    }
  }

  //Match skip data and save in DB
  const saveData = async (skippedLast: boolean) => {
    await createInvestor({
      variables: {
        input: {
          id: currentUser?.id,
          name: enteredName,
          dateOfBirth: skipData[1]
            ? null
            : new Date(Number(year), Number(month) - 1, Number(day)),
          locationID: locationID,
          linkedInURL: skipData[3] ? null : enteredLIUrl,
          websiteURL: skipData[4] ? null : enteredWebUrl,
          eduBG: enteredEduBG,
          yearsOfWorkEx: enteredWorkEx,
          numberOfCompanies: enteredNumCom,
          workedInSectors: skippedLast ? [] : enteredSectors,
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
          <InvestorSingleTextInput
            input={enteredName}
            setInput={setEnteredName}
            placeholder="Your name"
            error={error1}
            setError={setError1}
          />
        )}
        {step == 2 && (
          <InvestorTripleTextInput
            input1={year}
            setInput1={setYear}
            placeholder1="YYYY"
            input2={month}
            setInput2={setMonth}
            placeholder2="MM"
            input3={day}
            setInput3={setDay}
            placeholder3="DD"
            error={error2}
            setError={setError2}
          />
        )}
        {step == 3 && (
          <AboutLocation
            locationID={locationID}
            setLocationID={setLocationID}
            locationList={locations}
            error={error3}
            setError={setError3}
          />
        )}
        {step == 4 && (
          <InvestorSingleTextInput
            input={enteredLIUrl}
            setInput={setEnteredLIUrl}
            placeholder="LinkedIn profile URL"
            error={error4}
            setError={setError4}
          />
        )}
        {step == 5 && (
          <InvestorSingleTextInput
            input={enteredWebUrl}
            setInput={setEnteredWebUrl}
            placeholder="Personal website URL"
            error={error5}
            setError={setError5}
          />
        )}
        {step == 6 && (
          <InvestorSingleChoiceOption
            input={enteredEduBG}
            setInput={setEnteredEduBG}
            options={educationOptions}
            error={error6}
            setError={setError6}
          />
        )}
        {step == 7 && (
          <InvestorSingleChoiceOption
            input={enteredWorkEx}
            setInput={setEnteredWorkEx}
            options={sizeOptions}
            error={error7}
            setError={setError7}
          />
        )}
        {step == 8 && (
          <InvestorSingleChoiceOption
            input={enteredNumCom}
            setInput={setEnteredNumCom}
            options={sizeOptions}
            error={error8}
            setError={setError8}
          />
        )}
        {step == 9 && (
          <InvestorMultipleChoiceOption
            input={enteredSectors}
            setInput={setEnteredSectors}
            options={sectorOptions}
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
export default InvestorAbout

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
          ' w-2/3 rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
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
          ' w-2/3 rounded border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
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
