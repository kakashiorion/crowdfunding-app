import type { ComponentMeta } from '@storybook/react'

import StartupOfferRoomPage from './StartupOfferRoomPage'

export const generated = () => {
  return <StartupOfferRoomPage />
}

export default {
  title: 'Pages/StartupOfferRoomPage',
  component: StartupOfferRoomPage,
} as ComponentMeta<typeof StartupOfferRoomPage>
