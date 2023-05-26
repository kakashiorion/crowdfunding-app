import type { ComponentMeta } from '@storybook/react'

import StartupInvestorProfilePage from './StartupInvestorProfilePage'

export const generated = () => {
  return <StartupInvestorProfilePage />
}

export default {
  title: 'Pages/InvestorProfilePage',
  component: StartupInvestorProfilePage,
} as ComponentMeta<typeof StartupInvestorProfilePage>
