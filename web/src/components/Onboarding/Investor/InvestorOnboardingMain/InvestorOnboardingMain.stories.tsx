// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorOnboardingMain> = (args) => {
//   return <InvestorOnboardingMain {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorOnboardingMain from './InvestorOnboardingMain'

export const generated = () => {
  return <InvestorOnboardingMain />
}

export default {
  title: 'Components/InvestorOnboardingMain',
  component: InvestorOnboardingMain,
} as ComponentMeta<typeof InvestorOnboardingMain>
