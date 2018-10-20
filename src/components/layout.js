import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

//component import
import Header from './Header'
import Footer from './Footer'
import './../style/layout.scss'



/* this is the parent index file that 
renders main "app" page */

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
              { name: 'description', content: 'Wet Paint(n.) A state of freshness and vigor that categorizes the art of Melany Meza-Dierks.' },
              { name: 'keywords', content: 'Fine Artist, West Los Angeles California, Little Rock Arkansas, Tattoos, Advertising, Graphic Design, Art Director, Teacher' },
              { name: 'author', content: 'Reginald Galang @TDG' },
            ]}
          >
          <html lang="en" />
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />
        
        <div className="container">
          {children}
        </div>


      <Footer />
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
