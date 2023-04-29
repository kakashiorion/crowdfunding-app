import type { ComponentMeta } from '@storybook/react'

import StartupMyProfilePage from './StartupMyProfilePage'

export const generated = () => {
  return <StartupMyProfilePage />
}

export default {
  title: 'Pages/StartupMyProfilePage',
  component: StartupMyProfilePage,
} as ComponentMeta<typeof StartupMyProfilePage>
