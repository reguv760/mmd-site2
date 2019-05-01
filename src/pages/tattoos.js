import React from 'react'
import Helmet from 'react-helmet';

//import Img from "gatsby-image";
import TattooImg from './../images/tattoos-hero.jpg'
import Layout from './../components/layout.js'

//Lightbox needs the following:::
import Gallery from './../components/Gallery'

/* import thumbnails + images */
import thumb01 from './../images/tattoos/thumbs/newtat-4.jpg'

import thumb05 from './../images/tattoos/thumbs/nick-tat-thumb.jpg'
import thumb06 from './../images/tattoos/thumbs/tat-script1.jpg'

import thumb08 from './../images/tattoos/thumbs/newtat-2.jpg'

import thumb10 from './../images/tattoos/thumbs/reg-thumb1.jpg'
import thumb11 from './../images/tattoos/thumbs/reg-thumb2.jpg'

import thumb15 from './../images/tattoos/thumbs/reg-thumb7.jpg'

import thumb17 from './../images/tattoos/thumbs/reg-thumb9.jpg'

import thumb20 from './../images/tattoos/thumbs/reg-thumb12.jpg'

import thumb23 from './../images/tattoos/thumbs/reg-thumb16.jpg'
import thumb24 from './../images/tattoos/thumbs/reg-thumb17.jpg'
import thumb27 from './../images/tattoos/thumbs/tat2.jpg'
import thumb28 from './../images/tattoos/thumbs/tat3.jpg'
import thumb29 from './../images/tattoos/thumbs/tat5.jpg'
import thumb30 from './../images/tattoos/thumbs/tat6.jpg'
import thumb32 from './../images/tattoos/thumbs/tat8.jpg'
import thumb33 from './../images/tattoos/thumbs/tat9.jpg'
import thumb34 from './../images/tattoos/thumbs/tat11.jpg'
import thumb36 from './../images/tattoos/thumbs/tat14.jpg'
import thumb38 from './../images/tattoos/thumbs/tat_2.jpg'
import thumb39 from './../images/tattoos/thumbs/tat_3.jpg'
import thumb40 from './../images/tattoos/thumbs/tat_5.jpg'

import full01 from './../images/tattoos/newtat-4.jpg'
import full05 from './../images/tattoos/nick-tat.jpg'
import full06 from './../images/tattoos/tat-script1.jpg'
import full08 from './../images/tattoos/newtat-2.jpg'
import full10 from './../images/tattoos/reg-large1.jpg'
import full11 from './../images/tattoos/reg-large2.jpg'
import full15 from './../images/tattoos/reg-large7.jpg'
import full17 from './../images/tattoos/reg-large9.jpg'
import full20 from './../images/tattoos/reg-large12.jpg'
import full23 from './../images/tattoos/reg-large16.jpg'
import full24 from './../images/tattoos/reg-large17.jpg'
import full27 from './../images/tattoos/tat2.jpg'
import full28 from './../images/tattoos/tat3.jpg'
import full29 from './../images/tattoos/tat5.jpg'
import full30 from './../images/tattoos/tat6.jpg'
import full32 from './../images/tattoos/tat8.jpg'
import full33 from './../images/tattoos/tat9.jpg'
import full34 from './../images/tattoos/tat11.jpg'
import full36 from './../images/tattoos/tat14.jpg'
import full38 from './../images/tattoos/tat_2.jpg'
import full39 from './../images/tattoos/tat_3.jpg'
import full40 from './../images/tattoos/tat_5.jpg'

const TATTOO_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01 },
    { id: '5', src: full05, thumbnail: thumb05 },
    { id: '6', src: full06, thumbnail: thumb06 },
    { id: '8', src: full08, thumbnail: thumb08 },
    { id: '10', src: full10, thumbnail: thumb10 },
    { id: '11', src: full11, thumbnail: thumb11 },
    { id: '15', src: full15, thumbnail: thumb15 },
    { id: '17', src: full17, thumbnail: thumb17 },
    { id: '20', src: full20, thumbnail: thumb20 },
    { id: '23', src: full23, thumbnail: thumb23 },
    { id: '24', src: full24, thumbnail: thumb24 },
    { id: '27', src: full27, thumbnail: thumb27 },
    { id: '28', src: full28, thumbnail: thumb28 },
    { id: '29', src: full29, thumbnail: thumb29 },
    { id: '30', src: full30, thumbnail: thumb30 },
    { id: '32', src: full32, thumbnail: thumb32 },
    { id: '33', src: full33, thumbnail: thumb33 },
    { id: '34', src: full34, thumbnail: thumb34 },
    { id: '36', src: full36, thumbnail: thumb36 },
    { id: '38', src: full38, thumbnail: thumb38 },
    { id: '39', src: full39, thumbnail: thumb39 },
    { id: '40', src: full40, thumbnail: thumb40 }
];


export default class TattooPage extends React.Component 
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
    //console.log(this.props)

    const { title } = this.props.data.site.siteMetadata;

    return (
      <Layout>
        <Helmet title={`Tattoos | ` + title} /> 

        <div className="pageContainer tattooPage">
          <div className="blackBorder"/>
          <div className="pageContainer left">
            <img src={TattooImg} alt="Tattoo" />
          {/*<Img resolutions={data.file.imageSharp.sizes} />*/}
          </div>

          <div className="pageContainer right">
            <Gallery images={TATTOO_IMAGES.map(({ id, src, thumbnail, caption }) => ({
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

export const tattooQuery = graphql`
  query tattooPageQuery 
  {
    site {
      siteMetadata
      {
        title
      }
    }
  }

`