import React, {Component} from 'react';
import {Card, CardHeader, CardText} from 'material-ui/Card';

import Avatar from 'material-ui/Avatar';
import DomainIcon from 'material-ui/svg-icons/social/domain.js';

import {Tabs, Tab} from 'material-ui/Tabs';
import LightbulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

import SmartSentencesList from './SmartSentencesList.js'
import PersonDetails from './PersonDetails.js'

class IndustryContainer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      activeTab: "a",
      expanded:false
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
      <Avatar icon={<DomainIcon />} size={20} style={styleAccountCircleAvatar} />
    );

    const styleTabsContainer = {'padding': '0 10px 0 10px'};
    const TabsContainer = () => (
      <Tabs value={this.state.activeTab} onChange={this.handleTabChange}>
        <Tab icon={<LightbulbIcon />} value="a">
          <div style={styleTabsContainer}>
            <SmartSentencesList />
          </div>
        </Tab>
        <Tab icon={<MapsPersonPin />} value="b">
          <div style={styleTabsContainer}>
            <PersonDetails />
          </div>
        </Tab>
      </Tabs>
    );

    const styleCardText = {padding: 0};
    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader title="eCommerce"
          avatar={<AccountCircleAvatar />} actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true} style={styleCardText}>
          {<TabsContainer />}
        </CardText>
      </Card>
    );
  }
}

export default IndustryContainer;
