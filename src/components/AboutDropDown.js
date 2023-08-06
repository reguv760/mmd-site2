import React from 'react';
import Dropdown, {
  DropdownTrigger,
  DropdownContent
} from 'react-simple-dropdown';

import AniLink from 'gatsby-plugin-transition-link/AniLink';
import CoverPDF from '../downloads/melanydierks-CV.pdf';
import ResumePDF from '../downloads/melanydierks-resume2022.pdf';
import StatementPDF from '../downloads/melanydierks-ArtistStatement.pdf';

class AboutDropDown extends React.Component {

  handleLinkClick = () => {    
    this.refs.dropdown.show();
    // this.refs.dropdown.isActive();
  };
 
  render() {
    return (
      <Dropdown ref="dropdown">
        <DropdownTrigger onClick={this.handleLinkClick}>
          <span className="dropdown-link" >
            about me
          </span>
        </DropdownTrigger>

        <DropdownContent>
          <ul className="subMenu">
            <li>
              <AniLink
                fade
                to="/bio/"
                activeStyle={{ color: '#e46815' }}
                duration={0.6}
              >
                biography
              </AniLink>
            </li> 
            
            <li>
              <a
                href={StatementPDF}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Artist Statement PDF"
              >
                statement
              </a>
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
