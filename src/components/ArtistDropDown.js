import React from 'react'
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

class ArtistDropDown extends React.Component {

  handleLinkClick = () => {    
    this.refs.dropdown.show();
  }
  
  render() {
    return (
      <Dropdown ref="dropdown">
        <DropdownTrigger onClick={this.handleLinkClick}>
          <span className="dropdown-link" >
            art
          </span>
        </DropdownTrigger>
        <DropdownContent>
          <ul className="subMenu">
            <li>
              <AniLink
                fade
                to="/artist/"
                activeStyle={{
                  color: '#851c7f',
                }}
                duration={0.6}
              >
                artist
              </AniLink>
            </li>

            <li>
              <AniLink
                fade
                to="/publicart/"
                activeStyle={{ color: '#851c7f' }}
                duration={0.6}
              >
                Public Art
              </AniLink>
            </li>

            <li>
              <AniLink
                fade
                to="/teacher/"
                activeStyle={{
                  color: '#851c7f',
                }}
                duration={0.6}
              >
                teacher
              </AniLink>
            </li>
          </ul>
        </DropdownContent>
      </Dropdown>
    )
  }
}

export default ArtistDropDown
