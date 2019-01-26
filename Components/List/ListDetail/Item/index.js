import React, {PropTypes} from 'react';
import {
  View,Text,Image,ScrollView,
  StyleSheet,Dimensions,TouchableOpacity
} from 'react-native';
import { SwipeRow, Icon, Button } from 'native-base';

const heightScreen= Dimensions.get('window').height/26;

export default class  extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      totalQuantity:1,
      totalPrice:parseFloat(this.props.prop.price),
      additionalPrice:parseFloat(this.props.prop.price)*0.5
    }
  }
  componentDidMount(){
    this.props.priceTracker(this.state.totalPrice,this.props.keyId)
  }
  addQuantity=(price)=>{

    this.setState({totalQuantity:this.state.totalQuantity+0.5})
    this.setState({totalPrice:this.state.totalPrice+this.state.additionalPrice})
    this.props.priceTracker(this.state.totalPrice+this.state.additionalPrice,this.props.keyId)
  }
  reduceQuantity=(price)=>{
    if (this.state.totalQuantity>1) {
      this.setState({totalQuantity:this.state.totalQuantity-0.5})
      this.setState({totalPrice:this.state.totalPrice-this.state.additionalPrice})
      this.props.priceTracker(this.state.totalPrice-this.state.additionalPrice,this.props.keyId)
    }
  }

  render() {
    return (
      <View style={{height:heightScreen*4.6}}>
      <SwipeRow
              rightOpenValue={-50}
              disableRightSwipe={true}
              body={
                <View style={{height:heightScreen*4,width:'100%',flexDirection:'row',borderRadius:5,borderWidth:1,borderColor:'silver',
                 backgroundColor:'white',alignItems:'center',justifyContent:'center',marginLeft:'1%'}}>
                 <View style={{marginLeft:'3%',backgroundColor:'#bdbdbd',height:'90%',flex:1,borderRadius:5}}>
                   <Image style={{height:'100%',width:'100%'}} resizeMode='center' source={this.props.prop.url}/>
                 </View>
                 <View style={{flex:2.5,flexDirection:'row',justifyContent:'space-between'}}>
                   <View style={{marginLeft:'5%',alignItems:'center',justifyContent:'space-evenly'}}>
                     <Text style={{fontSize:14,fontWeight:'600',color:'black'}}>{this.props.prop.name}</Text>
                     <Text style={{}}>${this.props.prop.price}/kg</Text>
                     <Text style={{color:'red',fontWeight:'600'}}>${this.state.totalPrice}</Text>
                   </View>
                   <View style={{flexDirection:'row',alignItems:'center',marginRight:'3%'}}>
                     <Text style={{fontSize:12,fontWeight:'600',color:'black',marginRight:'10%'}}>{this.state.totalQuantity}kg</Text>
                     <View>
                       <TouchableOpacity onPress={()=>this.reduceQuantity(this.props.prop.price)} style={{height:heightScreen*1.5,width:heightScreen*1,borderTopLeftRadius:heightScreen,
                         borderTopRightRadius:heightScreen,alignItems:'center',justifyContent:'center',
                         borderWidth:1}}>
                         <Text style={{fontSize:30}}>-</Text>
                       </TouchableOpacity>
                       <TouchableOpacity onPress={()=>this.addQuantity(this.props.prop.price)} style={{height:heightScreen*1.5,width:heightScreen*1,borderBottomRightRadius:heightScreen,
                         borderBottomLeftRadius:heightScreen,borderWidth:1,alignItems:'center',justifyContent:'center'}}>
                         <Text style={{fontSize:25}}>+</Text>
                       </TouchableOpacity>
                     </View>
                     </View>
                 </View>
                </View>
              }
              right={
                <Button danger onPress={() =>this.props.deleteItem(this.state.totalPrice,this.props.keyId,this.props.listId)}>
                  <Icon active name="trash" />
                </Button>
              }
            />
      </View>
    );
  }
}
