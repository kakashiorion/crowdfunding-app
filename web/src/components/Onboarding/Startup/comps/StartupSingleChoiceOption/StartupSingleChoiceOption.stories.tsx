// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupSingleChoiceOption> = (args) => {
//   return <StartupSingleChoiceOption {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupSingleChoiceOption from './StartupSingleChoiceOption'

export const generated = () => {
  return <StartupSingleChoiceOption />
}

export default {
  title: 'Components/StartupSingleChoiceOption',
  component: StartupSingleChoiceOption,
} as ComponentMeta<typeof StartupSingleChoiceOption>
