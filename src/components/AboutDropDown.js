import React from 'react';
import Dropdown, {
  DropdownTrigger,
  DropdownContent
} from 'react-simple-dropdown';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import CoverPDF from '../downloads/melanydierks-CV.pdf';
import ResumePDF from '../downloads/melanydierks-resume2018.pdf';

class AboutDropDown extends React.Component {

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
                duration={0.6}
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
