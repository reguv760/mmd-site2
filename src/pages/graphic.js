import React from 'react'
//import Helmet from 'react-helmet';

//import Img from "gatsby-image";
import GraphicImg from './../images/graphic-hero.jpg'
import Layout from './../components/layout.js'

//Lightbox needs the following:::
import Gallery from './../components/Gallery'

/* import thumbnails + images */
import rcthumb01 from './../images/graphic/thumbs/rc-1-thumb.jpg'
import rcthumb02 from './../images/graphic/thumbs/rc-2-thumb.jpg'
import rcthumb03 from './../images/graphic/thumbs/rc-3-thumb.jpg'
import rcthumb04 from './../images/graphic/thumbs/rc-4-thumb.jpg'
import rcthumb05 from './../images/graphic/thumbs/rc-5-thumb.jpg'
import rcthumb06 from './../images/graphic/thumbs/rc-6-thumb.jpg'
import rcthumb07 from './../images/graphic/thumbs/rc-7-thumb.jpg'
import rcthumb08 from './../images/graphic/thumbs/rc-8-thumb.jpg'
import rcthumb09 from './../images/graphic/thumbs/rc-9-thumb.jpg'

import logothumb01 from './../images/graphic/thumbs/logo1-thumb.jpg'
import logothumb02 from './../images/graphic/thumbs/logo2-thumb.jpg'
import logothumb03 from './../images/graphic/thumbs/logo3-thumb.jpg'
import logothumb04 from './../images/graphic/thumbs/logo4-thumb.jpg'
import logothumb05 from './../images/graphic/thumbs/logo5-thumb.jpg'

import octhumb01 from './../images/graphic/thumbs/oc-drinkTicket.jpg'
import octhumb02 from './../images/graphic/thumbs/oc-e-blast1.jpg'
import octhumb03 from './../images/graphic/thumbs/oc-e-blast2.jpg'
import octhumb04 from './../images/graphic/thumbs/oc-invitation.jpg'
import octhumb05 from './../images/graphic/thumbs/oc-mailer.jpg'

import rcfull01 from './../images/graphic/rc-1.jpg'
import rcfull02 from './../images/graphic/rc-2.jpg'
import rcfull03 from './../images/graphic/rc-3.jpg'
import rcfull04 from './../images/graphic/rc-4.jpg'
import rcfull05 from './../images/graphic/rc-5.jpg'
import rcfull06 from './../images/graphic/rc-6.jpg'
import rcfull07 from './../images/graphic/rc-7.jpg'
import rcfull08 from './../images/graphic/rc-8.jpg'
import rcfull09 from './../images/graphic/rc-9.jpg'

import logofull01 from './../images/graphic/logo1.jpg'
import logofull02 from './../images/graphic/logo2.jpg'
import logofull03 from './../images/graphic/logo3.jpg'
import logofull04 from './../images/graphic/logo4.jpg'
import logofull05 from './../images/graphic/logo5.jpg'


import ocfull01 from './../images/graphic/drinkTicket.jpg'
import ocfull02 from './../images/graphic/e-blast1.jpg'
import ocfull03 from './../images/graphic/e-blast2.jpg'
import ocfull04 from './../images/graphic/invitation.jpg'
import ocfull05 from './../images/graphic/mailer.jpg'


const rcSTORY_IMAGES = [
    { id: '1', src: rcfull01, thumbnail: rcthumb01 },
    { id: '2', src: rcfull02, thumbnail: rcthumb02 },
    { id: '3', src: rcfull03, thumbnail: rcthumb03 },
    { id: '4', src: rcfull04, thumbnail: rcthumb04 },
    { id: '5', src: rcfull05, thumbnail: rcthumb05 },
    { id: '6', src: rcfull06, thumbnail: rcthumb06 },
    { id: '7', src: rcfull07, thumbnail: rcthumb07 },
    { id: '8', src: rcfull08, thumbnail: rcthumb08 },
    { id: '9', src: rcfull09, thumbnail: rcthumb09 }
];

const LOGO_IMAGES = [
    { id: '1', src: logofull01, thumbnail: logothumb01 },
    { id: '2', src: logofull02, thumbnail: logothumb02 },
    { id: '3', src: logofull03, thumbnail: logothumb03 },
    { id: '4', src: logofull04, thumbnail: logothumb04 },
    { id: '5', src: logofull05, thumbnail: logothumb05 }
];

const OC_IMAGES = [
    { id: '1', src: ocfull01, thumbnail: octhumb01 },
    { id: '2', src: ocfull02, thumbnail: octhumb02 },
    { id: '3', src: ocfull03, thumbnail: octhumb03 },
    { id: '4', src: ocfull04, thumbnail: octhumb04 },
    { id: '5', src: ocfull05, thumbnail: octhumb05 }
];


export default class GraphicPage extends React.Component 
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
    return (
      <Layout>
        { /* <Helmet title={`Tattoos | ` + data.site.siteMetadata.title}
                meta={[
                  { name: 'description', content: 'Wet Paint(n.) A state of freshness and vigor that categorizes the art of Melany Meza-Dierks.' },
                  { name: 'keywords', content: 'Fine Artist, West Los Angeles California, Little Rock Arkansas, Tattoos, Advertising, Graphic Design, Art Director, Teacher' },
                  { name: 'author', content: 'Reginald Galang @TDG' },
                ]}
              >
        </Helmet> */ }

        <div className="pageContainer graphicPage">
          <div className="blackBorder"/>
          <div className="pageContainer left">
           <img src={GraphicImg} alt="Graphic Design" />
          </div>

          <div className="pageContainer right">
            <Gallery images={rcSTORY_IMAGES.map(({ id, src, thumbnail }) => ({
                              src,
                              thumbnail
              }))} />

            <Gallery images={LOGO_IMAGES.map(({ id, src, thumbnail }) => ({
                            src,
                            thumbnail
            }))} />

            <Gallery images={OC_IMAGES.map(({ id, src, thumbnail }) => ({
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