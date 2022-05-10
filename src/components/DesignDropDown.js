import React from 'react'
///import PropTypes from 'prop-types';
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown'
import { Link } from 'gatsby'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

class DesignDropDown extends React.Component {
  constructor(props) {
    super(props)

    this.handleLinkClick = this.handleLinkClick.bind(this)
  }

  handleLinkClick = () => {
    this.refs.dropdown.show()
  }
  render() {
    return (
      <Dropdown ref="dropdown">
        <DropdownTrigger>
          <span className="dropdown-link" onClick={this.handleLinkClick}>
            design
          </span>
        </DropdownTrigger>

        <DropdownContent>
          <ul className="subMenu">
            <li>
              <AniLink
                fade
                to="/advertising/"
                activeStyle={{
                  color: '#d4740d',
                }}
                duration={0.6}
              >
                advertising
              </AniLink>
            </li>

            <li>
              <AniLink
                fade
                to="/graphic/"
                activeStyle={{
                  color: '#d4740d',
                }}
                duration={0.6}
              >
                graphic
              </AniLink>
            </li>

            <li>
              <AniLink
                fade
                to="/storyboards/"
                activeStyle={{
                  color: '#d4740d',
                }}
                duration={0.6}
              >
                storyboards
              </AniLink>
            </li>
          </ul>
        </DropdownContent>
      </Dropdown>
    )
  }
}

export default DesignDropDown
