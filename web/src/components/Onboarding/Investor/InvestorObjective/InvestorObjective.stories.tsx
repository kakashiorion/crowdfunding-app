// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorObjective> = (args) => {
//   return <InvestorObjective {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorObjective from './InvestorObjective'

export const generated = () => {
  return <InvestorObjective />
}

export default {
  title: 'Components/InvestorObjective',
  component: InvestorObjective,
} as ComponentMeta<typeof InvestorObjective>
