import React, {Component} from 'react';

import ActionHome from 'material-ui/svg-icons/action/home';

class PersonDetails extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <ul>
          <li>Cambridge, MA, USA</li>
          <li>LinkedIn</li>
          <li>Twitter</li>
          <li>Facebook</li>
        </ul>
        <h3>In the News</h3>
        <h3>Latest Updates</h3>
      </div>
    );
  }
}

export default PersonDetails;
