
import React, {PropTypes} from 'react';
import {
  View,Text,Image,ScrollView,
  StyleSheet,Dimensions,TouchableOpacity
} from 'react-native';

const heightScreen= Dimensions.get('window').height/26;

export const User=({name})=>{
  return (
    <View style={{margin:5,height:heightScreen,width:heightScreen*5,borderRadius:heightScreen,borderWidth:1,borderColor:'grey',
      alignItems:'center',justifyContent:'center',marginLeft:'3%',flexDirection:'row',justifyContent:'space-evenly'}}>
      <Text>{name}</Text>
      <TouchableOpacity>
        <Text>X</Text>
      </TouchableOpacity>
    </View>
  );
}
