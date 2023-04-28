import type { ComponentMeta, ComponentStory } from '@storybook/react'

import StartupHomeLayout from './StartupHomeLayout'

export const generated: ComponentStory<typeof StartupHomeLayout> = (args) => {
  return <StartupHomeLayout {...args} />
}

export default {
  title: 'Layouts/StartupHomeLayout',
  component: StartupHomeLayout,
} as ComponentMeta<typeof StartupHomeLayout>
