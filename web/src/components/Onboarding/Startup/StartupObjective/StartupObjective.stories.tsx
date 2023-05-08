// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupObjective> = (args) => {
//   return <StartupObjective {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupObjective from './StartupObjective'

export const generated = () => {
  return <StartupObjective />
}

export default {
  title: 'Components/StartupObjective',
  component: StartupObjective,
} as ComponentMeta<typeof StartupObjective>
