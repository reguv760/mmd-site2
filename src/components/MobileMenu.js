import React from 'react';
import { slide as Menu } from 'react-burger-menu';
import { Link } from 'gatsby';

import ResumePDF from '../downloads/melanydierks-resume2022.pdf';
import CoverPDF from '../downloads/melanydierks-CV.pdf';

class MobileMenu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Menu className="mobileMenu" width="20rem">
        <ul>
          <li>
            <Link
              className="menu-item"
              activeStyle={{
                color: '#e46815'
              }}
              to="/"
            >
              Home
            </Link>
          </li>

          <li>
            <Link
              className="menu-item"
              activeStyle={{
                color: '#e46815'
              }}
              to="/artist/"
            >
              Art: <span className="thin">Artist</span>
            </Link>
          </li>

          <li>
            <Link
              className="menu-item"
              activeStyle={{
                color: '#e46815'
              }}
              to="/publicart/"
            >
              Art: <span className="thin">Public Art</span>
            </Link>
          </li>

          <li>
            <Link
              className="menu-item"
              activeStyle={{
                color: '#e46815'
              }}
              to="/teacher/"
            >
              Art: <span className="thin">Teacher</span>
            </Link>
          </li>
          <li>
            <Link
              className="menu-item"
              activeStyle={{
                color: '#e46815'
              }}
              to="/tattoos/"
            >
              Tattoos
            </Link>
          </li>
          <li>
            <Link
              className="menu-item"
              activeStyle={{
                color: '#e46815'
              }}
              to="/advertising/"
            >
              Design: <span className="thin">Advertising</span>
            </Link>
          </li>
          <li>
            <Link
              className="menu-item"
              activeStyle={{
                color: '#e46815'
              }}
              to="/graphic/"
            >
              Design: <span className="thin">Graphic Design</span>
            </Link>
          </li>
          <li>
            <Link
              className="menu-item"
              activeStyle={{
                color: '#e46815'
              }}
              to="/storyboards/"
            >
              Design: <span className="thin">Storyboards</span>
            </Link>
          </li>
          <li>
            <Link
              className="menu-item"
              activeStyle={{
                color: '#e46815'
              }}
              to="/bio/"
            >
              About Me: <span className="thin">Biography</span>
            </Link>
          </li>
          <li>
            <a
              className="menu-item"
              href={CoverPDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              About Me: <span className="thin">CV</span>
            </a>
          </li>
          <li>
            <a
              className="menu-item"
              href={ResumePDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              About Me: <span className="thin">Resume</span>
            </a>
          </li>
        </ul>
      </Menu>
    );
  }
}

export default MobileMenu;
