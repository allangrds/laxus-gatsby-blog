import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'
import { useStaticQuery, graphql } from 'gatsby'

function Seo ({
  description,
  lang = 'pt-br',
  meta,
  title,
}) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `,
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          content: metaDescription,
          name: 'description',
        },
        {
          content: 'Allan Ramos',
          property: 'og:site_name',
        },
        {
          content: title,
          property: 'og:title',
        },
        {
          content: 'blog',
          property: 'og:type',
        },
        {
          content: metaDescription,
          property: 'og:description',
        },
        {
          content: 'summary_large_image',
          name: 'twitter:card',
        },
        {
          content: site.siteMetadata.author,
          name: 'twitter:creator',
        },
        {
          content: title,
          name: 'twitter:title',
        },
        {
          content: metaDescription,
          name: 'twitter:description',
        },
      ].concat(meta)}
    />
  )
}

Seo.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.string,
  title: PropTypes.string.isRequired,
}

Seo.defaultProps = {
  description: '',
  lang: 'pt-br',
  meta: [],
}

export default Seo
