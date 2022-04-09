import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const PostSubtitle = ({ subtitle }) => <S.Subtitle>{ subtitle } </S.Subtitle>

PostSubtitle.propTypes = {
  subtitle: PropTypes.string.isRequired,
}

export default PostSubtitle
