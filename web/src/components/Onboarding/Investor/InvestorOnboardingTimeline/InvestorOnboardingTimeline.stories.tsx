// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorOnboardingTimeline> = (args) => {
//   return <InvestorOnboardingTimeline {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorOnboardingTimeline from './InvestorOnboardingTimeline'

export const generated = () => {
  return <InvestorOnboardingTimeline />
}

export default {
  title: 'Components/InvestorOnboardingTimeline',
  component: InvestorOnboardingTimeline,
} as ComponentMeta<typeof InvestorOnboardingTimeline>
