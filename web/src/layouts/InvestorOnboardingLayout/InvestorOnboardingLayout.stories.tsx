import type { ComponentMeta, ComponentStory } from '@storybook/react'

import InvestorOnboardingLayout from './InvestorOnboardingLayout'

export const generated: ComponentStory<typeof InvestorOnboardingLayout> = (
  args
) => {
  return <InvestorOnboardingLayout {...args} />
}

export default {
  title: 'Layouts/InvestorOnboardingLayout',
  component: InvestorOnboardingLayout,
} as ComponentMeta<typeof InvestorOnboardingLayout>
