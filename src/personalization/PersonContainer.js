import React, {Component} from 'react';
import './PersonContainer.css'
import {Card, CardHeader, CardText} from 'material-ui/Card';

import Avatar from 'material-ui/Avatar';
import AccountCircle from 'material-ui/svg-icons/action/account-circle.js';

import {Tabs, Tab} from 'material-ui/Tabs';
import LightbulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';

import SmartSentencesList from './SmartSentencesList.js'
import PersonDetails from './PersonDetails.js'

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
    const AccountCircleAvatar = () => (
      <Avatar icon={<AccountCircle />} size={40} className='accountCircleAvatar' />
    );

    const TabsContainer = () => (
      <Tabs value={this.state.activeTab} onChange={this.handleTabChange}>
        <Tab icon={<LightbulbIcon />} value="a">
            <SmartSentencesList />
        </Tab>
        <Tab icon={<MapsPersonPin />} value="b">
            <PersonDetails />
        </Tab>
      </Tabs>
    );

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader title={this.props.recipient.name} subtitle={this.props.recipient.currentPosition}
          avatar={<AccountCircleAvatar />} actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true} className='cardText'>
          {<TabsContainer />}
        </CardText>
      </Card>
    );
  }
}

export default PersonContainer;
