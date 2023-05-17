// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupNavigationItem> = (args) => {
//   return <StartupNavigationItem {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupNavigationItem from './StartupNavigationItem'

export const generated = () => {
  return <StartupNavigationItem />
}

export default {
  title: 'Components/StartupNavigationItem',
  component: StartupNavigationItem,
} as ComponentMeta<typeof StartupNavigationItem>
