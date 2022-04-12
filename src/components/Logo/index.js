import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Logo = ({ description, title }) => (
  <S.Container>
    <S.Title>
      { title }
    </S.Title>
    <S.Subtitle>
      { description }
    </S.Subtitle>
  </S.Container>
)

Logo.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
}

export default Logo
