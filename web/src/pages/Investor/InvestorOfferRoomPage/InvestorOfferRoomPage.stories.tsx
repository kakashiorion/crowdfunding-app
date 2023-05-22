import type { ComponentMeta } from '@storybook/react'

import InvestorOfferRoomPage from './InvestorOfferRoomPage'

export const generated = () => {
  return <InvestorOfferRoomPage />
}

export default {
  title: 'Pages/InvestorOfferRoomPage',
  component: InvestorOfferRoomPage,
} as ComponentMeta<typeof InvestorOfferRoomPage>
