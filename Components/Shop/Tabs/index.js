import {createMaterialTopTabNavigator,createAppContainer} from 'react-navigation'

import Fruits from './Fruits'
import Vegetables from './Vegetables'

const Navigator = createMaterialTopTabNavigator({
  Friuts:Fruits,
  Vegetables:Vegetables
},{
  tabBarOptions:{
    activeTintColor:'black',
    inactiveTintColor:'grey',
    tabStyle:{height:40},
    style:{backgroundColor:'transparent'},
    indicatorStyle:{backgroundColor:'red'}
  }
})
export const Tabs=createAppContainer(Navigator)
