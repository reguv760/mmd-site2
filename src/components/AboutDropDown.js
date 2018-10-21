import React from 'react';
///import PropTypes from 'prop-types';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import { Link } from 'gatsby'

import CoverPDF from './../downloads/melanydierks-CV.pdf';
import ResumePDF from './../downloads/melanydierks-resume2018.pdf';

class ArtistDropDown extends React.Component
{
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick = () =>
  {
    //console.log(this.state.name);
    this.refs.dropdown.show();
    //this.refs.dropdown.isActive();
  }
  render() 
  {
    return (
      <Dropdown ref="dropdown">
        <DropdownTrigger>
          <span className="dropdown-link" onClick={this.handleLinkClick}>about me</span>
        </DropdownTrigger>

        <DropdownContent>
          <ul className="subMenu">
            <li><Link to="/bio" activeStyle={{ color: '#d4740d' }}>biography</Link></li>
            <li><Link to={CoverPDF} target="_blank" rel="noopener">cv</Link></li>
            <li><Link to={ResumePDF} target="_blank" rel="noopener">resume</Link></li>
          </ul>
        </DropdownContent>
      </Dropdown>
    )
  }
}

export default ArtistDropDown;