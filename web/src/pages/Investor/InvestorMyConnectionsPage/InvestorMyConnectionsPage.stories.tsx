import type { ComponentMeta } from '@storybook/react'

import InvestorMyConnectionsPage from './InvestorMyConnectionsPage'

export const generated = () => {
  return <InvestorMyConnectionsPage />
}

export default {
  title: 'Pages/InvestorMyConnectionsPage',
  component: InvestorMyConnectionsPage,
} as ComponentMeta<typeof InvestorMyConnectionsPage>
