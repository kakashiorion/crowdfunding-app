// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupPreferences> = (args) => {
//   return <StartupPreferences {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupPreferences from './StartupPreferences'

export const generated = () => {
  return <StartupPreferences />
}

export default {
  title: 'Components/StartupPreferences',
  component: StartupPreferences,
} as ComponentMeta<typeof StartupPreferences>
