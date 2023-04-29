import type { ComponentMeta } from '@storybook/react'

import StartupMyConnectionsPage from './StartupMyConnectionsPage'

export const generated = () => {
  return <StartupMyConnectionsPage />
}

export default {
  title: 'Pages/StartupMyConnectionsPage',
  component: StartupMyConnectionsPage,
} as ComponentMeta<typeof StartupMyConnectionsPage>
