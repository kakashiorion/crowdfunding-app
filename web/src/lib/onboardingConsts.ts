export type OnboardingSectionInfoType = {
  index: number
  title: string
  subTitle: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export type OnboardingStepsInfoType = {
  index: number
  title: string
  display: string
  help: string
  skippable: boolean
}

export type OnboardingTimelineProps = {
  isMenuOpen: boolean
  currentSection: number
}

export type OnboardingMainProps = {
  currentSection: number
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>
}

export type OnboardingTimelineStepsProps = {
  title: string
  subTitle: string
  sectionNumber: number
  currentNumber: number
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export type OnboardingIntroSectionProps = {
  setCurrentSection: React.Dispatch<React.SetStateAction<number>>
}

export const getEnumValues = (enumArray: { name: string }[]) => {
  const values: string[] = []
  enumArray.forEach((item) => {
    values.push(item['name'])
  })
  return values
}

export const onboardingFrameClassName =
  'flex w-full flex-grow flex-col gap-1 overflow-hidden lg:gap-2'
export const onboardingSubFrameClassName =
  'shrink-3 flex w-full flex-grow flex-col items-center justify-center overflow-y-auto rounded  bg-white-d2/20 p-2  dark:bg-black-l2/20'

type skipProps = {
  setSkipData: (value: React.SetStateAction<boolean[]>) => void
  skipData: boolean[]
  clearError: () => void
  currentSection: number
  setCurrentSection: (value: React.SetStateAction<number>) => void
  saveData: (skippedLast: boolean) => void
  step: number
  setStep: (value: React.SetStateAction<number>) => void
  currentStepInfo: OnboardingStepsInfoType[]
}
export const skip = (props: skipProps) => {
  //Skipped this step
  props.setSkipData([...props.skipData, true])
  props.clearError()
  if (props.step == props.currentStepInfo.length) {
    //If last step, skip it and move to next section
    props.setCurrentSection(props.currentSection + 1)
    props.saveData(true)
  } else {
    //Else, move to next step
    props.setStep(props.step + 1)
  }
}

type nextProps = {
  setSkipData: (value: React.SetStateAction<boolean[]>) => void
  skipData: boolean[]
  currentSection: number
  setCurrentSection: (value: React.SetStateAction<number>) => void
  saveData: (skippedLast: boolean) => void
  step: number
  setStep: (value: React.SetStateAction<number>) => void
  currentStepInfo: OnboardingStepsInfoType[]
}
export const next = (props: nextProps) => {
  //Did not skip this step
  props.setSkipData([...props.skipData, false])
  if (props.step == props.currentStepInfo.length) {
    //If last step, save it and move to next section
    props.setCurrentSection(props.currentSection + 1)
    props.saveData(false)
  } else {
    //Else, move to next step
    props.setStep(props.step + 1)
  }
}

type backProps = {
  setSkipData: (value: React.SetStateAction<boolean[]>) => void
  skipData: boolean[]
  step: number
  setStep: (value: React.SetStateAction<number>) => void
}
export const back = (props: backProps) => {
  //Remove last item from skipData array
  props.setSkipData(props.skipData.slice(0, -1))
  //Move one step back
  props.setStep(props.step - 1)
}

export const daysMapping = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]

export type Location = {
  id: number
  city: string
  state: string
}

export type Sector = {
  id: number
  sector: string
  category: string
}
