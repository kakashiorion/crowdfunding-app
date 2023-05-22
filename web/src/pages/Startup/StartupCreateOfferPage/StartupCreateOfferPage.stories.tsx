import type { ComponentMeta } from '@storybook/react'

import StartupCreateOfferPage from './StartupCreateOfferPage'

export const generated = () => {
  return <StartupCreateOfferPage />
}

export default {
  title: 'Pages/StartupCreateOfferPage',
  component: StartupCreateOfferPage,
} as ComponentMeta<typeof StartupCreateOfferPage>
