import React, { Component } from 'react';
import {
  View,Text,Dimensions,TouchableOpacity,
  StyleSheet,ScrollView,Image
} from 'react-native';
import CheckBox from 'react-native-check-box'


export  const ItemList=({func,isChecked,text,id})=>{
  return (
    <View style={{justifyContent:'center',marginVertical:'3%'}}>
      <CheckBox
        checkedCheckBoxColor='red'
        uncheckedCheckBoxColor='grey'
        style={{flex: 1, padding: 10}}
        onClick={()=>func(id)}
        isChecked={isChecked}
        rightText={text}
      />
    </View>
  );
}
