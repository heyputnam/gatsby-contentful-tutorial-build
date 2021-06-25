module.exports = {
  siteMetadata: {
    title: "contentful-gatsby",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
      `gatsby-plugin-react-helmet`,
      `babel-plugin-styled-components`,
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `7pyo7lilug8d`,
      
      accessToken: `-f8y8IolYr8DsmLSmNiGcD_N0hC4mv52JZAEymNoIW8`,
    },
  },
  {
    resolve: "gatsby-plugin-web-font-loader",
    options: {
      typekit: {
        id: "dqt3sqg",
      },
    },
  },
  `gatsby-plugin-styled-components`,
  {
    resolve: "gatsby-plugin-anchor-links",
    options: {
      offset: -250,
      duration: 1000
    }
  },

  `gatsby-plugin-split-css`,

],
};
