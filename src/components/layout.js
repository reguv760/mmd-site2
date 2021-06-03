import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

//component import
import Header from './Header';
import Footer from './Footer';

//import SEO from './SEO';
import './../style/layout.scss';

/* this is the parent index file that 
renders main "app" page */

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
            description
            keywords
            siteAuthor
          }
        }
      }
    `}
    render={data => (
      <div className="layoutContainer">
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            {
              name: 'description',
              content: `${data.site.siteMetadata.description}`
            },
            {
              name: 'keywords',
              content: `${data.site.siteMetadata.keywords}`
            },
            { name: 'author', content: `${data.site.siteMetadata.siteAuthor}` }
          ]}
          htmlAttributes={{ lang: 'en' }}
        />

        <Header />

        <div className="container">{children}</div>

        <Footer />
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
