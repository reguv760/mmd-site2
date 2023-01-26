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
              color: '#e46815'
            }}
            exact="true"
            duration={0.6}
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
            to="/tattoos/"
            activeStyle={{ color: '#e46815' }}
            duration={0.6}
          >
            tattoos
          </AniLink>
        </li>

        {/* <li>
            <AniLink
              fade
              to="/publicart/"
              activeStyle={{ color: '#d4740d' }}
              duration={0.5}
            >
              Public Art
            </AniLink>
          </li> */}

        <li>
          <DesignDropDown name="design" />
        </li>

        <li>
          <AboutDropDown name="about" />
        </li>

        
        <li className="merch">
          <a
                href="http://Md-art-8101.myshopify.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="My Wet Paint Shopify Store"
              >
                Merch
            </a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
