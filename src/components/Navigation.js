import React from 'react';
import { Link } from 'gatsby'

//dropdown components:::
import ArtistDropDown from './ArtistDropDown'
import DesignDropDown from './DesignDropDown'
import AboutDropDown from './AboutDropDown'


class Navigation extends React.Component
{

  render() 
  {
    return (
      <nav>
        <ul className="menu">

          <li>
            <Link to="/" activeStyle={{
                        color: '#d4740d'
                      }} exact>home</Link>
          </li>

          <li>
            <ArtistDropDown name="art"/>
          </li>

          <li>
            <Link to="/tattoos" activeStyle={{ color: '#d4740d' }}>tattoos</Link>
          </li>

          <li>
            <DesignDropDown name="design"/>
          </li>

          <li>
            <AboutDropDown name="about"/>
            
          </li>
        </ul>
      </nav>
    );
  }
}

export default Navigation
