import React from 'react';
///import PropTypes from 'prop-types';
import Dropdown, {
  DropdownTrigger,
  DropdownContent
} from 'react-simple-dropdown';
import { Link } from 'gatsby';

import CoverPDF from './../downloads/melanydierks-CV.pdf';
import ResumePDF from './../downloads/melanydierks-resume2018.pdf';

import AniLink from 'gatsby-plugin-transition-link/AniLink';

class AboutDropDown extends React.Component {
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick = () => {
    //console.log(this.state.name);
    this.refs.dropdown.show();
    //this.refs.dropdown.isActive();
  };
  render() {
    return (
      <Dropdown ref="dropdown">
        <DropdownTrigger>
          <span className="dropdown-link" onClick={this.handleLinkClick}>
            about me
          </span>
        </DropdownTrigger>

        <DropdownContent>
          <ul className="subMenu">
            <li>
              <AniLink
                fade
                to="/bio/"
                activeStyle={{ color: '#d4740d' }}
                duration={0.5}
              >
                biography
              </AniLink>
            </li>
            <li>
              <a
                href={CoverPDF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Cover Letter PDF"
              >
                cv
              </a>
            </li>
            <li>
              <a
                href={ResumePDF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Resume PDF"
              >
                resume
              </a>
            </li>
          </ul>
        </DropdownContent>
      </Dropdown>
    );
  }
}

export default AboutDropDown;
