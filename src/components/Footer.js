import React from 'react';

/* icons */
import BloggerIcon from './../images/icons/blogger.png';
import EmailIcon from './../images/icons/email.png';
import FbIcon from './../images/icons/fb.png';
import LinkedInIcon from './../images/icons/linkedIn.png';

/* to output js, create variables outsid of class */
const currentDate = new Date();

const Footer = () =>
(
  <footer>
    <ul>
      <li><a href="http://www.linkedin.com/in/melanymezadierks" target="_blank" rel="noopener noreferrer"><img src={LinkedInIcon} alt="LinkedIn Icon"/></a></li>
      <li><a href="mailto:melanymd@gmail.com"><img src={EmailIcon} alt="email"/></a></li>
      <li><a href="http://www.melanymd-artlessons.blogspot.com/" target="_blank" rel="noopener noreferrer"><img src={BloggerIcon} alt="Blogger Icon"/></a></li>
      <li><a href="https://www.facebook.com/pages/Wet-Paint/167400406610735" target="_blank" rel="noopener noreferrer"><img src={FbIcon} alt="Facebook Icon"/></a></li>

      <li className="year">&copy; {currentDate.getFullYear()} Melany Dierks</li>
      <li className="webdev">website by: <a href="http://reguv760.github.io/portfolio18/" target="_blank" rel="noopener noreferrer">Reginald Galang</a></li>

      <li className="footer-links">
      Built with <a href="http://gatsbyjs.org" target="_blank" rel="noopener noreferrer"> GatsbyJS</a> + <a href="http://reactjs.org" target="_blank" rel="noopener noreferrer">ReactJS</a></li>
    </ul>
  </footer>
)


export default Footer;
