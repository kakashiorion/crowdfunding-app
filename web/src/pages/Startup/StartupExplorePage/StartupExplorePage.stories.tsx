import type { ComponentMeta } from '@storybook/react'

import StartupExplorePage from './StartupExplorePage'

export const generated = () => {
  return <StartupExplorePage />
}

export default {
  title: 'Pages/StartupExplorePage',
  component: StartupExplorePage,
} as ComponentMeta<typeof StartupExplorePage>
