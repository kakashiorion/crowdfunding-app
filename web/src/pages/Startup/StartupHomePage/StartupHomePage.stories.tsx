import type { ComponentMeta } from '@storybook/react'

import StartupHomePage from './StartupHomePage'

export const generated = () => {
  return <StartupHomePage />
}

export default {
  title: 'Pages/StartupHomePage',
  component: StartupHomePage,
} as ComponentMeta<typeof StartupHomePage>
