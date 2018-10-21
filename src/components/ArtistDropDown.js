import React from 'react';
///import PropTypes from 'prop-types';
import Dropdown, { DropdownTrigger, DropdownContent } from 'react-simple-dropdown';
import { Link } from 'gatsby'


class ArtistDropDown extends React.Component
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
          <span className="dropdown-link" onClick={this.handleLinkClick}>{this.props.name}</span>
        </DropdownTrigger>
        <DropdownContent>
          <ul className="subMenu">
            <li><Link to="/artist"
                  activeStyle={{
                    color: '#d4740d'
                  }}>artist</Link>
            </li>

            <li><Link to="/teacher" activeStyle={{
                    color: '#d4740d'
                  }}>teacher</Link>
            </li>
          </ul>
        </DropdownContent>
      </Dropdown>
    )
  }
}

export default ArtistDropDown;