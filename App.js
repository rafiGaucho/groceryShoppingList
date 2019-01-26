
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {createStore,applyMiddleware} from 'redux';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';
import session from './Store/reducer.js';
import Components from './Components'

const middleware = [thunk];
const store=createStore(session,applyMiddleware(...middleware))


export default class App extends Component<Props> {
  render() {
    return (
      <Provider store={store}>
        <Components />
      </Provider>
    );
  }
}
