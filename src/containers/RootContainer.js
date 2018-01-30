import React, { Component } from 'react';
import Header from '../components/Header';
import Menus from '../components/Menus';
import RecentNotification from '../components/RecentNotification';
import MainContainer from './MainContainer';
import { Grid, Row, Col } from 'react-bootstrap';

export default class RootContainer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="justlearn">
        <Header />
        <Menus />
        <Grid className="justlearn-container">
          <Row className="show-grid">
            <Col xs={12} md={8}>
              <MainContainer />
            </Col>
            <Col xs={6} md={4}>
              <RecentNotification />
            </Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

