import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
import { useScrollPosition } from '@n8tb1t/use-scroll-position'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { MDXProvider } from '@mdx-js/react'

import {
  CodeBlock,
  Comments,
  Container,
  Layout,
  PostSubtitle,
  PostTime,
  PostTitle,
  Seo,
  ShareButtons,
  Toc,
} from '../../components'
import * as S from './styles'

const components = {
  pre: CodeBlock,
}

const BlogPost = ({ data, location }) => {
  const { categoriesGroup, mdx, tagsGroup } = data
  const post = mdx
  const [fixedToc, setFixedToc] = useState(false)

  const seoTitle = post.frontmatter.subtitle
    ? `${post.frontmatter.title}: ${post.frontmatter.subtitle}`
    : post.frontmatter.title
  const { headings } = data.mdx

  useScrollPosition(({ currPos }) => {
    if (currPos.y < -130) {
      setFixedToc(true)

      return null
    }

    setFixedToc(false)

    return null
  })

  const url = location.href
  const fullTitle = post.frontmatter.subtitle
    ? `${post.frontmatter.title}: ${post.frontmatter.subtitle}`
    : post.frontmatter.title

  return (
    <Layout
      categoriesGroup={categoriesGroup}
      tagsGroup={tagsGroup}
    >
      <Seo
        title={seoTitle}
        description={post.frontmatter.description}
      />
      <Container>
        <S.Grid>
          <article>
            <header>
              <S.HeroImage
                image={`/assets/uploads/${post.frontmatter.hero_image.relativePath}`}
              />
              <PostTime
                time={post.frontmatter.date}
              />
              <PostTitle title={post.frontmatter.title} />
              {post.frontmatter.subtitle && (
                <PostSubtitle subtitle={post.frontmatter.subtitle} />
              )}
            </header>
            <S.PostContent>
              <MDXProvider components={components}>
                <MDXRenderer>{post.body}</MDXRenderer>
              </MDXProvider>
            </S.PostContent>
            <ShareButtons
              url={url}
              title={fullTitle}
            />
          </article>
          <Toc
            headings={headings}
            fixedPosition={fixedToc}
          />
        </S.Grid>
        <Comments
          title={post.frontmatter.title}
          url={post.fields.slug}
        />
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Post($slug: String!) {
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
    mdx(fields: { slug: { eq: $slug } }) {
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
      headings {
        value
        depth
      }
      body
    }
  }
`

BlogPost.propTypes = {
  data: PropTypes.shape().isRequired,
  location: PropTypes.shape({
    href: PropTypes.string.isRequired,
  }).isRequired,
}

export default BlogPost
