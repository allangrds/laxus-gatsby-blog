import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
  Container, Layout, Post, Seo,
} from '../../components'
import * as S from './styles'

const BlogListCategory = ({ data, pageContext }) => {
  const { allMdx, categoriesGroup, tagsGroup } = data
  const posts = allMdx.edges
  const { tag } = pageContext

  return (
    <Layout categoriesGroup={categoriesGroup} tagsGroup={tagsGroup}>
      <Seo title="Home" />
      <Container>
        {
          posts.length > 0 && (
            <>
              <S.LastPublications>
                Postagens sobre {tag}
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
  query PostListTags($tag: String) {
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
    allMdx(
      limit: 2000
      sort: { fields: frontmatter___date, order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            date(locale: "pt-br", formatString: "DD [de] MMMM [de] YYYY")
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

BlogListCategory.propTypes = {
  data: PropTypes.shape().isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.string.isRequired,
    numPages: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogListCategory
