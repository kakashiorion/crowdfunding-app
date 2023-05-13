// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof InvestorNavigationMenu> = (args) => {
//   return <InvestorNavigationMenu {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorNavigationMenu from './InvestorNavigationMenu'

export const generated = () => {
  return <InvestorNavigationMenu />
}

export default {
  title: 'Components/InvestorNavigationMenu',
  component: InvestorNavigationMenu,
} as ComponentMeta<typeof InvestorNavigationMenu>
