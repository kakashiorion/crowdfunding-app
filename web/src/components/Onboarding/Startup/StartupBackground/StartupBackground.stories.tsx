// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupStory> = (args) => {
//   return <StartupStory {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupBackground from './StartupBackground'

export const generated = () => {
  return <StartupBackground />
}

export default {
  title: 'Components/StartupStory',
  component: StartupBackground,
} as ComponentMeta<typeof StartupBackground>
