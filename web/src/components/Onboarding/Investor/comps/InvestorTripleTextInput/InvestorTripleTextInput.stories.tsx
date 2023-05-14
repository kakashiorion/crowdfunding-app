// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorTripleTextInput> = (args) => {
//   return <InvestorTripleTextInput {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorTripleTextInput from './InvestorTripleTextInput'

export const generated = () => {
  return <InvestorTripleTextInput />
}

export default {
  title: 'Components/InvestorTripleTextInput',
  component: InvestorTripleTextInput,
} as ComponentMeta<typeof InvestorTripleTextInput>
