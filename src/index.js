import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import RootContainer from './containers/RootContainer';
import configureStore from './store';
import '../assets/css/style.scss';


const store = configureStore(); // store that holds the complete state of app.

/*
* It renders a React element into a root DOM node
*/
ReactDOM.render(
  <Provider store={store}>
    <RootContainer />
  </Provider>,
  document.getElementById('root'));
