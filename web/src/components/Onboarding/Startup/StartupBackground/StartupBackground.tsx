import { useEffect, useState } from 'react'

import { useLazyQuery } from '@apollo/client'
import CloseIcon from 'public/icons/close.svg'

import { useMutation } from '@redwoodjs/web'

import { useAuth } from 'src/auth'
import { ErrorSubTextLabel, TextLabel } from 'src/components/Label/Label'
import { OnboardingMainProps, getEnumValues } from 'src/lib/onboardingConsts'
import { StartupStepsInfoList } from 'src/pages/Startup/StartupOnboardingPage/StartupOnboardingData'

import { StartupStepFooter } from '../../StepFooter'
import { StartupStepHeader } from '../../StepHeader'
import StartupSingleChoiceOption from '../comps/StartupSingleChoiceOption/StartupSingleChoiceOption'
import StartupSingleTextArea from '../comps/StartupSingleTextArea/StartupSingleTextArea'
import StartupTripleTextArea from '../comps/StartupTripleTextArea/StartupTripleTextArea'

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

const GET_ENUM_QUERY = gql`
  query enumQueryBackground {
    size: __type(name: "SizeRange") {
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
  }
`

const STARTUP_BACKGROUND_MUTATION = gql`
  mutation createStartupBackground($input: CreateStartupBackgroundInput!) {
    createStartupBackground(input: $input) {
      id
    }
  }
`

const KEY_PEOPLE_MUTATION = gql`
  mutation createKeyPeople($input: CreateKeyPeopleInput!) {
    createKeyPeople(input: $input) {
      id
    }
  }
`

const StartupBackground = (props: OnboardingMainProps) => {
  //Initialize steps Index
  const [step, setStep] = useState(1)

  //Get steps info data
  const currentStepInfo = StartupStepsInfoList[props.currentSection - 1].steps

  const skipData: boolean[] = []

  const { currentUser } = useAuth()
  const [getEnumData] = useLazyQuery(GET_ENUM_QUERY)
  const [createStartupBackground] = useMutation(STARTUP_BACKGROUND_MUTATION)
  const [createKeyPeople] = useMutation(KEY_PEOPLE_MUTATION)

  const [sizeOptions, setSizeOptions] = useState<string[]>([])
  const [teamSizeOptions, setTeamSizeOptions] = useState<string[]>([])

  useEffect(() => {
    const getData = async () => {
      await getEnumData().then((d) => {
        setSizeOptions(getEnumValues(d.data.size.enumValues))
        setTeamSizeOptions(getEnumValues(d.data.team.enumValues))
      })
    }
    getData()
  }, [])

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
      if (
        coreValue1.length < 5 &&
        coreValue2.length < 5 &&
        coreValue3.length < 5
      ) {
        setError7('Please provide atleast 1 core value to save')
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

  //Match skip data and save in DB
  const saveData = async () => {
    await createStartupBackground({
      variables: {
        input: {
          id: currentUser?.id,
          valueProp: skipData[0] ? null : valueProp,
          idea: skipData[1] ? null : idea,
          whyThis: skipData[2] ? null : whyThis,
          foundedBefore: foundedBefore,
          mission: skipData[4] ? null : mission,
          vision: skipData[5] ? null : vision,
          coreValues: skipData[6] ? [] : [coreValue1, coreValue2, coreValue3],
          startupTeamSize: startupTeamSize,
        },
      },
    }).then((d) => {
      !skipData[8] &&
        keyPeople.forEach(async (item) => {
          await createKeyPeople({
            variables: {
              input: {
                startupBackgroundID: d.data.createStartupBackground.id,
                name: item.name,
                role: item.role,
                writeup: item.writeup,
                linkedInURL: item.linkedInURL,
              },
            },
          })
        })
    })
  }

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
          <StartupSingleTextArea
            input={valueProp}
            setInput={setValueProp}
            placeholder="Tell us what your value proposition..."
            error={error1}
            setError={setError1}
          />
        )}
        {step == 2 && (
          <StartupSingleTextArea
            input={idea}
            setInput={setIdea}
            placeholder="Tell us how you got the idea..."
            error={error2}
            setError={setError2}
          />
        )}
        {step == 3 && (
          <StartupSingleTextArea
            input={whyThis}
            setInput={setWhyThis}
            placeholder="Tell us why this business and not something else..."
            error={error3}
            setError={setError3}
          />
        )}
        {step == 4 && (
          <StartupSingleChoiceOption
            input={foundedBefore}
            setInput={setFoundedBefore}
            options={sizeOptions}
            error={error4}
            setError={setError4}
          />
        )}
        {step == 5 && (
          <StartupSingleTextArea
            input={mission}
            setInput={setMission}
            placeholder="Tell us about your mission..."
            error={error5}
            setError={setError5}
          />
        )}
        {step == 6 && (
          <StartupSingleTextArea
            input={vision}
            setInput={setVision}
            placeholder="Tell us about your company vision..."
            error={error6}
            setError={setError6}
          />
        )}
        {step == 7 && (
          <StartupTripleTextArea
            input1={coreValue1}
            setInput1={setCoreValue1}
            placeholder1="Core value 1"
            input2={coreValue2}
            setInput2={setCoreValue2}
            placeholder2="Core value 2"
            input3={coreValue3}
            setInput3={setCoreValue3}
            placeholder3="Core value 3"
            error={error7}
            setError={setError7}
          />
        )}
        {step == 8 && (
          <StartupSingleChoiceOption
            input={startupTeamSize}
            setInput={setStartupTeamSize}
            options={teamSizeOptions}
            error={error8}
            setError={setError8}
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
          placeholder="Short job description (optional)"
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
      <div className="mb-2 flex w-full flex-grow flex-col gap-2 overflow-scroll pt-2">
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
      <ErrorSubTextLabel label={props.error9} />
    </>
  )
}
