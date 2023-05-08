import { useState } from 'react'

import { ErrorSubTextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/onboardingConsts'
import { InvestorStepsInfoList } from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingConsts'

import { InvestorStepFooter } from '../../StepFooter'
import { InvestorStepHeader } from '../../StepHeader'

const locationData = require('../../locationData.json')

// const UPDATE_INVESTOR_MUTATION = gql`
//   mutation UpdateInvestorMutation($id: Int!, $input: UpdateInvestorInput!) {
//     updateInvestor(id: $id, input: $input) {
//       id
//       firstName
//       lastName
//       dateOfBirth
//       linkedInURL
//       websiteURL
//       locationID
//       eduBG
//       yearsOfWorkEx
//       numberOfCompanies
//       workedInSectors
//       createdAt
//       updatedAt
//     }
//   }
// `

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
const daysMapping = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const InvestorAbout = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = InvestorStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

  //States for step 1
  const [enteredName, setEnteredName] = useState('')
  const [nameError, setNameError] = useState(' ')

  //States for step 2
  const [enteredDay, setEnteredDay] = useState('')
  const [enteredMonth, setEnteredMonth] = useState('')
  const [enteredYear, setEnteredYear] = useState('')
  const [dobError, setDOBError] = useState(' ')

  //States for step 3
  const [enteredState, setEnteredState] = useState('')
  const [enteredCity, setEnteredCity] = useState('')
  const [locError, setLocError] = useState(' ')

  //States for step 4
  const [enteredLIUrl, setEnteredLIUrl] = useState('')
  const [urlError, setUrlError] = useState(' ')

  // States for step 5
  const [enteredWebUrl, setEnteredWebUrl] = useState('')
  const [webError, setWebError] = useState(' ')

  //States for step 6
  const [enteredEduBG, setEnteredEduBG] = useState('')
  const [eduError, setEduError] = useState(' ')

  //States for step 7
  const [enteredWorkEx, setEnteredWorkEx] = useState('')
  const [workError, setWorkError] = useState(' ')

  //States for step 8
  const [enteredNumCom, setEnteredNumCom] = useState('')
  const [numComError, setNumComError] = useState(' ')

  //States for step 9
  const [enteredSectors, setEnteredSectors] = useState<string[]>([])
  const [sectorError, setSectorError] = useState(' ')

  // const profileData = {
  //   enteredName,
  //   setEnteredName,
  //   enteredDOB,
  //   setEnteredDOB,
  // }

  //Always check UI data before proceeding to next step
  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (enteredName.length < 5) {
        setNameError('Please provide a proper name (atleast 5 characters)')
        return false
      } else if (enteredName.length > 25) {
        setNameError('Please use a shorter version (upto 25 characters)')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (Number(enteredYear) > 2006) {
        setDOBError('Must be atleast 18 years old!')
        return false
      } else if (Number(enteredYear) < 1930) {
        setDOBError(`Invalid year`)
        return false
      } else if (Number(enteredMonth) > 12 || Number(enteredMonth) <= 0) {
        setDOBError('Invalid month')
        return false
      } else if (
        Number(enteredDay) > daysMapping[Number(enteredMonth) - 1] ||
        Number(enteredDay) <= 0
      ) {
        setDOBError('Invalid day')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (
        enteredCity == '' ||
        enteredState == 'Select State' ||
        enteredCity == 'Select City'
      ) {
        setLocError('Location is required.. You can provide the nearest city')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (enteredLIUrl == '') {
        setUrlError('Please provide a URL to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (enteredWebUrl == '') {
        setWebError('Please provide a URL to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 6
    else if (step == 6) {
      if (enteredEduBG == '') {
        setEduError('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (enteredWorkEx == '') {
        setWorkError('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 8
    else if (step == 8) {
      if (enteredNumCom == '') {
        setNumComError('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 9
    else if (step == 9) {
      if (enteredSectors.length == 0) {
        setSectorError('Please select atleast an option to save')
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
      setNameError('')
    } else if (step == 2) {
      setDOBError('')
    } else if (step == 3) {
      setLocError('')
    } else if (step == 4) {
      setUrlError('')
    } else if (step == 5) {
      setWebError('')
    } else if (step == 6) {
      setEduError('')
    } else if (step == 7) {
      setWorkError('')
    } else if (step == 8) {
      setNumComError('')
    } else if (step == 9) {
      setSectorError('')
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
          <AboutName
            name={enteredName}
            setName={setEnteredName}
            nameError={nameError}
            setNameError={setNameError}
          />
        )}
        {step == 2 && (
          <AboutDOB
            day={enteredDay}
            setDay={setEnteredDay}
            month={enteredMonth}
            setMonth={setEnteredMonth}
            year={enteredYear}
            setYear={setEnteredYear}
            dobError={dobError}
            setDOBError={setDOBError}
          />
        )}
        {step == 3 && (
          <AboutLocation
            state={enteredState}
            setState={setEnteredState}
            city={enteredCity}
            setCity={setEnteredCity}
            locError={locError}
            setLocError={setLocError}
          />
        )}
        {step == 4 && (
          <AboutLI
            url={enteredLIUrl}
            setUrl={setEnteredLIUrl}
            urlError={urlError}
            setUrlError={setUrlError}
          />
        )}
        {step == 5 && (
          <AboutWebsite
            url={enteredWebUrl}
            setUrl={setEnteredWebUrl}
            webError={webError}
            setWebError={setWebError}
          />
        )}
        {step == 6 && (
          <AboutEducation
            eduBG={enteredEduBG}
            setEduBG={setEnteredEduBG}
            eduError={eduError}
            setEduError={setEduError}
          />
        )}
        {step == 7 && (
          <AboutWorkEx
            workEx={enteredWorkEx}
            setWorkEx={setEnteredWorkEx}
            workError={workError}
            setWorkError={setWorkError}
          />
        )}
        {step == 8 && (
          <AboutCompanies
            numCom={enteredNumCom}
            setNumCom={setEnteredNumCom}
            numComError={numComError}
            setNumComError={setNumComError}
          />
        )}
        {step == 9 && (
          <AboutSectors
            sectors={enteredSectors}
            setSectors={setEnteredSectors}
            sectorError={sectorError}
            setSectorError={setSectorError}
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
export default InvestorAbout

const Divider = () => {
  return <div className="h-2"></div>
}

type AboutNameProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  nameError: string
  setNameError: React.Dispatch<React.SetStateAction<string>>
}
const AboutName = (props: AboutNameProps) => {
  return (
    <>
      <input
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.name}
        placeholder="Name"
        onChange={(e) => {
          props.setName(e.target.value)
          props.nameError != ' ' && props.setNameError(' ')
        }}
        type={'text'}
      />
      <Divider />
      <ErrorSubTextLabel label={props.nameError} />
    </>
  )
}

type AboutDOBProps = {
  day: string
  setDay: React.Dispatch<React.SetStateAction<string>>
  month: string
  setMonth: React.Dispatch<React.SetStateAction<string>>
  year: string
  setYear: React.Dispatch<React.SetStateAction<string>>
  dobError: string
  setDOBError: React.Dispatch<React.SetStateAction<string>>
}
const AboutDOB = (props: AboutDOBProps) => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <input
          className={
            ' w-1/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={props.year}
          placeholder="YYYY"
          onChange={(e) => {
            props.setYear(e.target.value)
            props.dobError != ' ' && props.setDOBError('')
          }}
          type={'text'}
        />
        <input
          className={
            ' w-1/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={props.month}
          placeholder="MM"
          onChange={(e) => {
            props.setMonth(e.target.value)
            props.dobError != ' ' && props.setDOBError('')
          }}
          type={'text'}
        />
        <input
          className={
            ' w-1/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={props.day}
          placeholder="DD"
          onChange={(e) => {
            props.setDay(e.target.value)
            props.dobError != ' ' && props.setDOBError('')
          }}
          type={'text'}
        />
        <ErrorSubTextLabel label={props.dobError} />
      </div>
    </>
  )
}

type CityDataType = { city: string; lat: number; long: number }
type AboutLocationProps = {
  state: string
  setState: React.Dispatch<React.SetStateAction<string>>
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>
  locError: string
  setLocError: React.Dispatch<React.SetStateAction<string>>
}
const getCityList = (state: string) => {
  const cList: string[] = []
  locationData[state].forEach((element: CityDataType) => {
    if (!cList.includes(element.city)) {
      cList.push(element.city)
    }
  })
  cList.sort().reverse().push(emptyCityList[0])
  cList.reverse()
  return cList
}
const emptyCityList = ['Select City']
const states = Object.keys(locationData).sort().reverse()
states.push('Select State')
states.reverse()

const AboutLocation = (props: AboutLocationProps) => {
  const [cityList, setCityList] = useState(
    props.city == '' || props.state == 'Select State'
      ? emptyCityList
      : getCityList(props.state)
  )
  const updateCityList = (state: string) => {
    if (state == 'Select State') {
      setCityList(emptyCityList)
    } else {
      setCityList(getCityList(state))
    }
  }
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <select
        name="states"
        id="states"
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.state}
        onChange={(e) => {
          props.setState(e.target.value)
          props.setCity(emptyCityList[0])
          updateCityList(e.target.value)
          props.locError != ' ' && props.setLocError(' ')
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
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.city}
        onChange={(e) => {
          props.setCity(e.target.value)
          props.locError != ' ' && props.setLocError(' ')
        }}
      >
        {cityList.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
      <ErrorSubTextLabel label={props.locError} />
    </div>
  )
}

type AboutLIProps = {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
  urlError: string
  setUrlError: React.Dispatch<React.SetStateAction<string>>
}
const AboutLI = (props: AboutLIProps) => {
  return (
    <>
      <input
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.url}
        placeholder="LinkedIn Profile URL"
        onChange={(e) => {
          props.setUrl(e.target.value)
          props.urlError != ' ' && props.setUrlError(' ')
        }}
        type={'url'}
      />
      <Divider />
      <ErrorSubTextLabel label={props.urlError} />
    </>
  )
}

type AboutWebsiteProps = {
  url: string
  setUrl: React.Dispatch<React.SetStateAction<string>>
  webError: string
  setWebError: React.Dispatch<React.SetStateAction<string>>
}
const AboutWebsite = (props: AboutWebsiteProps) => {
  return (
    <>
      <input
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-primary placeholder:text-black-l3 focus:border-primary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-primary-l2 dark:placeholder:text-white-d3  dark:focus:border-primary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.url}
        placeholder="Website URL"
        onChange={(e) => {
          props.setUrl(e.target.value)
          props.webError != ' ' && props.setWebError(' ')
        }}
        type={'url'}
      />
      <Divider />
      <ErrorSubTextLabel label={props.webError} />
    </>
  )
}

//TODO: Update eduBG options as per DB enum
const eduBGOptions = ['HIGH_SCHOOL', 'BACHELORS', 'MASTERS', 'PHD']
type AboutEducationProps = {
  eduBG: string
  setEduBG: React.Dispatch<React.SetStateAction<string>>
  eduError: string
  setEduError: React.Dispatch<React.SetStateAction<string>>
}
const AboutEducation = (props: AboutEducationProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {eduBGOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.eduBG
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setEduBG(e)
              props.eduBG != ' ' && props.setEduError(' ')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.eduError} />
    </>
  )
}

//TODO: Update workEx options as per DB enum
const sizeOptions = [
  'NONE',
  'ONE_TO_THREE',
  'THREE_TO_TEN',
  'TEN_TO_TWENTY',
  'MORE_THAN_TWENTY',
]
type AboutWorkExProps = {
  workEx: string
  setWorkEx: React.Dispatch<React.SetStateAction<string>>
  workError: string
  setWorkError: React.Dispatch<React.SetStateAction<string>>
}
const AboutWorkEx = (props: AboutWorkExProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {sizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.workEx
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setWorkEx(e)
              props.workError != ' ' && props.setWorkError(' ')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>

      <Divider />
      <ErrorSubTextLabel label={props.workError} />
    </>
  )
}

type AboutCompaniesProps = {
  numCom: string
  setNumCom: React.Dispatch<React.SetStateAction<string>>
  numComError: string
  setNumComError: React.Dispatch<React.SetStateAction<string>>
}
const AboutCompanies = (props: AboutCompaniesProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {sizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.numCom
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setNumCom(e)
              props.numComError != ' ' && props.setNumComError(' ')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>

      <Divider />
      <ErrorSubTextLabel label={props.numComError} />
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
type AboutSectorsProps = {
  sectors: string[]
  setSectors: React.Dispatch<React.SetStateAction<string[]>>
  sectorError: string
  setSectorError: React.Dispatch<React.SetStateAction<string>>
}
const AboutSectors = (props: AboutSectorsProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll lg:grid lg:grid-cols-2">
        {sectorOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              props.sectors.includes(e)
                ? ' bg-primary'
                : 'bg-white hover:bg-primary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              if (props.sectors.includes(e)) {
                props.setSectors(props.sectors.filter((s) => s != e))
              } else {
                props.setSectors([...props.sectors, e])
              }
              props.sectorError != '' && props.setSectorError('')
            }}
          >
            {e.replaceAll('_', ' ')}
          </button>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.sectorError} />
    </>
  )
}
