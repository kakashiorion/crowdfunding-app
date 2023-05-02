import type { ComponentMeta, ComponentStory } from '@storybook/react'

import LandingPageLayout from './LandingPageLayout'

export const generated: ComponentStory<typeof LandingPageLayout> = (args) => {
  return <LandingPageLayout {...args} />
}
// const customViewports = {
//   Mobile: {
//     name: 'Mobile',
//     styles: {
//       width: '400px',
//       height: '720px',
//     },
//   },
//   Tablet: {
//     name: 'Tablet',
//     styles: {
//       width: '640px',
//       height: '720px',
//     },
//   },
//   Web: {
//     name: 'Web',
//     styles: {
//       width: '1080px',
//       height: '720px',
//     },
//   },
//   WebXL: {
//     name: 'Web XL',
//     styles: {
//       width: '1440px',
//       height: '720px',
//     },
//   },
// }

export default {
  title: 'Layouts/LandingPageLayout',
  component: LandingPageLayout,
  parameters: {
    viewport: {
      viewports: {
        // ...customViewports,
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ margin: '0px' }}>
        {/* 👇 Decorators in Storybook also accept a function. Replace <Story/> with Story() to enable it  */}
        <Story />
      </div>
    ),
  ],
} as ComponentMeta<typeof LandingPageLayout>
