import React, {PropTypes} from 'react';
import {
  View,Text,Image,ScrollView,
  StyleSheet,Dimensions,TouchableOpacity
} from 'react-native';
import { SwipeRow, Icon, Button } from 'native-base';
import {connect} from 'react-redux'
import {handleBack,emptyList,deleteItem} from '../../../Store/actions'
import Item from './Item'
import {User} from './User'

const widthScreen= Dimensions.get('window').width/18;
const heightScreen= Dimensions.get('window').height/26;

class ListDetail extends React.Component {
  constructor(props) {
    super(props);
    this.state={ sum:0, array:[] }
  }
  handleBack=()=>{
    this.props.handleBackList()
  }

  deleteItem=(totalPrice,keyId,listId)=>{
    this.props.deleteItem(keyId,listId)
    array=this.state.array
    array.map((item,index)=>{
      if (index === keyId) {
         array.splice(index, 1);
      }
    })
    this.setState({array})
    this.priceTracker(totalPrice)
  }

  emptyList=(listId)=>{
    this.props.emptyList(listId)
    this.setState({sum:0})
  }

  priceTracker=(totalPrice,keyId)=>{
    array=this.state.array
    array[keyId]=totalPrice
    this.setState({array})
    let sum=0;
    for (var i = 0; i < this.state.array.length; i++) {
      sum = sum + array[i]
    }
    this.setState({sum})
  }


  render() {
    listData=this.props.listData
    this.props.listData.map((item,index)=>{
      if (this.props.listId===item.listId) {
        title=item.title,
        noOfItems=item.noOfItems,
        names=item.names
      }
    })

    if (this.props.listId===0) {
      listData=this.props.weekendList
    }
    else {
      listData=this.props.monthlyList
    }

    return (
      <View style={{height:'100%',width:'100%'}}>
        <View style={{height:heightScreen*7,width:'100%',backgroundColor:'#0d47a1',justifyContent:'center'}}>
          <View style={{flex:1,flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <TouchableOpacity onPress={this.handleBack}
              style={{alignItems:'center',marginTop:'10%'}}>
              <Icon name='chevron-left' type='Feather' style={{color:'white',fontSize:36,marginLeft:'3%'}}/>
            </TouchableOpacity>
            <TouchableOpacity style={{alignItems:'center',marginTop:'10%'}}>
              <Icon name='search' type='EvilIcons' style={{color:'white',fontSize:32,marginRight:'3%'}}/>
            </TouchableOpacity>
          </View>
          <View style={{flex:5,position:'relative',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
            <Text style={{marginLeft:'10%',color:'white',fontSize:28,fontWeight:'400'}}>{title}</Text>
            <View style={{bottom:-1,position:'absolute',alignItems:'center',
              width:'98%',borderTopLeftRadius:5,borderTopRightRadius:5,marginHorizontal:'1%',flexDirection:'row',
              backgroundColor:'white',flexWrap:'wrap'}}>
              {names.map((item,index)=>{
                return (
                  <User name={item} key={index}/>
                );
              })}
            </View>
          </View>
        </View>
        <View style={{ height:heightScreen*1.5,backgroundColor:'white',flexDirection:'row',justifyContent:'space-between',alignItems:'center'}}>
          <Text style={{marginLeft:'5%',fontSize:16,fontWeight:'600',color:'black'}}>Fruits({noOfItems} Items)</Text>
          <TouchableOpacity onPress={()=>this.emptyList(this.props.listId)} style={{flexDirection:'row',alignItems:'center'}}>
            <Icon name='delete' type='AntDesign' style={{color:'grey',fontSize:20,marginRight:'5%'}}/>
            <Text>Empty</Text>
          </TouchableOpacity>
        </View>
        <ScrollView contentContainerStyle={{alignItems:'center',backgroundColor:'white'}}>
            {listData.map((item,index)=>{
              return ( <Item prop={item} keyId={index} listId={this.props.listId}
                key={index} deleteItem={this.deleteItem}
                priceTracker={this.priceTracker}
              />);
            })}
        </ScrollView>
        <View style={{height:heightScreen*2.5,width:'100%',flexDirection:'row',alignItems:'center',justifyContent:'space-between',borderTopWidth:0.5}}>
          <View style={{alignItems:'center',marginLeft:'3%'}}>
            <Text style={{fontSize:14}}>Total Items: {noOfItems}</Text>
            <Text style={{fontSize:18,fontWeight:'600',color:'red'}}>${this.state.sum}</Text>
            <Text style={{fontSize:8}}>Estimated cost(incl.GST)</Text>
          </View>
          <TouchableOpacity style={{height:heightScreen*1.4,width:heightScreen*4,borderRadius:heightScreen*0.7,backgroundColor:'red',
            alignItems:'center',justifyContent:'center',marginRight:'3%'}}>
            <Text style={{color:'white',alignItems:'center',justifyContent:'center'}}>checkout</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}





mapStateToProps=(state)=>({
  weekendList:state.weekendList,
  monthlyList:state.monthlyList,
  listData:state.listData
})
mapDispatchToProps={
  handleBack:handleBack,emptyList:emptyList,deleteItem:deleteItem
}
export default connect(mapStateToProps,mapDispatchToProps)(ListDetail)
