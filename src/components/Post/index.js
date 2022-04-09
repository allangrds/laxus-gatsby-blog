import React from 'react'
import PropTypes from 'prop-types'

import PostSubtitle from '../PostSubtitle'
import PostTime from '../PostTime'
import PostTitle from '../PostTitle'
import * as S from './styles'

const Post = ({
  // eslint-disable-next-line no-unused-vars
  author,
  createdAt,
  description,
  heroImage,
  minimal = false,
  slug,
  subtitle,
  title,
}) => (
  <S.Article>
    <S.StyledLink to={`${slug}`}>
      <S.Grid minimal={minimal}>
        <S.PostInformations minimal={minimal}>
          <S.PostBox minimal={minimal}>
            <PostTime time={createdAt} />
            <PostTitle title={title} />
            {subtitle && (
              <PostSubtitle subtitle={subtitle} />
            )}
            {description && (
              <S.Description>
                {description}
              </S.Description>
            )}
          </S.PostBox>
        </S.PostInformations>
        <S.HeroImage minimal={minimal} image={`/assets/uploads/${heroImage.relativePath}`} />
      </S.Grid>
    </S.StyledLink>
  </S.Article>
)

Post.propTypes = {
  author: PropTypes.string.isRequired,
  createdAt: PropTypes.string.isRequired,
  description: PropTypes.string,
  heroImage: PropTypes.string.isRequired,
  minimal: PropTypes.bool,
  slug: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Post.defaultProps = {
  description: '',
  minimal: false,
  subtitle: '',
}

export default Post
