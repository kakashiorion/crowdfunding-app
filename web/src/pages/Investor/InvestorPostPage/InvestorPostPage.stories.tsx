import type { ComponentMeta } from '@storybook/react'

import InvestorPostPage from './InvestorPostPage'

export const generated = () => {
  return <InvestorPostPage />
}

export default {
  title: 'Pages/InvestorPostPage',
  component: InvestorPostPage,
} as ComponentMeta<typeof InvestorPostPage>
