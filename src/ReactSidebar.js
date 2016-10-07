import React, {Component} from 'react';
import Sidebar from 'react-sidebar';

import './ReactSidebar.css';

class ReactSidebar extends Component {
  constructor(props) {
    super(props);

    this.onSetSidebarOpen = this.onSetSidebarOpen.bind(this);
  }

  onSetSidebarOpen(open) {
    this.setState({sidebarOpen:open});
  }

  render() {
    let sidebarContent = <b>Sidebar content</b>;
    let sidebarProps = {
      sidebar: sidebarContent,
      open: false,
      onSetOpen: this.onSetSidebarOpen,
      docked: false,
      shadow: false,
    };

    return (
      <Sidebar {...sidebarProps}>
        <b>TEST TESTING!</b>
      </Sidebar>
    )
  }
}

export default ReactSidebar;
