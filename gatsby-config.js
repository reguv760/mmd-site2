// require("dotenv").config({
//   path: `.env.${process.env.NODE_ENV}`,
// });

module.exports = {
  siteMetadata: {
    title: 'Wet Paint Studio : Melany Dierks website',
    titleTemplate: '%s',
    description:
      'Wet Paint(n.) A state of freshness and vigor that categorizes the art of Melany Meza-Dierks.',
    keywords:
      'Fine Artist, Los Angeles, Long Beach, California, Caracas, Venezuela, Tattoos, Advertising, Graphic Design, Art Director, Teacher, Mural Painter',
    siteAuthor: 'Reginald Galang',
    url: 'http://mywetpaintstudio.com',
    siteUrl: 'http://mywetpaintstudio.com'
  },
  flags: { PRESERVE_WEBPACK_CACHE: true },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-sass',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/md-favIcon_purple.png' // This path is relative to the root of the site.
      }
    },
    `gatsby-plugin-transition-link`,
    'gatsby-plugin-offline',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `img`,
        path: `${__dirname}/src/images/`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-6371690-5',
        // Puts tracking script in the head instead of the body
        head: true
      }
    }
  ]
};
