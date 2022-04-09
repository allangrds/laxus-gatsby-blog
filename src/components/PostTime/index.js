import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const PostTime = ({ time }) => <S.Time>{ time } </S.Time>

PostTime.propTypes = {
  time: PropTypes.string.isRequired,
}

export default PostTime
