// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupMarket> = (args) => {
//   return <StartupMarket {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupMarket from './StartupMarket'

export const generated = () => {
  return <StartupMarket />
}

export default {
  title: 'Components/StartupMarket',
  component: StartupMarket,
} as ComponentMeta<typeof StartupMarket>
