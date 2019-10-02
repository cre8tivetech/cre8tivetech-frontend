module.exports = {
  siteMetadata: {
    title: `Cre8tive Tech`,
    description: `Cre8tive Tech is a software and digital agency that fosters synergy between creativity and technology. We are specialized in user interface and experience design, web development, branding identity, mobile app and digital marketing.`,
    author: `@cre8tive_tech`,
    site_image: `https://pbs.twimg.com/profile_images/1081525414252724224/SMtYS3yG_400x400.jpg`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/img`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Cre8tive Tech`,
        short_name: `Cre8tive Tech`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/assets/img/icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
