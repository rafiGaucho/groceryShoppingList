import React, { Component } from 'react';
import {
  View,Text,Dimensions,TouchableOpacity,
  StyleSheet,ScrollView,Image
} from 'react-native';
import {Icon} from 'native-base'
import Dialog, { DialogTitle, DialogContent } from 'react-native-popup-dialog';
import DialogBox from './DialogBox'

import {connect} from 'react-redux'
import {addListItem} from '../../../Store/actions'

const widthScreen= Dimensions.get('window').width/18;
const heightScreen= Dimensions.get('window').height/26;

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      price:4.50,
      quantity:1,
      visible:false,
      added:false
    }
  }
  addQuantity=()=>{
    this.setState({quantity:this.state.quantity+0.5,price:this.state.price+2.25})
  }
  reduceQuantity=()=>{
    if (this.state.quantity>1) {
      this.setState({quantity:this.state.quantity-0.5,price:this.state.price-2.25})
    }
  }
  handlePopup=()=>{
    this.setState({visible:!this.state.visible})
  }
  addListItem=(data)=>{
    this.setState({added:true})
    this.props.addListItem(data,this.props.prop.productId,this.state.quantity)
    this.setState({visible:false})
  }
  render() {
    return (
      <View style={{height:heightScreen*9,width:'42%',backgroundColor:'white',justifyContent:'center',
        borderRadius:5,borderWidth:1,marginLeft:'3%',marginTop:'5%'}}>

        <Dialog visible={this.state.visible}>
          <DialogContent style={{height:heightScreen*9,width:250}}>
            <DialogBox funcClose={this.handlePopup}  addListItem={this.addListItem} added={this.state.added}/>
          </DialogContent>
        </Dialog>

        <View style={{height:heightScreen*1,flexDirection:'row',justifyContent:'space-between'}}>
          <View style={{flex:2}}></View>
          <View style={{flex:1,marginTop:'1%',marginLeft:'10%'}}>
            <TouchableOpacity onPress={this.handlePopup}>
              <View style={[{height:heightScreen,width:heightScreen,borderRadius:heightScreen*0.5,
                borderWidth:2},this.state.added?{borderColor:'red'}:{borderColor:'grey'},{alignItems:'center',justifyContent:'center'}]}>
                <Icon name='list' type='Entypo' style={[{fontSize:18},this.state.added ?{color:'red'}:{color:'grey'}]}/>
              </View>
            </TouchableOpacity>
          </View>
        </View>

        <View style={{width:'100%',height:heightScreen*4,alignItems:'center',justifyContent:'center'}}>
          <Image style={{height:'90%',width:'90%'}} resizeMode='center' source={this.props.prop.url}/>
        </View>
        <View style={{height:heightScreen*2,marginLeft:'5%'}}>
          <Text style={{fontWeight:'600',fontSize:12}}>{this.props.prop.name}</Text>
          <Text>1kg<Text style={{color:'red'}}>  ${this.props.prop.price}</Text></Text>
        </View>

        <View style={{height:heightScreen*1,flexDirection:'row',alignItems:'center',justifyContent:'center'}}>
          <View style={{height:heightScreen*1,width:'60%',flexDirection:'row',}}>

            <TouchableOpacity onPress={this.reduceQuantity} style={{flex:1,borderTopLeftRadius:heightScreen*0.6,borderBottomLeftRadius:heightScreen*0.6,
              borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
              <Text style={{fontSize:18}}>-</Text>
            </TouchableOpacity>
            <View style={{flex:2,borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
              <Text style={{}}>{this.state.quantity} kg</Text>
            </View>
            <TouchableOpacity onPress={this.addQuantity} style={{flex:1,borderTopRightRadius:heightScreen*0.4,borderBottomRightRadius:heightScreen*0.4,
              borderWidth:0.5,alignItems:'center',justifyContent:'center'}}>
              <Text>+</Text>
            </TouchableOpacity>

          </View>
          <View style={{marginLeft:'5%'}}>
            <View style={{height:heightScreen,width:heightScreen,borderRadius:heightScreen*0.5,
              backgroundColor:'red',alignItems:'center',justifyContent:'center'}}>
              <Icon name='shopping-cart' type='FontAwesome' style={{color:'white',fontSize:18}} />
            </View>
          </View>
        </View>

      </View>
    );
  }
}

mapDispatchToProps={
  addListItem:addListItem
}
export default connect(null,mapDispatchToProps)(Product)
