import React from 'react';
import { Link } from 'gatsby';

import Navigation from './Navigation';
import MobileMenu from './MobileMenu';
import Logo from './../images/md-logo3.png';

const Header = () => (
  <div className="header">
    <div className="mobileMenuContainer">
      <MobileMenu />
    </div>

    <div className="left">
      <Link to="/" exact="true">
        <img src={Logo} alt="Melany MD logo glyph" />
      </Link>
    </div>

    <div className="right">
      <Navigation />
    </div>
  </div>
);

export default Header;
