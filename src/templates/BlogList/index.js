import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
  Container, FeaturedPost, Layout, Pagination, Post, Seo,
} from '../../components'
import * as S from './styles'

const BlogList = ({ data, pageContext }) => {
  const { allMdx, categoriesGroup, tagsGroup } = data
  const posts = allMdx.edges

  const {
    currentPage,
    numPages,
  } = pageContext
  const isFirst = currentPage === 1
  const isLast = currentPage === numPages
  const prevPage = currentPage - 1 === 1
    ? '/'
    : `/page/${currentPage - 1}`
  const nextPage = `/page/${currentPage + 1}`
  const featuredPost = posts.slice(0, 1)
  const normalPosts = posts.slice(1, posts.length)

  return (
    <Layout categoriesGroup={categoriesGroup} tagsGroup={tagsGroup}>
      <Seo title="Home" />
      <Container>
        <FeaturedPost
          key={featuredPost[0].node.fields.slug}
          title={featuredPost[0].node.frontmatter.title}
          subtitle={featuredPost[0].node.frontmatter.subtitle}
          heroImage={featuredPost[0].node.frontmatter.hero_image}
          description={featuredPost[0].node.frontmatter.description}
          slug={featuredPost[0].node.fields.slug}
        />
        {
          normalPosts.length > 0 && (
            <>
              <S.LastPublications>
                Últimas publicações
              </S.LastPublications>
              {
                normalPosts.map(
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
              <Pagination
                isFirst={isFirst}
                isLast={isLast}
                currentPage={currentPage}
                numPages={numPages}
                prevPage={prevPage}
                nextPage={nextPage}
              />
            </>
          )
        }
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query PostList($skip: Int!, $limit: Int!) {
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
      sort: { fields: frontmatter___date, order: DESC }
      limit: $limit
      skip: $skip
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

BlogList.propTypes = {
  data: PropTypes.shape().isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.string.isRequired,
    numPages: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogList
