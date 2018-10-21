import React from 'react'
//import { StaticQuery, graphql } from 'gatsby'
//import Helmet from 'react-helmet';

//import Img from "gatsby-image";
import TattooImg from './../images/tattoos-hero.jpg'
import Layout from './../components/layout.js'

//Lightbox needs the following:::
import Gallery from './../components/Gallery'

/* import thumbnails + images */
import thumb01 from './../images/tattoos/thumbs/newtat-4.jpg'
import thumb02 from './../images/tattoos/thumbs/newtat-5.jpg'
import thumb03 from './../images/tattoos/thumbs/newtat-6.jpg'
import thumb04 from './../images/tattoos/thumbs/newtat-7.jpg'
import thumb05 from './../images/tattoos/thumbs/nick-tat-thumb.jpg'
import thumb06 from './../images/tattoos/thumbs/tat-script1.jpg'
import thumb07 from './../images/tattoos/thumbs/newtat-1.jpg'
import thumb08 from './../images/tattoos/thumbs/newtat-2.jpg'
import thumb09 from './../images/tattoos/thumbs/newtat-3.jpg'
import thumb10 from './../images/tattoos/thumbs/reg-thumb1.jpg'
import thumb11 from './../images/tattoos/thumbs/reg-thumb2.jpg'
import thumb12 from './../images/tattoos/thumbs/reg-thumb3.jpg'
import thumb13 from './../images/tattoos/thumbs/reg-thumb5.jpg'
import thumb14 from './../images/tattoos/thumbs/reg-thumb6.jpg'
import thumb15 from './../images/tattoos/thumbs/reg-thumb7.jpg'
import thumb16 from './../images/tattoos/thumbs/reg-thumb8.jpg'
import thumb17 from './../images/tattoos/thumbs/reg-thumb9.jpg'
import thumb18 from './../images/tattoos/thumbs/reg-thumb10.jpg'
import thumb19 from './../images/tattoos/thumbs/reg-thumb11.jpg'
import thumb20 from './../images/tattoos/thumbs/reg-thumb12.jpg'
import thumb21 from './../images/tattoos/thumbs/reg-thumb13.jpg'
import thumb22 from './../images/tattoos/thumbs/reg-thumb15.jpg'
import thumb23 from './../images/tattoos/thumbs/reg-thumb16.jpg'
import thumb24 from './../images/tattoos/thumbs/reg-thumb17.jpg'
import thumb25 from './../images/tattoos/thumbs/reg-thumb18.jpg'
import thumb26 from './../images/tattoos/thumbs/tat1.jpg'
import thumb27 from './../images/tattoos/thumbs/tat2.jpg'
import thumb28 from './../images/tattoos/thumbs/tat3.jpg'
import thumb29 from './../images/tattoos/thumbs/tat5.jpg'
import thumb30 from './../images/tattoos/thumbs/tat6.jpg'
import thumb31 from './../images/tattoos/thumbs/tat7.jpg'
import thumb32 from './../images/tattoos/thumbs/tat8.jpg'
import thumb33 from './../images/tattoos/thumbs/tat9.jpg'
import thumb34 from './../images/tattoos/thumbs/tat11.jpg'
import thumb35 from './../images/tattoos/thumbs/tat12.jpg'
import thumb36 from './../images/tattoos/thumbs/tat14.jpg'
import thumb37 from './../images/tattoos/thumbs/tat_1.jpg'
import thumb38 from './../images/tattoos/thumbs/tat_2.jpg'
import thumb39 from './../images/tattoos/thumbs/tat_3.jpg'
import thumb40 from './../images/tattoos/thumbs/tat_5.jpg'

import full01 from './../images/tattoos/newtat-4.jpg'
import full02 from './../images/tattoos/newtat-5.jpg'
import full03 from './../images/tattoos/newtat-6.jpg'
import full04 from './../images/tattoos/newtat-7.jpg'
import full05 from './../images/tattoos/nick-tat.jpg'
import full06 from './../images/tattoos/tat-script1.jpg'
import full07 from './../images/tattoos/newtat-1.jpg'
import full08 from './../images/tattoos/newtat-2.jpg'
import full09 from './../images/tattoos/newtat-3.jpg'
import full10 from './../images/tattoos/reg-large1.jpg'
import full11 from './../images/tattoos/reg-large2.jpg'
import full12 from './../images/tattoos/reg-large3.jpg'
import full13 from './../images/tattoos/reg-large5.jpg'
import full14 from './../images/tattoos/reg-large6.jpg'
import full15 from './../images/tattoos/reg-large7.jpg'
import full16 from './../images/tattoos/reg-large8.jpg'
import full17 from './../images/tattoos/reg-large9.jpg'
import full18 from './../images/tattoos/reg-large10.jpg'
import full19 from './../images/tattoos/reg-large11.jpg'
import full20 from './../images/tattoos/reg-large12.jpg'
import full21 from './../images/tattoos/reg-large13.jpg'
import full22 from './../images/tattoos/reg-large15.jpg'
import full23 from './../images/tattoos/reg-large16.jpg'
import full24 from './../images/tattoos/reg-large17.jpg'
import full25 from './../images/tattoos/reg-large18.jpg'
import full26 from './../images/tattoos/tat1.jpg'
import full27 from './../images/tattoos/tat2.jpg'
import full28 from './../images/tattoos/tat3.jpg'
import full29 from './../images/tattoos/tat5.jpg'
import full30 from './../images/tattoos/tat6.jpg'
import full31 from './../images/tattoos/tat7.jpg'
import full32 from './../images/tattoos/tat8.jpg'
import full33 from './../images/tattoos/tat9.jpg'
import full34 from './../images/tattoos/tat11.jpg'
import full35 from './../images/tattoos/tat12.jpg'
import full36 from './../images/tattoos/tat14.jpg'
import full37 from './../images/tattoos/tat_1.jpg'
import full38 from './../images/tattoos/tat_2.jpg'
import full39 from './../images/tattoos/tat_3.jpg'
import full40 from './../images/tattoos/tat_5.jpg'

const TATTOO_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01 },
    { id: '2', src: full02, thumbnail: thumb02 },
    { id: '3', src: full03, thumbnail: thumb03 },
    { id: '4', src: full04, thumbnail: thumb04 },
    { id: '5', src: full05, thumbnail: thumb05 },
    { id: '6', src: full06, thumbnail: thumb06 },
    { id: '7', src: full07, thumbnail: thumb07 },
    { id: '8', src: full08, thumbnail: thumb08 },
    { id: '9', src: full09, thumbnail: thumb09 },
    { id: '10', src: full10, thumbnail: thumb10 },
    { id: '11', src: full11, thumbnail: thumb11 },
    { id: '12', src: full12, thumbnail: thumb12 },
    { id: '13', src: full13, thumbnail: thumb13 },
    { id: '14', src: full14, thumbnail: thumb14 },
    { id: '15', src: full15, thumbnail: thumb15 },
    { id: '16', src: full16, thumbnail: thumb16 },
    { id: '17', src: full17, thumbnail: thumb17 },
    { id: '18', src: full18, thumbnail: thumb18 },
    { id: '19', src: full19, thumbnail: thumb19 },
    { id: '20', src: full20, thumbnail: thumb20 },
    { id: '21', src: full21, thumbnail: thumb21 },
    { id: '22', src: full22, thumbnail: thumb22 },
    { id: '23', src: full23, thumbnail: thumb23 },
    { id: '24', src: full24, thumbnail: thumb24 },
    { id: '25', src: full25, thumbnail: thumb25 },
    { id: '26', src: full26, thumbnail: thumb26 },
    { id: '27', src: full27, thumbnail: thumb27 },
    { id: '28', src: full28, thumbnail: thumb28 },
    { id: '29', src: full29, thumbnail: thumb29 },
    { id: '30', src: full30, thumbnail: thumb30 },
    { id: '31', src: full31, thumbnail: thumb31 },
    { id: '32', src: full32, thumbnail: thumb32 },
    { id: '33', src: full33, thumbnail: thumb33 },
    { id: '34', src: full34, thumbnail: thumb34 },
    { id: '35', src: full35, thumbnail: thumb35 },
    { id: '36', src: full36, thumbnail: thumb36 },
    { id: '37', src: full37, thumbnail: thumb37 },
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