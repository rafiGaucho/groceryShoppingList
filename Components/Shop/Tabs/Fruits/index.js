import React, {PropTypes} from 'react';
import {
  View,Text,Dimensions,TouchableOpacity,
  StyleSheet,ScrollView,Image
} from 'react-native';
import {Icon} from 'native-base'
import Product from '../../Product'

const widthScreen= Dimensions.get('window').width/18;
const heightScreen= Dimensions.get('window').height/26;

export default class  extends React.Component {
  data=[
    {
      productId:0,
      name:'Strawberry',
      price:'2.5',
      url:require('../../../../images/117df5097142cc56be8fd423988c2b170d7a807f.png')
    },
    {
      productId:1,
      name:'Banana',
      price:'3.5',
      url:require('../../../../images/705ee9256152a994fd24685bc2e8a9e217b76cb5.png')
    },
    {
      productId:2,
      name:'Apple',
      price:'4.5',
      url:require('../../../../images/bc11249668b1c86872561a37695c93e3e03196f3.png')
    },
    {
      productId:3,
      name:'Watermelon',
      price:'4.0',
      url:require('../../../../images/d5f411b0924009c93e98ecc325fe5b135cf2da9f.png')
    },
  ]
  render() {
    return (
      <ScrollView>
        <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'white',
          flexDirection:'row',flexWrap:'wrap'}}>
          {this.data.map((item,index)=>{
            return (
              <Product prop={item} key={index}/>
            );
          })}
        </View>
      </ScrollView>

    );
  }
}
