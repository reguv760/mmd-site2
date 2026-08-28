import React from 'react';

// import Header from './../components/Header'
// import ConsumedImg from '../images/consumedHero.jpg';
// import ChainHero from '../images/theChain-hero.jpg';
// import HomeImg from '../images/home-hero2.jpg';
// import FoxImg from '../images/foxPortal.jpg';
// import TigerImg from '../images/TripleThreat-Hero.jpg';
// import MydusaImg from '../images/Mydusa-hero.jpg';
// import CareBareStareIMG from '../images/artist-hero25.jpg';
// import TiltBananaIMG from '../images/TiltBanana.jpg';

import Layout from '../components/layout';
import { MainHeroImages } from '../data/MainHeroImages'

//const RandomImageArray = [TigerImg, ConsumedImg, ChainHero, HomeImg, FoxImg, MydusaImg, CareBareStareIMG, TiltBananaIMG];
//let RandomNum;

class Index extends React.Component {
  state = {
    //fallback in case image doesn't load
    currentImage: MainHeroImages.images[0] 

    //currentImage: null
  };

  componentDidMount() {
    //const randomHero = {MainHeroImages}
    const imageArray = MainHeroImages.images;

    if (imageArray && imageArray.length > 0) {
      const randomNum = Math.floor(Math.random() * imageArray.length);
      //this.state.currentImage = RandomImageArray[RandomNum];
      this.setState({
        currentImage: imageArray[randomNum]
      });

    }    
  }

  render() {
    
    console.log(this.state.currentImage);
    return (
      <Layout>
        <div className="pageContainer homePage">
          <div className="blackBorder" />
           
          <div className="pageContainer left">
            { //<img src={this.state.currentImage} alt="Home" />
            }

            {
              this.state.currentImage && (
                <img 
                  src={this.state.currentImage.imagePath.default || this.state.currentImage.imagePath} 
                  alt={this.state.currentImage.name} 
                />
              )
            }
          </div> 

          <div className="pageContainer right">
            <div className="homeText">
              <b>Wet Paint</b> (n.)
              <br />
              A state of freshness and vigor that categorizes the art of
              Melany MD.
            </div>
          </div>
          <div className="blackBorder" />
        </div>
      </Layout>
    );
  }
}

export default Index;
