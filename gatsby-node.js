const path = require('path')

const { createFilePath } = require('gatsby-source-filesystem')

exports.onCreateNode = ({ actions, getNode, node }) => {
  const { createNodeField } = actions

  if (node.internal.type === 'Mdx') {
    const slug = createFilePath({
      basePath: 'pages',
      getNode,
      node,
    })

    createNodeField({
      name: 'slug',
      node,
      value: `/${slug.slice(12)}`,
    })
  }
}

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions

  return graphql(`
    {
      allMdx(sort: { fields: frontmatter___date, order: DESC }) {
        edges {
          node {
            id
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
            }
          }
        }
      }
    }
  `).then((result) => {
    const posts = result.data.allMdx.edges

    posts.forEach(({ node }) => {
      createPage({
        component: path.resolve('./src/templates/BlogPost/index.js'),
        context: {
          slug: node.fields.slug,
        },
        path: node.fields.slug,
      })
    })

    const postsPerPage = 6
    const numPages = Math.ceil(posts.length / postsPerPage)

    Array.from({ length: numPages }).forEach((_, index) => {
      createPage({
        component: path.resolve('./src/templates/BlogList/index.js'),
        context: {
          currentPage: index + 1,
          limit: postsPerPage,
          numPages,
          skip: index * postsPerPage,
        },
        path: index === 0 ? '/' : `/page/${index + 1}`,
      })
    })

    return graphql(`
      {
        categoriesGroup: allMdx(limit: 2000) {
          group(field: frontmatter___category) {
            fieldValue
          }
        }
      }
    `)
  }).then((result) => {
    const categoryTemplate = path.resolve('./src/templates/BlogListCategory/index.js')
    const categories = result.data.categoriesGroup.group

    categories.forEach((tag) => {
      createPage({
        component: categoryTemplate,
        context: {
          category: tag.fieldValue,
        },
        path: `/categorias/${tag.fieldValue}`,
      })
    })

    return graphql(`
      {
        tagsGroup: allMdx(limit: 2000) {
          group(field: frontmatter___tags) {
            fieldValue
          }
        }
      }
    `)
  }).then((result) => {
    const tagTemplate = path.resolve('./src/templates/BlogListTags/index.js')
    const tags = result.data.tagsGroup.group

    return tags.forEach((tag) => {
      createPage({
        component: tagTemplate,
        context: {
          tag: tag.fieldValue,
        },
        path: `/tags/${tag.fieldValue}`,
      })
    })
  })
}
