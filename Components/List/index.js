import React, {PropTypes} from 'react';
import {
  View,Text,Dimensions,
  StyleSheet,ScrollView,TouchableOpacity
} from 'react-native';
import {Icon} from 'native-base'
import {connect} from 'react-redux'

import {ListItem} from './ListItem'
import ListDetail from './ListDetail'
const widthScreen= Dimensions.get('window').width/18;
const heightScreen= Dimensions.get('window').height/26;

class List extends React.Component {
  constructor(props) {
    super(props);
    this.state={listView:false,listId:0}
  }
  static navigationOptions={
    title:'List',
    tabBarIcon:({focused,horizontal,tintColor})=>{
      return <Icon name='list' type='Entypo' style={{color:tintColor}}/>;
    },
  }


  functionhandle=(listId)=>{
    this.setState({listId,listView:true})
  }
  handleBackList=()=>{
    this.setState({listView:false})
  }
  render() {
    if (this.state.listView) {
      return  <ListDetail listId={this.state.listId} handleBackList={this.handleBackList}/>
    }
    else {
      return (
        <View style={{height:'100%',width:'100%'}}>
          <ScrollView>
            <View style={{height:heightScreen*4,justifyContent:'center'}}>
              <Text style={{marginLeft:'5%',fontSize:26,fontWeight:'600'}}>Shopping List</Text>
            </View>
            {this.props.listData.map((item,index)=>{
              return (<ListItem key={index} prop={item}  func={this.functionhandle}/>);
            })}
          </ScrollView>
        </View>
      );
    }
  }
}

mapStateToProps=(state)=>({
  listData:state.listData,isTabBarVisible:state.isTabBarVisible
})
export default connect(mapStateToProps)(List)
