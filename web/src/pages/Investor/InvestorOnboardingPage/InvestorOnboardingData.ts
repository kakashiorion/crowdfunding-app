import SvgAbout from 'src/components/Icon/About'
import SvgExperience from 'src/components/Icon/Experience'
import SvgObjective from 'src/components/Icon/Objective'
import SvgPreferences from 'src/components/Icon/Preferences'
import InvestorAbout from 'src/components/Onboarding/Investor/InvestorAbout/InvestorAbout'
import InvestorExperience from 'src/components/Onboarding/Investor/InvestorExperience/InvestorExperience'
import InvestorObjective from 'src/components/Onboarding/Investor/InvestorObjective/InvestorObjective'
import InvestorPreferences from 'src/components/Onboarding/Investor/InvestorPreferences/InvestorPreferences'
import {
  OnboardingSectionInfoType,
  OnboardingStepsInfoType,
} from 'src/lib/onboardingConsts'

export const InvestorOnboardingSections: OnboardingSectionInfoType[] = [
  {
    index: 1,
    title: 'About You',
    subTitle: 'Capturing basic details to create your investor profile',
    icon: SvgAbout,
  },
  {
    index: 2,
    title: 'Experience',
    subTitle: 'Getting to know your entrepreneurial history',
    icon: SvgExperience,
  },
  {
    index: 3,
    title: 'Objective',
    subTitle: 'Understanding your goals to get better matches',
    icon: SvgObjective,
  },
  {
    index: 4,
    title: 'Preferences',
    subTitle: 'Personalizing the platform as per your needs',
    icon: SvgPreferences,
  },
]

const InvestorAboutSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: `Let's start with your name.`,
    display: 'Name',
    help: 'This name will be displayed on your profile and used to identify you.',
    skippable: false,
  },
  {
    index: 2,
    title: 'When were you born?',
    display: 'DOB',
    help: 'This info will be used for internal purposes only.',
    skippable: true,
  },
  {
    index: 3,
    title: 'Where are you located?',
    display: 'Location',
    help: 'This will help startups or other investors to find you in filtered results. You can provide the nearest city',
    skippable: false,
  },
  {
    index: 4,
    title: 'Do you have a LinkedIn Profile?',
    display: 'LinkedIn',
    help: 'This enables startups or other investors to reach out to you outside our platform.',
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
    skippable: false,
  },
  {
    index: 7,
    title: 'How much work experience do you have in years?',
    display: 'Work',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: false,
  },
  {
    index: 8,
    title: 'How many different companies have you worked at?',
    display: 'Companies',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: false,
  },
  {
    index: 9,
    title: 'Select all the different sectors you have worked in.',
    display: 'Sectors',
    help: 'This will help startups or other investors to find you in filtered results.',
    skippable: true,
  },
]

const InvestorExperienceSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: 'How many startups have you worked in as an employee?',
    display: 'Employee',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: false,
  },
  {
    index: 2,
    title: 'How many statups have you founded?',
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
    title: 'Which funding stages have you participated in the past?',
    display: 'Stage',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: true,
  },
  {
    index: 5,
    title: 'Generally, how much amount do you invest in a startup?',
    display: 'Amount',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: false,
  },
  {
    index: 6,
    title: 'How many successful exits have you had till now?',
    display: 'Exits',
    help: 'This enables us to guage your profile for relevant feed and suggestions.',
    skippable: false,
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
    title: 'Select all the sectors you have invested in the past.',
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

const InvestorObjectiveSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: 'How much capital are you planning to invest?',
    display: 'Capital',
    help: 'This will help us provide you better matches.',
    skippable: false,
  },
  {
    index: 2,
    title: 'Select all the funding stages you would like to participate in.',
    display: 'Stages',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 3,
    title: 'Select all the startup team sizes you are looking to invest in.',
    display: 'Team Size',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 4,
    title: 'Select all the time horizons you would prefer to invest for.',
    display: 'Timelines',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 5,
    title: 'How much is your risk apetite?',
    display: 'Apetite',
    help: 'This will help us provide you better matches.',
    skippable: false,
  },
  {
    index: 6,
    title: 'Select all the sectors you are interested to invest in.',
    display: 'Sectors',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 7,
    title: 'Search and add your preferred locations, if any, to invest in.',
    display: 'Locations',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 8,
    title: 'What are your goals here?',
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

const InvestorPreferencesSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: 'Choose who can message you',
    display: 'Message',
    help: 'PRIVATE: No one can message you, CONNECTIONS: Only your connections can message you, FOLLOWERS: Your followers can also message you, PUBLIC: Anyone can message you',
    skippable: false,
  },
  {
    index: 2,
    title: 'Choose who will receive feeds about your activity',
    display: 'Activity',
    help: 'Your platform activity includes you making connections, following others, posting, liking and commenting, etc.',
    skippable: false,
  },
  {
    index: 3,
    title: 'Choose who can view your profile details',
    display: 'Profile',
    help: 'PRIVATE: Your profile details are hidden from everyone',
    skippable: false,
  },
  {
    index: 4,
    title: 'Choose the amount of app notifications you want to receive',
    display: 'Notification',
    help: 'Notifications include real-time updates about connection requests, received messages, likes and comments on your posts, etc.',
    skippable: false,
  },
  {
    index: 5,
    title: 'Choose your UI theme preference',
    display: 'Theme',
    help: 'SYSTEM: Automatically select theme based on your system settings. (Changes take effect once you complete onboarding)',
    skippable: false,
  },
]

export const InvestorStepsInfoList = [
  { steps: InvestorAboutSteps, component: InvestorAbout },
  { steps: InvestorExperienceSteps, component: InvestorExperience },
  { steps: InvestorObjectiveSteps, component: InvestorObjective },
  { steps: InvestorPreferencesSteps, component: InvestorPreferences },
]
