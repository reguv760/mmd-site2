import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import posed, { PoseGroup } from 'react-pose'

//component import
import Header from './Header'
import Footer from './Footer'

//import SEO from './SEO';
import './../style/layout.scss'

/* this is used to animate between pages */

const transitionDuration = 300
const transitionDelay = 350

const Transition = posed.div({
  enter: {
    opacity: 1,
    transition: { duration: transitionDuration },
    delay: transitionDelay,
    beforeChildren: true,
  },
  exit: { opacity: 0, transition: { duration: transitionDuration } },
})

/* this is the parent index file that 
renders main "app" page */

const Layout = ({ children, ...props }) => (
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
            {
              name: 'description',
              content:
                'Wet Paint(n.) A state of freshness and vigor that categorizes the art of Melany Meza-Dierks.',
            },
            {
              name: 'keywords',
              content:
                'Fine Artist, West Los Angeles California, Little Rock Arkansas, Tattoos, Advertising, Graphic Design, Art Director, Teacher',
            },
            { name: 'author', content: 'Reginald Galang' },
          ]}
        >
          <html lang="en" />
        </Helmet>

        <Header siteTitle={data.site.siteMetadata.title} />

        <div className="container">
          {/*  <PoseGroup>
                     <Transition key={props.location.pathname}>{children}</Transition>
                   </PoseGroup> */}
          {console.log(data)}
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
