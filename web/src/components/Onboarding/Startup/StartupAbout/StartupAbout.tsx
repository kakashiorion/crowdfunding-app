import { useState } from 'react'

import { ErrorSubTextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/onboardingConsts'
import { StartupStepsInfoList } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingConsts'

import { StartupStepFooter } from '../../StepFooter'
import { StartupStepHeader } from '../../StepHeader'

const locationData = require('../../locationData.json')
//TODO: Update sector json data
const sectorData = require('../../sectorData.json')

/*Info to be created and saved in Startup table:
  name              String
  writeUp           String
  dateIncorporated  DateTime
  linkedInURL       String?
  websiteURL        String?
  locationID        Int //from Location table
  sectorCategoryID  Int //from SectorCategory table
*/

const daysMapping = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

const StartupAbout = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

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
  const [state, setState] = useState<string>('')
  const [city, setCity] = useState<string>('')
  const [error6, setError6] = useState<string>(' ')

  //States for step 7
  const [sector, setSector] = useState<string>('')
  const [category, setCategory] = useState<string>('')
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
      if (city == '' || state == 'Select State' || city == 'Select City') {
        setError6('Location is required.. You can provide the nearest city')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (
        category == '' ||
        sector == 'Select Sector' ||
        category == 'Select Category'
      ) {
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
          <AboutName
            name={name}
            setName={setName}
            error1={error1}
            setError1={setError1}
          />
        )}
        {step == 2 && (
          <AboutWriteup
            writeUp={writeUp}
            setWriteUp={setWriteUp}
            error2={error2}
            setError2={setError2}
          />
        )}
        {step == 3 && (
          <AboutDate
            day={day}
            setDay={setDay}
            month={month}
            setMonth={setMonth}
            year={year}
            setYear={setYear}
            error3={error3}
            setError3={setError3}
          />
        )}
        {step == 4 && (
          <AboutLIUrl
            linkedInURL={linkedInURL}
            setLinkedInURL={setLinkedInURL}
            error4={error4}
            setError4={setError4}
          />
        )}
        {step == 5 && (
          <AboutWebsiteUrl
            websiteURL={websiteURL}
            setWebsiteURL={setWebsiteURL}
            error5={error5}
            setError5={setError5}
          />
        )}
        {step == 6 && (
          <AboutLocation
            state={state}
            setState={setState}
            city={city}
            setCity={setCity}
            error6={error6}
            setError6={setError6}
          />
        )}
        {step == 7 && (
          <AboutSectorCategory
            sector={sector}
            setSector={setSector}
            category={category}
            setCategory={setCategory}
            error7={error7}
            setError7={setError7}
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
export default StartupAbout

const Divider = () => {
  return <div className="h-2"></div>
}

type AboutNameProps = {
  name: string
  setName: React.Dispatch<React.SetStateAction<string>>
  error1: string
  setError1: React.Dispatch<React.SetStateAction<string>>
}
const AboutName = (props: AboutNameProps) => {
  return (
    <>
      <input
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.name}
        placeholder="Name"
        onChange={(e) => {
          props.setName(e.target.value)
          props.error1 != ' ' && props.setError1(' ')
        }}
        type={'text'}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error1} />
    </>
  )
}

type AboutWriteupProps = {
  writeUp: string
  setWriteUp: React.Dispatch<React.SetStateAction<string>>
  error2: string
  setError2: React.Dispatch<React.SetStateAction<string>>
}
const AboutWriteup = (props: AboutWriteupProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.writeUp}
        rows={3}
        placeholder="Tell us what your startup is about..."
        onChange={(e) => {
          props.setWriteUp(e.target.value)
          props.error2 != ' ' && props.setError2(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error2} />
    </>
  )
}

type AboutDateProps = {
  day: string
  setDay: React.Dispatch<React.SetStateAction<string>>
  month: string
  setMonth: React.Dispatch<React.SetStateAction<string>>
  year: string
  setYear: React.Dispatch<React.SetStateAction<string>>
  error3: string
  setError3: React.Dispatch<React.SetStateAction<string>>
}
const AboutDate = (props: AboutDateProps) => {
  return (
    <>
      <div className="flex w-full flex-col items-center justify-center gap-4">
        <input
          className={
            ' w-1/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={props.year}
          placeholder="YYYY"
          onChange={(e) => {
            props.setYear(e.target.value)
            props.error3 != ' ' && props.setError3('')
          }}
          type={'text'}
        />
        <input
          className={
            ' w-1/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={props.month}
          placeholder="MM"
          onChange={(e) => {
            props.setMonth(e.target.value)
            props.error3 != ' ' && props.setError3('')
          }}
          type={'text'}
        />
        <input
          className={
            ' w-1/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
          }
          value={props.day}
          placeholder="DD"
          onChange={(e) => {
            props.setDay(e.target.value)
            props.error3 != ' ' && props.setError3('')
          }}
          type={'text'}
        />
        <ErrorSubTextLabel label={props.error3} />
      </div>
    </>
  )
}

type AboutLIUrlProps = {
  linkedInURL: string
  setLinkedInURL: React.Dispatch<React.SetStateAction<string>>
  error4: string
  setError4: React.Dispatch<React.SetStateAction<string>>
}
const AboutLIUrl = (props: AboutLIUrlProps) => {
  return (
    <>
      <input
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.linkedInURL}
        placeholder="LinkedIn Profile URL"
        onChange={(e) => {
          props.setLinkedInURL(e.target.value)
          props.error4 != ' ' && props.setError4(' ')
        }}
        type={'url'}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error4} />
    </>
  )
}

type AboutWebsiteUrlProps = {
  websiteURL: string
  setWebsiteURL: React.Dispatch<React.SetStateAction<string>>
  error5: string
  setError5: React.Dispatch<React.SetStateAction<string>>
}
const AboutWebsiteUrl = (props: AboutWebsiteUrlProps) => {
  return (
    <>
      <input
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.websiteURL}
        placeholder="Website URL"
        onChange={(e) => {
          props.setWebsiteURL(e.target.value)
          props.error5 != ' ' && props.setError5(' ')
        }}
        type={'url'}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error5} />
    </>
  )
}

type CityDataType = { city: string; lat: number; long: number }
type AboutLocationProps = {
  state: string
  setState: React.Dispatch<React.SetStateAction<string>>
  city: string
  setCity: React.Dispatch<React.SetStateAction<string>>
  error6: string
  setError6: React.Dispatch<React.SetStateAction<string>>
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
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.state}
        onChange={(e) => {
          props.setState(e.target.value)
          props.setCity(emptyCityList[0])
          updateCityList(e.target.value)
          props.error6 != ' ' && props.setError6(' ')
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
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.city}
        onChange={(e) => {
          props.setCity(e.target.value)
          props.error6 != ' ' && props.setError6(' ')
        }}
      >
        {cityList.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
      <ErrorSubTextLabel label={props.error6} />
    </div>
  )
}

type AboutSectorCategoryProps = {
  sector: string
  setSector: React.Dispatch<React.SetStateAction<string>>
  category: string
  setCategory: React.Dispatch<React.SetStateAction<string>>
  error7: string
  setError7: React.Dispatch<React.SetStateAction<string>>
}
const getCategoryList = (sector: string) => {
  const cList: string[] = []
  sectorData[sector].forEach((element: string) => {
    cList.push(element)
  })
  cList.sort().reverse().push(emptyCategoryList[0])
  cList.reverse()
  return cList
}

const emptyCategoryList = ['Select Category']
const sectors = Object.keys(sectorData).sort().reverse()
sectors.push('Select Sector')
sectors.reverse()

const AboutSectorCategory = (props: AboutSectorCategoryProps) => {
  const [categoryList, setCategoryList] = useState(
    props.category == '' || props.sector == 'Select Sector'
      ? emptyCategoryList
      : getCategoryList(props.sector)
  )
  const updateCategoryList = (sector: string) => {
    if (sector == 'Select Sector') {
      setCategoryList(emptyCategoryList)
    } else {
      setCategoryList(getCategoryList(sector))
    }
  }
  return (
    <div className="flex w-full flex-col items-center justify-center gap-4">
      <select
        name="sectors"
        id="sectors"
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.sector}
        onChange={(e) => {
          props.setSector(e.target.value)
          props.setCategory(emptyCategoryList[0])
          updateCategoryList(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
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
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.category}
        onChange={(e) => {
          props.setCategory(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
      >
        {categoryList.map((c) => (
          <option value={c} key={c}>
            {c}
          </option>
        ))}
      </select>
      <ErrorSubTextLabel label={props.error7} />
    </div>
  )
}
