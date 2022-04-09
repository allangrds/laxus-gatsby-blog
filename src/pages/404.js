import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'

import {
  Container, Layout, Seo, PostTitle,
} from '../components'

const NotFoundPage = ({ data }) => (
  <Layout
    categoriesGroup={data.categoriesGroup}
    tagsGroup={data.tagsGroup}
  >
    <Seo title="404" />
    <Container>
      <PostTitle title="Ops...página não encontrada" />
    </Container>
  </Layout>
)

export const query = graphql`
  query NotFoundCategoriesList {
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
  }
`

NotFoundPage.propTypes = {
  data: PropTypes.shape({
    categoriesGroup: PropTypes.shape({
      group: PropTypes.arrayOf(PropTypes.shape({
        fieldValue: PropTypes.string,
      })),
    }).isRequired,
    tagsGroup: PropTypes.shape({
      group: PropTypes.arrayOf(PropTypes.shape({
        fieldValue: PropTypes.string,
      })),
    }).isRequired,
  }).isRequired,
}

export default NotFoundPage
