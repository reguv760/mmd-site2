import React from 'react';
import SocialMediaIcons from 'react-social-media-icons'

/* to output js, create variables outsid of class */
const currentDate = new Date();

const socialMediaIcons = [
  {
    url: 'http://www.linkedin.com/in/melanymezadierks',
    className: 'fab fa-linkedin',
  },
  {
    url: 'mailto:melanymd@gmail.com',
    className: 'fas fa-envelope-square',
  },
  {
    url: 'https://www.instagram.com/melanymd/',
    className: 'fab fa-instagram'
  },
  {
    url: 'https://www.facebook.com/pages/Wet-Paint/167400406610735',
    className: 'fab fa-facebook'
  }
]

const Footer = () =>
(
  <footer>
    <ul>
      <li>
        <SocialMediaIcons
          icons={socialMediaIcons}
          iconColor={'#4c4c4c'}
          classNamePrefix={''}
        />
      </li>

      <li className="year">&copy; {currentDate.getFullYear()} Melany Dierks</li>
      <li className="webdev">website by: <a href="http://reguv760.github.io/portfolio/" target="_blank" rel="noopener noreferrer">Reginald Galang</a></li> 

      <li className="footer-links">
      Built with <a href="http://gatsbyjs.org" target="_blank" rel="noopener noreferrer"> GatsbyJS</a> + <a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
    </ul>
  </footer>
)


export default Footer;
