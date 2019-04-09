export default function cart(state = [],action){
  switch(action.type){
    case 'ADD_TO_CART': {
      return [...state, action.product]
    }
    case 'DELETE_CART_ITEM': {
      return [...state.splice(action.id, 1)]
    }
    default:
      return state;
  }
}