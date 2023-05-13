// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorNavigationItem> = (args) => {
//   return <InvestorNavigationItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorNavigationItem from './InvestorNavigationItem'

export const generated = () => {
  return <InvestorNavigationItem />
}

export default {
  title: 'Components/InvestorNavigationItem',
  component: InvestorNavigationItem,
} as ComponentMeta<typeof InvestorNavigationItem>
