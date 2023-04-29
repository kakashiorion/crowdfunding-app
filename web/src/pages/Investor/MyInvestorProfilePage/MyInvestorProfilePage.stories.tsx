import type { ComponentMeta } from '@storybook/react'

import MyInvestorProfilePage from './MyInvestorProfilePage'

export const generated = () => {
  return <MyInvestorProfilePage />
}

export default {
  title: 'Pages/MyInvestorProfilePage',
  component: MyInvestorProfilePage,
} as ComponentMeta<typeof MyInvestorProfilePage>
