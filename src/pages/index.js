import React from 'react'

//import Header from './../components/Header'

import HomeImg from './../images/home-hero2.jpg'
import FoxImg from './../images/foxPortal.jpg'
import MermaidImg from './../images/mermaid.jpg'

import Layout from './../components/layout.js'

const RandomImageArray = [HomeImg, FoxImg, MermaidImg];
const RandomNum = Math.floor(Math.random() * RandomImageArray.length);

const Index = () => (

  <Layout>
  	<div className="pageContainer homePage">
      <div className="blackBorder"/>
      <div className="pageContainer left">
        <img src={RandomImageArray[RandomNum]} alt="Home" />
      </div>

      <div className="pageContainer right">
        <div className="homeText">
          <b>Wet Paint</b> (n.)<br/>
          <span className="gray">A state of freshness and vigor that categorizes the art of Melany Dierks.</span>
        </div>
      </div>
      <div className="blackBorder"/>
    </div>
  </Layout>
)

export default Index
