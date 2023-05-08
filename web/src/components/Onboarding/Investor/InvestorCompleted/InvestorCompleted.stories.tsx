// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorCompleted> = (args) => {
//   return <InvestorCompleted {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorCompleted from './InvestorCompleted'

export const generated = () => {
  return <InvestorCompleted />
}

export default {
  title: 'Components/InvestorCompleted',
  component: InvestorCompleted,
} as ComponentMeta<typeof InvestorCompleted>
