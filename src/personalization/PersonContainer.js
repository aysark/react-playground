import React, {Component} from 'react';
import './PersonContainer.css';

import {Card, CardHeader, CardText} from 'material-ui/Card';
import {Tabs, Tab} from 'material-ui/Tabs';
import Avatar from 'material-ui/Avatar';
import Slider from 'material-ui/Slider';

import AccountCircle from 'material-ui/svg-icons/action/account-circle.js';
import LightbulbIcon from 'material-ui/svg-icons/action/lightbulb-outline';
import MapsPersonPin from 'material-ui/svg-icons/maps/person-pin';
import CircularProgress from 'material-ui/CircularProgress';

import SmartSentencesList from './SmartSentencesList.js';
import PersonDetails from './PersonDetails.js';
import PersonClient from '../PersonClient.js';

class PersonContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: "a",
      expanded: true,
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
    let loading = !Boolean(this.props.insights || this.props.signals);
    const AccountCircleAvatar = () => (
      <Avatar src={this.props.recipient.avatarUrl} size={40} className='accountCircleAvatar' />
    );

    const TabsContainer = () => (
      <Tabs value={this.state.activeTab} onChange={this.handleTabChange}>
        <Tab icon={<LightbulbIcon />} value="a">
          { loading ?
            <CircularProgress size={80} thickness={5} />
            : <SmartSentencesList insights={this.props.insights} signals={this.props.signals} />
          }
        </Tab>
        <Tab icon={<MapsPersonPin />} value="b">
            <PersonDetails />
        </Tab>
      </Tabs>
    );

    return (
      <Card expanded={this.state.expanded} onExpandChange={this.handleExpandChange}>
        <CardHeader title={this.props.recipient.firstName + " " + this.props.recipient.lastName}
          subtitle={this.props.recipient.currentTitle}
          avatar={<AccountCircleAvatar />} actAsExpander={true} showExpandableButton={true} />
        <CardText expandable={true} className='cardText'>
          {<TabsContainer />}
        </CardText>
      </Card>
    );
  }
}

export default PersonContainer;
