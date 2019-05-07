import React from 'react'
import { graphql } from 'gatsby'
import Helmet from 'react-helmet'

//import Img from "gatsby-image";
import PublicArtImage from './../images/publicArt-hero.jpg'
import Layout from './../components/layout.js'

//Lightbox needs the following:::
import Gallery from './../components/Gallery'

/* import thumbnails + images */
import paThumb01 from './../images/publicart/thumbs/2019-publicArt1-thumb.jpg'
import paThumb02 from './../images/publicart/thumbs/2019-publicArt2-thumb.jpg'
import paThumb03 from './../images/publicart/thumbs/2019-publicArt3-thumb.jpg'

import paFull01 from './../images/publicart/2019-publicArt-1.jpg'
import paFull02 from './../images/publicart/2019-publicArt-2.jpg'
import paFull03 from './../images/publicart/2019-publicArt-3.jpg'

const PUBLICART_IMAGES = [
  { id: '1', src: paFull01, thumbnail: paThumb01 },
  { id: '2', src: paFull02, thumbnail: paThumb02 },
  { id: '3', src: paFull03, thumbnail: paThumb03 },
]

export default class PublicArtPage extends React.Component {
  constructor() {
    super()

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0,
    }

    this.closeLightbox = this.closeLightbox.bind(this)
    this.gotoNext = this.gotoNext.bind(this)
    this.gotoPrevious = this.gotoPrevious.bind(this)
    this.openLightbox = this.openLightbox.bind(this)
    this.handleClickImage = this.handleClickImage.bind(this)
  }

  openLightbox(index, event) {
    event.preventDefault()
    this.setState({
      currentImage: index,
      lightboxIsOpen: true,
    })
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    })
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    })
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    })
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return

    this.gotoNext()
  }

  render() {
    const { title } = this.props.data.site.siteMetadata

    return (
      <Layout>
        <Helmet title={`Public Art | ` + title} />

        <div className="pageContainer graphicPage">
          <div className="blackBorder" />
          <div className="pageContainer left">
            <img src={PublicArtImage} alt="Graphic Design" />
          </div>

          <div className="pageContainer right">
            <Gallery
              images={PUBLICART_IMAGES.map(({ id, src, thumbnail }) => ({
                src,
                thumbnail,
              }))}
            />
          </div>
          <div className="blackBorder" />
        </div>
      </Layout>
    )
  }
}

export const publicArtQuery = graphql`
  query publicArtPageQuery {
    site {
      siteMetadata {
        title
      }
    }
  }
`
