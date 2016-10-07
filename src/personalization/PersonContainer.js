import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import Avatar from 'material-ui/Avatar';
import AccountCircle from 'material-ui/svg-icons/action/account-circle.js';

import {Tabs, Tab} from 'material-ui/Tabs';
import Favorite from 'material-ui/svg-icons/action/favorite';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

class PersonContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "a",
      expanded:true
    };

    this.handleTabChange = this.handleTabChange.bind(this);
    this.handleExpandChange = this.handleExpandChange.bind(this);
  }

  handleTabChange(value) {
    this.setState({
      activeTab: value
    });
  }

  handleExpandChange(expanded) {
    this.setState({
      expanded:expanded
    });
  }


  render() {
    const styleAccountCircleAvatar = {'marginRight': 10};
    const AccountCircleAvatar = () => (
      <Avatar icon={<AccountCircle />} size={40} style={styleAccountCircleAvatar} />
    );

    const styleTabsContainer = {'padding': '10px'};
    const TabsContainer = () => (
      <Tabs value={this.state.activeTab} onChange={this.handleTabChange}>
        <Tab icon={<Favorite />} value="a">
          <div style={styleTabsContainer}>
            <h2>SS Coolio</h2>
            <p>
              Lorem ipsum.
            </p>
          </div>
        </Tab>
        <Tab icon={<MapsPersonPin />} value="b">
        </Tab>
      </Tabs>
    );

    const styleCardText = {'padding': '0 0 10px 0'};
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader title="Justin Mayle" subtitle="Marketing Manager"
          avatar={<AccountCircleAvatar />} actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true} style={styleCardText}>
          {<TabsContainer />}
        </CardText>
      </Card>
    );
  }
}

export default PersonContainer;
