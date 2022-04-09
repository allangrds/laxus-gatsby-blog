import React from 'react'

import Verse from '../components/Verse'

export default {
  component: Verse,
  title: 'Components/Verse',
}

const Template = args => (
  <p>
    Este um ditado muito conhecido em minhas região
    também presente na Bíblia: <Verse {...args} />
  </p>
)

export const Basic = Template.bind({})

Basic.args = {
  book: 'Mateus 23:34',
  text: 'Mateus 23:34',
  verses: [
    {
      number: '34',
      text: 'Na minha terra tem palmeiras onde canta o sabiá',
    },
    {
      number: '36',
      text: 'Na minha terra tem palmeiras onde canta o sabiá',
    },
  ],
}
