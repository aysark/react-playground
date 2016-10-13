import React, { Component } from 'react';
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton'; // TODO: remove
import Snackbar from 'material-ui/Snackbar';
import Sidebar from 'react-sidebar';
import SidebarContentContainer from './personalization/SidebarContentContainer.js';

import logo from './logo.svg'; // TODO: remove
import './App.css';

import Client from './Client';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      cancelSession: false,
      sidebarOpen: false,
      snackbarOpen: false,
      snackbarMessage: 0,
      recipient: {},
    };

    this.recipientEmailTimer = undefined;  // TODO remove

    this.handleComposeButtonClick = this.handleComposeButtonClick.bind(this);
    this.handleCancelSession = this.handleCancelSession.bind(this);

    this.handleSnackbarActionTouchTap = this.handleSnackbarActionTouchTap.bind(this);
    this.handleSnackbarRequestClose = this.handleSnackbarRequestClose.bind(this);
    this.getSnackbarMessage = this.getSnackbarMessage.bind(this);
    this.handleSidebarOpenChange = this.handleSidebarOpenChange.bind(this);

    this.getPerson = this.getPerson.bind(this);
  }

  componentWillUnMount() {
    clearTimeout(this.recipientEmailTimer);
  }

  getPerson() {
    Client.getPerson(this.state.recipient.email, (profile) => {
      if (profile === -1) {
        this.handleCancelSession(2);
        this.setState({
          snackbarOpen:true,
        });
        return;
      }

      this.setState({
        sidebarOpen: true,
        recipient: profile,
      });
    });
  }

  handleComposeButtonClick(e) {
    this.setState({
      cancelSession: false,
      sidebarOpen: false,
      snackbarOpen: true,
      snackbarMessage: 0,
      recipient: {},
    });

    // we need to keep checking for once user has entered a recipient email
    // for now we just use a timeout to demo
    this.recipientEmailTimer = setTimeout(() => {
      // once we get a recipient email, we update state and message that we
      // are going to start fetching recipient profile and smart sentences
      if (!this.state.cancelSession) {
        this.setState({
          recipient: {email:"ak@akpro.net"},
          // TODO enable in prod and update autiHideDuration times
          // snackbarMessage: 1,
        });

        this.getPerson();
      }
    }, 1500);
  }

  handleSnackbarActionTouchTap() {
    this.handleCancelSession();
  }

  handleSnackbarRequestClose() {
    this.setState({
      snackbarOpen: false,
    });
  }

  handleSidebarOpenChange(state) {
    if (state && !this.state.cancelSession) {
      this.getPerson();
    } else if (!state) {
      this.handleCancelSession();
      this.setState({sidebarOpen:state});
    }
  }

  render() {
    const snackbarProps = {
      open: this.state.snackbarOpen,
      message: this.getSnackbarMessage(this.state.snackbarMessage),
      action: "Not Now",
      onActionTouchTap: this.handleSnackbarActionTouchTap,
      autoHideDuration: 1000,
      onRequestClose: this.handleSnackbarRequestClose,
    }

    const sidebarContentContainerProps = {
      handleSidebarOpenChange: this.handleSidebarOpenChange,
      recipient: this.state.recipient,
      sender: this.props.sender,
    };

    const sidebarProps = {
      sidebar: <SidebarContentContainer {...sidebarContentContainerProps} />,
      sidebarClassName: 'custom-sidebar-class',
      pullRight: true,
      open: false,
      onSetOpen: this.handleSidebarOpenChange,
      docked: this.state.sidebarOpen,
      shadow: true,
    };

    return (
      <MuiThemeProvider>
        <Sidebar {...sidebarProps}>

          <div id="appContainer" className="App">
            <main id="pageWrapper">
              <div className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                <RaisedButton label="Compose" className='Compose-button'
                  onClick={this.handleComposeButtonClick} />
              </div>
            </main>
          </div>

          <Snackbar {...snackbarProps} />
        </Sidebar>
      </MuiThemeProvider>
    );
  }

  handleCancelSession(messageCode=this.state.messageCode) {
    this.setState({
      cancelSession:true,
      sidebarOpen:false,
      snackbarOpen: false,
      snackbarMessage: messageCode,
      recipient: {},
    });
  }

  getSnackbarMessage(code) {
    switch (code) {
      case 2:
        return 'EFX -  Could not fetch recipient profile';
      case 1:
        return 'EFX -  Loading';
      case 0:
      default:
        return 'EFX - Enter a recipient email to get started';
    }
  }
}

App.defaultProps = {
  sender: {
    name: 'Aysar K',
    currentPosition: 'Software Engineer',
    email: 'ak@akpro.net',
  }
}

export default App;
