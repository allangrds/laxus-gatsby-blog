import React, { memo } from 'react'
import PropTypes from 'prop-types'

import Post from '../Post'

const Hit = ({ hit }) => (
  <Post
    author={hit.author}
    createdAt={hit.date}
    description={hit.description}
    heroImage={hit.hero_image}
    slug={hit.fields.slug}
    subtitle={hit.subtitle}
    title={hit.title}
    minimal
  />
)

Hit.propTypes = {
  hit: PropTypes.shape({
    author: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    date: PropTypes.string,
    description: PropTypes.string,
    fields: PropTypes.shape({
      slug: PropTypes.string.isRequired,
    }).isRequired,
    hero_image: PropTypes.string.isRequired,
    slug: PropTypes.string.isRequired,
    subtitle: PropTypes.string,
    title: PropTypes.string.isRequired,
  }),
}

Hit.defaultProps = {
  hit: {},
}

export default memo(Hit)
