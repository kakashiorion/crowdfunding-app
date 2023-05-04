// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof Label> = (args) => {
//   return <Label {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import Label from './Label'

export const generated = () => {
  return <Label />
}

export default {
  title: 'Components/Label',
  component: Label,
} as ComponentMeta<typeof Label>
