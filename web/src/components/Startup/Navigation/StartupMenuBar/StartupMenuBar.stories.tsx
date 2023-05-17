// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupMenuBar> = (args) => {
//   return <StartupMenuBar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupMenuBar from './StartupMenuBar'

export const generated = () => {
  return <StartupMenuBar />
}

export default {
  title: 'Components/StartupMenuBar',
  component: StartupMenuBar,
} as ComponentMeta<typeof StartupMenuBar>
