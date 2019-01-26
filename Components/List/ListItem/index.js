
import React, {PropTypes} from 'react';
import {
  View,Text,Dimensions,
  StyleSheet,ScrollView,TouchableOpacity
} from 'react-native';
import {Icon} from 'native-base'
const heightScreen= Dimensions.get('window').height/26;


export const ListItem=(props)=>{
  return (
    <TouchableOpacity onPress={()=>props.func(props.prop.listId)} style={{flexDirection:'row',marginTop:'3%'}}>
        <View style={{width:heightScreen*2,alignItems:'center',justifyContent:'center'}}>
          <Text style={{fontWeight:'600',fontSize:22}}>{props.prop.day}</Text>
          <Text style={{fontSize:16}}>Dec</Text>
        </View>
        <View style={{height:heightScreen*6,width:heightScreen*10,backgroundColor:props.prop.color,borderRadius:10}}>
          <View style={{flex:1,justifyContent:'center',marginLeft:'5%'}}>
            <Text style={{color:'white',fontSize:16,fontWeight:'600'}}>{props.prop.noOfItems} Items</Text>
          </View>
          <View style={{flex:2,marginLeft:'5%',justifyContent:'center',}}>
            <Text style={{color:'white',fontSize:28,fontWeight:'600'}}>{props.prop.title}</Text>
          </View>
          <View style={{flex:1,marginLeft:'5%',flexDirection:'row',alignItems:'center'}}>
            <Icon name='users' type='Entypo' style={{color:'white',fontSize:18}}/>
            <View style={{flexDirection:'row'}}>
              {props.prop.names.map((item,index)=>{
                return   <Text style={{color:'white',marginLeft:'5%'}}>{item}  </Text>
              })}
            </View>
          </View>
        </View>
    </TouchableOpacity>
  );
}
