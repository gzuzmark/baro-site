module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
  },
  plugins: [
    {
      resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '8d99auct0z8a',
        accessToken: '0f1b3eb5e03307125c8b4786f7f5bd8975c30e460bac2a31993582fc6f249836'
      }
    },    
    `gatsby-plugin-react-helmet`
  ],
}