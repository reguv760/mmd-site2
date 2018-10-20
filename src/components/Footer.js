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
      <li><a href="http://www.linkedin.com/in/melanymezadierks" rel="noopener"><img src={LinkedInIcon} alt="LinkedIn Icon"/></a></li>
      <li><a href="mailto:melanymd@gmail.com"><img src={EmailIcon} alt="email"/></a></li>
      <li><a href="http://www.melanymd-artlessons.blogspot.com/" rel="noopener"><img src={BloggerIcon} alt="Blogger Icon"/></a></li>
      <li><a href="https://www.facebook.com/pages/Wet-Paint/167400406610735" rel="noopener"><img src={FbIcon} alt="Facebook Icon"/></a></li>

      <li className="year">&copy; {currentDate.getFullYear()} Melany Dierks</li>
      <li className="webdev">website by: <a href="http://tessellationdesign.com" rel="noopener">Reginald Galang</a></li>

      <li className="footer-links">
      Built with <a href="http://gatsbyjs.org" rel="noopener"> GatsbyJS</a> + <a href="http://reactjs.org" rel="noopener">ReactJS</a></li>
    </ul>
  </footer>
)


export default Footer;
