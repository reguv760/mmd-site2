import React from 'react';

// import Header from './../components/Header'

import HomeImg from '../images/home-hero2.jpg';
import FoxImg from '../images/foxPortal.jpg';
import MermaidImg from '../images/mermaid.jpg';

import Layout from '../components/layout';

const RandomImageArray = [HomeImg, FoxImg, MermaidImg];
let RandomNum;

class Index extends React.Component {
  state = {
    currentImage: ''
  };

  componentDidMount() {
    RandomNum = Math.floor(Math.random() * RandomImageArray.length);
    this.state.currentImage = RandomImageArray[RandomNum];
  }

  render() {
    return (
      <Layout>
        <div className="pageContainer homePage">
          <div className="blackBorder" />
          <div className="pageContainer left">
            <img src={this.state.currentImage} alt="Home" />
          </div>

          <div className="pageContainer right">
            <div className="homeText">
              <b>Wet Paint</b> (n.)
              <br />
              A state of freshness and vigor that categorizes the art of
              Melany Dierks.
            </div>
          </div>
          <div className="blackBorder" />
        </div>
      </Layout>
    );
  }
}

export default Index;
