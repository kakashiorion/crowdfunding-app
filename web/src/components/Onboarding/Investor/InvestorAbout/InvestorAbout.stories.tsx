// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorAbout> = (args) => {
//   return <InvestorAbout {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorAbout from './InvestorAbout'

export const generated = () => {
  return <InvestorAbout />
}

export default {
  title: 'Components/InvestorAbout',
  component: InvestorAbout,
} as ComponentMeta<typeof InvestorAbout>
