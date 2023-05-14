// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof OnboardingFeedbackForm> = (args) => {
//   return <OnboardingFeedbackForm {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import OnboardingFeedbackForm from './OnboardingFeedbackForm'

export const generated = () => {
  return <OnboardingFeedbackForm />
}

export default {
  title: 'Components/OnboardingFeedbackForm',
  component: OnboardingFeedbackForm,
} as ComponentMeta<typeof OnboardingFeedbackForm>
