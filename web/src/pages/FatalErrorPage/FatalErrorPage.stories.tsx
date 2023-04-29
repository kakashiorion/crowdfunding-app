import type { ComponentMeta } from '@storybook/react'

import FatalErrorPage from './FatalErrorPage'

export const generated = () => {
  return <FatalErrorPage />
}

export default {
  title: 'Pages/FatalErrorPage',
  component: FatalErrorPage,
} as ComponentMeta<typeof FatalErrorPage>
