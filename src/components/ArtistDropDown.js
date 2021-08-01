import React from 'react'
///import PropTypes from 'prop-types';
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

class ArtistDropDown extends React.Component {
  constructor(props) {
    super(props)

    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick = () => {
    //console.log(this.state.name);
    this.refs.dropdown.show()
    //this.refs.dropdown.isActive();
  }
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
                duration={0.5}
              >
                artist
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
              <AniLink
                fade
                to="/teacher/"
                activeStyle={{
                  color: '#d4740d',
                }}
                duration={0.5}
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
