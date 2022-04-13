import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
  Container, Layout, Post, Seo,
} from '../../components'
import * as S from './styles'

const BlogListSeries = ({ data, pageContext }) => {
  const {
    allMdx, categoriesGroup, seriesGroup, site, tagsGroup,
  } = data
  const posts = allMdx.edges
  const { serie } = pageContext
  const formatedSerieName = serie.replaceAll('-', ' ')

  return (
    <Layout
      categoriesGroup={categoriesGroup}
      siteMetaData={site.siteMetadata}
      tagsGroup={tagsGroup}
      seriesGroup={seriesGroup}
    >
      <Seo title="Home" />
      <Container>
        {
          posts.length > 0 && (
            <>
              <S.LastPublications>
                { formatedSerieName }
              </S.LastPublications>
              {
                posts.map(
                  ({
                    node: {
                      fields: {
                        slug,
                      },
                      frontmatter: {
                        author,
                        date,
                        description,
                        // eslint-disable-next-line camelcase
                        hero_image,
                        subtitle,
                        title,
                      },
                    },
                  }) => (
                    <Post
                      key={slug}
                      title={title}
                      subtitle={subtitle}
                      // eslint-disable-next-line camelcase
                      heroImage={hero_image}
                      description={description}
                      createdAt={date}
                      author={author}
                      slug={slug}
                    />
                  ),
                )
              }
            </>
          )
        }
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query PostListSerie($serie: String) {
    site {
      siteMetadata {
        title
        description
      }
    }
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
      }
    }
    categoriesGroup: allMdx(limit: 2000) {
      group(field: frontmatter___category) {
        fieldValue
      }
    }
    seriesGroup: allMdx(limit: 2000) {
      group(field: frontmatter___series) {
        fieldValue
      }
    }
    allMdx(
      limit: 2000
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { series: { eq: $serie } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM, DD, YYYY")
            description
            title
            subtitle
            hero_image {
              absolutePath
              relativePath
            }
            author
            category
            tags
            series
          }
        }
      }
    }
  }
`

BlogListSeries.propTypes = {
  data: PropTypes.shape().isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.string.isRequired,
    numPages: PropTypes.string.isRequired,
    serie: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogListSeries
