// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProfileMenuBar> = (args) => {
//   return <ProfileMenuBar {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProfileMenuBar from './ProfileMenuBar'

export const generated = () => {
  return <ProfileMenuBar />
}

export default {
  title: 'Components/ProfileMenuBar',
  component: ProfileMenuBar,
} as ComponentMeta<typeof ProfileMenuBar>
