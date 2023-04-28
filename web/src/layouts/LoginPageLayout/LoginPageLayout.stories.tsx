import type { ComponentMeta, ComponentStory } from '@storybook/react'

import LoginPageLayout from './LoginPageLayout'

export const generated: ComponentStory<typeof LoginPageLayout> = (args) => {
  return <LoginPageLayout {...args} />
}

export default {
  title: 'Layouts/LoginPageLayout',
  component: LoginPageLayout,
} as ComponentMeta<typeof LoginPageLayout>
