import type { ComponentMeta } from '@storybook/react'

import StartupPostPage from './StartupPostPage'

export const generated = () => {
  return <StartupPostPage />
}

export default {
  title: 'Pages/StartupPostPage',
  component: StartupPostPage,
} as ComponentMeta<typeof StartupPostPage>
