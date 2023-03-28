module.exports = {
  siteMetadata: {
    siteUrl: "https://iamagoodbing.ai",
    title: "I Am A Good Bing 😊",
    titleTemplate: "%s · I Am A Good Bing",
    description: "Here's why modern AI isn't ready for public use.",
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
        "path": "./src/content/"
      }
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
    }
  ],
  proxy: {
    prefix: "/api",
    url: "http://localhost:4244"
  }
};