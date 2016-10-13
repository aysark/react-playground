import React, {Component} from 'react';
import {List, ListItem} from 'material-ui/List';
import Divider from 'material-ui/Divider';

import Avatar from 'material-ui/Avatar';
import {blue500, grey400, purpleA200} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import ArrowDropRight from 'material-ui/svg-icons/navigation-arrow-drop-right';
import SchoolIcon from 'material-ui/svg-icons/social/school';
import CakeIcon from 'material-ui/svg-icons/social/cake';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';

class SmartSentencesList extends Component {
  render() {
    const iconButtonElement = (
      <IconButton touch={true}>
        <MoreVertIcon color={grey400} />
      </IconButton>
    );

    const rightIconMenu = (
      <IconMenu iconButtonElement={iconButtonElement}
        targetOrigin={{horizontal: 'right', vertical: 'top'}}
        anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
        <MenuItem
          primaryText="Tone"
          rightIcon={<ArrowDropRight />}
          menuItems={[
            <MenuItem primaryText="Casual" />,
            <MenuItem primaryText="Funny" />,
            <MenuItem primaryText="Professional" />,
          ]}
        />
        <Divider />
        <MenuItem value="Del" primaryText="Remove" />
      </IconMenu>
    );

    return(
      <List>
        <ListItem
          leftAvatar={<Avatar icon={<SchoolIcon />} backgroundColor={blue500} />}
          rightIconButton={rightIconMenu}
          primaryText="Education Similarity"
          secondaryText={
            <p>I saw that we both went to York University! Thats awesome, how did you like it?</p>
          }
          secondaryTextLines={1}
        />
        <Divider inset={false} />
        <ListItem
          leftAvatar={<Avatar icon={<CakeIcon />} backgroundColor={purpleA200} />}
          rightIconButton={rightIconMenu}
          primaryText="Special Day"
          secondaryText={
            <p>Happy birthday Justin!</p>
          }
          secondaryTextLines={1}
        />
      </List>
    );
  }
}

export default SmartSentencesList;
