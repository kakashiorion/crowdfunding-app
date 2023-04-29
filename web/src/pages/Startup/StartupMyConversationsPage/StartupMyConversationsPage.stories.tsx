import type { ComponentMeta } from '@storybook/react'

import StartupMyConversationsPage from './StartupMyConversationsPage'

export const generated = () => {
  return <StartupMyConversationsPage />
}

export default {
  title: 'Pages/StartupMyConversationsPage',
  component: StartupMyConversationsPage,
} as ComponentMeta<typeof StartupMyConversationsPage>
