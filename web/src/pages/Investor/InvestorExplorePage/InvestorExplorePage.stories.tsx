import type { ComponentMeta } from '@storybook/react'

import InvestorExplorePage from './InvestorExplorePage'

export const generated = () => {
  return <InvestorExplorePage />
}

export default {
  title: 'Pages/InvestorExplorePage',
  component: InvestorExplorePage,
} as ComponentMeta<typeof InvestorExplorePage>
