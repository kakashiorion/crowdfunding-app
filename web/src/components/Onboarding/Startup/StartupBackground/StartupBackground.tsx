import { useState } from 'react'

import CloseIcon from 'public/icons/close.svg'

import { ErrorSubTextLabel, TextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps } from 'src/lib/onboardingConsts'
import { StartupStepsInfoList } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingConsts'

import { StartupStepFooter } from '../../StepFooter'
import { StartupStepHeader } from '../../StepHeader'

/*Info to be created and saved in StartupBackground table:
  valueProp       String?
  idea            String?
  whyThis         String?
  foundedBefore   SizeRange?
  mission         String?
  vision          String?
  coreValues      String[]
  startupTeamSize StartupTeamSize?
  keyPeople       KeyPeople[]
*/

const StartupBackground = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

  //States for step 1
  const [valueProp, setValueProp] = useState<string>('')
  const [error1, setError1] = useState<string>(' ')

  //States for step 2
  const [idea, setIdea] = useState<string>('')
  const [error2, setError2] = useState<string>(' ')

  //States for step 3
  const [whyThis, setWhyThis] = useState<string>('')
  const [error3, setError3] = useState<string>(' ')

  //States for step 4
  const [foundedBefore, setFoundedBefore] = useState<string>('')
  const [error4, setError4] = useState<string>(' ')

  //States for step 5
  const [mission, setMission] = useState<string>('')
  const [error5, setError5] = useState<string>(' ')

  //States for step 6
  const [vision, setVision] = useState<string>('')
  const [error6, setError6] = useState<string>(' ')

  //States for step 7
  const [coreValue1, setCoreValue1] = useState<string>('')
  const [coreValue2, setCoreValue2] = useState<string>('')
  const [coreValue3, setCoreValue3] = useState<string>('')
  const [error7, setError7] = useState<string>(' ')

  //States for step 8
  const [startupTeamSize, setStartupTeamSize] = useState<string>('')
  const [error8, setError8] = useState<string>(' ')

  //States for step 9
  const [keyPeople, setKeyPeople] = useState<KeyPeople[]>([])
  const [error9, setError9] = useState<string>(' ')

  //Always check UI data before proceeding to next step
  const checkUIData = () => {
    //Checks for step 1
    if (step == 1) {
      if (valueProp.length < 30) {
        setError1('Please provide a longer description (atleast 30 characters)')
        return false
      } else if (valueProp.length > 300) {
        setError1('Please provide a shorter description (upto 300 characters)')
        return false
      } else {
        return true
      }
    }
    //Checks for step 2
    else if (step == 2) {
      if (idea.length < 30) {
        setError2('Please provide a longer story (atleast 30 characters)')
        return false
      } else if (idea.length > 500) {
        setError2('Please provide a shorter story (upto 500 characters)')
        return false
      } else {
        return true
      }
    }
    //Checks for step 3
    else if (step == 3) {
      if (whyThis.length < 30) {
        setError3('Please provide a longer description (atleast 30 characters)')
        return false
      } else if (whyThis.length > 300) {
        setError3('Please provide a shorter description (upto 300 characters)')
        return false
      } else {
        return true
      }
    }
    //Checks for step 4
    else if (step == 4) {
      if (foundedBefore == '') {
        setError4('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 5
    else if (step == 5) {
      if (mission.length < 30) {
        setError5('Please provide a longer description (atleast 30 characters)')
        return false
      } else if (mission.length > 300) {
        setError5('Please provide a shorter description (upto 300 characters)')
        return false
      } else {
        return true
      }
    }
    //Checks for step 6
    else if (step == 6) {
      if (vision.length < 30) {
        setError6('Please provide a longer description (atleast 30 characters)')
        return false
      } else if (vision.length > 300) {
        setError6('Please provide a shorter description (upto 300 characters)')
        return false
      } else {
        return true
      }
    }
    //Checks for step 7
    else if (step == 7) {
      if (coreValue1 == '' && coreValue2 == '' && coreValue3 == '') {
        setError7('Please provide atleast 1 value to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 8
    else if (step == 8) {
      if (startupTeamSize == '') {
        setError8('Please select an option to save')
        return false
      } else {
        return true
      }
    }
    //Checks for step 9
    else if (step == 9) {
      if (keyPeople.length == 0) {
        setError9('Please provide at least 1 person')
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
          <BackgroundValue
            value={valueProp}
            setValue={setValueProp}
            error1={error1}
            setError1={setError1}
          />
        )}
        {step == 2 && (
          <BackgroundIdea
            idea={idea}
            setIdea={setIdea}
            error2={error2}
            setError2={setError2}
          />
        )}
        {step == 3 && (
          <BackgroundWhyThis
            whyThis={whyThis}
            setWhyThis={setWhyThis}
            error3={error3}
            setError3={setError3}
          />
        )}
        {step == 4 && (
          <BackgroundExperience
            foundedBefore={foundedBefore}
            setFoundedBefore={setFoundedBefore}
            error4={error4}
            setError4={setError4}
          />
        )}
        {step == 5 && (
          <BackgroundMission
            mission={mission}
            setMission={setMission}
            error5={error5}
            setError5={setError5}
          />
        )}
        {step == 6 && (
          <BackgroundVision
            vision={vision}
            setVision={setVision}
            error6={error6}
            setError6={setError6}
          />
        )}
        {step == 7 && (
          <BackgroundCoreValues
            coreValue1={coreValue1}
            setCoreValue1={setCoreValue1}
            coreValue2={coreValue2}
            setCoreValue2={setCoreValue2}
            coreValue3={coreValue3}
            setCoreValue3={setCoreValue3}
            error7={error7}
            setError7={setError7}
          />
        )}
        {step == 8 && (
          <BackgroundTeamSize
            startupTeamSize={startupTeamSize}
            setStartupTeamSize={setStartupTeamSize}
            error8={error8}
            setError8={setError8}
          />
        )}
        {step == 9 && (
          <BackgroundKeyPeople
            keyPeople={keyPeople}
            setKeyPeople={setKeyPeople}
            error9={error9}
            setError9={setError9}
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
export default StartupBackground

const Divider = () => {
  return <div className="h-2"></div>
}

type BackgroundValueProps = {
  value: string
  setValue: React.Dispatch<React.SetStateAction<string>>
  error1: string
  setError1: React.Dispatch<React.SetStateAction<string>>
}
const BackgroundValue = (props: BackgroundValueProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.value}
        rows={3}
        placeholder="Tell us what your value proposition..."
        onChange={(e) => {
          props.setValue(e.target.value)
          props.error1 != ' ' && props.setError1(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error1} />
    </>
  )
}

type BackgroundIdeaProps = {
  idea: string
  setIdea: React.Dispatch<React.SetStateAction<string>>
  error2: string
  setError2: React.Dispatch<React.SetStateAction<string>>
}
const BackgroundIdea = (props: BackgroundIdeaProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.idea}
        rows={3}
        placeholder="Tell us how you got the idea..."
        onChange={(e) => {
          props.setIdea(e.target.value)
          props.error2 != ' ' && props.setError2(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error2} />
    </>
  )
}

type BackgroundWhyThisProps = {
  whyThis: string
  setWhyThis: React.Dispatch<React.SetStateAction<string>>
  error3: string
  setError3: React.Dispatch<React.SetStateAction<string>>
}
const BackgroundWhyThis = (props: BackgroundWhyThisProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.whyThis}
        rows={3}
        placeholder="Tell us why this business and not something else..."
        onChange={(e) => {
          props.setWhyThis(e.target.value)
          props.error3 != ' ' && props.setError3(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error3} />
    </>
  )
}

//TODO: Update size options as per DB enum
const sizeOptions = [
  'NONE',
  'ONE_TO_THREE',
  'THREE_TO_TEN',
  'TEN_TO_TWENTY',
  'MORE_THAN_TWENTY',
]
type BackgroundExperienceProps = {
  foundedBefore: string
  setFoundedBefore: React.Dispatch<React.SetStateAction<string>>
  error4: string
  setError4: React.Dispatch<React.SetStateAction<string>>
}
const BackgroundExperience = (props: BackgroundExperienceProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {sizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.foundedBefore
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setFoundedBefore(e)
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

type BackgroundMissionProps = {
  mission: string
  setMission: React.Dispatch<React.SetStateAction<string>>
  error5: string
  setError5: React.Dispatch<React.SetStateAction<string>>
}
const BackgroundMission = (props: BackgroundMissionProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.mission}
        rows={3}
        placeholder="Tell us about your mission..."
        onChange={(e) => {
          props.setMission(e.target.value)
          props.error5 != ' ' && props.setError5(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error5} />
    </>
  )
}

type BackgroundVisionProps = {
  vision: string
  setVision: React.Dispatch<React.SetStateAction<string>>
  error6: string
  setError6: React.Dispatch<React.SetStateAction<string>>
}
const BackgroundVision = (props: BackgroundVisionProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.vision}
        rows={3}
        placeholder="Tell us about your company vision..."
        onChange={(e) => {
          props.setVision(e.target.value)
          props.error6 != ' ' && props.setError6(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error6} />
    </>
  )
}

type BackgroundCoreValuesProps = {
  coreValue1: string
  setCoreValue1: React.Dispatch<React.SetStateAction<string>>
  coreValue2: string
  setCoreValue2: React.Dispatch<React.SetStateAction<string>>
  coreValue3: string
  setCoreValue3: React.Dispatch<React.SetStateAction<string>>
  error7: string
  setError7: React.Dispatch<React.SetStateAction<string>>
}
const BackgroundCoreValues = (props: BackgroundCoreValuesProps) => {
  return (
    <>
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.coreValue1}
        rows={2}
        placeholder="Core value 1"
        onChange={(e) => {
          props.setCoreValue1(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.coreValue2}
        rows={2}
        placeholder="Core value 2"
        onChange={(e) => {
          props.setCoreValue2(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
      />
      <Divider />
      <textarea
        className={
          ' w-2/3 rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary  focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2 dark:placeholder:text-white-d3  dark:focus:border-tertiary-l2  lg:px-4 lg:py-2 lg:text-b1'
        }
        value={props.coreValue3}
        rows={2}
        placeholder="Core value 3"
        onChange={(e) => {
          props.setCoreValue3(e.target.value)
          props.error7 != ' ' && props.setError7(' ')
        }}
      />
      <Divider />
      <ErrorSubTextLabel label={props.error7} />
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
type BackgroundTeamSizeProps = {
  startupTeamSize: string
  setStartupTeamSize: React.Dispatch<React.SetStateAction<string>>
  error8: string
  setError8: React.Dispatch<React.SetStateAction<string>>
}
const BackgroundTeamSize = (props: BackgroundTeamSizeProps) => {
  return (
    <>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll">
        {teamSizeOptions.map((e) => (
          <button
            key={e}
            className={`w-full flex-grow rounded-sm p-3 text-black shadow-md dark:text-white lg:p-4 ${
              e == props.startupTeamSize
                ? ' bg-tertiary'
                : 'bg-white hover:bg-tertiary-l2 dark:bg-black-l1'
            }`}
            onClick={() => {
              props.setStartupTeamSize(e)
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

type KeyPeople = {
  name: string
  role: string
  writeup?: string
  linkedInURL?: string
}
type BackgroundKeyPeopleProps = {
  keyPeople: KeyPeople[]
  setKeyPeople: React.Dispatch<React.SetStateAction<KeyPeople[]>>
  error9: string
  setError9: React.Dispatch<React.SetStateAction<string>>
}
const BackgroundKeyPeople = (props: BackgroundKeyPeopleProps) => {
  const [enteredName, setEnteredName] = useState('')
  const [enteredRole, setEnteredRole] = useState('')
  const [enteredWriteup, setEnteredWriteup] = useState('')
  const [enteredUrl, setEnteredURL] = useState('')

  return (
    <>
      <div className="grid w-full grid-cols-1 items-center justify-start gap-1 border-2 border-tertiary p-2 lg:grid-flow-row-dense lg:grid-cols-2">
        <input
          className={
            'w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2  dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:col-span-1 lg:px-4 lg:py-2 lg:text-b1 '
          }
          value={enteredName}
          placeholder="Name of person"
          onChange={(e) => {
            setEnteredName(e.target.value)
          }}
          type={'text'}
        />
        <input
          className={
            'w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none disabled:bg-black-l4  dark:border-white-d2 dark:bg-black-l2 dark:text-tertiary-l2  dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:col-span-1 lg:px-4 lg:py-2 lg:text-b1'
          }
          value={enteredRole}
          placeholder="Role"
          onChange={(e) => {
            setEnteredRole(e.target.value)
          }}
          type={'text'}
        />
        <input
          className={
            'w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none  disabled:bg-black-l4 dark:border-white-d2 dark:bg-black-l2  dark:text-tertiary-l2 dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:col-span-2   lg:px-4 lg:py-2 lg:text-b1'
          }
          value={enteredWriteup}
          placeholder="Short brief (optional)"
          onChange={(e) => {
            setEnteredWriteup(e.target.value)
          }}
          type={'text'}
        />
        <input
          className={
            'w-full rounded-sm border-2 border-black-l2 bg-white px-2 py-2 text-center text-b2 text-tertiary placeholder:text-black-l3 focus:border-tertiary focus:outline-none disabled:border-none  disabled:bg-black-l4 dark:border-white-d2 dark:bg-black-l2  dark:text-tertiary-l2 dark:placeholder:text-white-d3 dark:focus:border-tertiary-l2 lg:col-span-2   lg:px-4 lg:py-2 lg:text-b1'
          }
          value={enteredUrl}
          placeholder="LinkedIn URL (optional)"
          onChange={(e) => {
            setEnteredURL(e.target.value)
          }}
          type={'url'}
        />
        <button
          className="w-full rounded-sm border-2 border-tertiary bg-tertiary px-2 py-1 text-b3 text-white shadow-md hover:border-tertiary-d1 hover:bg-tertiary-d1 lg:col-span-2 lg:px-4 lg:py-2 lg:text-b2"
          onClick={() => {
            if (
              props.keyPeople.some(
                (s) => s.role == enteredRole && s.name == enteredName
              )
            ) {
              props.setError9('Duplicate entry')
            } else if (enteredRole == '') {
              props.setError9('Must provide role')
            } else if (enteredName == '') {
              props.setError9('Must provide name')
            } else {
              props.setKeyPeople([
                ...props.keyPeople,
                {
                  name: enteredName,
                  role: enteredRole,
                  writeup: enteredWriteup,
                  linkedInURL: enteredUrl,
                },
              ])
              props.error9 != '' && props.setError9('')
            }
          }}
        >
          {'ADD PERSON'}
        </button>
      </div>
      <div className="flex w-full flex-grow flex-col gap-2 overflow-scroll pt-2">
        {props.keyPeople.map((e) => (
          <div
            key={`${e.name}, ${e.role}`}
            className={`flex max-h-min w-full items-center justify-between rounded-sm bg-white px-5 py-3 text-black shadow-md dark:bg-black-l1 dark:text-white lg:px-6 lg:py-4`}
          >
            <TextLabel label={`${e.name}, ${e.role}`} />
            <CloseIcon
              className="flex h-4 w-4 fill-error dark:fill-error-l1 lg:h-5 lg:w-5"
              onClick={() => {
                props.setKeyPeople(props.keyPeople.filter((s) => s != e))
                props.error9 != '' && props.setError9('')
              }}
            ></CloseIcon>
          </div>
        ))}
      </div>
      <Divider />
      <ErrorSubTextLabel label={props.error9} />
    </>
  )
}
