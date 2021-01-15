import {
  LOAD_PRODUCTS,
  SET_LISTVIEW,
  SET_GRIDVIEW,
  UPDATE_SORT,
  SORT_PRODUCTS,
  UPDATE_FILTERS,
  FILTER_PRODUCTS,
  CLEAR_FILTERS,
} from '../actions'

const filter_reducer = (state, action) => {
  if(action.type === LOAD_PRODUCTS) {
    let maxPrice = action.payload.map((product)=> product.price);
    maxPrice = Math.max(...maxPrice);
    return {...state, all_products:[...action.payload], filtered_products:[...action.payload],
       filters:{...state.filters,max_price:maxPrice, price:maxPrice}}
  }
  if(action.type === SET_LISTVIEW) {
    return {...state, grid_view:false};
  }
  if(action.type === SET_GRIDVIEW) {
    return {...state, grid_view:true};
  }
  if(action.type === UPDATE_SORT) {
    return {...state, sort:action.payload}
  }
  if(action.type === SORT_PRODUCTS) {
    if(state.sort === "price-lowest"){
    let sortedArray = state.filtered_products.sort((a,b) => a.price - b.price);
    return {...state, filtered_products:sortedArray};
    }
  if(state.sort === "price-highest"){
    let sortedArray = state.filtered_products.sort((a,b) => b.price - a.price);
    return {...state, filtered_products:sortedArray};
    }
  if(state.sort === "name-z"){
    let sortedArray = state.filtered_products.sort((a,b) => b.name.localeCompare(a.name));
    return {...state, filtered_products:sortedArray};
    }
  if(state.sort === "name-a"){
    let sortedArray = state.filtered_products.sort((a,b) => a.name.localeCompare(b.name));
    return {...state, filtered_products:sortedArray};
    }
}
if(action.type === UPDATE_FILTERS) {
  const {name, value} = action.payload;
  return {...state, filters:{...state.filters, [name]:value}}
}
if(action.type === FILTER_PRODUCTS) {
    const { name, value } = action.payload;
    if(value !== 'all') {
    const updatedFilterdProducts = state.all_products.filter((product)=> product[name] === value);
     return {...state, filtered_products:updatedFilterdProducts}
     }

    return{...state, filtered_products:state.all_products};
  
}
  throw new Error(`No Matching "${action.type}" - action type`)
}

export default filter_reducer
