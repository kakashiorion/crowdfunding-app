// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof StartupMultipleChoiceOption> = (args) => {
//   return <StartupMultipleChoiceOption {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import type { ComponentMeta } from '@storybook/react'

import StartupMultipleChoiceOption from './StartupMultipleChoiceOption'

export const generated = () => {
  return <StartupMultipleChoiceOption />
}

export default {
  title: 'Components/StartupMultipleChoiceOption',
  component: StartupMultipleChoiceOption,
} as ComponentMeta<typeof StartupMultipleChoiceOption>
