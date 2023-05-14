// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorTripleTextArea> = (args) => {
//   return <InvestorTripleTextArea {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorTripleTextArea from './InvestorTripleTextArea'

export const generated = () => {
  return <InvestorTripleTextArea />
}

export default {
  title: 'Components/InvestorTripleTextArea',
  component: InvestorTripleTextArea,
} as ComponentMeta<typeof InvestorTripleTextArea>
