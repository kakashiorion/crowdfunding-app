import type { ComponentMeta } from '@storybook/react'

import StartupOnboardingPage from './StartupOnboardingPage'

export const generated = () => {
  return <StartupOnboardingPage />
}

export default {
  title: 'Pages/StartupOnboardingPage',
  component: StartupOnboardingPage,
} as ComponentMeta<typeof StartupOnboardingPage>
