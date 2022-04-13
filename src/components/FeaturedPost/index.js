import React from 'react'
import PropTypes from 'prop-types'

import * as S from './styles'

const Post = ({
  description,
  heroImage,
  slug,
  subtitle,
  title,
}) => (
  <S.Article>
    <S.StyledLink to={`${slug}`}>
      <S.Grid>
        <div>
          <S.Title>
            { title }
          </S.Title>
          {subtitle && (
            <S.Subtitle>
              { subtitle }
            </S.Subtitle>
          )}
          {description && (
          <S.Description>
            { description }
          </S.Description>
          )}
          <S.ReadMore>
            Read more
          </S.ReadMore>
        </div>
        <S.HeroImage image={`/assets/uploads/${heroImage.relativePath}`} />
      </S.Grid>
    </S.StyledLink>
  </S.Article>
)

Post.propTypes = {
  description: PropTypes.string,
  heroImage: PropTypes.string.isRequired,
  slug: PropTypes.string.isRequired,
  subtitle: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Post.defaultProps = {
  description: '',
  subtitle: '',
}

export default Post
