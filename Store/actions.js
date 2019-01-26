itemList=[
  {
    productId:0,
    name:'Strawberry',
    price:'2.5',
    url:require('../images/117df5097142cc56be8fd423988c2b170d7a807f.png')
  },
  {
    productId:1,
    name:'Banana',
    price:'3.5',
    url:require('../images/705ee9256152a994fd24685bc2e8a9e217b76cb5.png')
  },
  {
    productId:2,
    name:'Apple',
    price:'4.5',
    url:require('../images/bc11249668b1c86872561a37695c93e3e03196f3.png')
  },
  {
    productId:3,
    name:'Watermelon',
    price:'4.0',
    url:require('../images/d5f411b0924009c93e98ecc325fe5b135cf2da9f.png')
  },
]

export const handleBack=()=>{
  return (dispatch)=>{
    dispatch({type:'handleBack'})
  };
}


export const addListItem=(data,id,quantity)=>{
  return (dispatch)=>{
   let newData=[]
   let weekendList=[]
   let monthlyList=[]
   itemList.map((item,index)=>{
     if (id === item.productId) {
       item.selectedQuantity=quantity
       newData.push(item)
     }
   })
   if (data[0]) {
     weekendList=newData
     dispatch({type:'addWeekendListItem',payload:weekendList})
   }
   if (data[1]) {
     monthlyList=newData
     dispatch({type:'addMonthlyListItem',payload:monthlyList})
   }
  };
}

export const emptyList=(id)=>{
  return (dispatch)=>{
    if (id===0) {
      dispatch({type:'emptyWeekendList'})
    }
    if (id===1) {
      dispatch({type:'emptyMonthlyList'})
    }
  };
}
export const deleteItem=(key,listId)=>{
  return (dispatch)=>{
    if (listId===0) {
      dispatch({type:'deleteItemWeekendList',payload:key})
    }
    if (listId===1) {
      dispatch({type:'deleteItemMonthlyList',payload:key})
    }
  };
}
