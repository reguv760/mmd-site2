import React from 'react'
import Dropdown, {
  DropdownTrigger,
  DropdownContent,
} from 'react-simple-dropdown'
import AniLink from 'gatsby-plugin-transition-link/AniLink'

class DesignDropDown extends React.Component {

  handleLinkClick = () => {
    this.refs.dropdown.show();
  }
  
  render() {
    return (
      <Dropdown ref="dropdown">
        <DropdownTrigger onClick={this.handleLinkClick}>
          <span className="dropdown-link">
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
                  color: '#e46815',
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
                  color: '#e46815',
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
                  color: '#e46815',
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
