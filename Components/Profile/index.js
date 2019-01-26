import React, {PropTypes} from 'react';
import {
  View,Text,
  StyleSheet,
} from 'react-native';
import {Icon} from 'native-base'

export default class  extends React.Component {
  static navigationOptions={
    title:'Profile',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='user' type='Feather' style={{color:tintColor}}/>;
    },
  }
  render() {
    return (
      <View style={{height:'100%',width:'100%',alignItems:'center',justifyContent:'center'}}>
        <Text>Profile screen</Text>
      </View>
    );
  }
}
