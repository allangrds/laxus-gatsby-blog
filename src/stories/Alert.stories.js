import React from 'react'

import Alert from '../components/PostsUsage/Alert'

export default {
  component: Alert,
  title: 'Components/Alert',
}

const Template = args => <Alert {...args} />

export const Success = Template.bind({})

Success.args = {
  message: 'Success message',
  type: 'success',
}

export const Error = Template.bind({})

Error.args = {
  message: 'Error message',
  type: 'error',
}

export const Warning = Template.bind({})

Warning.args = {
  message: 'Warning message',
  type: 'warning',
}

export const Info = Template.bind({})

Info.args = {
  message: 'Info message',
  type: 'info',
}
