const postQuery = `{
  allMdx(
    sort: { fields: frontmatter___date, order: DESC }
  ) {
    edges {
      node {
        objectID: id
        fields {
          slug
        }
        frontmatter {
          date_timestamp: date
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
        excerpt(pruneLength: 250)
      }
    }
  }
}`

const flatten = arr => arr.map(({ node: { frontmatter, ...rest } }) => ({
  ...frontmatter,
  date_timestamp: parseInt(
    (new Date(frontmatter.date_timestamp).getTime() / 1000).toFixed(0),
    10,
  ),
  ...rest,
}))
const settings = { attributesToSnippet: ['excerpt:20'] }

const queries = [
  {
    indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
    query: postQuery,
    settings,
    transformer: ({ data }) => flatten(data.allMdx.edges),
  },
]

module.exports = queries
