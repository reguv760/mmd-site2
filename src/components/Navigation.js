import React from 'react';
//import PropTypes from 'prop-types';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import { Link } from 'gatsby'

import CoverPDF from './../downloads/melanydierks-CV.pdf';
import ResumePDF from './../downloads/melanydierks-resume2018.pdf';


class Navigation extends React.Component
{
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick()
  {
    this.refs.dropdown.hide();
    //this.refs.dropdown.isActive();
  }

  render() {

    return (
      <nav>
        <ul className="menu">

          <li>
            <Link to="/" activeStyle={{
                        color: '#d4740d'
                      }} exact>home</Link>
          </li>

          <li>
            <Dropdown ref="dropdown">
              <DropdownTrigger>
                <span className="dropdown-link" onClick={this.handleLinkClick}>art</span>
              </DropdownTrigger>
              <DropdownContent>
                <ul className="subMenu">
                    <li><Link to="/artist"
                          activeStyle={{
                            color: '#d4740d'
                          }}>artist</Link>
                    </li>

                    <li><Link to="/teacher" activeStyle={{
                            color: '#d4740d'
                          }}>teacher</Link>
                    </li>
                </ul>
              </DropdownContent>
            </Dropdown>
          </li>

          <li>
            <Link to="/tattoos" activeStyle={{
                        color: '#d4740d'
                      }}>tattoos</Link>
          </li>

          <li>
            <Dropdown ref="dropdown">
              <DropdownTrigger>
               <span className="dropdown-link" onClick={this.handleLinkClick}>design</span>
              </DropdownTrigger>

              <DropdownContent>
                <ul className="subMenu">
                    <li>
                      <Link to="/advertising" activeStyle={{
                            color: '#d4740d'
                          }}>advertising</Link>
                    </li>

                    <li>
                      <Link to="/graphic" activeStyle={{
                            color: '#d4740d'
                          }}>graphic</Link>
                    </li>

                    <li>
                      <Link to="/storyboards" activeStyle={{
                            color: '#d4740d'
                          }}>storyboards</Link>
                    </li>
                </ul>
              </DropdownContent>
            </Dropdown>
          </li>

          <li>
            <Dropdown ref="dropdown">
              <DropdownTrigger>
                <span className="dropdown-link" onClick={this.handleLinkClick}>about me</span>
              </DropdownTrigger>

              <DropdownContent>
                <ul className="subMenu">
                  <li>
                    <Link to="/bio" activeStyle={{
                            color: '#d4740d'
                          }}>biography</Link>
                  </li>
                  <li><Link to={CoverPDF} target="_blank" rel="noopener">cv</Link></li>
                  <li><Link to={ResumePDF} target="_blank" rel="noopener">resume</Link></li>
                </ul>
              </DropdownContent>
            </Dropdown>
          </li>
        </ul>
      </nav>
    );
  }
}


export default Navigation;
