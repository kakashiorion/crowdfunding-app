// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorSingleTextArea> = (args) => {
//   return <InvestorSingleTextArea {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorSingleTextArea from './InvestorSingleTextArea'

export const generated = () => {
  return <InvestorSingleTextArea />
}

export default {
  title: 'Components/InvestorSingleTextArea',
  component: InvestorSingleTextArea,
} as ComponentMeta<typeof InvestorSingleTextArea>
