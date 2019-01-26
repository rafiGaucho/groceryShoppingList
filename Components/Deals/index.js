import React, {PropTypes} from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base'

export default class  extends React.Component {
  static navigationOptions={
    title:'Deals',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='gift' type='Feather' style={{color:tintColor}}/>;
    },
  }
  render() {
    return (
      <View style={{alignItems:'center',justifyContent:'center'}}>
        <Text>Deals screen</Text>
      </View>
    );
  }
}
