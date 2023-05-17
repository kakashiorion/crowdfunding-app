// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof SearchBar> = (args) => {
//   return <SearchBar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import InvestorSearchBar from './SearchBar'

export const generated = () => {
  return <InvestorSearchBar />
}

export default {
  title: 'Components/SearchBar',
  component: InvestorSearchBar,
} as ComponentMeta<typeof InvestorSearchBar>
