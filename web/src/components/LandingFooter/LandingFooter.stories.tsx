// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LandingFooter> = (args) => {
//   return <LandingFooter {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import LandingFooter from './LandingFooter'

export const generated = () => {
  return <LandingFooter />
}

export default {
  title: 'Components/LandingFooter',
  component: LandingFooter,
} as ComponentMeta<typeof LandingFooter>
