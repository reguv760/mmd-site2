import React from 'react'
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

class DesignDropDown extends React.Component {

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
