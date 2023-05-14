// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorMultipleChoiceOption> = (args) => {
//   return <InvestorMultipleChoiceOption {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorMultipleChoiceOption from './InvestorMultipleChoiceOption'

export const generated = () => {
  return <InvestorMultipleChoiceOption />
}

export default {
  title: 'Components/InvestorMultipleChoiceOption',
  component: InvestorMultipleChoiceOption,
} as ComponentMeta<typeof InvestorMultipleChoiceOption>
