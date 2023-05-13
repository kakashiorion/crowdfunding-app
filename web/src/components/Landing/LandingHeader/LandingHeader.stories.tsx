// When you've added props to your component,
// pass Storybook's `args` through this story to control it from the addons panel:
//
// ```tsx
// import type { ComponentStory } from '@storybook/react'
//
// export const generated: ComponentStory<typeof LandingHeader> = (args) => {
//   return <LandingHeader {...args} />
// }
// ```
//
// See https://storybook.js.org/docs/react/writing-stories/args.

import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport'
import type { ComponentMeta } from '@storybook/react'

import LandingHeader from './LandingHeader'

export const generated = () => {
  return <LandingHeader />
}
const customViewports = {
  Web: {
    name: 'Web',
    styles: {
      width: '1080px',
      height: '720px',
    },
  },
  WebXL: {
    name: 'Web XL',
    styles: {
      width: '1440px',
      height: '720px',
    },
  },
}

export default {
  title: 'Components/LandingHeader',
  component: LandingHeader,
  layout: 'fullscreen',
  parameters: {
    viewport: {
      viewports: {
        ...MINIMAL_VIEWPORTS,
        ...customViewports,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '0px' }}>
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LandingHeader>
