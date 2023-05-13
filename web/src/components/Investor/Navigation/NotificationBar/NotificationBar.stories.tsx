// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof NotificationBar> = (args) => {
//   return <NotificationBar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import NotificationBar from './NotificationBar'

export const generated = () => {
  return <NotificationBar />
}

export default {
  title: 'Components/NotificationBar',
  component: NotificationBar,
} as ComponentMeta<typeof NotificationBar>
