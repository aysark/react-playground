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
    debugger;
    const sidebarContent = <b>Sidebar content</b>;
    const sidebarProps = {
      sidebar: sidebarContent,
      sidebarClassName: 'custom-sidebar-class',
      open: this.props.open,
      onSetOpen: this.onSetSidebarOpen,
    };

    return (
      <Sidebar {...sidebarProps}>
        <b>Main Content</b>
      </Sidebar>
    )
  }
}

export default ReactSidebar;
