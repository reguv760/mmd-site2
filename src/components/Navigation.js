import React from 'react';
// import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink';

// dropdown components:::
import ArtistDropDown from './ArtistDropDown';
import DesignDropDown from './DesignDropDown';
import AboutDropDown from './AboutDropDown';

const Navigation = () => {
  return (
    <nav>
      <ul className="menu">
        <li>
          <AniLink
            fade
            to="/"
            activeStyle={{
              color: '#d4740d'
            }}
            exact="true"
            duration={0.5}
          >
            home
          </AniLink>
        </li>

        <li>
          <ArtistDropDown name="art" />
        </li>
        
        <li>
            <AniLink
              fade
              to="/publicart/"
              activeStyle={{ color: '#d4740d' }}
              duration={0.5}
            >
              Murals
            </AniLink>
        </li>

        <li>
          <AniLink
            fade
            to="/tattoos/"
            activeStyle={{ color: '#d4740d' }}
            duration={0.5}
          >
            tattoos
          </AniLink>
        </li>


        <li>
          <DesignDropDown name="design" />
        </li>

        <li>
          <AboutDropDown name="about" />
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
