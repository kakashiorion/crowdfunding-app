// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof ProgressIndicator> = (args) => {
//   return <ProgressIndicator {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import ProgressIndicator from './ProgressIndicator'

export const generated = () => {
  return <ProgressIndicator />
}

export default {
  title: 'Components/ProgressIndicator',
  component: ProgressIndicator,
} as ComponentMeta<typeof ProgressIndicator>
