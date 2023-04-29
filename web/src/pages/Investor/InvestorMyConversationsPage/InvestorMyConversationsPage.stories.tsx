import type { ComponentMeta } from '@storybook/react'

import InvestorMyConversationsPage from './InvestorMyConversationsPage'

export const generated = () => {
  return <InvestorMyConversationsPage />
}

export default {
  title: 'Pages/InvestorMyConversationsPage',
  component: InvestorMyConversationsPage,
} as ComponentMeta<typeof InvestorMyConversationsPage>
