import React from 'react';
///import PropTypes from 'prop-types';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import { Link } from 'gatsby'


class DesignDropDown extends React.Component
{
  constructor(props) {
    super(props);

    this.handleLinkClick = this.handleLinkClick.bind(this);
  }

  handleLinkClick = () =>
  {
    //console.log(this.state.name);
    this.refs.dropdown.show();
    //this.refs.dropdown.isActive();
  }
  render() 
  {
    return (
      <Dropdown ref="dropdown">
              <DropdownTrigger>
               <span className="dropdown-link" onClick={this.handleLinkClick}>design</span>
              </DropdownTrigger>

              <DropdownContent>
                <ul className="subMenu">
                    <li>
                      <Link to="/advertising" activeStyle={{
                            color: '#d4740d'
                          }}>advertising</Link>
                    </li>

                    <li>
                      <Link to="/graphic" activeStyle={{
                            color: '#d4740d'
                          }}>graphic</Link>
                    </li>

                    <li>
                      <Link to="/storyboards" activeStyle={{
                            color: '#d4740d'
                          }}>storyboards</Link>
                    </li>
                </ul>
              </DropdownContent>
            </Dropdown>
    )
  }
}

export default DesignDropDown;