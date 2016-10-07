import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
import BurgerMenuSidebar from './BurgerMenuSidebar.js';
import ReactSidebar from './ReactSidebar.js'

import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      sidebarOpen: false,
    }

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    debugger;
    this.setState({sidebarOpen:open});
  }

  render() {
    return (
      <div id="appContainer" className="App">
        <main id="pageWrapper">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <Button bsStyle="primary"
              onClick={() => { this.setState({ sidebarOpen: true})}}>Compose</Button>
            // className="bm-burger-button"
          </div>
        </main>

        // <BurgerMenuSidebar open={this.state.sidebarOpen} />
        <ReactSidebar open={this.state.sidebarOpen} />
      </div>
    );
  }
}

export default App;
