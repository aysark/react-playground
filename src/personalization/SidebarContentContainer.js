import React, {Component} from 'react';
import './SidebarContentContainer.css'

import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import NavigationClose from 'material-ui/svg-icons/navigation/close';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';
import {white} from 'material-ui/styles/colors';

import PersonContainer from './PersonContainer.js';

class SidebarContentContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const AdditionalOptions = (props) => (
      <IconMenu iconButtonElement={<IconButton><MoreVertIcon color={white} /></IconButton>}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem primaryText="Set Contact Details" />
        <MenuItem primaryText="Refresh" disabled={true}  />
      </IconMenu>
    );

    const AppBarExampleIcon = () => (
      <AppBar
        iconElementLeft={<IconButton><NavigationClose /></IconButton>}
        onLeftIconButtonTouchTap={() => {this.props.handleSidebarOpen(false)}}
        iconElementRight={<AdditionalOptions />}
      />
    );

    return (
      <div>
        {AppBarExampleIcon()}
        <PersonContainer />
      </div>
    );
  }
}

export default SidebarContentContainer;
