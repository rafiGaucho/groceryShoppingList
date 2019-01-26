import React, { Component } from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';
import {createMaterialBottomTabNavigator} from 'react-navigation-material-bottom-tabs'
import {createAppContainer} from 'react-navigation'
import {connect} from 'react-redux'

import ListDetail from './List/ListDetail'
import Shop from './Shop'
import Cart from './Cart'
import Deals from './Deals'
import List from './List'
import Profile from './Profile'

class Components extends React.Component {
  render() {
      return (<Navigator />)
  }
}

const BottomNavigator = createMaterialBottomTabNavigator({
  Shop: {screen: Shop },
  Cart: {screen:Cart},
  Deals: {screen:Deals},
  List: {screen: List },
  Profile:{screen:Profile}

}, {
  initialRouteName: 'Shop',
  shifting:false,
  activeColor: 'red',
  inactiveColor: 'grey',
  barStyle: { backgroundColor: 'white' },
});

const Navigator=createAppContainer(BottomNavigator)

mapStateToProps=(state)=>({
ListEnable:state.ListEnable,listId:state.listId
})
export default connect(mapStateToProps)(Components)
