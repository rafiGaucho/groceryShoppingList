export * from './actions'

const initialState={
ListEnable:false,
weekendList:[],monthlyList:[],
listData:[
  {
    listId:0,
    title:'Weekend List',
    day:'08',
    color:'#1e88e5',
    noOfItems:'0',
    names:['Robert Daniel','Julia Turner']
  },
  {
    listId:1,
    title:'Monthly List',
    day:'08',
    color:'#69f0ae',
    noOfItems:'0',
    names:['James Watt']
  },

]
}


const session=(state=initialState,action)=>{
 switch (action.type) {
   case 'handleBack':return {...state,ListEnable:false}
   break;
   case 'deleteItemWeekendList':
     array = state.weekendList
     array.map((item,index)=>{
       if (index === action.payload) {
          array.splice(index, 1);
       }
     })
    return {
      ...state,
      weekendList:array,
      listData:
      [
        {
          listId:0,
          title:'Weekend List',
          day:'08',
          color:'#1e88e5',
          noOfItems:JSON.stringify(parseInt(state.listData[0].noOfItems)- 1),
          names:['Robert Daniel','Julia Turner']
        },
        {
          listId:1,
          title:'Monthly List',
          day:'08',
          color:'#69f0ae',
          noOfItems:JSON.stringify(parseInt(state.listData[1].noOfItems)),
          names:['James Watt']
        },
      ]}
   break;

   case 'deleteItemMonthlyList':
     array = state.monthlyList
     array.map((item,index)=>{
       if (index === action.payload) {
          array.splice(index, 1);
       }
     })
    return {
      ...state,
      monthlyList:array,
      listData:
      [
        {
          listId:0,
          title:'Weekend List',
          day:'08',
          color:'#1e88e5',
          noOfItems:JSON.stringify(parseInt(state.listData[0].noOfItems)),
          names:['Robert Daniel','Julia Turner']
        },
        {
          listId:1,
          title:'Monthly List',
          day:'08',
          color:'#69f0ae',
          noOfItems:JSON.stringify(parseInt(state.listData[1].noOfItems)-1),
          names:['James Watt']
        },
      ]}
   break;

   case 'emptyWeekendList':
   return {
     ...state,
     weekendList:[],
     listData:[
       {
         listId:0,
         title:'Weekend List',
         day:'08',
         color:'#1e88e5',
         noOfItems:0,
         names:['Robert Daniel','Julia Turner']
       },
       {
         listId:1,
         title:'Monthly List',
         day:'08',
         color:'#69f0ae',
         noOfItems:JSON.stringify(parseInt(state.listData[1].noOfItems)),
         names:['James Watt']
       },
     ]}
   break;

   case 'emptyMonthlyList':
   return {
    ...state,
    monthlyList:[],
    listData:[
     {
       listId:0,
       title:'Weekend List',
       day:'08',
       color:'#1e88e5',
       noOfItems:JSON.stringify(parseInt(state.listData[0].noOfItems)),
       names:['Robert Daniel','Julia Turner']
     },
     {
       listId:1,
       title:'Monthly List',
       day:'08',
       color:'#69f0ae',
       noOfItems:0,
       names:['James Watt']
     },
   ]}
   break;
   case 'addWeekendListItem':
     return {
       ...state,
       weekendList:state.weekendList.concat(action.payload),
       listData:
       [
         {
           listId:0,
           title:'Weekend List',
           day:'08',
           color:'#1e88e5',
           noOfItems:JSON.stringify(parseInt(state.listData[0].noOfItems)+ 1),
           names:['Robert Daniel','Julia Turner']
         },
         {
           listId:1,
           title:'Monthly List',
           day:'08',
           color:'#69f0ae',
           noOfItems:JSON.stringify(parseInt(state.listData[1].noOfItems)),
           names:['James Watt']
         },
       ]
     }
    break ;
    case 'addMonthlyListItem':
    return {
      ...state,
      monthlyList:state.monthlyList.concat(action.payload),
      listData:
      [
       {
         listId:0,
         title:'Weekend List',
         day:'08',
         color:'#1e88e5',
         noOfItems:JSON.stringify(parseInt(state.listData[0].noOfItems)),
         names:['Robert Daniel','Julia Turner']
       },
       {
         listId:1,
         title:'Monthly List',
         day:'08',
         color:'#69f0ae',
         noOfItems:JSON.stringify(parseInt(state.listData[1].noOfItems)+1),
         names:['James Watt']
       },
     ]
   }
  break;
  default: return state;
  }
}

export default session
