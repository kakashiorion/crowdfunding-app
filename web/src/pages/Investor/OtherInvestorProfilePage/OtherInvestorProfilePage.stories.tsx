import type { ComponentMeta } from '@storybook/react'

import OtherInvestorProfilePage from './OtherInvestorProfilePage'

export const generated = () => {
  return <OtherInvestorProfilePage />
}

export default {
  title: 'Pages/OtherInvestorProfilePage',
  component: OtherInvestorProfilePage,
} as ComponentMeta<typeof OtherInvestorProfilePage>
