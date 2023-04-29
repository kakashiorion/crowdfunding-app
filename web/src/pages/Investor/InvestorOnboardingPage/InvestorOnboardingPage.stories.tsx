import type { ComponentMeta } from '@storybook/react'

import InvestorOnboardingPage from './InvestorOnboardingPage'

export const generated = () => {
  return <InvestorOnboardingPage />
}

export default {
  title: 'Pages/InvestorOnboardingPage',
  component: InvestorOnboardingPage,
} as ComponentMeta<typeof InvestorOnboardingPage>
