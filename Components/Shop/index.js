import React, {PropTypes} from 'react';
import {
  View,Text,Dimensions,
  StyleSheet,Image
} from 'react-native';
import {Icon} from 'native-base'
import {Tabs} from './Tabs'

const widthScreen= Dimensions.get('window').width/18;
const heightScreen= Dimensions.get('window').height/26;

export default class  extends React.Component {
  static navigationOptions={
    title:'Shop',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='shop' type='Entypo' style={{color:tintColor}}/>;
    },
  }
  render() {
    return (
      <View style={{height:'100%',width:'100%',flex:1,alignItems:'center',justifyContent:'center'}}>
        <View style={{flex:4,width:'100%'}}>
          <Image style={{height:'100%',width:'100%',zIndex:-1}} source={require('../../images/adf5ab40353fdbc74fc6cd24af99fee848bfecc7.png')} />
          <View style={{height:'100%',width:'100%',backgroundColor:'black',opacity:0.6,position:'absolute',zIndex:1}}></View>
          <View style={{position:'absolute',zIndex:2,height:'100%',width:'100%',alignItems:'center',justifyContent:'center',}}>
            <Text style={{color:'white',textAlign:'center',fontWeight:'600',fontSize:22}}>Fruits & Vegetables</Text>
          </View>
        </View>
        <View style={{flex:10,width:'100%',backgroundColor:'white'}}>
          <Tabs />
        </View>
      </View>
    );
  }
}
