import React from 'react'

import ShareButtons from '../components/ShareButtons'

export default {
  component: ShareButtons,
  title: 'Components/ShareButtons',
}

const Template = args => <ShareButtons {...args} />

export const Basic = Template.bind({})

Basic.args = {}
