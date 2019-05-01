import React from 'react'
import Home404 from './../images/home.jpg'

const NotFoundPage = () => (

  <div className="pageContainer homePage">
    <div className="pageContainer left">
      <img src={Home404} alt="Home404" />
    </div>

    <div className="pageContainer right">
      <div className="homeText">
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </div>
    </div>
  </div>
)

export default NotFoundPage
