module.exports = {
  siteMetadata: {
    title: "contentful-gatsby",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
      `gatsby-plugin-styled-components`,
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
],
};
