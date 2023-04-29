import type { ComponentMeta } from '@storybook/react'

import StartupMyOfferPage from './StartupMyOfferPage'

export const generated = () => {
  return <StartupMyOfferPage />
}

export default {
  title: 'Pages/StartupMyOfferPage',
  component: StartupMyOfferPage,
} as ComponentMeta<typeof StartupMyOfferPage>
