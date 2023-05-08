// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupAbout> = (args) => {
//   return <StartupAbout {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupAbout from './StartupAbout'

export const generated = () => {
  return <StartupAbout />
}

export default {
  title: 'Components/StartupAbout',
  component: StartupAbout,
} as ComponentMeta<typeof StartupAbout>
