import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const PostTitle = ({ title }) => <S.Title>{ title } </S.Title>

PostTitle.propTypes = {
  title: PropTypes.string.isRequired,
}

export default PostTitle
