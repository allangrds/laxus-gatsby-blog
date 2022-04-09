/* eslint-disable */
require('dotenv').config()

const queries = require('./src/utils/algolia_queries')

module.exports = {
  plugins: [
    {
      options: {
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-autolink-headers',
          },
        ],
      },
      resolve: 'gatsby-plugin-mdx',
    },
    {
      options: {
        name: 'uploads',
        path: `${__dirname}/static/assets/uploads/`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    'gatsby-plugin-netlify-cms',
    'gatsby-plugin-styled-components',
    'gatsby-plugin-image',
    {
      options: {
        // enable ip anonymization
        anonymize: false,
        // Puts tracking script in the head instead of the body
        head: false,
        // your google analytics tracking id
        trackingId: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
      },
      resolve: 'gatsby-plugin-gtag',
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sitemap',
    {
      options: {
        icon: 'static/assets/images/icon.png',
      },
      resolve: 'gatsby-plugin-manifest',
    },
    'gatsby-transformer-sharp',
    {
      __key: 'pages',
      options: {
        name: 'pages',
        path: './src/pages/',
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        rule: {
          include: /assets/,
        },
      },
      resolve: 'gatsby-plugin-react-svg',
    },
    'gatsby-plugin-sharp',
    'gatsby-plugin-robots-txt',
    {
      options: {
        name: 'posts',
        path: `${__dirname}/posts`,
      },
      resolve: 'gatsby-source-filesystem',
    },
    {
      options: {
        plugins: [
          {
            options: {
              name: 'uploads',
            },
            resolve: 'gatsby-remark-relative-images',
          },
          {
            options: {
              linkImagesToOriginal: false,
              maxWidth: 629,
            },
            resolve: 'gatsby-remark-images',
          },
          'gatsby-remark-lazy-load',
          {
            options: {
              maintainCase: true,
              removeAccents: true,
            },
            resolve: 'gatsby-remark-autolink-headers',
          },
        ],
      },
      resolve: 'gatsby-transformer-remark',
    },
    {
      options: {
        apiKey: process.env.GATSBY_ALGOLIA_ADMIN_KEY,
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        chunkSize: 10000,
        enablePartialUpdates: true,
        indexName: process.env.GATSBY_ALGOLIA_INDEX_NAME,
        queries,
      },
      resolve: 'gatsby-plugin-algolia-search',
    },
    {
      options: {
        feeds: [
          {
            output: '/rss.xml',
            query: `
            {
              allMdx {
                edges {
                  node {
                    id
                    fields {
                      slug
                    }
                    frontmatter {
                      title
                      date
                      description
                      subtitle
                    }
                  }
                }
              }
            }
            `,
            serialize ({ query: { site, allMdx } }) {
              return allMdx.edges.map(edge => {
                return Object.assign(
                  {},
                  edge.node.frontmatter,
                  {
                    description: edge.node.frontmatter.description,
                    date: edge.node.frontmatter.date,
                    url: site.siteMetadata.siteUrl + edge.node.fields.slug,
                  }
                )
              })
            },
            title: 'Allan Ramos RSS feed',
          },
        ],
        query: `
        {
          site {
            siteMetadata {
              title
              description
              siteUrl
              site_url: siteUrl
            }
          }
        }
        `,
      },
      resolve: 'gatsby-plugin-feed',
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Rubik\:300,400,500,600`,
        ],
        display: 'swap'
      }
    }
  ],
  siteMetadata: {
    author: '@allanramos',
    description: 'Aprendendo e compartilhando tecnologia',
    siteUrl: 'https://allanramos.com.br',
    title: 'Allan Ramos',
  },
}
