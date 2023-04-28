import type { ComponentMeta, ComponentStory } from '@storybook/react'

import SignupPageLayout from './SignupPageLayout'

export const generated: ComponentStory<typeof SignupPageLayout> = (args) => {
  return <SignupPageLayout {...args} />
}

export default {
  title: 'Layouts/SignupPageLayout',
  component: SignupPageLayout,
} as ComponentMeta<typeof SignupPageLayout>
