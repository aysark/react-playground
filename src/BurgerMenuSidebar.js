import React, {Component} from 'react';
import BurgerMenu from 'react-burger-menu';

import './react-burger-menu.css';

class BurgerMenuSidebar extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const Sidebar = BurgerMenu.stack;

    return (
      <Sidebar isOpen={this.props.open} right width={ 340 } noOverlay
         pageWrapId={"pageWrapper"} outerContainerId={"appContainer"}>
        <li>Personal</li>
        <li>Org</li>
      </Sidebar>
    );
  }
}

export default BurgerMenuSidebar;
