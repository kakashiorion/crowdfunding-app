import type { ComponentMeta } from '@storybook/react'

import InvestorCreatePostPage from './InvestorCreatePostPage'

export const generated = () => {
  return <InvestorCreatePostPage />
}

export default {
  title: 'Pages/InvestorCreatePostPage',
  component: InvestorCreatePostPage,
} as ComponentMeta<typeof InvestorCreatePostPage>
