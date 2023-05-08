// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupBusiness> = (args) => {
//   return <StartupBusiness {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupBusiness from './StartupBusiness'

export const generated = () => {
  return <StartupBusiness />
}

export default {
  title: 'Components/StartupBusiness',
  component: StartupBusiness,
} as ComponentMeta<typeof StartupBusiness>
