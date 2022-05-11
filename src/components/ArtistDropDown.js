import React from 'react'
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

class ArtistDropDown extends React.Component {
  
  render() {
    return (
      <Dropdown ref="dropdown">
        <DropdownTrigger>
          <span className="dropdown-link" onClick={this.handleLinkClick}>
            {this.props.name}
          </span>
        </DropdownTrigger>
        <DropdownContent>
          <ul className="subMenu">
            <li>
              <AniLink
                fade
                to="/artist/"
                activeStyle={{
                  color: '#d4740d',
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
                activeStyle={{ color: '#d4740d' }}
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
                  color: '#d4740d',
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
