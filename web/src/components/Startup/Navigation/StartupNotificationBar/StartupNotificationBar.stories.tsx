// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupNotificationBar> = (args) => {
//   return <StartupNotificationBar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupNotificationBar from './StartupNotificationBar'

export const generated = () => {
  return <StartupNotificationBar />
}

export default {
  title: 'Components/StartupNotificationBar',
  component: StartupNotificationBar,
} as ComponentMeta<typeof StartupNotificationBar>
