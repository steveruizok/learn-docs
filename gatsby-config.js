module.exports = {
  siteMetadata: {
    title: "Learn Design System",
    author: "Steve Ruiz <steve@framer.com>",
    description: "Docs for the Learn Design System",
    siteUrl: "https://framer-learn-docs.netlify.com"
  },
  plugins: [
    "gatsby-plugin-typescript",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-catch-links",
    {
      resolve: "gatsby-plugin-typography",
      options: {
        pathToConfigModule: "src/typography",
        omitGoogleFont: true
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "content",
        path: `${__dirname}/content`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: "pages",
        path: `${__dirname}/content/pages`
      }
    },
    {
      resolve: "gatsby-plugin-nprogress",
      options: {
        color: "#ff5700",
        showSpinner: false
      }
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-mdx",
      options: {
        extensions: [".md", ".mdx"],
        gatsbyRemarkPlugins: [
          {
            resolve: "gatsby-remark-smartypants",
            options: {
              dashes: "oldschool"
            }
          },
          // {
          // 	resolve: `gatsby-remark-codemirror`,
          // 	options: {
          // 		// CSS class suffix to be used for produced `<pre/>` blocks.
          // 		// Default value is "default", which adds "cm-s-default" class.
          // 		// This class name matches
          // 		theme: 'default',
          // 	},
          // },
          {
            resolve: "gatsby-remark-prismjs",
            options: {
              classPrefix: "language-",
              inlineCodeMarker: {
                tsx: "tsx"
              },
              aliases: {}
            }
          },
          {
            resolve: "gatsby-remark-images",
            options: {
              maxWidth: 1200,
              sizeByPixelDensity: true
            }
          },
          {
            resolve: "gatsby-remark-copy-linked-files",
            options: {}
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-lunr",
      options: {
        languages: [
          {
            name: "en",
            customEntries: []
          }
        ],
        fields: [
          { name: "title", store: true, attributes: { boost: 20 } },
          { name: "path", store: true },
          { name: "content" },
          { name: "tags" }
        ],
        resolvers: {
          Mdx: {
            title: node => node.frontmatter.title,
            path: node => node.frontmatter.path,
            content: node => node.rawBody,
            tags: node => node.frontmatter.tags
          }
        }
      }
    },
    {
      resolve: "gatsby-plugin-feed",
      options: {
        /**
         * no need to specify the other options, since they will be merged with this
         */
        feeds: [
          {
            serialize: ({ query: { site, allMdx } }) => {
              return allMdx.edges.map(({ node }) => {
                return {
                  ...node.frontmatter,
                  description: node.excerpt,
                  url: site.siteMetadata.siteUrl + node.frontmatter.path,
                  guid: site.siteMetadata.siteUrl + node.frontmatter.path,
                  custom_elements: [{ "content:encoded": node.html }]
                };
              });
            },
            query: `
              {
                allMdx(
                  limit: 1000,
                  sort: { order: DESC, fields: [frontmatter___date] },
                ) {
                  edges {
                    node {
                      frontmatter {
                        path
                        title
                        date
                      }
                      excerpt
                      html
                    }
                  }
                }
              }
            `,
            output: "rss.xml"
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: "Learn Design System Docs",
        short_name: "LDS Docs",
        start_url: "/",
        background_color: "#f7f0eb",
        theme_color: "#a2466c",
        display: "minimal-ui",
        icons: [
          {
            // Everything in /static will be copied to an equivalent
            // directory in /public during development and build, so
            // assuming your favicons are in /static/favicon,
            // you can reference them here
            src: "/favicon/192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicon/512.png",
            sizes: "512x512",
            type: "image/png"
          },
          {
            src: "/favicon/32.png",
            sizes: "32x32",
            type: "image/png"
          },
          {
            src: "/favicon/16.png",
            sizes: "16x16",
            type: "image/png"
          },
          {
            src: "/favicon/192.png",
            sizes: "192x192",
            type: "image/png"
          },
          {
            src: "/favicon/150.png",
            sizes: "150x150",
            type: "image/png"
          }
        ]
      }
    },
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify"
  ]
};
