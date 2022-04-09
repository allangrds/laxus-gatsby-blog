import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Container = ({ children }) => (
  <S.Wrapper>
    <S.Container>
      { children }
    </S.Container>
  </S.Wrapper>
)

Container.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Container
