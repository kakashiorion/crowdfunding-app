// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupSingleTextArea> = (args) => {
//   return <StartupSingleTextArea {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupSingleTextArea from './StartupSingleTextArea'

export const generated = () => {
  return <StartupSingleTextArea />
}

export default {
  title: 'Components/StartupSingleTextArea',
  component: StartupSingleTextArea,
} as ComponentMeta<typeof StartupSingleTextArea>
