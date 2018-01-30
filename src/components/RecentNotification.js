import React, { Component } from 'react';
import { Panel } from 'react-bootstrap';

export default class RecentNotification extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="recent-notification">
        <Panel id="collapsible-panel-example-2" defaultExpanded>
          <Panel.Heading>
            <Panel.Title>
              Anim pariatur cliche reprehenderit, enim eiusmod high life
              accusamus terry richardson ad squid. Nihil anim keffiyeh
              helvetica, craft beer labore wes anderson cred nesciunt sapiente
              ea proident.
            </Panel.Title>
          </Panel.Heading>
          <Panel.Collapse>
            <Panel.Body>
              <span>Sample 1</span>
              <span>Sample 2</span>
              <span>Sample 3</span>
              <span>Sample 4</span>
            </Panel.Body>
          </Panel.Collapse>
        </Panel>
      </div>
    );
  }
}

