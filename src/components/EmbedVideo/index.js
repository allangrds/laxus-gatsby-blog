import React from 'react'
import PropTypes from 'prop-types'

const EmbedVideo = ({ title, url }) => (
  <iframe
    src={url}
    title={title}
    allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
    frameBorder="0"
    webkitallowfullscreen="true"
    mozallowfullscreen="true"
    allowFullScreen
    width="100%"
    height="400"
  />
)

EmbedVideo.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
}

export default EmbedVideo
