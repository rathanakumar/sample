import React, { Component } from 'react';
import Pagination from 'react-js-pagination';
import { PageHeader, Panel, Grid, Row, Col } from 'react-bootstrap';

export default class MainContainer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="container main-container">
        <PageHeader className="page-heading">
          <small>Subtext for header</small>
        </PageHeader>
        <div>
          <Grid>
            <Row className="show-grid">
              <Col xs={12} md={8}>
                <Panel id="collapsible-panel-example-2" defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle>
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
                    <Panel.Footer>
                      <span>Sample 1</span>
                      <span>Sample 2</span>
                    </Panel.Footer>
                  </Panel.Collapse>
                </Panel>
                <div className="sample-pagination">
                  <Pagination
                    activePage={1}
                    itemsCountPerPage={10}
                    onChange={this.handlePageChange}
                    pageRangeDisplayed={5}
                    totalItemsCount={450}
                  />
                </div>
              </Col>
              <Col xs={6} md={4}>
                <Panel id="collapsible-panel-example-2" defaultExpanded>
                  <Panel.Heading>
                    <Panel.Title toggle>
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
                    <Panel.Footer>
                      <span>Sample 1</span>
                      <span>Sample 2</span>
                    </Panel.Footer>
                  </Panel.Collapse>
                </Panel>
              </Col>
            </Row>
          </Grid>
        </div>
      </div>
    );
  }
}
