import type { ComponentMeta } from '@storybook/react'

import InvestorOffersPage from './InvestorOffersPage'

export const generated = () => {
  return <InvestorOffersPage />
}

export default {
  title: 'Pages/InvestorOffersPage',
  component: InvestorOffersPage,
} as ComponentMeta<typeof InvestorOffersPage>
