// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupProfileBar> = (args) => {
//   return <StartupProfileBar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupProfileBar from './StartupProfileBar'

export const generated = () => {
  return <StartupProfileBar />
}

export default {
  title: 'Components/StartupProfileBar',
  component: StartupProfileBar,
} as ComponentMeta<typeof StartupProfileBar>
