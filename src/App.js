import React, { Component } from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Sidebar from 'react-sidebar';
import SidebarContentContainer from './personalization/SidebarContentContainer.js';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sidebarOpen: true
    };

    this.handleSidebarOpen = this.handleSidebarOpen.bind(this);
    this.onComposeButtonClick = this.onComposeButtonClick.bind(this);
  }

  onComposeButtonClick(e) {
    this.setState({ sidebarOpen: true});
  }

  handleSidebarOpen(open) {
    this.setState({sidebarOpen:open});
  }

  render() {
    const sidebarProps = {
      sidebar: <SidebarContentContainer handleSidebarOpen={this.handleSidebarOpen} />,
      sidebarClassName: 'custom-sidebar-class',
      pullRight: true,
      open: false,
      onSetOpen: this.handleSidebarOpen,
      docked: this.state.sidebarOpen,
      shadow: true,
    };

    const styleComposeButton = {
      position: 'fixed',
      left: '36px',
      top: '36px',
    };

    return (
      <MuiThemeProvider>
        <Sidebar {...sidebarProps}>

          <div id="appContainer" className="App">
            <main id="pageWrapper">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <RaisedButton label="Compose" style={styleComposeButton}
                  onClick={this.onComposeButtonClick} />
              </div>
            </main>
          </div>

        </Sidebar>
      </MuiThemeProvider>
    );
  }
}

export default App;
