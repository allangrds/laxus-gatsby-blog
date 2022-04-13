import React, { memo } from 'react'
import ReactDisqusComments from 'react-disqus-comments'
import PropTypes from 'prop-types'

import * as S from './styles'

const Comments = ({ title, url }) => {
  const completeUrl = `https://allanramos.com.br/${url}`

  return (
    <S.Wrapper>
      <h2>Comments</h2>
      <ReactDisqusComments
        shortname="allan-ramos-blog"
        identifier={completeUrl}
        title={title}
        url={completeUrl}
      />
    </S.Wrapper>
  )
}

Comments.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default memo(Comments)
