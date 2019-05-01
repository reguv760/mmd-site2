import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet';

//import Img from "gatsby-image";
import AdvImg from './../images/advertising-hero.jpg'
import Layout from './../components/layout.js'

//Lightbox needs the following:::
import Gallery from './../components/Gallery'

/* import thumbnails + images */
import ccthumb01 from './../images/advertising/thumbs/cc-1-thumb.jpg'
import ccthumb02 from './../images/advertising/thumbs/cc-2-thumb.jpg'
import ccthumb03 from './../images/advertising/thumbs/cc-3-thumb.jpg'

import ghthumb01 from './../images/advertising/thumbs/guitar-hero-1-thumb.jpg'
import ghthumb02 from './../images/advertising/thumbs/guitar-hero-2-thumb.jpg'
import ghthumb03 from './../images/advertising/thumbs/guitar-hero-3-thumb.jpg'

import pumathumb01 from './../images/advertising/thumbs/puma-1-thumb.jpg'
import pumathumb02 from './../images/advertising/thumbs/puma-2-thumb.jpg'
import pumathumb03 from './../images/advertising/thumbs/puma-3-thumb.jpg'


import stjthumb01 from './../images/advertising/thumbs/stjo-1-thumb.jpg'
import stjthumb02 from './../images/advertising/thumbs/stjo-2-thumb.jpg'
import stjthumb03 from './../images/advertising/thumbs/stjo-3-thumb.jpg'


import pumpthumb01 from './../images/advertising/thumbs/Pump-Station-pg1-thumb.jpg'
import pumpthumb02 from './../images/advertising/thumbs/Pump-Station-pg2-thumb.jpg'
import pumpthumb03 from './../images/advertising/thumbs/Pump-Station-pg3-thumb.jpg'


import SRSthumb from './../images/advertising/thumbs/SRS-thumb.jpg'

import ghfull01 from './../images/advertising/guitar-hero-1.jpg'
import ghfull02 from './../images/advertising/guitar-hero-2.jpg'
import ghfull03 from './../images/advertising/guitar-hero-3.jpg'

import ccfull01 from './../images/advertising/cc-1.jpg'
import ccfull02 from './../images/advertising/cc-2.jpg'
import ccfull03 from './../images/advertising/cc-3.jpg'

import pumafull01 from './../images/advertising/puma-1.jpg'
import pumafull02 from './../images/advertising/puma-2.jpg'
import pumafull03 from './../images/advertising/puma-3.jpg'

import pumpfull01 from './../images/advertising/Pump-Station-pg1.jpg'
import pumpfull02 from './../images/advertising/Pump-Station-pg2.jpg'
import pumpfull03 from './../images/advertising/Pump-Station-pg3.jpg'


import stjfull01 from './../images/advertising/stjo-1.jpg'
import stjfull02 from './../images/advertising/stjo-2.jpg'
import stjfull03 from './../images/advertising/stjo-3.jpg'

import SRSfull from './../images/advertising/SRS-1.jpg'

const CC_IMAGES = [
    { id: '1', src: ccfull01, thumbnail: ccthumb01 },
    { id: '2', src: ccfull02, thumbnail: ccthumb02 },
    { id: '3', src: ccfull03, thumbnail: ccthumb03 }
];

const GH_IMAGES = [
    { id: '1', src: ghfull01, thumbnail: ghthumb01 },
    { id: '2', src: ghfull02, thumbnail: ghthumb02 },
    { id: '3', src: ghfull03, thumbnail: ghthumb03 }
];

const PUMA_IMAGES = [
    { id: '1', src: pumafull01, thumbnail: pumathumb01 },
    { id: '2', src: pumafull02, thumbnail: pumathumb02 },
    { id: '3', src: pumafull03, thumbnail: pumathumb03 }
];

const PUMP_IMAGES = [
    { id: '1', src: pumpfull01, thumbnail: pumpthumb01 },
    { id: '2', src: pumpfull02, thumbnail: pumpthumb02 },
    { id: '3', src: pumpfull03, thumbnail: pumpthumb03 }
];

const SRS_IMAGE = [
    { id: '1', src: SRSfull, thumbnail: SRSthumb }
];

const STJ_IMAGES = [
    { id: '1', src: stjfull01, thumbnail: stjthumb01 },
    { id: '2', src: stjfull02, thumbnail: stjthumb02 },
    { id: '3', src: stjfull03, thumbnail: stjthumb03 }
];


export default class AdvertisingPage extends React.Component 
{
  constructor()
  {
      super();

      this.state = {
          lightboxIsOpen: false,
          currentImage: 0,
      };

      this.closeLightbox = this.closeLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
      this.handleClickImage = this.handleClickImage.bind(this);
  }

  openLightbox (index, event) {
      event.preventDefault();
      this.setState({
          currentImage: index,
          lightboxIsOpen: true,
      });
  }
  closeLightbox () {
      this.setState({
          currentImage: 0,
          lightboxIsOpen: false,
      });
  }
  gotoPrevious () {
      this.setState({
          currentImage: this.state.currentImage - 1,
      });
  }
  gotoNext () {
      this.setState({
          currentImage: this.state.currentImage + 1,
      });
  }
  handleClickImage () {
      if (this.state.currentImage === this.props.images.length - 1) return;

      this.gotoNext();
  }


  render() 
  {
    const { title } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <Helmet title={`Advertising | ` + title} />

        <div className="pageContainer advertPage">

          <div className="blackBorder"/>

          <div className="pageContainer left">
           <img src={AdvImg} alt="Advertising" />
          </div>

          <div className="pageContainer right">
            <Gallery images={CC_IMAGES.map(({ id, src, thumbnail }) => ({
                              src,
                              thumbnail
              }))} />


            <Gallery images={GH_IMAGES.map(({ id, src, thumbnail }) => ({
                              src,
                              thumbnail
              }))} />

            <Gallery images={PUMA_IMAGES.map(({ id, src, thumbnail }) => ({
                              src,
                              thumbnail
              }))} />

            <Gallery images={PUMP_IMAGES.map(({ id, src, thumbnail }) => ({
                              src,
                              thumbnail
              }))} />

            <Gallery images={SRS_IMAGE.map(({ id, src, thumbnail }) => ({
                            src,
                            thumbnail
            }))} />

            <Gallery images={STJ_IMAGES.map(({ id, src, thumbnail }) => ({
                            src,
                            thumbnail
            }))} />
          </div>

          <div className="blackBorder"/>

        </div>
      </Layout>
    )
  }
}

export const advQuery = graphql`
  query advertisingPageQuery 
  {
    site {
      siteMetadata
      {
        title
      }
    }
  }

`
