import type { ComponentMeta, ComponentStory } from '@storybook/react'

import InvestorHomeLayout from './InvestorHomeLayout'

export const generated: ComponentStory<typeof InvestorHomeLayout> = (args) => {
  return <InvestorHomeLayout {...args} />
}

export default {
  title: 'Layouts/InvestorHomeLayout',
  component: InvestorHomeLayout,
} as ComponentMeta<typeof InvestorHomeLayout>
