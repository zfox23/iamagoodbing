module.exports = {
  siteMetadata: {
    siteUrl: "https://iamagoodbing.ai/",
    title: "I Am A Good Bing 😊",
    description: "Silly and serious stories about modern artificial intelligence sourced by the critical community.",
    image: "/mainMetaImage.jpg"
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-postcss",
    "gatsby-plugin-sharp",
    "gatsby-transformer-sharp",
    `gatsby-transformer-json`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/content/`,	
        name: 'content'
      }
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: [
          "G-SJ1PEXSPM2",
        ],
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: false,
          respectDNT: true,
        },
      },
    },
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: `I Am A Good Bing 😊`,
        short_name: `I Am A Good Bing 😊`,
        start_url: `/`,
        background_color: `#f0abfc`,
        theme_color: `#f0abfc`,
        display: `standalone`,
        icon: "src/images/logo.png",
        icon_options: {
          purpose: `any maskable`,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://iamagoodbing.ai',
        sitemap: 'https://iamagoodbing.ai/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      resolve: `gatsby-plugin-feed`,
      options: {
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
        feeds: [
          {
            serialize: ({ query: { site, allContentJson } }) => {
              return allContentJson.nodes.map(node => {
                return Object.assign({}, {
                  title: node.title,
                  date: node.datetimeISO,
                  author: node.contributor,
                  url: `${site.siteMetadata.siteUrl}/${node.slug}`,
                  guid: `${site.siteMetadata.siteUrl}/${node.slug}`,
                  custom_elements: [{ "content:encoded": node.html }],
                  enclosure: {
                    'url': `${site.siteMetadata.siteUrl}${node.image.src.publicURL}`,
                    'type' : 'image/jpeg'
                  }
                })
              })
            },
            query: `
              {
                allContentJson(sort: {datetimeISO: DESC}) {
                  nodes {
                    id
                    slug
                    title
                    categories
                    fontAwesomeIcon
                    datetimeISO
                    image {
                      src {
                        childImageSharp {
                          gatsbyImageData(placeholder: BLURRED, quality: 93)
                        }
                        publicURL
                      }
                      alt
                      preferredHeightPX
                    }
                    html
                    contributor
                    links {
                      href
                      text
                    }
                  }
                }
              }
            `,
            output: "/rss.xml",
            title: "I Am A Good Bing 😊",
          },
        ],
      },
    },
  ],
  proxy: {
    prefix: "/api",
    url: "http://localhost:4244"
  }
};