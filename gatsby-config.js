module.exports = {
  siteMetadata: {    
    title: 'Wet Paint Studio : Melany Dierks website',
    titleTemplate: "%s",
    description:"Test Description",
    url:"http://mywetpaintstudio.com"
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/melany-md_glyph.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    },    
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`
  ],
}
