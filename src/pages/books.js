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
//import thumb04 from './../images/tattoos/2019/thumbs/2019-tattoo4-thumb.jpg';

//full images:::
//import full04 from './../images/tsattoos/2019/2019-tattoo-4.jpg';


const SLFirechild_IMAGES = [    
  //give unique ID and ref src + thumbnail
  //{ id: 'uniqueID', src: full04, thumbnail: thumb04 },
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
            {/* <Gallery
              images={SLFirechild_IMAGES.map(({ id, src, thumbnail, caption }) => ({
                id,
                src,
                thumbnail
              }))}
            /> */}
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