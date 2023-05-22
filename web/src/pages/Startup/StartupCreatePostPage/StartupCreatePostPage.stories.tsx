import type { ComponentMeta } from '@storybook/react'

import StartupCreatePostPage from './StartupCreatePostPage'

export const generated = () => {
  return <StartupCreatePostPage />
}

export default {
  title: 'Pages/StartupCreatePostPage',
  component: StartupCreatePostPage,
} as ComponentMeta<typeof StartupCreatePostPage>
