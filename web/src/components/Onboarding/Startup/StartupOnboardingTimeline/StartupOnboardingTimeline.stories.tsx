// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupOnboardingTimeline> = (args) => {
//   return <StartupOnboardingTimeline {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupOnboardingTimeline from './StartupOnboardingTimeline'

export const generated = () => {
  return <StartupOnboardingTimeline />
}

export default {
  title: 'Components/StartupOnboardingTimeline',
  component: StartupOnboardingTimeline,
} as ComponentMeta<typeof StartupOnboardingTimeline>
