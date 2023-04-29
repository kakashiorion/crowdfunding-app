import type { ComponentMeta } from '@storybook/react'

import StartupHelpPage from './StartupHelpPage'

export const generated = () => {
  return <StartupHelpPage />
}

export default {
  title: 'Pages/StartupHelpPage',
  component: StartupHelpPage,
} as ComponentMeta<typeof StartupHelpPage>
