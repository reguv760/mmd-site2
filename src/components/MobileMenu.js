import React from 'react';
import { slide as Menu } from 'react-burger-menu'

import CoverPDF from './../downloads/melanydierks-CV.pdf'
import ResumePDF from './../downloads/melanydierks-resume2018.pdf'

class MobileMenu extends React.Component {
  showSettings (event) {
    event.preventDefault();
  }

  render () {
    return (
      <Menu className={"mobileMenu"} width={ '20rem' }>
        <ul>
          <li><a className="menu-item" href="/">Home</a></li>
          <li><a className="menu-item" href="/artist">Art: <span className="thin">Artist</span></a></li>
          <li><a className="menu-item" href="/teacher">Art: <span className="thin">Teacher</span></a></li>
          <li><a className="menu-item" href="/tattoos">Tattoos</a></li>
          <li><a className="menu-item" href="/advertising">Design: <span className="thin">Advertising</span></a></li>
          <li><a className="menu-item" href="/graphic">Design: <span className="thin">Graphic Design</span></a></li>
          <li><a className="menu-item" href="/storyboards">Design: <span className="thin">Storyboards</span></a></li>
          <li><a className="menu-item" href="/bio">About Me: <span className="thin">Biography</span></a></li>
          <li><a className="menu-item" href={CoverPDF} target="_blank" rel="noopener noreferrer">About Me: <span className="thin">CV</span></a></li>
          <li><a className="menu-item" href={ResumePDF} target="_blank" rel="noopener noreferrer">About Me: <span className="thin">Resume</span></a></li>
        </ul>
      </Menu>
    );
  }
}

export default MobileMenu
