import React from 'react';
import { graphql } from 'gatsby';
import Helmet from 'react-helmet';

//import Img from "gatsby-image";
import StoryboardImg from './../images/sb-hero.jpg';
import Layout from './../components/layout.js';

//Lightbox needs the following:::
import Gallery from './../components/Gallery';
/* import thumbnails + images */
import pepsithumb01 from './../images/storyboards/thumbs/pepsi_Page_1-thumb.jpg';
import pepsithumb02 from './../images/storyboards/thumbs/pepsi_Page_2-thumb.jpg';
import pepsithumb03 from './../images/storyboards/thumbs/pepsi_Page_3-thumb.jpg';
import pepsithumb04 from './../images/storyboards/thumbs/pepsi_Page_4-thumb.jpg';

import pepsifull01 from './../images/storyboards/pepsi_Page_1.jpg';
import pepsifull02 from './../images/storyboards/pepsi_Page_2.jpg';
import pepsifull03 from './../images/storyboards/pepsi_Page_3.jpg';
import pepsifull04 from './../images/storyboards/pepsi_Page_4.jpg';

import vreadthumb01 from './../images/storyboards/thumbs/viread-illustrations-1-thumb.jpg';
import vreadthumb02 from './../images/storyboards/thumbs/viread-illustrations-2-thumb.jpg';
import vreadthumb03 from './../images/storyboards/thumbs/viread-illustrations-3-thumb.jpg';
import vreadthumb04 from './../images/storyboards/thumbs/viread-illustrations-4-thumb.jpg';

import vreadfull01 from './../images/storyboards/viread-illustrations-1.jpg';
import vreadfull02 from './../images/storyboards/viread-illustrations-2.jpg';
import vreadfull03 from './../images/storyboards/viread-illustrations-3.jpg';
import vreadfull04 from './../images/storyboards/viread-illustrations-4.jpg';

const PEPSI_IMAGES = [
  { id: '1', src: pepsifull01, thumbnail: pepsithumb01 },
  { id: '2', src: pepsifull02, thumbnail: pepsithumb02 },
  { id: '3', src: pepsifull03, thumbnail: pepsithumb03 },
  { id: '4', src: pepsifull04, thumbnail: pepsithumb04 }
];

const VREAD_IMAGES = [
  { id: '1', src: vreadfull01, thumbnail: vreadthumb01 },
  { id: '2', src: vreadfull02, thumbnail: vreadthumb02 },
  { id: '3', src: vreadfull03, thumbnail: vreadthumb03 },
  { id: '4', src: vreadfull04, thumbnail: vreadthumb04 }
];

export default class StoryboardPage extends React.Component {

  render() {
    const { title } = this.props.data.site.siteMetadata;
    return (
      <Layout>
        <Helmet title={`Storyboards | ${title}`} />

        <div className="pageContainer storyboardPage">
          <div className="blackBorder" />
          <div className="pageContainer left">
            <img src={StoryboardImg} alt="Storyboard" />
          </div>

          <div className="pageContainer right">
            <Gallery
              images={PEPSI_IMAGES.map(({ id, src, thumbnail }) => ({
                id,
                src,
                thumbnail
              }))}
            />

            <Gallery
              images={VREAD_IMAGES.map(({ id, src, thumbnail }) => ({
                id,
                src,
                thumbnail
              }))}
            />
          </div>
          <div className="blackBorder" />
        </div>
      </Layout>
    );
  }
}

export const storyboardQuery = graphql`
  query storyboardPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`;
