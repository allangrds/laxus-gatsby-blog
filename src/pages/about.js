import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import styled from 'styled-components'

import * as Colors from '../assets/styles/colors'
import {
  Container, Layout, Seo,
} from '../components'

const S = {
  Text: styled.p`
    font-size: 1rem;
    color: ${Colors.ABOUT_TEXT_COLOR};
    line-height: 1.7rem;
  `,
  Title: styled.h1`
    color: ${Colors.ABOUT_TITLE_COLOR};
    font-size: 2rem;
    margin-top: 0;
    margin-bottom: 0;
    transition: color 0.1s ease;
  `,
}

const About = ({ data }) => {
  const {
    categoriesGroup, seriesGroup, site, tagsGroup,
  } = data

  return (
    <Layout
      categoriesGroup={categoriesGroup}
      tagsGroup={tagsGroup}
      seriesGroup={seriesGroup}
      siteMetaData={site.siteMetadata}
    >
      <Seo title="About" />
      <Container>
        <S.Title>
          About
        </S.Title>
        <S.Text>
          Hello, everyone!
        </S.Text>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query AboutList {
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
  }
`

About.propTypes = {
  data: PropTypes.shape().isRequired,
}

export default About
