import { InvestorStepsInfoList } from 'src/pages/Investor/InvestorOnboardingPage/InvestorOnboardingData'

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
  'shrink-3 flex w-full flex-grow flex-col items-center justify-center overflow-scroll rounded  bg-white-d2/20 p-2  dark:bg-black-l2/20'

type skipProps = {
  setSkipData: (value: React.SetStateAction<boolean[]>) => void
  skipData: boolean[]
  clearError: () => void
  currentSection: number
  setCurrentSection: (value: React.SetStateAction<number>) => void
  saveData: (skippedLast: boolean) => void
  step: number
  setStep: (value: React.SetStateAction<number>) => void
}
export const skip = (props: skipProps) => {
  props.setSkipData([...props.skipData, true])
  props.clearError()
  if (
    props.step == InvestorStepsInfoList[props.currentSection - 1].steps.length
  ) {
    props.setCurrentSection(props.currentSection + 1)
    props.saveData(true)
  } else {
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
}
export const next = (props: nextProps) => {
  props.setSkipData([...props.skipData, false])
  if (
    props.step == InvestorStepsInfoList[props.currentSection - 1].steps.length
  ) {
    props.setCurrentSection(props.currentSection + 1)
    props.saveData(false)
  } else {
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
  props.setSkipData(props.skipData.slice(-1))
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
