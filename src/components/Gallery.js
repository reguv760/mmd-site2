import React from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';

class Gallery extends React.Component {
  constructor() {
    super();

    this.state = {
      lightboxIsOpen: false,
      currentImage: 0
    };

    this.closeLightbox = this.closeLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
    this.gotoImage = this.gotoImage.bind(this);
    this.handleClickImage = this.handleClickImage.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
  }
  openLightbox(index, event) {
    event.preventDefault();
    this.setState({
      currentImage: index,
      lightboxIsOpen: true
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1
    });
  }
  gotoImage(index) {
    this.setState({
      currentImage: index
    });
  }
  handleClickImage() {
    if (this.state.currentImage === this.props.images.length - 1) return;

    this.gotoNext();
  }
  renderGallery() {
    const { images } = this.props;

    if (!images) return;

    /* {  this is output of menu items  } */
    const gallery = images.map((obj, i) => {
      return (
        <li className="gallery-thumbContainer" key={i}>          

          { //conditional render based on if artwork is sold
            obj.sold && ( <span className="dot"/> ) 
          }
          
          <a
            className="gallery-thumb"
            href={obj.src}
            onClick={e => this.openLightbox(i, e)}
          >
            <img src={obj.thumbnail} alt="thumbnail" />
          </a>

          {/* <h3>{obj.caption}</h3>
                    <p>{obj.description}</p> */}
        </li>
      );
    });

    /* {  this is the main output of Gallery.js!  } */
    return <ul className="galleryContainer">{gallery}</ul>;
  }

  //this is the output of this class:::
  render() {
    return (
      <div>
        {this.renderGallery()}
        <Lightbox
          currentImage={this.state.currentImage}
          images={this.props.images}
          isOpen={this.state.lightboxIsOpen}
          onClickImage={this.handleClickImage}
          onClickNext={this.gotoNext}
          onClickPrev={this.gotoPrevious}
          onClickThumbnail={this.gotoImage}
          onClose={this.closeLightbox}
        />
      </div>
    );
  }
}

Gallery.displayName = 'Gallery';
Gallery.propTypes = {
  images: PropTypes.array
};

export default Gallery;
