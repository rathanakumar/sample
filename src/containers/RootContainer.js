import React, { Component } from 'react';
import Header from '../components/Header';
import Menus from '../components/Menus';
import MainContainer from './MainContainer';

export default class TakeTourContainer extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <div className="sample">
        <Header />
        <Menus />
        <MainContainer />
      </div>
    );
  }
}

