import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

//import Img from "gatsby-image";
//import BooksImg from './../images/tattoos-hero.jpg';
import Layout from './../components/layout.js';

//Lightbox needs the following:::
import Gallery from './../components/Gallery';

//////////* import thumbnails + images */
//thumbnails
//import thumb04 from './../images/tattoos/2019/thumbs/2019-tattoo4-thumb.jpg';

//full images:::
//import full04 from './../images/tsattoos/2019/2019-tattoo-4.jpg';

//give unique ID and ref src + thumbnail
const BOOK_IMAGES = [  
  // 2023
  
  //{ id: '23_1', src: full23_1, thumbnail: thumb23_1 },
];

export default class BooksPage extends React.Component {

  render() {
    const { title } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <Helmet title={`Books | ${title}`} />

        <div className="pageContainer booksPage">
          <div className="blackBorder" />
          <div className="pageContainer left">
             {/* <img src={BooksImg} alt="Books" /> */}
          </div>

          <div className="pageContainer right">
            {/* <Gallery
              images={BOOK_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail
              }))}
            /> */}
          </div>
          <div className="blackBorder" />
        </div>
      </Layout>
    );
  }
}

export const booksQuery = graphql`
  query booksPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;