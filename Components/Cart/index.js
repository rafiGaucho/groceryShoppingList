import React, {PropTypes} from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base'

export default class  extends React.Component {
  static navigationOptions={
    title:'Cart',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='shopping-cart' type='Entypo' style={{color:tintColor}}/>;
    },
  }
  render() {
    return (
      <View style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <Text>Cart screen</Text>
      </View>
    );
  }
}
