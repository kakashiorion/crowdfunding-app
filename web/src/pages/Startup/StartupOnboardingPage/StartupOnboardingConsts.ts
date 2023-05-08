import AboutIcon from 'public/icons/about.svg'
import BackgroundIcon from 'public/icons/background.svg'
import BusinessIcon from 'public/icons/business.svg'
import FinancialsIcon from 'public/icons/finance.svg'
import ObjectiveIcon from 'public/icons/objective.svg'
import PreferencesIcon from 'public/icons/preferences.svg'

import StartupBusiness from 'src/components/Admin/StartupBusiness/StartupBusiness'
import StartupFinancials from 'src/components/Admin/StartupFinancials/StartupFinancials'
import StartupPreferences from 'src/components/Admin/StartupPreferences/StartupPreferences'
import StartupAbout from 'src/components/Onboarding/Startup/StartupAbout/StartupAbout'
import StartupBackground from 'src/components/Onboarding/Startup/StartupBackground/StartupBackground'
import StartupObjective from 'src/components/Onboarding/Startup/StartupObjective/StartupObjective'
import {
  OnboardingSectionInfoType,
  OnboardingStepsInfoType,
} from 'src/lib/onboardingConsts'

export const StartupOnboardingSections: OnboardingSectionInfoType[] = [
  {
    index: 1,
    title: 'About You',
    subTitle: 'Capturing basic details to create your profile',
    icon: AboutIcon,
  },
  {
    index: 2,
    title: 'Background',
    subTitle: 'Learning about your background and story',
    icon: BackgroundIcon,
  },
  {
    index: 3,
    title: 'Business',
    subTitle: 'Getting to know more about your business model',
    icon: BusinessIcon,
  },
  {
    index: 4,
    title: 'Financials',
    subTitle: 'Looking at your financial numbers',
    icon: FinancialsIcon,
  },
  {
    index: 5,
    title: 'Objective',
    subTitle: 'Understanding your goals to get better matches',
    icon: ObjectiveIcon,
  },
  {
    index: 6,
    title: 'Preferences',
    subTitle: 'Personalizing the platform as per your needs',
    icon: PreferencesIcon,
  },
]

const StartupAboutSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: `Let's start with the name of your startup.`,
    display: 'Name',
    help: 'This name will be displayed on your profile.',
    skippable: false,
  },
  {
    index: 2,
    title: 'Briefly describe your startup in two sentences',
    display: 'Writeup',
    help: 'This will help investors know more about your startup.',
    skippable: false,
  },
  {
    index: 3,
    title: 'When did your company start?',
    display: 'Date',
    help: 'This date will be displayed on your profile.',
    skippable: true,
  },
  {
    index: 4,
    title: 'Do you have a LinkedIn Profile?',
    display: 'LinkedIn',
    help: 'This enables investors to reach out to you outside our platform.',
    skippable: true,
  },
  {
    index: 5,
    title: 'Do you have a company website?',
    display: 'Website',
    help: 'This enables investors to reach out to you outside our platform.',
    skippable: true,
  },
  {
    index: 6,
    title: 'Where is your startup based?',
    display: 'Location',
    help: 'This will help investors to find you in filtered results.',
    skippable: false,
  },
  {
    index: 7,
    title: 'Select which sector/category your business caters.',
    display: 'Sector',
    help: 'This will help investors to find you in filtered results.',
    skippable: false,
  },
]

const StartupBackgroundSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: 'What value do you provide to your customers?',
    display: 'Value',
    help: 'This will help investors know more about what you do.',
    skippable: true,
  },
  {
    index: 2,
    title: 'How did you get the idea for this startup?',
    display: 'Idea',
    help: 'This will make investors connect with your story.',
    skippable: true,
  },
  {
    index: 3,
    title: 'Why this business and not something else?',
    display: 'Why This',
    help: 'This can win over investors about your dedication.',
    skippable: true,
  },
  {
    index: 4,
    title: 'How many startups have you founded before this?',
    display: 'Experience',
    help: 'This will help investors find you in filtered results.',
    skippable: true,
  },
  {
    index: 5,
    title: 'What is the mission of your startup?',
    display: 'Mission',
    help: 'This will help investors connect with your mission.',
    skippable: true,
  },
  {
    index: 6,
    title: 'What is the your vision for this startup?',
    display: 'Vision',
    help: 'This will help investors know more about your plans.',
    skippable: true,
  },
  {
    index: 7,
    title: 'What are your top 3 core values?',
    display: 'Core Values',
    help: 'This will help investors know more about your company culture.',
    skippable: true,
  },
  {
    index: 8,
    title: 'What is your team size?',
    display: 'Team Size',
    help: 'This will help investors find you in filtered results.',
    skippable: true,
  },
  {
    index: 9,
    title: 'Tell us who are the key people in your startup.',
    display: 'People',
    help: 'This will help investors connect with your startup.',
    skippable: true,
  },
]

const StartupBusinessSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: '',
    display: '',
    help: '',
    skippable: false,
  },
]

const StartupFinancialsSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: '',
    display: '',
    help: '',
    skippable: false,
  },
]

const StartupObjectiveSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: 'How much capital are you planning to invest here?',
    display: 'Capital',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 2,
    title:
      'Select all the funding stages you would like to participate in here.',
    display: 'Stages',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 3,
    title:
      'Select all the startup sizes you are comfortable to invest in here.',
    display: 'Sizes',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 4,
    title: 'Select all the time horizons you are looking to invest for.',
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
    title: 'Select all the sectors you are looking to invest in here.',
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
    title: 'What all would be your goals here?',
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

const StartupPreferencesSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: 'Choose who can message you',
    display: 'Message',
    help: 'PRIVATE: No one can message you, CONNECTIONS: Only your connections can message you, FOLLOWERS: Your followers can also message you, PUBLIC: Anyone can message you',
    skippable: true,
  },
  {
    index: 2,
    title: 'Choose who will receive feeds about your activity',
    display: 'Activity',
    help: 'Your platform activity includes you making connections, following others, posting, liking and commenting, etc.',
    skippable: true,
  },
  {
    index: 3,
    title: 'Choose who can view your profile details',
    display: 'Profile',
    help: 'PRIVATE: Your profile details are hidden from everyone',
    skippable: true,
  },
  {
    index: 4,
    title: 'Choose the level of in-app notifications you want to receive',
    display: 'Notifications',
    help: 'Notifications include real-time updates about connection requests, receiving messages, likes and comments on your posts, etc.',
    skippable: true,
  },
  {
    index: 5,
    title: 'Choose your UI theme preference',
    display: 'Theme',
    help: 'SYSTEM: Automatically select theme based on your system settings. (Changes take effect once you complete onboarding)',
    skippable: true,
  },
]

export const StartupStepsInfoList = [
  { steps: StartupAboutSteps, component: StartupAbout },
  { steps: StartupBackgroundSteps, component: StartupBackground },
  { steps: StartupBusinessSteps, component: StartupBusiness },
  { steps: StartupFinancialsSteps, component: StartupFinancials },
  { steps: StartupObjectiveSteps, component: StartupObjective },
  { steps: StartupPreferencesSteps, component: StartupPreferences },
]
