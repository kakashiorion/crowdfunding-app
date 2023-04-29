import type { ComponentMeta } from '@storybook/react'

import InvestorProfilePage from './InvestorProfilePage'

export const generated = () => {
  return <InvestorProfilePage />
}

export default {
  title: 'Pages/InvestorProfilePage',
  component: InvestorProfilePage,
} as ComponentMeta<typeof InvestorProfilePage>
