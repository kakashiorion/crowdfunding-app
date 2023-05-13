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
