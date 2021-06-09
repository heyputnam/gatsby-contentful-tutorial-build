module.exports = {
  siteMetadata: {
    title: "contentful-gatsby",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
      `gatsby-plugin-styled-components`,
      `gatsby-plugin-react-helmet`,
  {
    resolve: `gatsby-source-contentful`,
    options: {
      spaceId: `7pyo7lilug8d`,
      
      accessToken: `-f8y8IolYr8DsmLSmNiGcD_N0hC4mv52JZAEymNoIW8`,
    },
  },
],
};
