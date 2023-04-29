import type { ComponentMeta } from '@storybook/react'

import StartupProfilePage from './StartupProfilePage'

export const generated = () => {
  return <StartupProfilePage />
}

export default {
  title: 'Pages/StartupProfilePage',
  component: StartupProfilePage,
} as ComponentMeta<typeof StartupProfilePage>
