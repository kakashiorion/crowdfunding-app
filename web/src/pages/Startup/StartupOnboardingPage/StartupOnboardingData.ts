import AboutIcon from 'public/icons/about.svg'
import BackgroundIcon from 'public/icons/background.svg'
import BusinessIcon from 'public/icons/business.svg'
import FinancialsIcon from 'public/icons/finance.svg'
import MarketIcon from 'public/icons/market.svg'
import ObjectiveIcon from 'public/icons/objective.svg'
import PreferencesIcon from 'public/icons/preferences.svg'

import StartupAbout from 'src/components/Onboarding/Startup/StartupAbout/StartupAbout'
import StartupBackground from 'src/components/Onboarding/Startup/StartupBackground/StartupBackground'
import StartupBusiness from 'src/components/Onboarding/Startup/StartupBusiness/StartupBusiness'
import StartupFinancials from 'src/components/Onboarding/Startup/StartupFinancials/StartupFinancials'
import StartupMarket from 'src/components/Onboarding/Startup/StartupMarket/StartupMarket'
import StartupObjective from 'src/components/Onboarding/Startup/StartupObjective/StartupObjective'
import StartupPreferences from 'src/components/Onboarding/Startup/StartupPreferences/StartupPreferences'
import {
  OnboardingSectionInfoType,
  OnboardingStepsInfoType,
} from 'src/lib/onboardingConsts'

export const StartupOnboardingSections: OnboardingSectionInfoType[] = [
  {
    index: 1,
    title: 'About You',
    subTitle: 'Capturing basic details to create your startup profile',
    icon: AboutIcon,
  },
  {
    index: 2,
    title: 'Background',
    subTitle: 'Learning about your origin story and history',
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
    title: 'Market',
    subTitle: 'Analyzing your target market condition',
    icon: MarketIcon,
  },
  {
    index: 5,
    title: 'Financials',
    subTitle: 'Looking at your numbers and metrics',
    icon: FinancialsIcon,
  },
  {
    index: 6,
    title: 'Objective',
    subTitle: 'Understanding your goals to get better matches',
    icon: ObjectiveIcon,
  },
  {
    index: 7,
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
    help: 'This name will be displayed on your profile and used to identify your startup.',
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
    title: 'When was your company founded?',
    display: 'Date',
    help: 'This date will be displayed on your profile.',
    skippable: false,
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
    title: 'Where is your startup located?',
    display: 'Location',
    help: 'This will help investors to find you in filtered results.',
    skippable: false,
  },
  {
    index: 7,
    title: 'Select the business sector and sub-category of your startup.',
    display: 'Sector',
    help: 'This will help investors to find you in filtered results.',
    skippable: false,
  },
]

const StartupBackgroundSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: 'What value do you provide to your customers?',
    display: 'Value Prop',
    help: 'This will help investors know more about your startup.',
    skippable: true,
  },
  {
    index: 2,
    title: 'How did you get the idea for this startup?',
    display: 'Origin',
    help: 'This will make investors connect with your startup.',
    skippable: true,
  },
  {
    index: 3,
    title: 'Why this business and not something else?',
    display: 'Motivation',
    help: 'This can convince investors about your dedication.',
    skippable: true,
  },
  {
    index: 4,
    title: 'How many startups have you founded before this?',
    display: 'Experience',
    help: 'This will help investors find you in filtered results.',
    skippable: false,
  },
  {
    index: 5,
    title: 'What is the mission of your startup?',
    display: 'Mission',
    help: 'This will help investors connect with your startup.',
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
    title: 'What are the top 3 core values that drive your startup?',
    display: 'Core Values',
    help: 'This will help investors know more about your company culture.',
    skippable: true,
  },
  {
    index: 8,
    title: 'What is your team size?',
    display: 'Team Size',
    help: 'This will help investors find you in filtered results.',
    skippable: false,
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
    title: 'How many users do you have?',
    display: 'Users',
    help: 'This will help investors find you in filtered results.',
    skippable: false,
  },
  {
    index: 2,
    title: 'How many cities are you operating in?',
    display: 'Cities',
    help: 'This will help investors find you in filtered results.',
    skippable: false,
  },
  {
    index: 3,
    title: 'What is your distribution type?',
    display: 'Distribution',
    help: 'This will help investors find you in filtered results. B2B: Your customers are other businesses. B2C: Your customers are common people.',
    skippable: false,
  },
  {
    index: 4,
    title: 'Tell us about your key partners or suppliers.',
    display: 'Partners',
    help: 'This will help investors know more about your business.',
    skippable: true,
  },
  {
    index: 5,
    title: 'Tell us about your key customer segments.',
    display: 'Customers',
    help: 'This will help investors know more about your business.',
    skippable: true,
  },
  {
    index: 6,
    title: 'What has worked well for you till now?',
    display: 'Success',
    help: 'This will help investors connect with your business idea.',
    skippable: true,
  },
  {
    index: 7,
    title: 'What have been your biggest challenges so far?',
    display: 'Challenges',
    help: 'This will help investors connect with your business idea.',
    skippable: true,
  },
  {
    index: 8,
    title:
      'Tell us the top 3 things you would like to improve about your startup.',
    display: 'Improvements',
    help: 'This will help investors connect with your business idea.',
    skippable: true,
  },
  {
    index: 9,
    title: 'What are the top 3 activities you are currently working on?',
    display: 'Activities',
    help: 'This will help investors connect with your business idea.',
    skippable: true,
  },
  {
    index: 10,
    title: 'Do you have an online business?',
    display: 'Online',
    help: 'This will help investors find you in filtered results.',
    skippable: false,
  },
]

const StartupMarketSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: 'How do you mainly make money?',
    display: 'Revenue',
    help: 'This will help investors find you in filtered results.',
    skippable: true,
  },
  {
    index: 2,
    title: 'What are your biggest cost heads?',
    display: 'Cost',
    help: 'This will help investors find you in filtered results.',
    skippable: true,
  },
  {
    index: 3,
    title: 'What is your short term plan?',
    display: 'Plan',
    help: 'This will help investors find you in filtered results.',
    skippable: false,
  },
  {
    index: 4,
    title: 'What is the total size of your market (in Cr)?',
    display: 'Size',
    help: 'This will help investors know more about your business market.',
    skippable: false,
  },
  {
    index: 5,
    title: 'What is the annual growth rate of this market (in %)?',
    display: 'Growth',
    help: 'This will help investors know more about your business market.',
    skippable: false,
  },
  {
    index: 6,
    title: 'Tell us about the top trends in this market.',
    display: 'Trends',
    help: 'This will help investors know more about your business market.',
    skippable: true,
  },
  {
    index: 7,
    title: 'What do you think are the biggest opportunities in this market?',
    display: 'Opportunities',
    help: 'This will help investors know more about your business market.',
    skippable: true,
  },
  {
    index: 8,
    title: 'What do you think are the major threats to this market?',
    display: 'Threats',
    help: 'This will help investors know more about your business market.',
    skippable: true,
  },
  {
    index: 9,
    title: 'Tell us about your key market competitors.',
    display: 'Competitors',
    help: 'This will help investors know more about your business market.',
    skippable: true,
  },
  {
    index: 10,
    title:
      'What do you think is the X-factor that will help your startup succeed?',
    display: 'X-Factor',
    help: 'This will help investors connect with your business idea.',
    skippable: true,
  },
]

const StartupFinancialsSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: 'What was your last funding stage?',
    display: 'Stage',
    help: 'This will help investors find you in filtered results.',
    skippable: false,
  },
  {
    index: 2,
    title: 'What was your valuation after this funding round (in Cr)?',
    display: 'Valuation',
    help: 'This will help investors find you in filtered results.',
    skippable: true,
  },
  {
    index: 3,
    title: 'Tell us what your cap table looks like.',
    display: 'Cap Table',
    help: 'This will help investors know more about your statup.',
    skippable: true,
  },
  {
    index: 4,
    title: 'How many funding rounds have had till now?',
    display: 'Rounds',
    help: 'This will help investors know more about your statup.',
    skippable: true,
  },
  {
    index: 5,
    title: 'What is your current ratio right now?',
    display: 'Current Ratio',
    help: 'This will help investors know more about your statup. CR = Current Assets / Current Liabilites',
    skippable: false,
  },
  {
    index: 6,
    title: 'What is your debt to equity ratio right now?',
    display: 'DE Ratio',
    help: 'This will help investors know more about your statup.',
    skippable: false,
  },
  {
    index: 7,
    title: 'How much was your revenue in the last FY?',
    display: 'Revenue',
    help: 'This will help investors know more about your statup.',
    skippable: false,
  },
  {
    index: 8,
    title: 'How fast have you grown your revenue annually (in %)?',
    display: 'Growth',
    help: 'This will help investors know more about your statup.',
    skippable: false,
  },
  {
    index: 9,
    title: 'What does your annual profit/loss margin look like (in %)?',
    display: 'Margin',
    help: 'This will help investors know more about your statup.',
    skippable: false,
  },
  {
    index: 10,
    title: 'What much cash runway do you have right now?',
    display: 'Runway',
    help: 'This will help investors know more about your statup.',
    skippable: false,
  },
  {
    index: 11,
    title: 'Where do you plan to use the cash?',
    display: 'Plans',
    help: 'This will help investors know more about your statup.',
    skippable: true,
  },
]

const StartupObjectiveSteps: OnboardingStepsInfoType[] = [
  {
    index: 1,
    title: 'Select the level of investors you want to connect with.',
    display: 'Investors',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 2,
    title:
      'Search and add any specific locations you would prefer to raise funds from.',
    display: 'Locations',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 3,
    title: 'Select the time horizon for which you are raising funds.',
    display: 'Timelines',
    help: 'This will help us provide you better matches.',
    skippable: false,
  },
  {
    index: 4,
    title:
      'How much expected returns/growth can you promise investors in this timeline?',
    display: 'Returns',
    help: 'This will help us provide you better matches.',
    skippable: false,
  },
  {
    index: 5,
    title: 'What are your goals here?',
    display: 'Goals',
    help: 'This will help us provide you better matches.',
    skippable: true,
  },
  {
    index: 6,
    title: 'How did you get to know about our platform?',
    display: 'Sources',
    help: 'This data will be used for internal purposes.',
    skippable: true,
  },
  {
    index: 7,
    title: 'You may provide your pitch deck for reference.',
    display: 'Pitch',
    help: 'This will help investors understand more about your startup.',
    skippable: true,
  },
  {
    index: 8,
    title: 'You may provide any product or business demo videos/resources.',
    display: 'Demo',
    help: 'This will help investors understand more about your startup.',
    skippable: true,
  },
]

const StartupPreferencesSteps: OnboardingStepsInfoType[] = [
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
    title: 'Choose the level of app notifications you want to receive',
    display: 'Notifications',
    help: 'Notifications include real-time updates about connection requests, receiving messages, likes and comments on your posts, etc.',
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

export const StartupStepsInfoList = [
  { steps: StartupAboutSteps, component: StartupAbout },
  { steps: StartupBackgroundSteps, component: StartupBackground },
  { steps: StartupBusinessSteps, component: StartupBusiness },
  { steps: StartupMarketSteps, component: StartupMarket },
  { steps: StartupFinancialsSteps, component: StartupFinancials },
  { steps: StartupObjectiveSteps, component: StartupObjective },
  { steps: StartupPreferencesSteps, component: StartupPreferences },
]
