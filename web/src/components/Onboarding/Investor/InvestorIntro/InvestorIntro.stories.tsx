// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorIntro> = (args) => {
//   return <InvestorIntro {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorIntro from './InvestorIntro'

export const generated = () => {
  return <InvestorIntro />
}

export default {
  title: 'Components/InvestorIntro',
  component: InvestorIntro,
} as ComponentMeta<typeof InvestorIntro>
