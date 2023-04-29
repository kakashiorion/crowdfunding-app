import type { ComponentMeta } from '@storybook/react'

import InvestorHomePage from './InvestorHomePage'

export const generated = () => {
  return <InvestorHomePage />
}

export default {
  title: 'Pages/InvestorHomePage',
  component: InvestorHomePage,
} as ComponentMeta<typeof InvestorHomePage>
