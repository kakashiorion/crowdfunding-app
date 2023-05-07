import InvestorAbout from 'src/components/InvestorOnboarding/InvestorAbout/InvestorAbout'
import InvestorExperience from 'src/components/InvestorOnboarding/InvestorExperience/InvestorExperience'
import InvestorObjective from 'src/components/InvestorOnboarding/InvestorObjective/InvestorObjective'
import InvestorPreferences from 'src/components/InvestorOnboarding/InvestorPreferences/InvestorPreferences'

import AboutIcon from '../../../../public/icons/about.svg'
import ExperienceIcon from '../../../../public/icons/experience.svg'
import ObjectiveIcon from '../../../../public/icons/objective.svg'
import PreferencesIcon from '../../../../public/icons/preferences.svg'

export type SectionType = {
  index: number
  title: string
  subTitle: string
  icon: React.FC<React.SVGProps<SVGSVGElement>>
}

export const onboardingSteps: SectionType[] = [
  {
    index: 1,
    title: 'About You',
    subTitle: 'Capturing basic details to create your profile',
    icon: AboutIcon,
  },
  {
    index: 2,
    title: 'Experience',
    subTitle: 'Getting to know your entrepreneurial history',
    icon: ExperienceIcon,
  },
  {
    index: 3,
    title: 'Objective',
    subTitle: 'Understanding your goals to get better matches',
    icon: ObjectiveIcon,
  },
  {
    index: 4,
    title: 'Preferences',
    subTitle: 'Personalizing the platform as per your needs',
    icon: PreferencesIcon,
  },
]

export type StepsInfoType = {
  index: number
  title: string
  display: string
  help?: string
  skippable: boolean
}

const AboutSteps: StepsInfoType[] = [
  {
    index: 1,
    title: `Let's start with your name.`,
    display: 'Name',
    help: 'This name will be displayed on your profile.',
    skippable: false,
  },
  {
    index: 2,
    title: 'When were you born?',
    display: 'DOB',
    skippable: true,
  },
  {
    index: 3,
    title: 'Where are you located?',
    display: 'Location',
    help: 'This will help startups or other investors to find you in filtered results.',
    skippable: false,
  },
  {
    index: 4,
    title: 'Do you have a LinkedIn Profile?',
    display: 'LinkedIn',
    help: 'This will help startups or other investors to find you in filtered results.',
    skippable: true,
  },
  {
    index: 5,
    title: 'Do you have a personal website?',
    display: 'Website',
    help: 'This enables startups or other investors to reach out to you outside our platform.',
    skippable: true,
  },
  {
    index: 6,
    title: 'What is your education background?',
    display: 'Education',
    help: 'This will help startups or other investors to find you in filtered results.',
    skippable: true,
  },
  {
    index: 7,
    title: 'Do you have any work experience (in years)?',
    display: 'Work',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: true,
  },
  {
    index: 8,
    title: 'How many different companies have you worked at?',
    display: 'Companies',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: true,
  },
  {
    index: 9,
    title: 'Select all the different sectors you have worked in.',
    display: 'Sectors',
    help: 'This will help startups or other investors to find you in filtered results.',
    skippable: true,
  },
]

const ExperienceSteps: StepsInfoType[] = [
  {
    index: 1,
    title: 'How many startups have you worked in as employee?',
    display: 'Exposure',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: false,
  },
  {
    index: 2,
    title: 'Have you founded any startups?',
    display: 'Founder',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: false,
  },
  {
    index: 3,
    title: 'How many startups have you invested in before?',
    display: 'Investments',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: false,
  },
  {
    index: 4,
    title: 'In which funding stages have you participated?',
    display: 'Stage',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: true,
  },
  {
    index: 5,
    title: 'Generally, how much amount do you invest in startups?',
    display: 'Amount',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: true,
  },
  {
    index: 6,
    title: 'How many successful exits have you had?',
    display: 'Exits',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: true,
  },
  {
    index: 7,
    title:
      'Usually, what multiple of returns have you received from your investments?',
    display: 'Returns',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: true,
  },
  {
    index: 8,
    title: 'Select all the sectors you have invested in.',
    display: 'Sectors',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: true,
  },
  {
    index: 9,
    title: 'At what level would you consider yourself as an investor?',
    display: 'Level',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: false,
  },
]

const ObjectiveSteps: StepsInfoType[] = [
  {
    index: 1,
    title: 'How much capital are you planning to invest?',
    display: 'Capital',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 2,
    title: 'Select the funding stages you would like to participate in.',
    display: 'Stages',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 3,
    title: 'Select the startup sizes you are comfortable to invest in.',
    display: 'Sizes',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 4,
    title: 'Select the time horizons you are looking to invest for.',
    display: 'Timelines',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 5,
    title: 'How much is your risk apetite?',
    display: 'Apetite',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 6,
    title: 'Select any sectors you would prefer to invest in.',
    display: 'Sectors',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 7,
    title: 'Search and add any locations you would prefer to invest in.',
    display: 'Locations',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 8,
    title: 'What all do you plan to use our platform for?',
    display: 'Goals',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 9,
    title: 'How did you get to know about our platform?',
    display: 'Sources',
    help: 'This data will be used for internal purposes.',
    skippable: true,
  },
]

const PreferencesSteps: StepsInfoType[] = [
  {
    index: 1,
    title: 'You can customize the platform for you needs',
    display: 'Settings',
    skippable: true,
  },
  {
    index: 2,
    title: 'You can personalize activity levels as per your preferences',
    display: 'Preferences',
    skippable: true,
  },
]

export const stepsInfoList = [
  { steps: AboutSteps, component: InvestorAbout },
  { steps: ExperienceSteps, component: InvestorExperience },
  { steps: ObjectiveSteps, component: InvestorObjective },
  { steps: PreferencesSteps, component: InvestorPreferences },
]
