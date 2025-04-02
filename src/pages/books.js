import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

//import Img from "gatsby-image";
import BooksImg from './../images/tattoos-hero.jpg';
import Layout from './../components/layout.js';

//Lightbox needs the following:::
import Gallery from './../components/Gallery';

//////////* import thumbnails + images */
//thumbnails
import bookThumb_1 from './../images/books/spaceLove/thumb/cover-thumb.jpg';
import bookThumb_2 from './../images/books/spaceLove/thumb/constellations-thumb.jpg';
import bookThumb_3 from './../images/books/spaceLove/thumb/pg2-thumb.jpg';
import bookThumb_4 from './../images/books/spaceLove/thumb/pg3-thumb.jpg';
import bookThumb_5 from './../images/books/spaceLove/thumb/pg4-thumb.jpg';
import bookThumb_6 from './../images/books/spaceLove/thumb/pg5-thumb.jpg';
import bookThumb_7 from './../images/books/spaceLove/thumb/pg6-thumb.jpg';
import bookThumb_8 from './../images/books/spaceLove/thumb/pg7-thumb.jpg';
import bookThumb_9 from './../images/books/spaceLove/thumb/pg8-thumb.jpg';
import bookThumb_10 from './../images/books/spaceLove/thumb/pg9-thumb.jpg';
import bookThumb_11 from './../images/books/spaceLove/thumb/pg10-thumb.jpg';
import bookThumb_12 from './../images/books/spaceLove/thumb/pg11-thumb.jpg';
import bookThumb_13 from './../images/books/spaceLove/thumb/pg12-thumb.jpg';
import bookThumb_14 from './../images/books/spaceLove/thumb/pg13-thumb.jpg';
import bookThumb_15 from './../images/books/spaceLove/thumb/pg14-thumb.jpg';
import bookThumb_16 from './../images/books/spaceLove/thumb/pg15-thumb.jpg';
import bookThumb_17 from './../images/books/spaceLove/thumb/pg16-thumb.jpg';
import bookThumb_18 from './../images/books/spaceLove/thumb/pg17-thumb.jpg';
import bookThumb_19 from './../images/books/spaceLove/thumb/pg18-thumb.jpg';
import bookThumb_20 from './../images/books/spaceLove/thumb/pg19-thumb.jpg';

//full images:::
import spaceLove1 from './../images/books/spaceLove/cover.jpg';
import spaceLove2 from './../images/books/spaceLove/constellations-overview.jpg';
import spaceLove3 from './../images/books/spaceLove/pg2.jpg';
import spaceLove4 from './../images/books/spaceLove/pg3.jpg';
import spaceLove5 from './../images/books/spaceLove/pg4.jpg';
import spaceLove6 from './../images/books/spaceLove/pg5.jpg';
import spaceLove7 from './../images/books/spaceLove/pg6.jpg';
import spaceLove8 from './../images/books/spaceLove/pg7.jpg';
import spaceLove9 from './../images/books/spaceLove/pg8.jpg';
import spaceLove10 from './../images/books/spaceLove/pg9.jpg';
import spaceLove11 from './../images/books/spaceLove/pg10.jpg';
import spaceLove12 from './../images/books/spaceLove/pg11.jpg';
import spaceLove13 from './../images/books/spaceLove/pg12.jpg';
import spaceLove14 from './../images/books/spaceLove/pg13.jpg';
import spaceLove15 from './../images/books/spaceLove/pg14.jpg';
import spaceLove16 from './../images/books/spaceLove/pg15.jpg';
import spaceLove17 from './../images/books/spaceLove/pg16.jpg';
import spaceLove18 from './../images/books/spaceLove/pg17.jpg';
import spaceLove19 from './../images/books/spaceLove/pg18.jpg';
import spaceLove20 from './../images/books/spaceLove/pg19.jpg';


const SLFirechild_IMAGES = [    
  //give unique ID and ref src + thumbnail
  { id: 'spaceLove1', src: spaceLove1, thumbnail: bookThumb_1 },
  { id: 'spaceLove2', src: spaceLove2, thumbnail: bookThumb_2 },
  { id: 'spaceLove3', src: spaceLove3, thumbnail: bookThumb_3 },
  { id: 'spaceLove4', src: spaceLove4, thumbnail: bookThumb_4 },
  { id: 'spaceLove5', src: spaceLove5, thumbnail: bookThumb_5 },
  { id: 'spaceLove6', src: spaceLove6, thumbnail: bookThumb_6 },
  { id: 'spaceLove7', src: spaceLove7, thumbnail: bookThumb_7 },
  { id: 'spaceLove8', src: spaceLove8, thumbnail: bookThumb_8 },
  { id: 'spaceLove9', src: spaceLove9, thumbnail: bookThumb_9 },
  { id: 'spaceLove10', src: spaceLove10, thumbnail: bookThumb_10 },
  { id: 'spaceLove11', src: spaceLove11, thumbnail: bookThumb_11 },
  { id: 'spaceLove12', src: spaceLove12, thumbnail: bookThumb_12 },
  { id: 'spaceLove13', src: spaceLove13, thumbnail: bookThumb_13 },
  { id: 'spaceLove14', src: spaceLove14, thumbnail: bookThumb_14 },
  { id: 'spaceLove15', src: spaceLove15, thumbnail: bookThumb_15 },
  { id: 'spaceLove16', src: spaceLove16, thumbnail: bookThumb_16 },
  { id: 'spaceLove17', src: spaceLove17, thumbnail: bookThumb_17 },
  { id: 'spaceLove18', src: spaceLove18, thumbnail: bookThumb_18 },
  { id: 'spaceLove19', src: spaceLove19, thumbnail: bookThumb_19 },
  { id: 'spaceLove20', src: spaceLove20, thumbnail: bookThumb_20 },
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
             <img src={BooksImg} alt="Books" />
          </div>

          <div className="pageContainer right">
            <Gallery
              images={SLFirechild_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail
              }))}
            />
            <div className="textBox">
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sed libero eget dolor imperdiet euismod eget et velit.
                In fringilla placerat justo, ut porta magna. Suspendisse ultricies, magna sed faucibus tristique, dui risus ultricies tortor, 
                vitae hendrerit elit mauris id sem. Curabitur commodo semper odio eget rutrum. Nam sem massa, fringilla egestas sem vel, 
                convallis venenatis sem. Aliquam metus leo, pulvinar imperdiet convallis eu, pellentesque vitae sapien. Ut porttitor 
                dictum efficitur. Integer nec diam aliquet, tincidunt mauris nec, elementum ante. Fusce tristique augue et nisi accumsan, 
                sit amet fermentum lectus mattis. Sed id tempor ante. Donec lobortis interdum magna quis volutpat. Curabitur imperdiet rhoncus
                 mauris, et ultrices metus molestie sit amet.
              </p>
              <p>Suspendisse potenti. Fusce augue turpis, euismod non nulla ullamcorper, ornare malesuada arcu. Aliquam fringilla gravida elit,
               nec lacinia elit varius nec. Nullam ut dolor ac purus condimentum viverra. Sed convallis lacus eget laoreet auctor. 
               Vestibulum euismod mi eu urna sollicitudin mattis. Quisque semper, nisl a convallis pellentesque, tortor erat pharetra arcu,
               quis iaculis lectus mauris at velit. Donec sagittis maximus elit, eu ultrices lorem finibus non. Sed ac dictum nisl, 
               quis pulvinar massa. Pellentesque nec dapibus massa.  
              </p>
            </div>
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