import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'
import { graphql } from 'gatsby'

import '../utils/helpers/replaceAll'
import * as Colors from '../assets/styles/colors'

import {
  Container, Layout, Seo,
} from '../components'

const S = {
  Link: styled.a`
    color: ${Colors.LINK_COLOR};
    display: block;
    font-size: 1.1rem;
    margin-bottom: 10px;
    text-decoration: none;
  `,
  Title: styled.h1`
    color: ${Colors.LAST_PUBLICATIONS};
    text-transform: uppercase;
    font-size: 1.38rem;
    font-weight: normal;
    margin-bottom: 70px;
  `,
}

const Categories = ({ data }) => {
  const {
    categoriesGroup, seriesGroup, site, tagsGroup,
  } = data
  const { group: categories } = categoriesGroup

  return (
    <Layout
      categoriesGroup={categoriesGroup}
      tagsGroup={tagsGroup}
      seriesGroup={seriesGroup}
      siteMetaData={site.siteMetadata}
    >
      <Seo title="Categories" />
      <Container>
        <S.Title>
          Categories
        </S.Title>
        <ul>
          {
            categories.map(category => (
              <li>
                <S.Link href={`/categories/${category.fieldValue.toLowerCase().replaceAll(' ', '-')}`}>
                  {category.fieldValue}
                </S.Link>
              </li>
            ))
          }
        </ul>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Categories($tag: String) {
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
      filter: { frontmatter: { tags: { eq: $tag } } }
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

Categories.propTypes = {
  data: PropTypes.shape().isRequired,
  pageContext: PropTypes.shape({
    currentPage: PropTypes.string.isRequired,
    numPages: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  }).isRequired,
}

export default Categories
