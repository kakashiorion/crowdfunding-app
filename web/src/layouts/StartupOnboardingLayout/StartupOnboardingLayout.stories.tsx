import type { ComponentMeta, ComponentStory } from '@storybook/react'

import StartupOnboardingLayout from './StartupOnboardingLayout'

export const generated: ComponentStory<typeof StartupOnboardingLayout> = (
  args
) => {
  return <StartupOnboardingLayout {...args} />
}

export default {
  title: 'Layouts/StartupOnboardingLayout',
  component: StartupOnboardingLayout,
} as ComponentMeta<typeof StartupOnboardingLayout>
