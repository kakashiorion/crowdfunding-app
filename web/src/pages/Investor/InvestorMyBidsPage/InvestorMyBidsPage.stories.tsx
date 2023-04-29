import type { ComponentMeta } from '@storybook/react'

import InvestorMyBidsPage from './InvestorMyBidsPage'

export const generated = () => {
  return <InvestorMyBidsPage />
}

export default {
  title: 'Pages/InvestorMyBidsPage',
  component: InvestorMyBidsPage,
} as ComponentMeta<typeof InvestorMyBidsPage>
