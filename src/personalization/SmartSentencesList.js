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
  constructor(props) {
    super(props);
  }

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

    let listItems = [];
    if (this.props.signals) {
      this.props.signals.forEach((e, i, a) => {
        if (e.sentences) {
          listItems.push(<ListItem
              leftAvatar={<Avatar icon={<SchoolIcon />} backgroundColor={blue500} />}
              rightIconButton={rightIconMenu}
              primaryText={e.name}
              secondaryText={e.sentences.professional}
              secondaryTextLines={2}
              key={e._id}
            />);
            listItems.push(<Divider inset={false} />);
        }
      });
    }

    if (this.props.insights) {
      this.props.insights.forEach((e, i, a) => {
        if (e.sentences) {
          listItems.push(<ListItem
              leftAvatar={<Avatar icon={<SchoolIcon />} backgroundColor={blue500} />}
              rightIconButton={rightIconMenu}
              primaryText={e.name}
              secondaryText={e.sentences.professional}
              secondaryTextLines={2}
              key={e._id}
            />);
          listItems.push(<Divider key={e._id+'-divider'} inset={false} />);
        }
      });
    }

    return(
      <List>
        {listItems}
      </List>
    );
  }
}

export default SmartSentencesList;
