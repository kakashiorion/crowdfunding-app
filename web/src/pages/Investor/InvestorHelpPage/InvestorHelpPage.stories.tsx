import type { ComponentMeta } from '@storybook/react'

import InvestorHelpPage from './InvestorHelpPage'

export const generated = () => {
  return <InvestorHelpPage />
}

export default {
  title: 'Pages/InvestorHelpPage',
  component: InvestorHelpPage,
} as ComponentMeta<typeof InvestorHelpPage>
