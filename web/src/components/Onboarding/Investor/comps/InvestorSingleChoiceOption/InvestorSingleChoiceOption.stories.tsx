// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorSingleChoiceOption> = (args) => {
//   return <InvestorSingleChoiceOption {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorSingleChoiceOption from './InvestorSingleChoiceOption'

export const generated = () => {
  return <InvestorSingleChoiceOption />
}

export default {
  title: 'Components/InvestorSingleChoiceOption',
  component: InvestorSingleChoiceOption,
} as ComponentMeta<typeof InvestorSingleChoiceOption>
