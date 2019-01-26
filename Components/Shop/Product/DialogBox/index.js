import React, { Component } from 'react';
import {
  View,Text,Dimensions,TouchableOpacity,
  StyleSheet,ScrollView,Image
} from 'react-native';
import {Icon} from 'native-base'
import {ItemList} from './ItemList'

const heightScreen= Dimensions.get('window').height/26;

export default class DialogBox extends React.Component{
  constructor(props) {
    super(props);
    this.state={
      isChecked:[true,false]
    }
  }
  handleCheck=(id)=>{
    data=this.state.isChecked
    data[id]=!data[id]
    this.setState({
      isChecked:data
    })
  }
  render() {
    return (
      <View style={{height:'100%',width:'100%'}}>
        <View style={{marginTop:'3%',flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{color:'red',fontSize:18,fontWeight:'600',marginLeft:0}}>Add To List</Text>
          <TouchableOpacity onPress={this.props.funcClose}><Text style={{fontSize:16,marginRight:0,fontWeight:'600'}}>X</Text></TouchableOpacity>
        </View>
        <View style={{flex:4}}>
            <ItemList text='Weekend List' isChecked={this.state.isChecked[0]} func={this.handleCheck} id='0'/>
            <ItemList text='Monthly List' isChecked={this.state.isChecked[1]} func={this.handleCheck} id='1'/>
        </View>
        <View style={{flex:1,flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
          <TouchableOpacity onPress={()=>this.props.addListItem(this.state.isChecked)} style={{height:heightScreen*1.2,width:100,borderRadius:heightScreen*0.6,backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'white',fontWeight:'600',fontSize:16}}>Add</Text>
          </TouchableOpacity>
          <TouchableOpacity  onPress={this.props.funcClose} style={{height:heightScreen*1.2,width:100,borderRadius:heightScreen*0.6,backgroundColor:'white',alignItems:'center',justifyContent:'center'}}>
            <Text style={{color:'grey',fontWeight:'600',fontSize:16}}>Cancel</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
