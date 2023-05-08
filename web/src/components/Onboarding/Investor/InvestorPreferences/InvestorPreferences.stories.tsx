// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorPreferences> = (args) => {
//   return <InvestorPreferences {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorPreferences from './InvestorPreferences'

export const generated = () => {
  return <InvestorPreferences />
}

export default {
  title: 'Components/InvestorPreferences',
  component: InvestorPreferences,
} as ComponentMeta<typeof InvestorPreferences>
