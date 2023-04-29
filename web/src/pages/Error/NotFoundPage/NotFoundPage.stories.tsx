import type { ComponentMeta } from '@storybook/react'

import NotFoundPage from './NotFoundPage'

export const generated = () => {
  return <NotFoundPage />
}

export default {
  title: 'Pages/NotFoundPage',
  component: NotFoundPage,
} as ComponentMeta<typeof NotFoundPage>
